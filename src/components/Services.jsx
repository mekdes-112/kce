import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { NavLink } from "react-router-dom";

const Services = () => {
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
    <h2 className="page-header__title">our services</h2>
    <ul className="floens-breadcrumb list-unstyled">
      <li>
        <i className="icon-home" /> <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <span>our services</span>
      </li>
    </ul>
    {/* /.thm-breadcrumb list-unstyled */}
  </div>
  {/* /.container */}
</section>


<section className="services-page section-space">
  <div className="container">
    <div className="row gutter-y-30">
      <div className="col-xl-4 col-md-6">
        <div className="service-card-two">
          <div
            className="service-card-two__bg"
            style={{
              backgroundImage:
                'url("assets/images/services/service-bg-2-1.png")'
            }}
          />
          {/* /.service-card-two__bg */}
          <div className="service-card-two__image">
            <img
              src="assets/images/services/service-2-1.jpg"
              alt="Tiling & concrete"
            />
          </div>
          {/* /.service-card-two__image */}
          <div className="service-card-two__content">
            <h3 className="service-card-two__title">
              <NavLink to="service-d-tiling-concrete.html">Wood &amp; Metal work</NavLink>
            </h3>
            {/* /.service-card-two__title */}
            <div className="service-card-two__bottom">
              <NavLink
                to="service-d-tiling-concrete.html"
                className="service-card-two__link floens-btn"
              >
                
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
      {/* /.col-xl-4 col-md-6 */}
      <div className="col-xl-4 col-md-6">
        <div className="service-card-two">
          <div
            className="service-card-two__bg"
            style={{
              backgroundImage:
                'url("assets/images/services/service-bg-2-1.png")'
            }}
          />
          {/* /.service-card-two__bg */}
          <div className="service-card-two__image">
            <img
              src="assets/images/services/service-2-2.jpg"
              alt="Industrial Flooring"
            />
          </div>
          {/* /.service-card-two__image */}
          <div className="service-card-two__content">
            <h3 className="service-card-two__title">
              <NavLink to="service-d-industrial-flooring.html">
              Interior Design
              </NavLink>
            </h3>
            {/* /.service-card-two__title */}
            <div className="service-card-two__bottom">
              <NavLink
                to="service-d-industrial-flooring.html"
                className="service-card-two__link floens-btn"
              >
                
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
      {/* /.col-xl-4 col-md-6 */}
      <div className="col-xl-4 col-md-6">
        <div className="service-card-two">
          <div
            className="service-card-two__bg"
            style={{
              backgroundImage:
                'url("assets/images/services/service-bg-2-1.png")'
            }}
          />
          {/* /.service-card-two__bg */}
          <div className="service-card-two__image">
            <img
              src="assets/images/services/service-2-3.jpg"
              alt="Vinyl Plank"
            />
          </div>
          {/* /.service-card-two__image */}
          <div className="service-card-two__content">
            <h3 className="service-card-two__title">
              <NavLink to="service-d-vinyl-plank.html">Residence design</NavLink>
            </h3>
            {/* /.service-card-two__title */}
            <div className="service-card-two__bottom">
              <NavLink
                to="service-d-vinyl-plank.html"
                className="service-card-two__link floens-btn"
              >
                
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
      {/* /.col-xl-4 col-md-6 */}
      <div className="col-xl-4 col-md-6">
        <div className="service-card-two">
          <div
            className="service-card-two__bg"
            style={{
              backgroundImage:
                'url("assets/images/services/service-bg-2-1.png")'
            }}
          />
          {/* /.service-card-two__bg */}
          <div className="service-card-two__image">
            <img
              src="assets/images/services/service-2-4.jpg"
              alt="Carpets & rugs"
            />
          </div>
          {/* /.service-card-two__image */}
          <div className="service-card-two__content">
            <h3 className="service-card-two__title">
              <NavLink to="service-d-carpets-rugs.html">Appartment Design</NavLink>
            </h3>
            {/* /.service-card-two__title */}
            <div className="service-card-two__bottom">
              <NavLink
                to="service-d-carpets-rugs.html"
                className="service-card-two__link floens-btn"
              >
                
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
      {/* /.col-xl-4 col-md-6 */}
      <div className="col-xl-4 col-md-6">
        <div className="service-card-two">
          <div
            className="service-card-two__bg"
            style={{
              backgroundImage:
                'url("assets/images/services/service-bg-2-1.png")'
            }}
          />
          {/* /.service-card-two__bg */}
          <div className="service-card-two__image">
            <img
              src="assets/images/services/service-2-5.jpg"
              alt="Oak Flooring"
            />
          </div>
          {/* /.service-card-two__image */}
          <div className="service-card-two__content">
            <h3 className="service-card-two__title">
              <NavLink to="service-d-oak-flooring.html">Commercial Design</NavLink>
            </h3>
            {/* /.service-card-two__title */}
            <div className="service-card-two__bottom">
              <NavLink
                to="service-d-oak-flooring.html"
                className="service-card-two__link floens-btn"
              >
                
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
      {/* /.col-xl-4 col-md-6 */}
      <div className="col-xl-4 col-md-6">
        <div className="service-card-two">
          <div
            className="service-card-two__bg"
            style={{
              backgroundImage:
                'url("assets/images/services/service-bg-2-1.png")'
            }}
          />
          {/* /.service-card-two__bg */}
          <div className="service-card-two__image">
            <img
              src="assets/images/services/service-2-6.jpg"
              alt="Vein Patterns"
            />
          </div>
          {/* /.service-card-two__image */}
          <div className="service-card-two__content">
            <h3 className="service-card-two__title">
              <NavLink to="service-d-vein-patterns.html">Design Supervision</NavLink>
            </h3>
            {/* /.service-card-two__title */}
            <div className="service-card-two__bottom">
              <NavLink
                to="service-d-vein-patterns.html"
                className="service-card-two__link floens-btn"
              >
                
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
      {/* /.col-xl-4 col-md-6 */}
    </div>
    {/* /.row */}
  </div>
  {/* /.container */}
</section>

<Footer />
      
    </div>
  )
}

export default Services
