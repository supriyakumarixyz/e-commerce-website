import React from 'react';

function Location() {
  return (
  <>
   <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title font-weight-bold font-italic text-center">Store Location</h5>
                <iframe
                className="Map mx-auto"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57795.87248127351!2d82.80686624863282!3d25.127507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fca971ae9518f%3A0xc5899e5ea3344954!2sPrakash%20Garments!5e0!3m2!1sen!2sin!4v1683725028607!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div> 
  </> 
   )
}

export default Location