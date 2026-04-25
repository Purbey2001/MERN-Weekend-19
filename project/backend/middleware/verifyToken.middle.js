//verfication middleware for header
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || !token.startsWith("Bearer"))
    return res.status(401).json({ message: "unauthorized" });

  const tokenValue = token.split(" ")[1];
  try {
    const isVerified = jwt.verify(tokenValue, "secretkey");
    req.user = isVerified;
    next();
  } catch (err) {
    console.log(err);
  }
};

export default verifyToken;
