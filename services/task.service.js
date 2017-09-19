//var TaskList = require('../models/task.model');
//var ObjectId = require('mongodb').ObjectId;
module.exports = {

 /* AddNewTask: function (task) {
    var _taskList = new TaskList({title: task.title, description: task.description});
    return new Promise((resolve, reject) => {
     _taskList.save(function (err,res) {
       if (err) {
         console.log(err);
          var err = new Error();
          err.status = 500;
          err.message = "Error Occured";
          reject(err);
        } else {
          resolve(res);
        }
    })
    })

  },*/

  GetAllTaskList: function () {

    return new Promise((resolve, reject) => {
      let result=[{AccountNo:"AAA-0029",Cash:{Available:39160334.42,Today:31435.87}},
    {AccountNo:"IRA-0146",Cash:{Available:15884302.39,Today:7430.83}},
  {AccountNo:"AAA-1812",Cash:{Available:2010926.10,Today:38881.63}},
{AccountNo:"REG-2019",Cash:{Available:13465679.34,Today:0.00}},
{AccountNo:"AAA-3810",Cash:{Available:10050054.07,Today:8916.69}},
{AccountNo:"IRA-5200",Cash:{Available:5763.36,Today:8916.69}}];
 resolve(result);
      /*TaskList.find({
        $query: {},
        $orderby: {
          created: -1
        }
      }, (err, res) => {
        if (err) {
          var err = new Error();
          err.status = 500;
          err.message = "Error Occured";
          reject(err);
        } else {
          resolve(res);
        }

      })*/
    })

  }
  /*,

  GetTask: function (_id) {
    return new Promise((resolve, reject) => {
      TaskList.findOne({
        "_id": ObjectId(_id)
      }, (err, res) => {
        if (err) {
          var err = new Error();
          err.status = 500;
          err.message = "Error Occured";
          reject(err);
        } else {
          resolve(res);
        }

      })
    })
  },
  FilterByStatus: function (status) {
    return new Promise((resolve, reject) => {
      TaskList.find({
        "status": status
      }, (err, res) => {
        if (err) {
          var err = new Error();
          err.status = 500;
          err.message = "Error Occured";
          reject(err);
        } else {
          resolve(res);
        }
      })
    })
  },
  Update: function (_id, body) {
    return new Promise((resolve, reject) => {
      TaskList.update({
        "_id": ObjectId(_id)
      }, {
        $set: body
      }, {
        upsert: true
      }, (err, res) => {
        if (err) {
           return reject(err);
        } else {
          return resolve(res);
        }
      })
    });

  },

  Delete: function (_id) {
    return new Promise((resolve, reject) => {
      TaskList.remove({
        "_id": ObjectId(_id)
      }, (err, res) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(res);
        }
      });
    })
  }*/
}