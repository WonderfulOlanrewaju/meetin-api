import {app} from './app';
import { name } from "../package.json";

const port : number | string = process.env.PORT ||  9092;

app.listen(port, ()=> console.log(`${name} Running on port ${port}`));