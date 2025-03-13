const express = require('express');
const app = express();

app.use(express.json());

app.get(express.urlencoded({ extended: true }));