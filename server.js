const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/TodoRoute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to MongoDB`))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(routes);
app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
