import React from 'react'

export default function Navbar() {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid ">
    <a class="navbar-brand bg-body-blue mt-2 h1" href="#" >UNYN</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About Us</a></li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a></li>
          <li class="nav-item">
          <a class="nav-link" href="#">Events</a></li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        </ul>
        <button className="btn btn-outline-success rounded-pill bt-dark bg-primary"type='button'>Contact us</button>
        </div>
    
    </div>
    </nav>

    </>
  )
}
