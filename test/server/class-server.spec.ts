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


describe("MIN HEADERS", () => {

    describe('Good REquest', () => {
        it('should be a good request', (done) => {
            chai.request(server)
                .get("/minheaders")
                .auth("1234567890`124123", {type: "bearer"})
                .end((err, res) => {
                    expect(res.status).equal(200);
                    expect(res.text).equal("VALID");
                    done();
                })
        });
    });

    describe('Bad REquest', () => {
        it('should be a bad request', (done) => {
            chai.request(server)
                .get("/minheaders")
                // .auth("3", {type: "bearer"})
                .end((err, res) => {
                    expect(res.status).equal(400);
                    // expect(res.text).equal("VALID");
                    done();
                })
        });
    });


});



