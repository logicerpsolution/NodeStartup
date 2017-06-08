var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
var bodyParser  = require("body-parser");
var taskservice = require('../services/task.service')

var extendBodyParse =bodyParser.urlencoded({ extended: true });
 
router.get("/", function (req, res, next) {
    taskservice
        .GetAllTaskList()
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => {
            res.status(500).json(err).end();
        });

});




router.post('/', function (req, res) {
    if (typeof req.body.title==="undefined" || typeof req.body.description==="undefined" || req.body.description==="" || req.body.title==="")
     return res.sendStatus(400);
    taskservice
        .AddNewTask({title: req.body.title, description: req.body.description})
        .then(t => {
            res
                .status(200)
                .json(t);
        })
        .catch(err => {

                    res
                .status(500)
                .json(err)
                .end();
        });
});

router.put("/:id/update",function (req, res, next) {

   
if (typeof req.body==="undefined"  || req.params.id==="" || !ObjectId.isValid(req.params.id) )
    return res.sendStatus(400);
    taskservice
        .Update(req.params.id, 
        {
            title:req.body.title,
            description:req.body.description
        })
        .then(t => {
            res
                .status(200)
                .json(t);
        })
        .catch(err => {
            res
                .status(500)
                .json(err)
                .end();
        });
   
});
router.put("/:id/status",function (req, res, next) {
  
if (typeof req.body.status==="undefined" ||  req.body.status==="" || req.params.id==="" ||  !ObjectId.isValid(req.params.id) )
    return res.sendStatus(400);
    taskservice
        .Update(req.params.id, {status: req.body.status})
        .then(t => {
            res.status(200).json(t);
        })
        .catch(err => {
         res
                .status(500)
                .json(err);
                
        });
  
});

router.delete("/:id", function (req, res) {
    if (typeof req.params.id==="undefined" ||  req.params.id==="" )
    return res.sendStatus(400);
    taskservice
        .Delete(req.params.id)
        .then(t => {
            res
                .status(200)
                .json(t);

        })
        .catch(erro => {
            res
                .status(500)
                .json(err)
                .end();
        })
});

router.get("/filter", function (req, res) {
    if (typeof req.query.status==="undefined" ||  req.query.status==="" )
    return res.sendStatus(400);
 
    taskservice
        .FilterByStatus(req.query.status)
        .then(t => {
            res
                .status(200)
                .json(t);

        })
        .catch(erro => {
            res
                .status(500)
                .json(err)
                .end();
        })

});

module.exports = router;
