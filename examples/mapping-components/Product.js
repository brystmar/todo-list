import React from "react"

function Product(props) {
    return (
        <div id={props.product.id}>
            <h2>{props.product.name} ({props.product.price.toLocaleString(
                "en-US",
                { style: "currency", currency: "USD" })})
            </h2>

            {props.product.description}
        </div>
    )
}

export default Product
