import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue bg-dark">       
        <div className="footer-copyright text-center py-3"> 
        <span style={{color: 'white'}}>© </span>
        <a href="#" style={{textDecoration: 'none'}}><span style={{color: 'orange', fontStyle: 'italic'}}>Fontana Car Rental</span> <span style={{color: 'white'}}></span></a>
        </div>      
      </footer>
    )
  }
}

export default Footer;