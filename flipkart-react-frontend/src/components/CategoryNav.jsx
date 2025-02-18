// import React from "react";

// const categories = [
//   { name: "Kilos", image: "/images/kilos.png" },
//   { name: "Mobiles", image: "/images/mobiles.png" },
//   { name: "Fashion", image: "/images/fashion.png" },
//   { name: "Electronics", image: "/images/electronics.png" },
//   { name: "Home & Furniture", image: "/images/home_furniture.png" },
//   { name: "Appliances", image: "/images/appliances.png" },
//   { name: "Flight Bookings", image: "/images/flights.png" },
//   { name: "Beauty, Toys & More", image: "/images/beauty_toys.png" },
//   { name: "Two Wheelers", image: "/images/two_wheelers.png" },
// ];

// const CategoryBar = () => {
//   return (
//     <div className="category-bar">
//       {categories.map((category, index) => (
//         <div key={index} className="category-item">
//           <img src={category.image} alt={category.name} />
//           <span>{category.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryBar;

import React from 'react';

const CategoryNav = () => {
  const categories = [
    { id: 1, name: 'Kilos', icon: '🛒' },
    { id: 2, name: 'Mobiles', icon: '📱' },
    { id: 3, name: 'Fashion', icon: '👕' },
    { id: 4, name: 'Electronics', icon: '💻' },
    { id: 5, name: 'Home & Furniture', icon: '🏠' },
    { id: 6, name: 'Appliances', icon: '🔌' },
    { id: 7, name: 'Flight Bookings', icon: '✈️' },
    { id: 8, name: 'Beauty, Toys & More', icon: '🎁' },
    { id: 9, name: 'Two Wheelers', icon: '🏍️' },
  ];

  const navStyles = {
    container: {
      width: '100%',
      padding: '20px 0',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      flexWrap: 'wrap',
    },
    category: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '10px',
      transition: 'transform 0.2s',
    },
    categoryText: {
      marginTop: '8px',
      fontSize: '14px',
      fontWeight: '500',
    },
    icon: {
      fontSize: '24px',
    }
  };

  const AdBanner = () => {
    const bannerStyles = {
      container: {
        width: '100%',
        height: '300px',
        background: 'linear-gradient(90deg, #8E2DE2 0%, #FF4B2B 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 5%',
        color: 'white',
      },
      content: {
        flex: 1,
        padding: '20px',
      },
      heading: {
        fontSize: '32px',
        marginBottom: '10px',
      },
      subheading: {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '20px',
      },
      button: {
        padding: '12px 24px',
        backgroundColor: 'white',
        color: '#8E2DE2',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
      },
      image: {
        flex: 1,
        maxWidth: '500px',
        height: 'auto',
      }
    };

    return (
      <div style={bannerStyles.container}>
        <div style={bannerStyles.content}>
          <div style={bannerStyles.heading}>Big savings on domestic!</div>
          <div style={bannerStyles.subheading}>Flights From ₹1,299</div>
          <button style={bannerStyles.button}>Book Now</button>
          <div style={{ marginTop: '10px' }}>CODE: FLYFK</div>
        </div>
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NDvQ6bSmjJ0ckHYFLNXS5AAiDdL94U.png" 
          alt="Airplane"
          style={bannerStyles.image}
        />
      </div>
    );
  };

  return (
    <div>
      <div style={navStyles.container}>
        <nav style={navStyles.nav}>
          {categories.map((category) => (
            <div 
              key={category.id} 
              style={navStyles.category}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span style={navStyles.icon}>{category.icon}</span>
              <span style={navStyles.categoryText}>{category.name}</span>
            </div>
          ))}
        </nav>
      </div>
      <AdBanner />
    </div>
  );
};

export default CategoryNav;