const adminAuth = (req, res, next) => {
  try {
    console.log("Admin auth is getting checked!!");
    const token = "xyz";
    const isAuthenticated = token === "xyz";
    if (!isAuthenticated) {
      req.status(401).send("unauthenticated token");
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
  }
};

const userAuth = (req, res, next) => {
  try {
    console.log("User auth is getting checked!!");
    const token = "xyzabc";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
      res.status(401).send("Unauthorized request");
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  adminAuth,
  userAuth,
};
