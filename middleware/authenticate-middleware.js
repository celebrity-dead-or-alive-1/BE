const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "cmon carl don't be a goof.";

function clg(...x) { console.log(...x) }

module.exports = (req, res, next) => {
	const { authorization } = req.headers;
	// clg(authorization)

	if (authorization) {
		jwt.verify(authorization, SECRET, function (err, decodedToken) {
			if (err) {
				res.status(401).json({ message: "Invalid Token" });
			} else {
				req.token = decodedToken;
				next();
			}
		});
	} else {
		res.status(400).json({ message: "Please login and try again" });
	}
};

