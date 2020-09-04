import {app} from './app';

const port : number | string = process.env.PORT ||  9091 ;

app.listen(port, ()=> console.log(`Meeting Running on port ${port}`));