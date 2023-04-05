require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const baseRoutes = require('./routes/base.routes');

const app = express();
const port = process.env.PORT || 4000;

// configuraciones para recibir peticiones http en formato json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middlewares
app.use(morgan('dev'));
app.use(cors());

app.use('/', baseRoutes);

app.listen(port, () => console.log(`Server listening on port ${port}`));
