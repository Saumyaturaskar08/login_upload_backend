// backend/utils/getTokenFromHeader.js

export const getTokenFromHeader = (req) => {
    // get token from header
    const token = req?.headers?.authorization?.split(" ")[1];
    return token || 'No token found in the header';
  };
  