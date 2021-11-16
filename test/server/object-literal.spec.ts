import chai,{ expect } from "chai";
import server from './object-literal-server'
import http from 'chai-http'

chai.use(http);

let usernameRoute = "/username"
describe(`POST ${usernameRoute}`, () => {


    it("should be a failed request", (done) => {
        chai.request(server)
            .post(usernameRoute)
            .send({
                username: "Lack"
            })
            .end((err, res) => {
                if(err) throw err;
                expect(res.status).equal(400)
                expect(res.text.indexOf("username") > -1).equal(true)
                done();
            })
    })

    it("should return status of 200 ", (done) => {
        chai.request(server)
            .post(usernameRoute)
            .send({
                username: "Richard"
            })
            .end((err, res) => {
                if(err) throw err;
                expect(res.status).equal(200);
                expect(res.body.success).equal(true);
                done();
            })
    })
});

const responseTestRoute = "/responsetest";
describe(`POST ${responseTestRoute}`, () => {
    it("should be always a failed request", (done) => {
        chai.request(server)
            .post(responseTestRoute)
            .send({
            })
            .end((err, res) => {
                if(err) throw err;
                expect(res.status).equal(400, "res.status should be 400")
                expect(res.body.success).equal(false, "res.body.success should be false")
                done();
            })
    })
});

const responseOptionRoute = '/response-option-test';
describe(`POST ${responseOptionRoute}`, () => {
    it("should be always a failed request", (done) => {
        chai.request(server)
            .post(responseOptionRoute)
            .send({
            })
            .end((err, res) => {
                if(err) throw err;
                expect(res.status).equal(400, "res.status should be 400")
                expect(res.text.toLowerCase()).equal("invalid");
                done();
            })
    })
});


const userRoute = "/response-user-test";
describe(`POST ${userRoute}`, () => {
    it("should be always a failed request", (done) => {
        chai.request(server)
            .post(userRoute)
            .send({
            })
            .end((err, res) => {
                if(err) throw err;
                expect(res.status).equal(400, "res.status should be 400")
                expect(res.text.toLowerCase()).equal("invalid username");
                done();
            })
    })
});


