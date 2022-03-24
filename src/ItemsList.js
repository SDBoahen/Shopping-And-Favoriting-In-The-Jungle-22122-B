import { useEffect, useState } from "react"

import ItemCard from './ItemCard';
import ShoppingCart from "./ShoppingCart";




function ItemsList( { itemsToMap } ){

    console.log( itemsToMap )  //


    const [ shoppingCartData , updateShoppingCartData ] = useState(  [ ]  )
    console.log( "The STATE of shoppingCartData: " , shoppingCartData )  //


    //// adding function
    const alertItemsListThatIWasClicked =( dataFromClickedItemCard )=>{

        console.log( "This Card Was Clicked!: " , dataFromClickedItemCard )  //
        // console.log( "This Card Was Clicked!: " , dataFromClickedItemCard.name )  //

        updateShoppingCartData(  [ ...shoppingCartData , dataFromClickedItemCard ]   )

    }

    //// removing function
    const alertForRemoval =( dataFromClickedItemCard )=>{

            console.log( "This Card Was Clicked! REMOVE IT: " , dataFromClickedItemCard )  //

        let filteredArray = shoppingCartData.filter(
            // [ { id: } , { id: } , { id: } , { id: } ] = [ eachItemInCart: ]   X  { id: }
            // dataFromClickedItemCard.id

            ( eachItemInCart )=>{

                return eachItemInCart.id != dataFromClickedItemCard.id

            }

        )

            console.log( "filteredArray: " , filteredArray )  //



        updateShoppingCartData(  [ ...filteredArray ]  )
     // updateShoppingCartData(       filteredArray    )

    }


    const mapItems =( eachItem )=>{ 
        
        // console.log( "eachItem: " , eachItem )  //

      return( <ItemCard 

                key={eachItem.id}  // for React
                itemData={ eachItem }  // for us :)

                clickAddToCart={ alertItemsListThatIWasClicked }

            /> )

    }

        const mappedItems = itemsToMap.map( mapItems )

    function mapProcessForItems(){
      
      return itemsToMap.map( mapItems )
    
    } 


    

    return(<div>

        <h1>Items List</h1>


        { mapProcessForItems() }
        {/* mapping to render ItemCards */}


        < ShoppingCart 

            arrayToMap={ shoppingCartData } 

            clickRemoveFromCart={ alertForRemoval }

            
        />



        {/* { mappedItems } */}

        {/* { itemsToMap.map( mapItems ) } */}

    </div>)
}
export default ItemsList




////////




// function ItemsList( props ){

//     console.log( props )  //


//     const mapItems =( eachItem )=>{ console.log( "eachItem: " , eachItem )

//       return( <ItemCard 
//                 key={eachItem.id}  // for React
//                 itemData={ eachItem }  // for us :)
//             /> )

//     }

//     const mappedItems = props.itemsToMap.map( mapItems )

//     function mapProcessForItems(){
      
//       return props.itemsToMap.map( mapItems )
    
//     } 


    

//     return(<div>

//         <h1>Items List</h1>

//         { mapProcessForItems() }

//         {/* { mappedItems } */}

//         {/* { props.itemsToMap.map( mapItems ) } */}

//     </div>)
// }
// export default ItemsList




