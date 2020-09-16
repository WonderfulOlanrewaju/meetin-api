import {app} from '../src/app';
import chaiHttp from 'chai-http';
import chai from 'chai';
import { name } from "../package.json";
let should =chai.should();
chai.use(chaiHttp);


describe("GET /", ()=> {
    it("Fetches the home route if API is live", done => {
        chai.request(app).get('/')
        .end((err, response)=> {
            response.should.have.status(200);
            response.body.should.have.property('message');
            response.body.message.should.be.equal(
                `${name} api`
            );
            done()
        })
    })
})