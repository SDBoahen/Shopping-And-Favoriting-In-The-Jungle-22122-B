import ItemCard from "./ItemCard"




function ShoppingCart( props ){



    const alertShoppingCartThatIWasClicked =( dataFromClickedItemCard )=>{

        console.log( "This Card Was Clicked!: " , dataFromClickedItemCard )  //

        props.clickRemoveFromCart( dataFromClickedItemCard )
            // ^component above^// updateShoppingCartData(  [ ...shoppingCartData , dataFromClickedItemCard ]   )

    }

        let keyCount = 0
    
    const mapItems =( eachItem )=>{ 
        
        // console.log( "eachItem: " , eachItem )  //
        keyCount++

      return( <ItemCard 

                key={ `${ eachItem.id} ${keyCount} ` }  // for React
                itemData={ eachItem }  // for us :)

                clickRemoveFromCart={ alertShoppingCartThatIWasClicked }


            /> )

    }

    function mapProcessForItems(){
      
      return props.arrayToMap.map( mapItems )
    
    } 


    return(<div>

        <h1>ShoppingCart</h1>
        {
            mapProcessForItems()
        }

    </div>)
}
export default ShoppingCart