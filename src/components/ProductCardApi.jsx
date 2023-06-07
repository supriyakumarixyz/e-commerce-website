import React from 'react'

function ProductCardApi(props) {
  return (
    <>
    <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top productImage"
                src={props.value.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{props.value.title}</h5>
                <p className="card-text">
                    ${
                        props.value.price
                    }
                  </p>
                <p className="card-text">
                    {
                        props.value.description.substring(0,110)
                    }
                </p>
                <button
                  className="btn btn-warning">
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

export default ProductCardApi;