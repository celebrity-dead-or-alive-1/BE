const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const userDB = require('../data/user-model.js');

const SECRET = process.env.JWT_SECRET || "secret phrase";

router.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    userDB.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(err => {
            res.status(500).json({ err: err })
        })
})

router.post("/login", (req, res) => {
    let { username, password } = req.body;
    userDB.getBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = signToken(user);
                res.status(200).json({
                    token,
                    message: user.username
                })
            } else {
                res.status(401).json({ message: "Invalid credentials" })
            }
        })
        .catch(err => {
            res.status(500).json({ err: err })
        });
})



function signToken(user) {
    const payload = {};
    // +SECRET 
    const options = {
        expiresIn: "24h"
    }

    return jwt.sign(payload, SECRET, options)
}