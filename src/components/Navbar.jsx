import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import "./Navbar.css";

const Navbar = () => {

//useState  
  const [search, setSearch] = useState("")

//useNavigate - para redirecionar o usuario para a pagina de busca (search) quando ele clicar no botão 
  const navigate = useNavigate();
//mapear o evento para o submit do input 
  const handleSubmit = (e) => {
//para previnir o evento, para ele não submeter o form
    e.preventDefault()
    if(!search) return;
    navigate(`/search?q=${search}`)
    setSearch("")
  };


  return (
    <div>
      <nav id="nav">
        <h2>
          <Link to="/"><BiCameraMovie />MoviENJOY</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Busque por um filme...'
                onChange={(e) => setSearch(e.target.value)}
// para setar o input deixar vazio depois de digitar, manipulando o valor do campo a partir do state      
                value={search}
            />
            <button type="submit" >
                <BiSearchAlt2 />
            </button>
        </form>
      </nav>
    </div>
  )
}

export default Navbar