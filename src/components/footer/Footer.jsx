import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jagnyadatta</h1>

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
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/jagnyadattadalai/"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/jagnyadatta"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/ig_jagnyadatta/"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/jagnyadatta.dalai.5/"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://x.com/JagnyadattaDal2"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; 2025 Jagnyadatta. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
