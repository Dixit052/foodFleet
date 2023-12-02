import express from 'express';
import cors from 'cors' ;
import mongoConnect from './db.js'; 
import router from './Routes/createUser.js';

const app = express();
 app.use(cors());

app.use(express.json());
const port  = 8000 ;
mongoConnect();

app.use("/api", router );

app.listen(port, () =>
  console.log(`Example app listening on port ${port}`),
);