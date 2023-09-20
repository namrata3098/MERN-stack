import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';


import postRoutes from './routes/post.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://namnp917:Namnin1998$@cluster0.0bvy4jz.mongodb.net/'
const PORT = process.env.PORT || 5000;

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen( PORT , () =>  console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message()));
