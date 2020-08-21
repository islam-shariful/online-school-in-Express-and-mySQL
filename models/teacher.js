const express = require("express");
const fs = require("fs");
const dateTime = require("date-time");

const db = require("./db");

module.exports = {
  //select
  getAll: function (user, callback) {
    const sql = "SELECT * FROM " + user;
    db.getResult(sql, function (results) {
      if (results.length > 0) {
        callback(results);
      } else {
        callback([]);
      }
    });
  },
  // select* ,user is an object with three properties
  get: function (user, callback) {
    console.log(user);
    const sql =
      "SELECT * FROM `" +
      user.userName +
      "` WHERE `" +
      user.idName +
      "` = " +
      "'" +
      user.id +
      "'";
    db.getResult(sql, function (results) {
      if (results.length > 0) {
        callback(results);
      } else {
        callback([]);
      }
    });
  },
  // Insert ,user is an object with six properties
  insertNotice: function (noticeInfo, callback) {
    var datetime = dateTime();
    const sql =
      "INSERT INTO `notice`(`notice_id`, `noticedate`, `class_id`, `subject_id`, `section_id`, `description`) VALUES ('" +
      noticeInfo.notice_id +
      "','" +
      datetime +
      "','" +
      noticeInfo.class_id +
      "','" +
      noticeInfo.subject_id +
      "','" +
      noticeInfo.section_id +
      "','" +
      noticeInfo.description +
      "')";
    db.getResult(sql, function (results) {
      if (results.length > 0) {
        callback(results);
      } else {
        callback([]);
      }
    });
  },
};
