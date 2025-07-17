import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Chandra Shekhara Prasad</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/cspeditor/"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/CSPEDITOR"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/csp_editor/"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/chandrashekhara.prasad.3/"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          {/* <a
            href="https://x.com/JagnyadattaDal2"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-twitter"></i>
          </a> */}
        </div>

        <span className="footer__copy">Copyright &copy; 2025 All rights reserved | Developed by chandraShekhara</span>
        {/* <span className="footer__copy">&#169; 2025 Jagnyadatta. All rights reserved.</span> */}
      </div>
    </footer>
  );
};

export default Footer;
