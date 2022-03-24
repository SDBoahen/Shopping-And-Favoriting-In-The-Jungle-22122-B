import logo from './logo.svg';

import './App.css';

import { useEffect, useState } from "react"


//// Component Imports
import ItemCard from './ItemCard';
import ItemsList from './ItemsList';




function App() {
  //// js

    const [ fecthedData , setFetchedData ] = useState(  [ ]  ) 
      console.log( "The STATE of fecthedData: " , fecthedData )  //

    const itemsGETFetch =()=>{

      fetch( "http://localhost:3000/items" )
      .then( ( response )=>{ return response.json() } )
      .then( ( arrayOfItemObjects )=>{ 
        
        console.log( "Our Data From Fetch" , arrayOfItemObjects )  //

        setFetchedData( arrayOfItemObjects )
      
      } )

    } 
    useEffect( itemsGETFetch , [ ] )  




    //// For Folks Messing-With/Checking-Out 3-Render-Paths  .... ie Pick Your Starer Pokemon LoloL
      const mapItems =( eachItem )=>{ console.log( "eachItem: " , eachItem )

        return( <ItemCard 
                  key={eachItem.id}  // for React
                  itemData={ eachItem }  // for us :)
              /> )

      }

      const mappedItems = fecthedData.map( mapItems )

      function mapProcessForItems(){
        
        return fecthedData.map( mapItems )
      
      } 
    //// For Folks Messing-With/Checking-Out 3-Render-Paths  .... ie Pick Your Starer Pokemon LoloL

      


  //// js

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <ItemsList itemsToMap={ fecthedData }/>
      
    </div>
  );
}
export default App;






/*

  // Writing .map/conditonal render DIRECRTLY in Component return
  { fecthedData.map( mapItems ) }
  
  // Saving render process to a Variable; render Variable in Component return
  { mappedItems }
  
  // Saving render process to a Function; render/call/invoke that Function in Component return
  { mapProcessForItems() }

*/
