const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const userDB = require('../data/user-model.js');

const SECRET = process.env.JWT_SECRET || "secret phrase";

authRouter.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    userDB.add(user)
        .then(saved => {
            res.status(201).json({ id: saved.id, username: saved.username });
        })
        .catch(err => {
            res.status(500).json({ msg: err })
        })
})

authRouter.post("/login", (req, res) => {
    clg(23, "Login")
    let { username, password } = req.body;
    userDB.getBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                // let admin;
                user.admin
                    ? user.admin = true
                    : user.admin = false

                const token = signToken(user);
                res.status(200).json({
                    token,
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    admin: user.admin
                });
            } else {
                res.status(401).json({ message: "Invalid credentials" })
            }
        })
        .catch(err => {
            res.status(500).json({ msg: err })
        });
})




function signToken(user) {
    clg(55, user.admin);
    const payload = { admin: user.admin };
    // +SECRET 
    const options = {
        expiresIn: "24h"
    }

    return jwt.sign(payload, SECRET, options)
}

module.exports = authRouter;

function clg(...x) { console.log(...x) }
