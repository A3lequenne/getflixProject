const express = require('express');
const mongoose = require('mongoose');
//const userRoutes = require('./routes/userRoutes');
require("dotenv").config({ path: "./.env"});

const app = express();

//app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to Mongoose'))
    .catch((err) => console.log(err));

//app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${process.env.PORT}`);
});
