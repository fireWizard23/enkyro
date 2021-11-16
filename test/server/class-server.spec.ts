import chai,{ expect } from "chai";
import server from './class-server'
import http from 'chai-http'

chai.use(http);

describe("MinCharValidation",() => {
     describe("Bad Request", () => {
        it("should return a status of 400", (done) => {
            chai.request(server)
                .post("/minchar")
                .send({})
                .end((err, res) => {
                    if(err) {throw err}
                    expect(res.status).equal(400);
                    done();
                })
         });
    
         
         it("should return a message of 'bad request'", (done) => {
            chai.request(server)
                .post("/minchar")
                .send({
                    test: 12345
                })
                .end((err, res) => {
                    if(err) {throw err}
                    expect(res.status).equal(400);
                    expect(res.text.toLowerCase()).equal("bad request")
                    done();
                })
         });
     })

     describe("Good Request", () => {
        it("should return a status of 200", (done) => {
            chai.request(server)
                .post("/minchar")
                .send({
                    test: "12345"
                })
                .end((err, res) => {
                    if(err) {throw err}
                    expect(res.status).equal(200);
                    done();
                })
         });
     })


})

