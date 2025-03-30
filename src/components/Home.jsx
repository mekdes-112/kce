import React, { useEffect, useState } from "react";
import $ from "jquery";
import NavBar from "./NavBar";
import Footer from "./Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player';
import { NavLink } from "react-router-dom";


const Home = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handlePlayClick = () => {
    setShowPopup(true);
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };
  // const settingsone = {
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   prevArrow: <span className="icon-slide-left-arrow" />,
  //   nextArrow: <span className="icon-slide-right-arrow" />,
  // };

  const PrevArrow = ({ onClick }) => (
    <div className="slick-prev" onClick={onClick}>
      <span className="icon-slide-left-arrow"></span>
    </div>
  );
  
  const NextArrow = ({ onClick }) => (
    <div className="slick-next" onClick={onClick}>
      <span className="icon-slide-right-arrow"></span>
    </div>
  );

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 600,
  
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    variableWidth: true,
    centerPadding: '30px',
  };
 

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 2000,
    infinite: true,
    arrows: true,
    dots: false,
  };
  const PrevButton = ({ onClick }) => (
    <button
      className="hero-slider__slick-button hero-slider__slick-button--prev"
      onClick={onClick}
    >
      Prev <i className="icon-right-arrow"></i>
    </button>
  );

  const NextButton = ({ onClick }) => (
    <button
      className="hero-slider__slick-button hero-slider__slick-button--next"
      onClick={onClick}
    >
      Next <i className="icon-right-arrow"></i>
    </button>
  );
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

  useEffect(() => {
    // Initialize and animate the progress bars
    const progressBars = $(".count-bar");
    progressBars.each(function () {
      const progressBar = $(this);
      const percent = progressBar.data("percent");

      progressBar.animate({ width: percent }, 2000);
      progressBar.find(".count-text").animate({ left: percent }, 2000);
    });
  }, []);

  const optionsOne = {
    items: 1,
    margin: 0,
    loop: true,
    smartSpeed: 700,
    nav: true,
    navText: [
      '<span class="icon-slide-left-arrow"></span>',
      '<span class="icon-slide-right-arrow"></span>',
    ],
    dots: false,
    autoplay: 600,
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      576: {
        items: 1,
        margin: 15,
      },
      768: {
        items: 2,
        margin: 30,
      },
      992: {
        items: 2,
        margin: 30,
      },
      1200: {
        items: 3,
        margin: 30,
      },
      1400: {
        items: 3,
        margin: 30,
      },
      1600: {
        items: 4,
        margin: 30,
      },
    },
  };

  // const carouselOptions = {
  //   items: 3,
  //   margin: 30,
  //   smartSpeed: 700,
  //   loop: true,
  //   autoWidth: true,
  //   autoplay: true,
  //   nav: true,
  //   dots: false,
  //   navText: [
  //     "<span class='icon-slide-left-arrow'></span>",
  //     "<span class='icon-slide-right-arrow'></span>"
  //   ]
  // };

  return (
    <div>
      <NavBar />

      <section className="main-slider-two hero-slider ">
        <Slider
          {...settings}
          prevArrow={<PrevButton />}
          nextArrow={<NextButton />}
        >
          <div className="main-slider-two__item ">
            <div
              className="main-slider-two__bg"
              style={{
                backgroundImage: "url(assets/images/backgrounds/slideOne.jpg)",
              }}
            />
            {/* /.main-slider-two__bg */}
            <div className="main-slider-two__wrapper container">
              <div className="main-slider-two__left">
                <div className="main-slider-two__content">
                  <p className="main-slider-two__tagline">
                    Welcome to Kegeberew Crafts Enterprise
                  </p>
                  {/* /.main-slider-two__tagline */}
                  <h2 className="main-slider-two__title">
                    “Designing Dreams, <br /> Crafting Excellence”
                  </h2>
                  {/* /.main-slider-two__title */}
                  <NavLink
                    to="/about"
                    className="main-slider-two__btn floens-btn"
                  >
                    <span>discover more</span>
                    <i className="icon-right-arrow" />
                  </NavLink>
                  {/* /.main-slider-two__btn floens-btn */}
                </div>
                {/* /.main-slider-two__content */}
              </div>
              {/* /.main-slider-two__left */}
              <div className="main-slider-two__right">
                <div className="main-slider-two__image">
                  <div className="main-slider-two__image__one">
                    <div className="main-slider-two__image__inner">
                      <img
                        src="assets/images/slider/sliderOne.jpg"
                        alt="slider"
                      />
                    </div>
                    {/* /.main-slider-two__image__inner */}
                    <div className="main-slider-two__tiles">
                      <div className="main-slider-two__tiles__circle" />
                      {/* /.main-slider-two__tiles__circle */}
                      <h5 className="main-slider-two__tiles__title">
                        modern Crafts
                      </h5>
                      {/* /.main-slider-two__tiles__title */}
                    </div>
                    {/* /.main-slider-two__tiles */}
                  </div>
                  {/* /.main-slider-two__image__one */}
                  <div className="main-slider-two__image__two">
                    <div className="main-slider-two__image__inner">
                      <img
                        src="assets/images/slider/sliderTwo.jpg"
                        alt="slider"
                      />
                    </div>
                    {/* /.main-slider-two__image__inner */}
                    <div className="main-slider-two__shape">
                      <div className="main-slider-two__shape__circle" />
                      {/* /.main-slider-two__shape__circle */}
                      <h5 className="main-slider-two__shape__title">
                        modern Crafts
                      </h5>
                    </div>
                    {/* /.main-slider-two__tilses */}
                  </div>
                  {/* /.main-slider-two__image__two */}
                </div>
                {/* /.main-slider-two__image */}
              </div>
              {/* /.main-slider-two__right */}
            </div>
            {/* /.main-slider-two__wrapper .container */}
          </div>
          {/* /.main-slider-two__item */}
          <div className="main-slider-two__item">
            <div
              className="main-slider-two__bg"
              style={{
                backgroundImage: "url(assets/images/backgrounds/slideTwo.jpg)",
              }}
            />
            {/* /.main-slider-two__bg */}
            <div className="main-slider-two__wrapper container">
              <div className="main-slider-two__left">
                <div className="main-slider-two__content">
                  <p className="main-slider-two__tagline">
                    Welcome to Kegeberew Crafts Enterprise
                  </p>
                  {/* /.main-slider-two__tagline */}
                  <h2 className="main-slider-two__title">
                    “Designing Dreams,
                    <br /> Crafting Excellence”
                  </h2>
                  {/* /.main-slider-two__title */}
                  <NavLink
                    to="/about"
                    className="main-slider-two__btn floens-btn"
                  >
                    <span>discover more</span>
                    <i className="icon-right-arrow" />
                  </NavLink>
                  {/* /.main-slider-two__btn floens-btn */}
                </div>
                {/* /.main-slider-two__content */}
              </div>
              {/* /.main-slider-two__left */}
              <div className="main-slider-two__right">
                <div className="main-slider-two__image">
                  <div className="main-slider-two__image__one">
                    <div className="main-slider-two__image__inner">
                      <img
                        src="assets/images/slider/kemem.jpg"
                        alt="slider"
                      />
                    </div>
                    {/* /.main-slider-two__image__inner */}
                    <div className="main-slider-two__tiles">
                      <div className="main-slider-two__tiles__circle" />
                      {/* /.main-slider-two__tiles__circle */}
                      <h5 className="main-slider-two__tiles__title">
                        modern Crafts
                      </h5>
                      {/* /.main-slider-two__tiles__title */}
                    </div>
                    {/* /.main-slider-two__tiles */}
                  </div>
                  {/* /.main-slider-two__image__one */}
                  <div className="main-slider-two__image__two">
                    <div className="main-slider-two__image__inner">
                      <img
                        src="assets/images/slider/project-2-2.jpg"
                        alt="slider"
                      />
                    </div>
                    {/* /.main-slider-two__image__inner */}
                    <div className="main-slider-two__shape">
                      <div className="main-slider-two__shape__circle" />
                      <h5 className="main-slider-two__shape__title">
                        modern Crafts
                      </h5>
                      {/* /.main-slider-two__shape__circle */}
                    </div>
                    {/* /.main-slider-two__tilses */}
                  </div>
                  {/* /.main-slider-two__image__two */}
                </div>
                {/* /.main-slider-two__image */}
              </div>
              {/* /.main-slider-two__right */}
            </div>
            {/* /.main-slider-two__wrapper .container */}
          </div>
          {/* /.main-slider-two__item */}

          {/* /.main-slider-two__item */}
        </Slider>
        {/* /.my-slider */}
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

      <section className="about-two section-space">
        <div
          className="about-two__bg"
          style={{
            backgroundImage:
              "url(../../assets/images/backgrounds/about-bg-2-1.png)",
          }}
        />
        {/* /.about-two__bg */}
        <div className="container">
          <div className="row gutter-y-60">
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="about-two__image">
                <div className="about-two__image__inner">
                  <img
                    src="../../assets/images/about/aboutOne.jpg"
                    alt="about"
                    className="about-two__image__one"
                  />
                  <div className="about-two__image__inner__inner">
                    <img
                      src="../../assets/images/about/aboutTwo.jpg"
                      alt="about"
                      className="about-two__image__two"
                    />
                  </div>
                  {/* /.about-two__image__inner__inner */}
                  <div className="experience about-two__experience">
                    <div className="experience__inner">
                      <h3
                        className="experience__year"
                        style={{
                          backgroundImage:
                            'url("../../assets/images/shapes/reliable-shape-1-1.png")',
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
                {/* /.about-two__image__inner */}
              </div>
              {/* /.about-two__image-grid */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-lg-6">
              <div className="about-two__content">
                <div className="sec-title sec-title--border">
                  <h6 className="sec-title__tagline">about us</h6>
                  {/* /.sec-title__tagline */}
                  <h3 className="sec-title__title">
                    Best Designing &amp; <br /> Construction Company
                  </h3>
                  {/* /.sec-title__title */}
                </div>
                {/* /.sec-title */}
                <div
                  className="about-two__content__text wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="00ms"
                >
                  <h5 className="about-two__text-title">
                    We’re providing the best quality in town.
                  </h5>
                  {/* /.about-two__text-title */}
                  <p className="about-two__text">
                    Kegeberew Crafts Enterprise specializes in crafts related to
                    furniture and metalworking. The company will create uniquely
                    designed furniture for both residential and commercial uses
                    using highquality supplies at affordable prices
                  </p>
                  {/* /.about-two__text */}
                </div>
                {/* /.about-two__content__text */}
                <div
                  className="about-two__list wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  <div className="about-two__list__left">
                    <div className="about-two__list__item">
                      <span className="icon-tick" />
                      Quality
                    </div>
                    <div className="about-two__list__item">
                      <span className="icon-tick" />
                      Less Maintenance
                    </div>
                  </div>
                  {/* /.about-two__list__left */}
                  <div className="about-two__list__right">
                    <div className="about-two__list__item">
                      <span className="icon-tick" />
                      Resistant
                    </div>
                    <div className="about-two__list__item">
                      <span className="icon-tick" />
                      Affordable
                    </div>
                  </div>
                  {/* /.about-two__list__right */}
                </div>
                {/* /.about-two__list */}
                <div
                  className="about-two__button wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="200ms"
                >
                  <NavLink to="/about" className="floens-btn">
                    <span>more about us</span>
                    <i className="icon-right-arrow" />
                  </NavLink>
                  {/* /.floens-btn */}
                </div>
                {/* /.about-two__button */}
              </div>
              {/* /.about-two__content */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>

      <section className="expertise-one section-space">
        <div className="container">
          <div className="row gutter-y-50">
            <div className="col-lg-6">
              <div className="expertise-one__content">
                <div className="sec-title sec-title--border">
                  <h6 className="sec-title__tagline">expertise</h6>
                  {/* /.sec-title__tagline */}
                  <h3 className="sec-title__title">
                    Expert designers <br /> designs and modify your home
                  </h3>
                  {/* /.sec-title__title */}
                </div>
                {/* /.sec-title */}
                <p className="expertise-one__text">
                By combining 
traditional workmanship with innovative 
designs and high-quality materials, we aim to 
produce appealing and long-lasting metal works 
and furniture that exceeds consumer expections.
                </p>
                {/* /.expertise-one__text */}
                <div className="expertise-one__progress">
                  <div className="progress-box">
                    <h4 className="progress-box__title">
                      Interior Re-design
                    </h4>
                    {/* /.progress-box__title */}
                    <div className="progress-box__bar">
                      <div
                        className="progress-box__bar__inner count-bar"
                        data-percent="100%"
                      >
                        <div className="progress-box__number count-text">
                        100%
                        </div>
                      </div>
                    </div>
                    {/* /.progress-box__bar */}
                  </div>
                  {/* /.progress-box */}
                  <div className="progress-box">
                    <h4 className="progress-box__title">
                      Custom projects with unique designs
                    </h4>
                    {/* /.progress-box__title */}
                    <div className="progress-box__bar">
                      <div
                        className="progress-box__bar__inner count-bar"
                        data-percent="100%"
                      >
                        <div className="progress-box__number count-text">
                          100%
                        </div>
                      </div>
                    </div>
                    {/* /.progress-box__bar */}
                  </div>
                  {/* /.progress-box */}
                  <div className="progress-box">
                    <h4 className="progress-box__title">
                      We bring best 
                    </h4>
                    {/* /.progress-box__title */}
                    <div className="progress-box__bar">
                      <div
                        className="progress-box__bar__inner count-bar"
                        data-percent="100%"
                      >
                        <div className="progress-box__number count-text">
                          100%
                        </div>
                      </div>
                    </div>
                    {/* /.progress-box__bar */}
                  </div>
                  {/* /.progress-box */}
                </div>
                {/* /.expertise-one__progress */}
              </div>
              {/* /.expertise-one__content */}
            </div>
            {/* /.col-lg-6 */}
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="expertise-one__images-grid">
                <div className="expertise-one__image expertise-one__image--one">
                  <img
                    src="../../assets/images/expertise/expertise-1-1.jpg"
                    alt="expertise"
                  />
                </div>
                {/* /.expertise-one__image */}
                <div className="expertise-one__image expertise-one__image--two">
                  <img
                    src="../../assets/images/expertise/expertise-1-2.jpg"
                    alt="expertise"
                  />
                </div>
                {/* /.expertise-one__image */}
                <div className="expertise-one__image expertise-one__image--three">
                  <img
                    src="../../assets/images/expertise/expertise-1-3.jpg"
                    alt="expertise"
                  />
                </div>
                {/* /.expertise-one__image */}
              </div>
              {/* /.expertise-one__images-grid */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>

      <section className="services-two section-space-two">
        <div className="container">
          <div className="services-two__top">
            <div className="row gutter-y-50 align-items-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-title @@extraClassName">
                  <h6 className="sec-title__tagline">services</h6>
                  {/* /.sec-title__tagline */}
                  <h3 className="sec-title__title">
                    We Provides Best Services for you
                  </h3>
                  {/* /.sec-title__title */}
                </div>
                {/* /.sec-title */}
              </div>
              {/* /.col-lg-8 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.services-two__top */}
        </div>
        {/* /.container */}
        <div className="container-fluid">
          <OwlCarousel
            className="services-two__carousel floens-owl__carousel floens-owl__carousel--basic-nav owl-carousel owl-theme"
            {...optionsOne}
          >
            <div className="item">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{
                    backgroundImage:
                      'url("../../assets/images/services/service-bg-2-1.png")',
                  }}
                />
                {/* /.service-card-two__bg */}
                <div className="service-card-two__image">
                  <img
                    src="../../assets/images/services/service-2-1.jpg"
                    alt="Tiling & concrete"
                  />
                </div>
                {/* /.service-card-two__image */}
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <NavLink to="/services">
                      Wood &amp; Metal work
                    </NavLink>
                  </h3>
                  {/* /.service-card-two__title */}
                  <div className="service-card-two__bottom">
                    <NavLink
                      to="/services"
                      className="service-card-two__link floens-btn"
                    >
                      <span>service details</span>
                      <i className="icon-right-arrow" />
                    </NavLink>
                    <span className="service-card-two__icon icon-tile" />
                  </div>
                  {/* /.service-card-two__bottom */}
                </div>
                {/* /.service-card-two__content */}
              </div>
              {/* /.service-card-two */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{
                    backgroundImage:
                      'url("../../assets/images/services/service-bg-2-1.png")',
                  }}
                />
                {/* /.service-card-two__bg */}
                <div className="service-card-two__image">
                  <img
                    src="../../assets/images/services/service-2-2.jpg"
                    alt="Industrial Flooring"
                  />
                </div>
                {/* /.service-card-two__image */}
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <NavLink to="/services">
                    Interior Design
                    </NavLink>
                  </h3>
                  {/* /.service-card-two__title */}
                  <div className="service-card-two__bottom">
                    <NavLink
                      to="/services"
                      className="service-card-two__link floens-btn"
                    >
                      <span>service details</span>
                      <i className="icon-right-arrow" />
                    </NavLink>
                    <span className="service-card-two__icon icon-parquet" />
                  </div>
                  {/* /.service-card-two__bottom */}
                </div>
                {/* /.service-card-two__content */}
              </div>
              {/* /.service-card-two */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{
                    backgroundImage:
                      'url("../../assets/images/services/service-bg-2-1.png")',
                  }}
                />
                {/* /.service-card-two__bg */}
                <div className="service-card-two__image">
                  <img
                    src="../../assets/images/services/service-2-3.jpg"
                    alt="Vinyl Plank"
                  />
                </div>
                {/* /.service-card-two__image */}
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <NavLink to="/services">Residence design</NavLink>
                  </h3>
                  {/* /.service-card-two__title */}
                  <div className="service-card-two__bottom">
                    <NavLink
                      to="/services"
                      className="service-card-two__link floens-btn"
                    >
                      <span>service details</span>
                      <i className="icon-right-arrow" />
                    </NavLink>
                    <span className="service-card-two__icon icon-tiles" />
                  </div>
                  {/* /.service-card-two__bottom */}
                </div>
                {/* /.service-card-two__content */}
              </div>
              {/* /.service-card-two */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{
                    backgroundImage:
                      'url("../../assets/images/services/service-bg-2-1.png")',
                  }}
                />
                {/* /.service-card-two__bg */}
                <div className="service-card-two__image">
                  <img
                    src="../../assets/images/services/service-2-4.jpg"
                    alt="Carpets & rugs"
                  />
                </div>
                {/* /.service-card-two__image */}
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <NavLink to="/services">Appartment Design</NavLink>
                  </h3>
                  {/* /.service-card-two__title */}
                  <div className="service-card-two__bottom">
                    <NavLink
                      to="/services"
                      className="service-card-two__link floens-btn"
                    >
                      <span>service details</span>
                      <i className="icon-right-arrow" />
                    </NavLink>
                    <span className="service-card-two__icon icon-carpet" />
                  </div>
                  {/* /.service-card-two__bottom */}
                </div>
                {/* /.service-card-two__content */}
              </div>
              {/* /.service-card-two */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{
                    backgroundImage:
                      'url("../../assets/images/services/service-bg-2-1.png")',
                  }}
                />
                {/* /.service-card-two__bg */}
                <div className="service-card-two__image">
                  <img
                    src="../../assets/images/services/service-2-5.jpg"
                    alt="Oak Flooring"
                  />
                </div>
                {/* /.service-card-two__image */}
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <NavLink to="/services">Commercial Design</NavLink>
                  </h3>
                  {/* /.service-card-two__title */}
                  <div className="service-card-two__bottom">
                    <NavLink
                      to="/services"
                      className="service-card-two__link floens-btn"
                    >
                      <span>service details</span>
                      <i className="icon-right-arrow" />
                    </NavLink>
                    <span className="service-card-two__icon icon-wood-board" />
                  </div>
                  {/* /.service-card-two__bottom */}
                </div>
                {/* /.service-card-two__content */}
              </div>
              {/* /.service-card-two */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{
                    backgroundImage:
                      'url("../../assets/images/services/service-bg-2-1.png")',
                  }}
                />
                {/* /.service-card-two__bg */}
                <div className="service-card-two__image">
                  <img
                    src="../../assets/images/services/service-2-6.jpg"
                    alt="Vein Patterns"
                  />
                </div>
                {/* /.service-card-two__image */}
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <NavLink to="/services">Design Supervision</NavLink>
                  </h3>
                  {/* /.service-card-two__title */}
                  <div className="service-card-two__bottom">
                    <NavLink
                      to="/services"
                      className="service-card-two__link floens-btn"
                    >
                      <span>service details</span>
                      <i className="icon-right-arrow" />
                    </NavLink>
                    <span className="service-card-two__icon icon-stones" />
                  </div>
                  {/* /.service-card-two__bottom */}
                </div>
                {/* /.service-card-two__content */}
              </div>
              {/* /.service-card-two */}
            </div>
            {/* /.item */}
          </OwlCarousel>
          {/* /.services-two__carousel */}
        </div>
        {/* /.container-fluid */}
      </section>
      <section className="video-one">
      <div className="container">
        <div
          className="video-one__wrapper"
          style={{
            backgroundImage: "url(../../assets/images/backgrounds/video-bg-1.jpg)",
          }}
        >
          <NavLink
            to="#"
            className="video-button video-button--large"
            style={{
              backgroundImage: "url(../../assets/images/resources/slider-video-bg.png)",
            }}
            onClick={handlePlayClick}
          >
            <span className="icon-play" />
            <i className="video-button__ripple" />
          </NavLink>
        </div>
      </div>

      {showPopup && (
        <div className="video-popup-overlay">
          <div className="video-popup">
            <ReactPlayer
              url="../../assets/videos/your-video.mp4"
              playing
              controls
              width="100%"
              height="100%"
            />
            <button className="close-button" onClick={handleCloseClick}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
      {/* /.video-one */}
      {/* video end */}
      {/* projects start */}
      <section className="projects-two projects-two--home section-space-bottom">
        <div
          className="projects-two__bg floens-jarallax"
          data-jarallax=""
          data-speed="0.3"
          style={{
            backgroundImage:
              "url(../../assets/images/backgrounds/projects-bg-2.jpg)",
          }}
        />
        {/* /.projects-two__bg */}
        <div className="container">
          <div className="sec-title sec-title--center">
            <h6 className="sec-title__tagline">complete projects</h6>
            {/* /.sec-title__tagline */}
            <h3 className="sec-title__title">
              Our Recent <br /> Complete Projects
            </h3>
            {/* /.sec-title__title */}
          </div>
          {/* /.sec-title */}
        </div>
        {/* /.container */}
        <div className="projects-two__carousel-container">
          <Slider
            className="projects-two__carousel floens-owl__carousel floens-owl__carousel--basic-nav owl-theme"
            {...sliderSettings}
          >
            <div className="item">
              <div className="project-card @@extraClassName">
                <NavLink to="/work" className="project-card__image">
                  <img
                    src="../../assets/images/works/project-2-1.jpg"
                    alt="Modern Tiles"
                  />
                </NavLink>
                {/* /.project-card__image */}
                <div className="project-card__content">
                  <h3 className="project-card__tagline">Kegeberew Crafts</h3>
                  {/* /.project-card__tagline */}
                  <div className="project-card__links">
                    <div className="project-card__links__inner">
                      <h3 className="project-card__title">
                        <NavLink to="/work">Modern Designs</NavLink>
                      </h3>
                      {/* /.project-card__title */}
                      <NavLink
                        to="/work"
                        className="project-card__link floens-btn"
                      >
                        <span className="icon-right-arrow" />
                      </NavLink>
                      {/* /.project-card__link */}
                    </div>
                    {/* /.project-card__links__inner */}
                  </div>
                  {/* /.project-card__links */}
                </div>
                {/* /.project-card__content */}
              </div>
              {/* /.project-card */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="project-card @@extraClassName">
                <NavLink to="/work" className="project-card__image">
                  <img
                    src="../../assets/images/works/project-2-2.jpg"
                    alt="Modern Tiles"
                  />
                </NavLink>
                {/* /.project-card__image */}
                <div className="project-card__content">
                  <h3 className="project-card__tagline">Kegeberew Crafts</h3>
                  {/* /.project-card__tagline */}
                  <div className="project-card__links">
                    <div className="project-card__links__inner">
                      <h3 className="project-card__title">
                        <NavLink to="/work">Modern Designs</NavLink>
                      </h3>
                      {/* /.project-card__title */}
                      <NavLink
                        to="/work"
                        className="project-card__link floens-btn"
                      >
                        <span className="icon-right-arrow" />
                      </NavLink>
                      {/* /.project-card__link */}
                    </div>
                    {/* /.project-card__links__inner */}
                  </div>
                  {/* /.project-card__links */}
                </div>
                {/* /.project-card__content */}
              </div>
              {/* /.project-card */}
            </div>

            {/* /.item */}
            <div className="item">
              <div className="project-card project-card--large">
                <NavLink to="/work" className="project-card__image">
                  <img
                    src="../../assets/images/works/project-2-3.jpg"
                    alt="Modern Tiles"
                  />
                </NavLink>
                {/* /.project-card__image */}
                <div className="project-card__content">
                  <h3 className="project-card__tagline">Kegeberew Crafts</h3>
                  {/* /.project-card__tagline */}
                  <div className="project-card__links">
                    <div className="project-card__links__inner">
                      <h3 className="project-card__title">
                        <NavLink to="/work">Modern Designs</NavLink>
                      </h3>
                      {/* /.project-card__title */}
                      <NavLink
                        to="/work"
                        className="project-card__link floens-btn"
                      >
                        <span className="icon-right-arrow" />
                      </NavLink>
                      {/* /.project-card__link */}
                    </div>
                    {/* /.project-card__links__inner */}
                  </div>
                  {/* /.project-card__links */}
                </div>
                {/* /.project-card__content */}
              </div>
              {/* /.project-card */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="project-card @@extraClassName">
                <NavLink to="/work" className="project-card__image">
                  <img
                    src="../../assets/images/works/project-2-4.jpg"
                    alt="Modern Tiles"
                  />
                </NavLink>
                {/* /.project-card__image */}
                <div className="project-card__content">
                  <h3 className="project-card__tagline">Kegeberew Crafts</h3>
                  {/* /.project-card__tagline */}
                  <div className="project-card__links">
                    <div className="project-card__links__inner">
                      <h3 className="project-card__title">
                        <NavLink to="/work">Modern Designs</NavLink>
                      </h3>
                      {/* /.project-card__title */}
                      <NavLink
                        to="/work"
                        className="project-card__link floens-btn"
                      >
                        <span className="icon-right-arrow" />
                      </NavLink>
                      {/* /.project-card__link */}
                    </div>
                    {/* /.project-card__links__inner */}
                  </div>
                  {/* /.project-card__links */}
                </div>
                {/* /.project-card__content */}
              </div>
              {/* /.project-card */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="project-card @@extraClassName">
                <NavLink to="/work" className="project-card__image">
                  <img
                    src="../../assets/images/works/project-2-5.jpg"
                    alt="Modern Tiles"
                  />
                </NavLink>
                {/* /.project-card__image */}
                <div className="project-card__content">
                  <h3 className="project-card__tagline">Kegeberew Crafts</h3>
                  {/* /.project-card__tagline */}
                  <div className="project-card__links">
                    <div className="project-card__links__inner">
                      <h3 className="project-card__title">
                        <NavLink to="/work">Modern Designs</NavLink>
                      </h3>
                      {/* /.project-card__title */}
                      <NavLink
                        to="/work"
                        className="project-card__link floens-btn"
                      >
                        <span className="icon-right-arrow" />
                      </NavLink>
                      {/* /.project-card__link */}
                    </div>
                    {/* /.project-card__links__inner */}
                  </div>
                  {/* /.project-card__links */}
                </div>
                {/* /.project-card__content */}
              </div>
              {/* /.project-card */}
            </div>

            {/* /.item */}
          </Slider>
        </div>
        {/* /.container-fluid */}
      </section>

      <section className="services-one__info" style={{ marginTop: "1rem" }}>
        <div className="container">
          <div className="services-one__info__inner">
            <div
              className="services-one__info__bg"
              style={{
                backgroundImage:
                  "url(../../assets/images/backgrounds/services-info-bg-1.png)",
              }}
            />
            {/* /.services-one__info__bg */}
            <div className="row gutter-y-40">
              <div className="col-lg-6">
                <div className="services-one__info__left">
                  <h3 className="services-one__info__title">
                    Get a Professional Services
                  </h3>
                  {/* /.services-one__info__title */}
                  <p className="services-one__info__text">
                  Our vision is to become the leading manufacturer of furniture and metal works of the highest quality.
                  </p>
                  {/* /.services-one__info__text */}
                </div>
                {/* /.services-one__info__left */}
              </div>
              {/* /.col-lg-6 */}
              <div className="col-lg-6">
                <div className="services-one__info__right">
                  <div className="services-one__info__right__inner">
                    <div className="services-one__info__icon">
                      <span className="icon-telephone" />
                    </div>
                    {/* /.services-one__info__icon */}
                    <NavLink
                      to="tel:+251 93 145 6641"
                      className="services-one__info__number"
                    >
                      +251 93 145 6641
                    </NavLink>
                    {/* /.services-one__info__number */}
                  </div>
                  {/* /.services-one__info__right__inner */}
                </div>
                {/* /.services-one__info__right */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
            <div className="services-one__info__shape-one" />
            {/* /.services-one__info__shape-one */}
            <div className="services-one__info__shape-two" />
            {/* /.services-one__info__shape-two */}
          </div>
          {/* /.services-one__info__inner */}
        </div>
        {/* /.container */}
      </section>

 

      <Footer />
    </div>
  );
};

export default Home;
