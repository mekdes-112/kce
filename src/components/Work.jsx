import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';


const Work = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('filter-item');

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

   

    const handleFilterChange = (newFilter) => {
      setFilter(newFilter);
    };

    
  
    const galleryItems = [
      {
        id: 1,
        filter: 'filter-item vein-patterns',
        category: 'all',
        image: 'assets/images/gallery/img1.jpg',
        alt: 'gallery',
      },
      {
        id: 2,
        filter: 'filter-item concrete vein-patterns',
        category: 'concrete',
        image: 'assets/images/gallery/img2.jpg',
        alt: 'gallery',
      },
      {
          id: 3,
          filter: 'filter-item vein-patterns',
          category: 'concrete',
          image: 'assets/images/gallery/img3.jpg',
          alt: 'gallery',
        },
        {
          id: 4,
          filter: 'filter-item vein-patterns',
          category: 'concrete',
          image: 'assets/images/gallery/img4.jpg',
          alt: 'gallery',
        },
        {
          id: 5,
          filter: 'filter-item vein-patterns',
          category: 'concrete',
          image: 'assets/images/gallery/img5.jpg',
          alt: 'gallery',
        },
        {
          id: 6,
          filter: 'filter-item  concrete vein-patterns',
          category: 'concrete',
          image: 'assets/images/gallery/img6.jpg',
          alt: 'gallery',
        },
        {
          id: 7,
          filter: 'filter-item ',
          category: 'concrete',
          image: 'assets/images/gallery/img7.jpg',
          alt: 'gallery',
        },
        {
          id: 8,
          filter: 'filter-item vein-patterns',
          category: 'concrete',
          image: 'assets/images/gallery/img8.jpg',
          alt: 'gallery',
        },
        {
          id: 9,
          filter: 'filter-item ',
          category: 'concrete',
          image: 'assets/images/gallery/img9.jpg',
          alt: 'gallery',
        },
        {
          id: 10,
          filter: 'filter-item ',
          category: 'concrete',
          image: 'assets/images/gallery/img10.jpg',
          alt: 'gallery',
        },
        {
          id: 11,
          filter: 'filter-item vein-patterns',
          category: 'concrete',
          image: 'assets/images/gallery/img11.jpg',
          alt: 'gallery',
        },
        {
          id: 12,
          filter: 'filter-item ',
          category: 'concrete',
          image: 'assets/images/gallery/img12.jpg',
          alt: 'gallery',
        },
        {
          id: 13,
          filter: 'filter-item ',
          category: 'concrete',
          image: 'assets/images/gallery/img14.jpg',
          alt: 'gallery',
        },
        {
          id: 14,
          filter: 'filter-item ',
          category: 'concrete',
          image: 'assets/images/gallery/img15.jpg',
          alt: 'gallery',
        },
        {
          id: 15,
          filter: 'filter-item ',
          category: 'concrete',
          image: 'assets/images/gallery/img16.jpg',
          alt: 'gallery',
        },
        {
          id: 16,
          filter: 'filter-item vein-patterns',
          category: 'concrete',
          image: 'assets/images/gallery/img17.jpg',
          alt: 'gallery',
        },
        {
          id: 17,
          filter: 'filter-item ',
          category: 'concrete',
          image: 'assets/images/gallery/img18.jpg',
          alt: 'gallery',
        },
        {
          id: 18,
          filter: 'filter-item concrete',
          category: 'concrete',
          image: 'assets/images/gallery/img19.jpg',
          alt: 'gallery',
        },
        {
          id: 29,
          filter: 'filter-item concrete',
          category: 'concrete',
          image: 'assets/images/gallery/img20.jpg',
          alt: 'gallery',
        },
        {
          id: 20,
          filter: 'filter-item concrete',
          category: 'concrete',
          image: 'assets/images/gallery/img21.jpg',
          alt: 'gallery',
        },
        {
          id: 21,
          filter: 'filter-item concrete',
          category: 'concrete',
          image: 'assets/images/gallery/img22.jpg',
          alt: 'gallery',
        },
        {
          id: 22,
          filter: 'filter-item concrete',
          category: 'concrete',
          image: 'assets/images/gallery/img23.jpg',
          alt: 'gallery',
        },
        {
          id: 23,
          filter: 'filter-item n',
          category: 'concrete',
          image: 'assets/images/gallery/img24.jpg',
          alt: 'gallery',
        },
        {
          id: 24,
          filter: 'filter-item concrete ',
          category: 'concrete',
          image: 'assets/images/gallery/img25.jpg',
          alt: 'gallery',
        },
        {
          id: 25,
          filter: 'filter-item ',
          category: 'concrete',
          image: 'assets/images/gallery/img26.jpg',
          alt: 'gallery',
        },
        {
          id: 27,
          filter: 'filter-item concrete',
          category: 'concrete',
          image: 'assets/images/gallery/img27.jpg',
          alt: 'gallery',
        },
        {
          id: 26,
          filter: 'filter-item concrete',
          category: 'concrete',
          image: 'assets/images/gallery/img28.jpg',
          alt: 'gallery',
        },
        {
          id: 27,
          filter: 'filter-item concrete',
          category: 'concrete',
          image: 'assets/images/gallery/img29.jpg',
          alt: 'gallery',
        },
        {
          id: 28,
          filter: 'filter-item ',
          category: 'concrete',
          image: 'assets/images/gallery/img30.jpg',
          alt: 'gallery',
        },
  
      // Add more gallery items here
    ];
  
    const filteredItems = filter === 'filter-item' ? galleryItems : galleryItems.filter(item => item.filter.includes(filter));
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
    <h2 className="page-header__title">recent work</h2>
    <ul className="floens-breadcrumb list-unstyled">
      <li>
        <i className="icon-home" /> <a href="/">Home</a>
      </li>
      <li>
        <span>recent work</span>
      </li>
    </ul>
    {/* /.thm-breadcrumb list-unstyled */}
  </div>
  {/* /.container */}
</section>

         <section className="gallery-one section-space">
      <div className="container-fluid">
        <div className="text-center" style={{ fontSize: '50px' }}>
          <ul className="list-unstyled post-filter gallery-one__filter__list">
            <li
              className={filter === 'filter-item' ? 'active' : ''}
              onClick={() => handleFilterChange('filter-item')}
            >
              <span>all</span>
            </li>
            <li
              className={filter === 'vein-patterns' ? 'active' : ''}
              onClick={() => handleFilterChange('vein-patterns')}
            >
              <span>Wood & Metal work</span>
            </li>
            <li
              className={filter === 'concrete' ? 'active' : ''}
              onClick={() => handleFilterChange('concrete')}
            >
              <span>Interior Design</span>
            </li>
            <li
              className={filter === 'flooring' ? 'active' : ''}
              onClick={() => handleFilterChange('flooring')}
            >
              <span>Residence design</span>
            </li>
            <li
              className={filter === 'vinyl-plank' ? 'active' : ''}
              onClick={() => handleFilterChange('vinyl-plank')}
            >
              <span>Appartment Design</span>
            </li>
            <li
              className={filter === 'carpets' ? 'active' : ''}
              onClick={() => handleFilterChange('carpets')}
            >
              <span>Commercial Design</span>
            </li>
          </ul>
        </div>
        <div className="row masonry-layout filter-layout">
          {filteredItems.map((item) => (
            <div key={item.id} className={`col-xl-4 col-lg-4 col-sm-6 ${item.filter}`}>
              <div className="gallery-one__card">
                <img src={item.image} alt={item.alt} onClick={() => openImage(item.image)} />
                <div className="gallery-one__card__hover">
                  <span className="gallery-one__card__icon" onClick={() => openImage(item.image)}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="image-popup">
          <div className="image-popup__content">
            <button className="image-popup__close" onClick={closeImage}>
              X
            </button>
            <img src={selectedImage} alt="Popup" />
          </div>
        </div>
      )}
    </section>
  <Footer />
    </div>
  );
}

export default Work;
