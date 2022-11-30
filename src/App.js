import { useState } from 'react';
import './App.css';
import { Nvbar } from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Moviedet } from './components/Moviedet';

function App() {
    const [movies,setMovies] = useState([
      {title : "THE SONS OF THE LORD / قدر" , description : "HAFNAOUI est un médecin légiste qui falsifie les dossiers d'autopsie à chaque fois qu'il en reçoit l’ordre par une organisation dont le pouvoir est étendu ! Un jour, le hasard a fait que le code reçu est relatif à une personne si proche de lui. Surprise, étonnement, émotions, la découverte du corps qui est entre ses mains le pousse à une remise en question !! Quelle vie ?" , posterURL : "./images/destin.jpg" , rating : 4,id : Math.random(),URL : <iframe width="1045" height="438" src="https://www.youtube.com/embed/LHAw22iSKUQ" title="KADAR | The Sons Of The Lord - قدر Trailer (2022 Movie)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
      {title : "Pirates des Caraïbes : La Malédiction du Blac" , description : "Petite, Elizabeth Swann, la fille du gouverneur, a sauvé de la noyade Will Turner après le naufrage de son bateau." , posterURL : "./images/pirate.jpg" , rating : 4,id : Math.random(),URL :  <iframe width="1045" height="437" src="https://www.youtube.com/embed/Hgeu5rhoxxY" title="Pirates of the Caribbean: Dead Men Tell No Tales - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
      {title : "Le Seigneur des anneaux" , description : "Le Seigneur des anneaux est une trilogie cinématographique américano-néo-zélandaise de fantasy réalisée par Peter Jackson et fondée sur le roman du même nom en trois volumes de J. R. R. Tolkien. Les films composant cette trilogie sont La Communauté de l'anneau, Les Deux Tours et Le Retour du roi." , posterURL : "./images/anneux.jpg" , rating : 3,id : Math.random(),URL : <iframe width="900" height="506" src="https://www.youtube.com/embed/mdB13TO3VTQ" title="LE SEIGNEUR DES ANNEAUX Les Anneaux de Pouvoir Bande Annonce VF (2022) Nouvelle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    ])
  
    const [searchM,setSearchM] = useState('')
    const [rateM,setRateM] = useState(0)
  return (
    <div>
      <Nvbar/>  
      <br/>
      <Routes>
      <Route path='/' element={<Home movies={movies} setMovies={setMovies} searchM={searchM} setSearchM={setSearchM} rateM={rateM} setRateM={setRateM}/>}/>
      <Route path="/home/:id" element={<Moviedet movies={movies}setMovies={setMovies} />}/>
      </Routes>
    </div>
  );
}

export default App;
