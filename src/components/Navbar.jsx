import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
    
    {/* <Link to="/">Home</Link>
    <Link to="/service">Service</Link>
    <Link to="/location">Location</Link>
    <Link to="/productinformation">ProductInformation</Link>
    <Link to="/contact">Contact</Link> */}
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <Link className="navbar-brand" to="#">Supriya Store</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto font-weight-bold ">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/service">Service</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/location">Location</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/productlist">Product List</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/productlistapi">Product List Api</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <Link to="/login"><button className="btn btn-warning my-2 my-sm-0 mx-2" type="button">Login</button></Link>
    <Link to="/cart"><button className="btn btn-warning my-2 my-sm-0 mx-2" type="button">Cart</button></Link>

  </div>
</nav>
    </>
  )
}

export default Navbar