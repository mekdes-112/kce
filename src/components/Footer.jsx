import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
  <div
    className="main-footer__bg"
    style={{ backgroundImage: "url(assets/images/shapes/footer-bg-1-1.png)" }}
  />
  {/* /.main-footer__bg */}
  <div className="main-footer__top">
    <div className="container">
      <div className="row">
        <div
          className="col-xl-4 col-lg-6 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="00ms"
        >
          <div className="footer-widget footer-widget--about">
            <NavLink to="/" className="footer-widget__logo">
              <img
                src="assets/images/logo1111.png"
                width={83}
                alt="Floens HTML Template"
              />
            </NavLink>
            <p className="footer-widget__about-text">
           Our vision is  to become the leading manufacturer of furniture and metal works of the highest quality, 
both domestically and globally, while advancing 
sustainable techniques and traditional workmanship.
            </p>
            {/* /.footer-widget__about-text */}
        
            {/* /.footer-widget__newsletter mc-form */}
            <div className="mc-form__response" />
            {/* /.mc-form__response */}
          </div>
          {/* /.footer-widget */}
        </div>
        {/* /.col-xl-4 col-lg-6 */}
        <div
          className="col-xl-2 col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="200ms"
        >
          <div className="footer-widget footer-widget--links footer-widget--links-one">
            <div className="footer-widget__top">
              <div className="footer-widget__title-box" />
              {/* /.footer-widget__title-box */}
              <h2 className="footer-widget__title">Explore</h2>
              {/* /.footer-widget__title */}
            </div>
            {/* /.footer-widget__top */}
            <ul className="list-unstyled footer-widget__links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/work">Our Works</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            {/* /.list-unstyled footer-widget__links */}
          </div>
          {/* /.footer-widget */}
        </div>
        {/* /.col-xl-2 col-lg-3 col-md-3 col-sm-6 */}
        <div
          className="col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="400ms"
        >
          <div className="footer-widget footer-widget--links footer-widget--links-two">
            <div className="footer-widget__top">
              <div className="footer-widget__title-box" />
              {/* /.footer-widget__title-box */}
              <h2 className="footer-widget__title">Services</h2>
              {/* /.footer-widget__title */}
            </div>
            {/* /.footer-widget__top */}
            <ul className="list-unstyled footer-widget__links">
              <li>
                <NavLink to="/">Interior Design</NavLink>
              </li>
              <li>
                <NavLink to="/">Wood & Metal Works</NavLink>
              </li>
              <li>
                <NavLink to="/">Residence Design</NavLink>
              </li>
              <li>
                <NavLink to="/">Appartment & Commercial Design</NavLink>
              </li>
             
            </ul>
            {/* /.list-unstyled footer-widget__links */}
          </div>
          {/* /.footer-widget */}
        </div>
        {/* /.col-xl-3 col-lg-3 col-md-4 col-sm-6 */}
        <div
          className="col-xl-3 col-lg-6 col-md-5 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="600ms"
        >
          <div className="footer-widget footer-widget--contact">
            <div className="footer-widget__top">
              <div className="footer-widget__title-box" />
              {/* /.footer-widget__title-box */}
              <h2 className="footer-widget__title">Get inTouch</h2>
              {/* /.footer-widget__title */}
            </div>
            {/* /.footer-widget__top */}
            <ul className="list-unstyled footer-widget__info">
              <li>
                <NavLink to="">
                Addis Ababa, Ethiopia, Sengatera Negadewoch Hibret BLDG
                </NavLink>
              </li>
              <li>
                <span className="icon-paper-plane" />{" "}
                <NavLink to="mailto:info@kegeberewcrafts.com">info@kegeberewcrafts.com</NavLink>
              </li>
              <li>
                <span className="icon-phone-call" />{" "}
                <NavLink to="tel:+251 931456641">+251 931456641</NavLink>
              </li>
            </ul>
            {/* /.list-unstyled */}
          </div>
          {/* /.footer-widget */}
        </div>
        {/* /.col-xl-3 col-lg-6 col-md-5 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  {/* /.main-footer__top */}
  <div className="main-footer__bottom">
    <div className="container">
      <div className="main-footer__bottom__inner">
        <div className="row gutter-y-30 align-items-center">
          <div
            className="col-md-5 wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="000ms"
          >
            <div className="main-footer__social floens-social">
              <NavLink to="https://facebook.com/">
                <i className="icon-facebook" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </NavLink>
              <NavLink to="https://twitter.com/">
                <i className="icon-twitter" aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </NavLink>
              <NavLink to="https://instagram.com/">
                <i className="icon-instagram" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </NavLink>
              <NavLink to="https://youtube.com/">
                <i className="icon-youtube" aria-hidden="true" />
                <span className="sr-only">Youtube</span>
              </NavLink>
            </div>
            {/* /.main-footer__social */}
          </div>
          {/* /.col-md-5 */}
        
          {/* /.col-md-7 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.main-footer__inner */}
    </div>
    {/* /.container */}
  </div>
  {/* /.main-footer__bottom */}
</footer>
    </div>
  )
}

export default Footer
