// App.js
import './ChatGPT.css';
import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { Configuration, OpenAIApi } from 'openai';
import FloatingButton from './FloatingButton'; // Import the FloatingButton component
import { FiX } from "react-icons/fi";
import Modal from 'react-modal';

function ChatGPT() {
  //states for Dall E
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")

  const api_key = "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";

  const configuration = new Configuration({
    apiKey: api_key
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n:1,
      size: "512x512"
    })
    setResult(res.data.data[0].url)
  }

  // ***ChatGPT below***
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Qui est mon client idéal ? Quels problèmes majeurs rencontre-t-il ? Sans mon produit, ou mon service, quelle serait sa situation ? En quoi mon produit ou mon service est-il unique ? Quels sont les principaux bénéfices émotionnels d'utiliser ma solution ? Qu'est-ce que j'ai envie que les visiteurs fassent sur ma landing page ? Voici les questions qu'il faut vous poser pour réussir votre landing page.",
      sender: "ChatGPT"
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }

    const newMessages = [...messages, newMessage];

    //update message state
    setMessages(newMessages);
    // set a typing indicator for ChatGPT
    setTyping(true);
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject)=> {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role="assistant"
      } else {
        role="user"
      }
      return {role: role, content: messageObject.message}
    });

    const systemMessage = {
      role: "system",
      content: "Explain all concepts as if explaining to a ten-year old."
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [systemMessage, ...apiMessages]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST", 
      headers: {
        "Authorization": "Bearer " + api_key,
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(apiRequestBody)
    }).then((data)=>{
      return data.json();
    }).then((data) => {
      setMessages(
        [...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }],
      );
      setTyping(false);
    })
  }

  const downloadImage = (imageUrl) => {
    // Create a hidden anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = 'generated_image.png'; // Set the filename for the downloaded image
  
    // Trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  
  

  // State to manage the visibility of the chatboxes
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Your existing functions for opening and closing chatboxes
  const [areChatboxesOpen, setChatboxesOpen] = useState(false);
  const [isFloatingButtonVisible, setFloatingButtonVisible] = useState(true);

  const closeChatboxes = () => {
    setChatboxesOpen(false);
    setFloatingButtonVisible(true);
    setIsModalOpen(false); // Show the floating button when chatboxes are closed
  };
  const toggleChatboxes = () => {
    setChatboxesOpen((prevState) => !prevState);
    setFloatingButtonVisible(false); // Hide the floating button when chatboxes are opened
    setIsModalOpen(true); // Set the modal state to true when chatboxes are opened
  };

  return (
    <>
      {/* Floating "Chat" button */}
      {isFloatingButtonVisible && <FloatingButton onClick={toggleChatboxes} />}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeChatboxes}
        contentLabel="Chat Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 9999,
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '100%',
            width: '700px', // Adjust the width as needed
            padding: '20px',
          },
        }}
      >
        <div className='ai-container'>
          <div className="chat">
            {areChatboxesOpen && (
              <MainContainer>
                <ChatContainer>
                  <MessageList
                    scrollBehavior='smooth'
                    typingIndicator={typing ? <TypingIndicator content="Votre assistant écrit" /> : null}
                  >
                    {messages.map((message, i) => {
                      return <Message key={i} model={message} />;
                    })}
                  </MessageList>
                  <MessageInput id="messageInput" placeholder='décrivez votre contenue' onSend={handleSend} autoFocus={true} sendButton={false} attachButton={false}></MessageInput>
                </ChatContainer>
              </MainContainer>
            )}
          </div>
          <div className="dall">
            {/* Only show the Dall-E image generator UI if the chatboxes are open */}
            {areChatboxesOpen && (
              <div className="color-dall">
                <h2>Générer vos images</h2>
                <textarea placeholder='' onChange={(e) => setPrompt(e.target.value)} /><br />
                <button styles="width: 80%;" onClick={generateImage}>Générer</button>
                <div>
                  <hr />
                  {result.length > 0 ? (
                    <div>
                      <img className='imgChat' src={result} alt={result} width={'20%'} />
                    </div>
                  ) : (
                    <p>Veuillez patienter quelques instants, cela prend généralement 5 secondes.</p>
                  )}
                </div>
                <button className="close-button" onClick={closeChatboxes}>
                  <FiX />
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ChatGPT;

