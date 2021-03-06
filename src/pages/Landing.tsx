import React from 'react';
//import '../styles/global.css';
import '../styles/pages/landing.css';
import logoImg from '../Images/Logo.svg';

import {Link} from 'react-router-dom';

import {FiArrowRight} from 'react-icons/fi'
function Landing(){
    return(
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>
       
        <main>
          <h1>Leve felicidade para o mundo </h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>
  
        <div className="location">
          <strong>Rio de Janeiro</strong>
          <span>...</span>
         
          <a href="https://github.com/raulc27/nlw3-web">
            Clique aqui para acessar o código fonte
          </a>

        </div>
  
        <Link to="/app" className="enter-app">
         <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
        </div>
     </div>


    );
}

export default Landing;
