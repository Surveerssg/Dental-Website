const config = {
  apiBaseUrl: import.meta.env.PROD 
    ? 'https://dental-website-l7s8.onrender.com' // Backend deployed on Render
    : 'http://localhost:5000'
};

export default config; 