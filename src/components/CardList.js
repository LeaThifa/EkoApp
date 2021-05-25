import React from 'react'
import Card from "./Card"


const products = [

    { id: 1, productName: "Morötter", price: "20" },
    { id: 2, productName: "Ägg", price: "80" }
]

function CardList() {
    return (
        <div>

            <div className="cardBox"> 

            {products.map((item) => {
                return (

                    <Card productName={item.productName} price={item.price}/>
                )
            })}

            </div>

        </div>
    )
}

export default CardList 
