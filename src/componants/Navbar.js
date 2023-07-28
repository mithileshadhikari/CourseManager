import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>

  <div className="d-flex justify-content-center text-center mt-0 " style={{backgroundColor:'#E5E4E2'}}>
      <div className="container-fluid py-5 ">
        <h4 className=" display-6" style={{color:'blue'}}>Welcome to Course Manager</h4>
        <h5 className="display-6 " style={{fontSize:'large'}}>maintain and manage your course details </h5>
        
      </div>
    </div>
    </div>
  )
}
