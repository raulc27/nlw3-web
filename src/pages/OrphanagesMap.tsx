import React from 'react';
import {Link} from 'react-router-dom';
//import '../styles/global.css';
import '../styles/pages/orphanages-map.css';
import {FiPlus} from 'react-icons/fi';
import mapMarkerImg from '../Images/map-marker.svg';

import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
    return(
       <div id="page-map">
       
       <aside>
       <header>
       
       <img src={mapMarkerImg} alt="Happy" />
        
       <h2>Escolha um orfanato do mapa</h2>
       <p>Muitas crianças aguardam a sua visita</p>
       </header>

       <footer>
        <strong>Rio de Janeiro</strong>
        <span>Cachoeiras de Macacu</span>
       </footer>
       </aside>
        
        <Map 
        
            center={[-22.6493067,-42.7547595]}
        
            zoom={11}

            style={{width: '100%', height: '100%'}}
        >

        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>

        <Link to="" className="create-orphanage">

            <FiPlus size={32} color="#fff" />
        </Link>

       </div>
    )
}

export default OrphanagesMap;
