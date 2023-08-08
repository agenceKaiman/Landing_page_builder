import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {

    var myCookies = new Cookies();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [updated, setUpdated] = useState(name);
    const [password, setPassword] = useState('');
    const [updatedPass, setUpdatedPass] = useState(password);

    const [email, setEmail] = useState('');
    const [updatedEmail, setUpdatedEMail] = useState(email);

    const [nom, setNom] = useState('');
    const [updatedNom, setUpdatedNom] = useState(nom);

    const [Username, setUsername] = useState('');
    const [updatedUsername, setUpdatedUsername] = useState(Username);

    const [mdp, setMdp] = useState('');
    const [updatedMdp, setUpdatedMdp] = useState(mdp);


    let logout = () => {
        sessionStorage.removeItem('token')
    }

    let getToken = () => {
        let token = sessionStorage.getItem('token_log')
        return token
    }

    let saveToken = (token) => {
        sessionStorage.setItem('token_log', token)
    }

    const setHome = () => {
        if (myCookies.get('user_admin') === "admin") {
            //navigate('/admin');
        } else {
        navigate('/home');
        }
        logout()
    }

    const handleChangeID = (event) => {
        setName(event.target.value);
    }

    const handleChangePass = (event2) => {
        setPassword(event2.target.value);
    }

    const handleClick = () => {
        setUpdated(name)
        setUpdatedPass(password)
    }

    const handleChangeEMail = (event) => {
        setEmail(event.target.value);
    }
    
    const handleChangeNom = (event) => {
        setNom(event.target.value);
    }
    
    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }
    
    const handleChangeMdp = (event) => {
        setMdp(event.target.value);
    }

    const handleClicks = () => {
        setUpdatedEMail(email)
        setUpdatedNom(nom)
        setUpdatedUsername(Username)
        setUpdatedMdp(mdp)
    }

    const submit = async (e) => {

        e.preventDefault();
        
        const response = await fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email: updated,
                password: updatedPass
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then(res => {
                const res2 = res
                myCookies.set('user_email', res.email , { path: '/' });
                myCookies.set('user_admin', res.admin , { path: '/' });
                console.log(res)
                saveToken(res2.token)
                let temp_token = getToken()

                // if (res.admin === "admin") {
                //     setAdmin()
                // }

                if (temp_token !== undefined) {
                    setHome()
                } 
            })
            .catch((err) => {
                console.log(err.message);
            });
        }

        const register = async (e) => {

            e.preventDefault();
            
            const response = await fetch('http://localhost:8080/api/users/', {
                method: 'POST',
                body: JSON.stringify({
                    name: updatedNom,
                    email: updatedEmail,
                    password: updatedMdp
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                },
              })
                .then((response) => response.json())
                .then(res => {
                    const res2 = res
                    console.log(res2.token)
                    saveToken(res2.token)
                    if (res2.token !== undefined) {
                        setHome()
                    }
                })
                 .catch((err) => {
                    console.log(err.message);
                 });
    
        }

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  console.log(handleClicks);

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Connectez vous!
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Enregistrez vous!
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

          </div>
          <form onSubmit={submit}>
          <MDBInput wrapperClass='mb-4' label='adresse mail' id='form1' type='email' onChange={handleChangeID} value={name}/>
          <MDBInput wrapperClass='mb-4' label='Mot de passe' id='form2' type='password' onChange={handleChangePass} value={password}/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <a href="!#">Mots de passe oublié ?</a>
          </div>

          <MDBBtn className="mb-4 w-100" onClick={handleClick} >Connectez vous!</MDBBtn>
          </form>
          <p className="text-center">Pas encore de compte ? <a href="#!">Enregistrez vous</a></p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

          </div>
            <form onSubmit={register}>
          <MDBInput wrapperClass='mb-4' label='Nom' id='name' type='text' onChange={handleChangeNom} value={nom}/>
          <MDBInput wrapperClass='mb-4' label='Pseudonyme' id='username' type='text' onChange={handleChangeUsername} value={Username}/>
          <MDBInput wrapperClass='mb-4' label='adresse mail' id='email' type='email'onChange={handleChangeEMail} value={email}/>
          <MDBInput wrapperClass='mb-4' label='Mot de passe' id='password' type='password'onChange={handleChangeMdp} value={mdp}/>


          <MDBBtn className="mb-4 w-100" onClick={handleClicks}>Enregistrez !</MDBBtn>
          </form>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;