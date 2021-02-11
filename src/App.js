import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [search, searchArticle]=useState("");
  const [results, setResult]=useState([]);

  //fvJ7-FMlT_zoHm_ABdfFwxscYL5z74zFaCPuiSg8NJQ
  //https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
  
   const images=()=>{

    axios.get(`https://api.unsplash.com/search/photos?client_id=fvJ7-FMlT_zoHm_ABdfFwxscYL5z74zFaCPuiSg8NJQ&query=${search}`).then(response=>{
      console.log(response.data.results)
      setResult(response.data.results)
    })

   }
  
  return (
    <div className="App">
      
      <div className="content">
       <span>Search: </span>
       <input type="text"
        value={search}
        id="inputField"
        onChange={ (e)=>searchArticle(e.target.value) }
       />
       <button onClick={()=>images()}>Search</button>
      </div>
      
      <div className="gallery">
         
         {

          results.map((result)=>{
            return <img className="item" src={ result.urls.regular }/>
          })

         }

      </div>

    </div>
  );
}

export default App;
