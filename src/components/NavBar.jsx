import React from "react";
import { Drawer } from "@mui/material";
import { NavLink} from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="topbar-one">
          <div className="container-fluid">
            <div className="topbar-one__inner">
              <ul className="list-unstyled topbar-one__info">
                <li className="topbar-one__info__item">
                  <span className="icon-paper-plane" />
                  <a href="mailto:info@kegeberewcrafts.com">
                    info@kegeberewcrafts.com
                  </a>
                </li>
                <li className="topbar-one__info__item">
                  <span className="icon-phone-call" />
                  <a href="tel:++251 931456641">+251 931456641</a>
                </li>
                <li className="topbar-one__info__item">
                  <span className="icon-location" />
                  <address>
                    Addis Ababa, Ethiopia, Sengatera Negadewoch Hibret BLDG
                  </address>
                </li>
              </ul>
              {/* /.list-unstyled topbar-one__info */}
              <div className="topbar-one__right">
                <div className="topbar-one__social">
                  <a href="https://facebook.com/">
                    <i className="icon-facebook" aria-hidden="true" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="https://twitter.com/">
                    <i className="icon-twitter" aria-hidden="true" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://instagram.com/">
                    <i className="icon-instagram" aria-hidden="true" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="https://youtube.com/">
                    <i className="icon-youtube" aria-hidden="true" />
                    <span className="sr-only">Youtube</span>
                  </a>
                </div>
                {/* /.topbar-one__social */}
              </div>
              {/* /.topbar-one__right */}
            </div>
            {/* /.topbar-one__inner */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.topbar-one */}
        <Drawer open={open} onClose={toggleDrawer(false)} anchor={"right"}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light d-md-none">
            <div className="container-fluid">
              <NavLink
                className="navbar-brand"
                to="/"
                style={{ width: 150 }}
              ></NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=""
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setOpen(false)}
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className=" navbar-collapse" id="">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                    About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/services">
                    Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/work">
                    Our Works
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <div className="tg-button-wrap">
                    <a className="btn tg-svg" href="/instructor">
                      <span className="text">Find a Tutors</span>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </Drawer>

        <header className="main-header main-header--two sticky-header sticky-header--normal">
          <div className="container-fluid">
            <div className="main-header__inner">
              <div className="main-header__left">
                <div className="main-header__logo">
                  <a href="/" style={{}}>
                    <img
                      src="assets/images/logo1111.png"
                      alt="Floens HTML"
                      width={60}
                      height={80}
                    />
                  </a>
                </div>
                {/* /.main-header__logo */}
                <nav className="main-header__nav main-menu">
                  <ul className="main-menu__list">
                    <li className="dropdown megamenu">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li className="dropdown">
                      <a href="/services">Services</a>
                      {/* <ul>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="services-grid.html">Services Grid</a>
                    </li>
                    <li>
                      <a href="services-carousel.html">Services Carousel 01</a>
                    </li>
                    <li>
                      <a href="services-carousel-2.html">
                        Services Carousel 02
                      </a>
                    </li>
                    <li>
                      <a href="service-d-industrial-flooring.html">
                        industrial flooring
                      </a>
                    </li>
                    <li>
                      <a href="service-d-tiling-concrete.html">
                        Tiling &amp; concrete
                      </a>
                    </li>
                    <li>
                      <a href="service-d-carpets-rugs.html">
                        Carpets &amp; rugs
                      </a>
                    </li>
                    <li>
                      <a href="service-d-oak-flooring.html">Oak Flooring</a>
                    </li>
                    <li>
                      {" "}
                      <a href="service-d-vinyl-plank.html">Vinyl Plank</a>
                    </li>
                    <li>
                      <a href="service-d-vein-patterns.html">Vein Patterns</a>
                    </li>
                  </ul> */}
                    </li>

                    <li className="dropdown">
                      <a href="/work">Our Works</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </nav>
                {/* /.main-header__nav */}
              </div>
              {/* /.main-header__left */}
              <div className="main-header__right">
                <div className="mobile-nav__btn mobile-nav__toggler" onClick={()=>setOpen(true)}>
                  <span />
                  <span />
                  <span />
                </div>
                {/* /.mobile-nav__toggler */}
                {/* <a href="cart.html" className="main-header__cart">
              <i className="icon-cart" aria-hidden="true" />
              <span className="sr-only">Cart</span>
            </a> */}
                {/* /.shopping card */}
                {/* <a href="#" className="search-toggler main-header__search">
              <i className="icon-search" aria-hidden="true" />
              <span className="sr-only">Search</span>
            </a> */}
                {/* /.search-toggler */}

                {/* /.thm-btn main-header__btn */}

                {/* /.main-header__sidebar-btn */}
              </div>
              {/* /.main-header__right */}
            </div>
            {/* /.main-header__inner */}
          </div>
          {/* /.container-fluid */}
        </header>
        {/* /.main-header */}
      </div>
    </>
  );
};

export default NavBar;
