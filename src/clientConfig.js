const isProduction = process.env.NODE_ENV === 'production';
const isStaging = process.env.NODE_ENV === 'staging';
const localIP = window.location.host;

const getSocketURI = () => {
  // If environment variable is set, use it (highest priority)
  if (process.env.REACT_APP_WS_URL) {
    return process.env.REACT_APP_WS_URL;
  }
  
  // Use the nginx proxy for all cases (recommended)
  return `ws://${localIP}/api`;
};

const config = {
  isProduction,
  socketURI: getSocketURI(),
};

export default config;
