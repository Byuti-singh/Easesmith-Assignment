// import {Component} from 'react'

import {
    FaInstagram,
    FaPinterestSquare,
    FaTwitterSquare,
    FaFacebookSquare,
  } from 'react-icons/fa'
  
  import './index.css'
  
  
  function Footer() {
    return (
      <div className="footer-container">
        <div className="log-heading">
          <h1 className="main-heading">CHAPERONE</h1>
        </div>
  
        <p className="paragraph">
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus
        enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione 
        et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati
        qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti 
        et porro aspernatur.
        </p>
        <p className="paragraph">
       Follow us on 
      </p>
        <div className="contacts">
          <FaPinterestSquare className="logos" testid="pintrest-social-icon" />
          <FaInstagram className="logos" testid="instagram-social-icon" />
          <FaTwitterSquare className="logos" testid="twitter-social-icon" />
          <FaFacebookSquare className="logos" testid="facebook-social-icon" />
        </div>
      </div>
    )
  }
  export default Footer
  