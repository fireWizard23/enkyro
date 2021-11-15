import express from 'express';
import chai,{ expect } from "chai";
import server from './server'

import http from 'chai-http'

 


chai.use(http);


describe('GET /', () => {
    it("should POST /", () => {
        chai.request(server)
            .post("/")
            .send({
                t: "h"
            })
            .end((err, res) => {
                if(err) throw err;
                expect(res.status).equal(300);
                expect(res.text).equal("Invalid");
            })
    })
});
