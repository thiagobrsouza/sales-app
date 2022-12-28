import 'express-async-errors'
import express from 'express'
import morgan from 'morgan';

const app = express();
app.use(express.json());

app.use(morgan("common"));

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});