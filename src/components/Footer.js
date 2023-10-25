import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
   
    <div className="footer">
       
       <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
       </ul>
      
       <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2023 - All Right Reserved!</p>
       </div>
    </div>
  )
}

export default Footer