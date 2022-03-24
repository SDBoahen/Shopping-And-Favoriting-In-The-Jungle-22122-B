



function ItemCard( { itemData , clickAddToCart , clickRemoveFromCart } ){

    // console.log( "itemData: " , itemData )  //  : { itemData: { eachItem } }


    const handleClick =()=>{

        console.log( "click! :)" )  //


        if( clickAddToCart ){

            clickAddToCart( itemData )

        }
            
            // clickAddToCart={ alertItemsListThatIWasClicked }
            
        if( clickRemoveFromCart ){

            clickRemoveFromCart( itemData )

        }


    }


    return(<div>

        <div onClick={ handleClick } >

            <h1>--------------------------------\</h1>
                <h1 >{ itemData.name }</h1>
                <img src={ itemData.image_URL } alt={ "an image of a " + itemData.name } /> 
            <h1>--------------------------------/</h1>
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/>

    </div>)

}
export default ItemCard




////////




// function ItemCard( props ){

//     console.log( "props: " , props )  //  props: { itemData: { eachItem } }


//     return(<div>

//         <h1>--------------------------------\</h1>
//             <h1 >{ props.itemData.name }</h1>
//             <img src={ props.itemData.image_URL } alt={ "an image of a " + props.itemData.name } /> 
//         <h1>--------------------------------/</h1>
//         <br/><br/><br/><br/><br/><br/><br/><br/>

//     </div>)

// }
// export default ItemCard