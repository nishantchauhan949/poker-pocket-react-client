const isProduction = process.env.NODE_ENV === 'production';
const isStaging = process.env.NODE_ENV === 'staging';
const localIP = window.location.hostname;

const config = {
  isProduction,
  socketURI: process.env.REACT_APP_WS_URL,
};

export default config;
