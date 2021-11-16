import chai,{ expect } from "chai";
import server from './server'
import http from 'chai-http'

chai.use(http);


describe('POST /username', () => {


    it("should be a failed request", () => {
        chai.request(server)
            .post("/username")
            .send({
                username: "Lack"
            })
            .end((err, res) => {
                if(err) throw err;
                expect(res.status).equal(300)
                expect(res.text.indexOf("username") > -1).equal(true)
            })
    })

    it("should return status of 200 ", () => {
        chai.request(server)
            .post("/username")
            .send({
                username: "Richard"
            })
            .end((err, res) => {
                if(err) throw err;
                expect(res.status).equal(200);
                expect(res.body.success).equal(true);

            })
    })
});

describe('POST /responsetest', () => {
    it("should be always a failed request", () => {
        chai.request(server)
            .post("/responsetest")
            .send({
            })
            .end((err, res) => {
                if(err) throw err;
                expect(res.status).equal(300, "res.status should be 300")
                expect(res.body.success).equal(false, "res.body.success should be false")
            })
    })
});


