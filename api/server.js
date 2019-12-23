const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../middleware/authenticate-middleware.js');
const authRouter = require('../routes/auth-router.js');

const userRouter = require('../routes/users-routes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);


server.get('/', (req, res) => {
	res.send("Running");
});

module.exports = server;
