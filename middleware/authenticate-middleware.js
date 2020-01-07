const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "secret phrase";

module.exports = (req, res, next) => {
	clg(5,"Auth Middleware")
	const { authorization } = req.headers;

	if (authorization) {
		jwt.verify(authorization, SECRET, function (err, decodedToken) {
			if (err) {
				res.status(401).json({ message: "Invalid Token" });
			} else {
				req.token = decodedToken;
				clg(14, decodedToken.admin);
				if (!decodedToken.admin) {
				// if (!decodedToken) {
					res.status(418).json({ message: "Not Allowed" });
				} else {
					next();
				}
			}
		});
	} else {
		res.status(401).json({ message: "Please login and try again" });
	}
};

function clg(...x) { console.log(...x) }
