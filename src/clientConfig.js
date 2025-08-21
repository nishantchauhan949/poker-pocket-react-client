const isProduction = process.env.NODE_ENV === 'production';
const isStaging = process.env.NODE_ENV === 'staging';
const localIP = window.location.hostname;

const config = {
  isProduction,
  socketURI: process.env.BACKEND_SOCKET_URL || `ws://${localIP}:8000/api`,
};

export default config;
