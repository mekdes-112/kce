import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div>
        <NavBar />

<section className="page-header">
  <div
    className="page-header__bg"
    style={{
      backgroundImage: 'url("assets/images/backgrounds/page-header-bg-1-1.png")'
    }}
  />
  {/* /.page-header__bg */}
  <div className="container">
    <h2 className="page-header__title">Contact Us</h2>
    <ul className="floens-breadcrumb list-unstyled">
      <li>
        <i className="icon-home" /> <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <span>Contact Us</span>
      </li>
    </ul>
    {/* /.thm-breadcrumb list-unstyled */}
  </div>
  {/* /.container */}
</section>

           <section className="contact-one section-space">
        <div
          className="contact-one__bg"
          style={{
            backgroundImage:
              'url("assets/images/backgrounds/contact-bg-1.png")',
          }}
        />
        {/* /.contact-one__bg */}
        <div className="container">
          <div className="row gutter-y-40">
            <div className="col-lg-6">
              <div className="contact-one__content">
                <div className="sec-title sec-title--border">
                  <h6 className="sec-title__tagline">contact</h6>
                  {/* /.sec-title__tagline */}
                  <h3 className="sec-title__title">
                    Reach out &amp; <br /> Connect with Us
                  </h3>
                  {/* /.sec-title__title */}
                </div>
                {/* /.sec-title */}
                <p className="contact-one__text">
                 Contact us for more information & work with us.
                </p>
                {/* /.contact-one__text */}
                <div
                  className="contact-one__info wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="00ms"
                >
                  <div
                    className="contact-one__info__bg"
                    style={{
                      backgroundImage:
                        'url("assets/images/shapes/contact-info-bg.png")',
                    }}
                  />
                  {/* /.contact-one__info__bg */}
                  <div className="contact-one__info__content">
                    <div className="contact-one__info__item">
                      <div className="contact-one__info__item__inner">
                        <div className="contact-one__info__icon">
                          <span className="icon-phone-call" />
                        </div>
                        {/* /.contact-one__info__icon */}
                        <p className="contact-one__info__text">
                          <NavLink to="tel:+251 931456641">+251 931456641</NavLink>
                        </p>
                        {/* /.contact-one__info__text */}
                      </div>
                      {/* /.contact-one__info__item__inner */}
                    </div>
                    {/* /.contact-one__info__item */}
                    <div className="contact-one__info__item">
                      <div className="contact-one__info__item__inner">
                        <div className="contact-one__info__icon">
                          <span className="icon-paper-plane" />
                        </div>
                        {/* /.contact-one__info__icon */}
                        <p className="contact-one__info__text">
                          <NavLink to="mailto:info@kegeberewcrafts.com">
                          info@kegeberewcrafts.com
                          </NavLink>
                        </p>
                        {/* /.contact-one__info__text */}
                      </div>
                      {/* /.contact-one__info__item__inner */}
                    </div>
                    {/* /.contact-one__info__item */}
                    <div className="contact-one__info__item">
                      <div className="contact-one__info__item__inner">
                        <div className="contact-one__info__icon">
                          <span className="icon-location" />
                        </div>
                        {/* /.contact-one__info__icon */}
                        <address className="contact-one__info__text">
                          <NavLink to="">
                          Addis Ababa, Ethiopia, Sengatera Negadewoch Hibret BLDG
                          </NavLink>
                        </address>
                        {/* /.contact-one__info__text */}
                      </div>
                      {/* /.contact-one__info__item__inner */}
                    </div>
                    {/* /.contact-one__info__item */}
                  </div>
                  {/* /.contact-one__info__content */}
                  <img
                    src="assets/images/shapes/contact-shape-1-1.png"
                    alt=""
                    className="contact-one__info__image"
                  />
                </div>
                {/* /.contact-one__info */}
              </div>
              {/* /.contact-one__content */}
            </div>
            {/* /.col-xl-6 */}
            <div className="col-lg-6">
              <form
                className="contact-one__form contact-form-validated form-one wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
                action=""
              >
                <div
                  className="contact-one__form__bg"
                  style={{
                    backgroundImage:
                      'url("assets/images/shapes/contact-info-form-bg.png")',
                  }}
                />
                {/* /.contact-one__form__bg */}
                <div className="contact-one__form__top">
                  <h2 className="contact-one__form__title">
                    Get In Touch With Us And Enjoy <br />
                    Top-Notch Support
                  </h2>
                  {/* /.contact-one__form__title */}
                </div>
                {/* /.contact-one__form__top */}
                <div className="form-one__group form-one__group--grid">
                  <div className="form-one__control form-one__control--input form-one__control--full">
                    <input type="text" name="name" placeholder="Your name" />
                  </div>
                  {/* /.form-one__control form-one__control--full */}
                  <div className="form-one__control form-one__control--full">
                    <input type="email" name="email" placeholder="your email" />
                  </div>
                  {/* /.form-one__control form-one__control--full */}
                  <div className="form-one__control form-one__control--full">
                 
                  </div>
                  {/* /.form-one__control form-one__control--full */}
                  <div className="form-one__control form-one__control--mesgae form-one__control--full">
                    <textarea
                      name="message"
                      placeholder="Write message"
                      defaultValue={""}
                    />
                    {/* /# */}
                  </div>
                  {/* /.form-one__control */}
                  <div className="form-one__control form-one__control--full">
                    <button type="submit" className="floens-btn">
                      <span>send message</span>
                      <i className="icon-right-arrow" />
                    </button>
                  </div>
                  {/* /.form-one__control */}
                </div>
                {/* /.form-one__group */}
              </form>
            </div>
            {/* /.col-xl-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <img
          src="assets/images/contact/contact-1-1.jpg"
          alt=""
          className="contact-one__image-one wow fadeInLeft"
          data-wow-duration="1500ms"
          data-wow-delay="00ms"
        />
        <img
          src="assets/images/contact/contact-1-2.jpg"
          alt=""
          className="contact-one__image-two wow fadeInRight"
          data-wow-duration="1500ms"
          data-wow-delay="00ms"
        />
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
