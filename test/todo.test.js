process.env.NODE_ENV = 'test';
var  mongoose = require("mongoose");
var TaskList = require('../models/task.model');
var  chai  =require('chai');
var chaiHttp =require('chai-http');
var app =require("../app.js")
let should = chai.should();
chai.use(chaiHttp);

describe('Todo', () => {
    beforeEach((done) => { //Before each test we empty the database
        TaskList.remove({}, (err) => { 
           done();         
        });     
    });
});


  describe("task list test",()=>{
     it("Todo with empty parameter and return 400 (Bad Request) error",(done)=>{
         chai.request(app).post("/api/v1/task").end((err, res) => {
              res.should.have.status(400);
            done();
        });
     })

     it("Todo with insert new task and return 200",(done)=>{
         chai.request(app)
        .post("/api/v1/task")
         .send({title:"Done",description:"Done Description"})
          .end((err, res) => {
             res.should.have.status(200);
             res.should.be.json;
             chai.expect(err).to.be.null;
            done();
        });
     });

     it("Edit existing task with invalid id and return 400",(done)=>{
         let task = { title: "Done",description: "Done Description TEST"};
         chai.request(app).put("/api/v1/task/123/update")
          .send({title:"Done",description:"Done Description"})
             .end((err, res) => {
             res.should.have.status(400)
             done();
        });
     });

      it("Edit existing task and return 200",(done)=>{
         chai.request(app).put("/api/v1/task/590097d73a7c5500d0cd7b6f/update")
         .send({title:"Done123",description:"Done Description"})
             .end((err, res) => {
             res.should.have.status(200);
              res.should.be.json;
            res.body.should.have.property("ok",1);
              chai.expect(err).to.be.null;
             done();
        });
     });


   


     it('GET all the task list', (done) => {
           chai.request(app).get('/api/v1/task').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
               res.should.be.json;
              chai.expect(err).to.be.null;
              done();
            });
      });

      it('filter by status and parameter should be status', (done) => {
      chai.request(app).get('/api/v1/task/filter')
      .query({"status":"COMPLETED"})
      .end((err, res) => {
          res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
             
            chai.expect(err).to.be.null;
              done();
        });
     });
  })


    

