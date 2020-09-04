import {app} from './app';

const port : number | string =  9090 ;

app.listen(port, ()=> console.log(`Meeting Running on port ${port}`));