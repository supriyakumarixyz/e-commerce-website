import React from "react";

function Contact() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top imagesrender mx-auto"
                src="https://w7.pngwing.com/pngs/561/324/png-transparent-location-address-position-linear-icon-location-address-position-thumbnail.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Address</h5>
                <p className="card-text">
                  Main market Chunar,mirzapur pincode-231004 near-Gandhi Ashram
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top imagesrender mx-auto"
                src="https://png.pngtree.com/png-vector/20201028/ourmid/pngtree-phone-icon-in-solid-circle-png-image_2380227.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Phone</h5>
                <p className="card-text">
                  You can contact us by this no.(7740009854) alternate
                  no-8574964569
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top imagesrender mx-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmokktO_ksPZoSY8KW0e2LS6mlgxGZcEsNZUmsUKsr&s"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">E-mail</h5>
                <p className="card-text">
                  You can e-mail us at supi1564@gmail.com or abhi54687@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
