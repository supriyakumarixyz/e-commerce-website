import React from 'react'

function ProductCard(props) {
  return (
    <>
    <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top productImage"
                src={props.value.imgUrl}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{props.value.title}</h5>
                <p className="card-text">
                    {
                        props.value.body
                    }
                </p>
                <button
                  className="btn btn-warning" onClick={()=>AddCart(props.value.id)}>
                  Add to Cart
                </button>
                <button
                  className="btn btn-danger mx-2">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          
    </>
  )
}

export default ProductCard