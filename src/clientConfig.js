const isProduction = process.env.NODE_ENV === 'production';
const isStaging = process.env.NODE_ENV === 'staging';
const localIP = window.location.hostname;

const getSocketURI = () => {
  if (process.env.REACT_APP_WS_URL) {
    return process.env.REACT_APP_WS_URL;
  }
  
  // Fallback for Docker environment
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return 'ws://poker-backend:8000/api';
  }
  
  // Local development fallback
  return `ws://${localIP}:8000/api`;
};

const config = {
  isProduction,
  socketURI: getSocketURI(),
};

export default config;
