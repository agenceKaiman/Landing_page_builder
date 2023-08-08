import axios from "axios";
import React from "react";
import { useState, useEffect} from "react";
import {API_HOST, create_pages } from "./API/index";
import { Link } from "react-router-dom";


const Home = () => {
    const [pages, setPages] = useState([]);
    const [name, setName] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [error, setError] = useState("");
    

    const handleSubmit = async() => {
        if (!name) {
          setIsValid(false);
          return;
        }
        const newPage = await create_pages(name);
        setName("");
        setPages([...pages, newPage]);
      };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${API_HOST}pages/`);
                setPages(response.data);
            } catch (error) {
                console.log(error);
                setError(error.message);
            }
        }
        fetchData();
    })

    return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-5'>
        <form id='create-page' onSubmit={handleSubmit} noValidate>
            <div className='modal-header'>
              <h5 className='modal-title' id='addPageModalLabel'>Créer une page</h5>
            </div>
            <div className='modal-body'>
              <div className='col-auto'>
                <label htmlFor='name' className='form-label'>Nom</label>
                <input
                  type='text'
                  className={`form-control form-control-sm ${!isValid ? "" : "is-invalid"}`}
                  id='name'
                  name='name'
                  placeholder='Nom de la page'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isValid && (
                    <div className='invalid-feedback'>
                    Donnez un nom valide.
                    </div>
                )}
              </div>
            </div>
            <div className='modal-footer'>
            <button
            type='button'
            className='btn btn-secondary btn-sm'
            data-bs-dismiss='modal'
            >
                Supprimer
            </button>
            <button type='submit' className='btn btn-primary btn-sm'>
                Enregistrer
            </button>
            </div>
          </form>
        </div>
        <div className='col-12 my-2'>
            {error && <div className='alert alert-primary'>{error}</div>}
          <table className='table table-bordered table-hover'>
            <thead>
              <tr>
                <td>Nom</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {pages?.map((page) => (
                <tr key={page._id}>
                    <td>{page.name}</td>
                    <td>
                    <Link to={`/editor/${page._id}`}>modifier votre page</Link>
                    </td>
                </tr> 
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
}

export default Home