import React from 'react';
import './FooterComponent.css'; // Make sure to create this CSS file

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Copyright © 2023 Your Company Name. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterComponent;
