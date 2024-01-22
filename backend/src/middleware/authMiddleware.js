// Create a middleware file, e.g., src/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  try {
    // Verify the token with the JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded payload to the request for further use
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = authMiddleware;
