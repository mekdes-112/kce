import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from "react-router-dom";

const About = () => {

    const options = {
        items: 5,
        margin: 65,
        smartSpeed: 700,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: 2,
            margin: 30,
          },
          500: {
            items: 3,
            margin: 40,
          },
          768: {
            items: 4,
            margin: 50,
          },
          992: {
            items: 5,
            margin: 70,
          },
          1200: {
            items: 6,
            margin: 149,
          },
        },
      };
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
    <h2 className="page-header__title">About us</h2>
    <ul className="floens-breadcrumb list-unstyled">
      <li>
        <i className="icon-home" /> <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <span>About us</span>
      </li>
    </ul>
    {/* /.thm-breadcrumb list-unstyled */}
  </div>
  {/* /.container */}
</section>


<section className="about-one section-space" id="about">
  <div className="container">
    <div className="row gutter-y-60">
      <div
        className="col-lg-6 wow fadeInLeft"
        data-wow-duration="1500ms"
        data-wow-delay="00ms"
      >
        <div className="about-one__image-grid">
          <div className="about-one__image">
            <img
              src="assets/images/about/kemem.png"
              alt="about"
              className="about-one__image__one"
            />
            <img
              src="assets/images/about/aboutoneone.png"
              alt="about"
              className="about-one__image__two"
            />
          </div>
          {/* /.about-one__image */}
          <div className="about-one__image">
            <img
              src="assets/images/about/FR_4.png"
              alt="about"
              className="about-one__image__three"
            />
          </div>
          {/* /.about-one__image */}
        
          {/* /.about-one__circle-text */}
        </div>
        {/* /.about-one__image-grid */}
      </div>
      {/* /.col-lg-6 */}
      <div className="col-lg-6">
        <div className="about-one__content">
          <div className="sec-title sec-title--border">
            <h6 className="sec-title__tagline">about us</h6>
            {/* /.sec-title__tagline */}
            <h3 className="sec-title__title">
              Explore Modern Designs &amp;  Furniture
            </h3>
            {/* /.sec-title__title */}
          </div>
          {/* /.sec-title */}
          <div
            className="about-one__content__text wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <h5 className="about-one__text-title">
              We’re providing the best quality in town.
            </h5>
            {/* /.about-one__text-title */}
            <p className="about-one__text">
            Kegeberew Crafts Enterprise specializes in 
crafts related to furniture and metalworking. 
The company will create uniquely designed 
furniture for both residential and commercial 
uses using highquality supplies at affordable 
prices
            </p>
            {/* /.about-one__text */}
          </div>
          {/* /.about-one__content__text */}
          <div className="row about-one__inner-row gutter-y-40">
            <div
              className="col-xl-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="about-one__service about-one__service--one">
                <div className="about-one__service__icon">
                  <span className="" />
                </div>
                {/* /.about-one__service__icon */}
                <div className="about-one__service__content">
                  <h4 className="about-one__service__title">
                    Appartment &amp; Commercial
                  </h4>
                  {/* /.about-one__service__title */}
                  <p className="about-one__service__text">
                 
                  </p>
                  {/* /.about-one__service__text */}
                </div>
                {/* /.about-one__service__content */}
              </div>
              {/* /.about-one__service */}
            </div>
            {/* /.col-xl-6 */}
            <div
              className="col-xl-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="about-one__service about-one__service--two">
                <div className="about-one__service__icon">
                  <span className="" />
                </div>
                {/* /.about-one__service__icon */}
                <div className="about-one__service__content">
                  <h4 className="about-one__service__title">
                    Wood & metal works
                  </h4>
                  {/* /.about-one__service__title */}
                  <p className="about-one__service__text">
                  
                  </p>
                  {/* /.about-one__service__text */}
                </div>
                {/* /.about-one__service__content */}
              </div>
              {/* /.about-one__service */}
            </div>
            {/* /.col-xl-6 */}
          </div>
          {/* /.row */}
          <div
            className="about-one__button wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <NavLink to="/contact" className="floens-btn">
              <span>get in touch</span>
              <i className="icon-right-arrow" />
            </NavLink>
            {/* /.floens-btn */}
          </div>
          {/* /.about-one__button */}
        </div>
        {/* /.about-one__content */}
      </div>
      {/* /.col-lg-6 */}
    </div>
    {/* /.row */}
  </div>
  {/* /.container */}
  <div className="about-one__shapes">
    <img
      src="assets/images/shapes/about-shape-1-1.jpg"
      alt="about-shape"
      className="about-one__shape about-one__shape--one"
    />
    <img
      src="assets/images/shapes/about-shape-1-1.jpg"
      alt="about-shape"
      className="about-one__shape about-one__shape--two"
    />
  </div>
  {/* /.about-one__shapes */}
</section>

<div className="client-carousel client-carousel--two">
        <div className="container">
          <OwlCarousel
            className="client-carousel__one floens-owl__carousel owl-theme owl-carousel"
            {...options}
          >
            <div className="client-carousel__one__item">
              <img
                src="../../assets/images/resources/brand-1-1.png"
                alt="brand"
              />
            </div>
            {/* /.owl-slide-item*/}
            <div className="client-carousel__one__item">
              <img
                src="../../assets/images/resources/brand-1-1.png"
                alt="brand"
              />
            </div>
            {/* /.owl-slide-item*/}
            <div className="client-carousel__one__item">
              <img
                src="../../assets/images/resources/brand-1-2.png"
                alt="brand"
              />
            </div>
            {/* /.owl-slide-item*/}
            <div className="client-carousel__one__item">
              <img
                src="../../assets/images/resources/brand-1-3.png"
                alt="brand"
              />
            </div>
            {/* /.owl-slide-item*/}
            <div className="client-carousel__one__item">
              <img
                src="../../assets/images/resources/brand-1-4.png"
                alt="brand"
              />
            </div>
            {/* /.owl-slide-item*/}
            <div className="client-carousel__one__item">
              <img
                src="../../assets/images/resources/brand-1-5.png"
                alt="brand"
              />
            </div>
            {/* /.owl-slide-item*/}
            <div className="client-carousel__one__item">
              <img
                src="../../assets/images/resources/brand-1-6.png"
                alt="brand"
              />
            </div>
            {/* /.owl-slide-item*/}
          </OwlCarousel>
          {/* /.thm-owl__slider */}
        </div>
        {/* /.container */}
      </div>

<section className="reliable-one @@extraClassName section-space-bottom">
  <div className="container">
    <div className="row gutter-y-60">
      <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
        <div className="reliable-one__images">
          <div className="reliable-one__image">
            <img
              src="assets/images/reliable/reliable-2-1.jpg"
              alt="reliable"
              className="reliable-one__image__one"
            />
            <div className="reliable-one__image__inner">
              <img
                src="assets/images/reliable/wu.jpg"
                alt="reliable"
                className="reliable-one__image__two"
              />
              {/* <img
                src="assets/images/reliable/segen.png"
                alt="reliable"
                className="reliable-one__image__three"
              /> */}
            </div>
            {/* /.reliable-one__image__inner */}
            <div className="experience reliable-one__experience">
              <div className="experience__inner">
                <h3
                  className="experience__year"
                  style={{
                    backgroundImage:
                      'url("assets/images/shapes/reliable-shape-1-1.png")'
                  }}
                >
                  1+
                </h3>
                {/* /.experience__year */}
                <p className="experience__text">
                  years of <br /> experience
                </p>
                {/* /.experience__text */}
              </div>
              {/* /.experience__inner */}
            </div>
            {/* /.experience */}
          </div>
          {/* /.reliable-one__image */}
        </div>
        {/* /.reliable-one__images */}
      </div>
      {/* /.col-lg-6 */}
      <div className="col-lg-6">
        <div className="reliable-one__content">
          <div className="sec-title sec-title--border">
            <h6 className="sec-title__tagline">reliable</h6>
            {/* /.sec-title__tagline */}
            <h3 className="sec-title__title">
              We Provide Reliable Services
            </h3>
            {/* /.sec-title__title */}
          </div>
          {/* /.sec-title */}
          <p className="reliable-one__text">
            Our vision is To become the leading manufacturer of furniture 
and metal works of the highest quality, both 
domestically and globally, while advancing sustainable techniques and traditional workmanship.
To become the leading manufacturer of furniture 
and metal works of the highest quality
          </p>
          {/* /.reliable-one__text */}
          <div className="row align-items-center gutter-y-30">
            <div className="col-lg-6 col-md-4 col-sm-6">
              <div className="reliable-one__info">
                <div className="reliable-one__info__icon">
                  <span className="icon-smiley" />
                </div>
                {/* /.reliable-one__info__icon */}
                <div className="reliable-one__info__text">
                  <h4 className="reliable-one__info__title">Happy clients</h4>
                  {/* /.reliable-one__info__title */}
                  <h5 className="reliable-one__info__total">30+</h5>
                  {/* /.reliable-one__info__total */}
                </div>
                {/* /.reliable-one__info__text */}
              </div>
              {/* /.reliable-one__info */}
            </div>
            {/* /.col-lg-6 col-md-4 col-sm-6 */}
            <div className="col-lg-6 col-md-4 col-sm-6">
              <div className="reliable-one__ratings">
                <h4 className="reliable-one__ratings__title">
                  clients rating:
                </h4>
                {/* /.reliable-one__ratings__title */}
                <div className="floens-ratings @@extraClassName">
                  <span className="icon-star" />
                  <span className="icon-star" />
                  <span className="icon-star" />
                  <span className="icon-star" />
                  <span className="icon-star" />
                </div>
                {/* /.product-ratings */}
              </div>
              {/* /.eliable-one__ratings */}
            </div>
            {/* /.col-lg-6 col-md-4 col-sm-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.reliable-one__content */}
      </div>
      {/* /.col-lg-6 */}
    </div>
    {/* /.row */}
  </div>
  {/* /.container */}
</section>

<Footer />


    </div>
  )
}

export default About
