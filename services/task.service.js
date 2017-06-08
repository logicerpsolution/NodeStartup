var TaskList = require('../models/task.model');
var ObjectId = require('mongodb').ObjectId;
module.exports = {

  AddNewTask: function (task) {
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

  },

  GetAllTaskList: function () {

    return new Promise((resolve, reject) => {
      TaskList.find({
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

      })
    })

  },

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
  }
}