import express from 'express';
import chai,{ expect } from "chai";
import server from './server'

import http from 'chai-http'

 


chai.use(http);


describe('POST /', () => {
    it("should return status of 200 ", () => {
        chai.request(server)
            .post("/")
            .send({
                test: 5
            })
            .end((err, res) => {
                if(err) throw err;
                console.log(res.text)
                expect(res.status).equal(200);
                expect(res.text).equal("Valid");
            })
    })

    it("should return status of 300 ", () => {
        chai.request(server)
            .post("/")
            .send({
                test: "h"
            })
            .end((err, res) => {
                if(err) throw err;
                expect(res.status).equal(300);
            })
    })
});
