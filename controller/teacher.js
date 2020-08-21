const express = require("express");
const fs = require("fs");
//const fileUpload = require("express-fileupload");

const pdf = require("html-pdf");
const session = require("express-session");

const db = require("../models/db");
const teacher = require("../models/teacher");

const router = express.Router();

//file-upload get
router.get("/note-upload", function (req, res) {
  res.render("teacher/note-upload");
});
//file-upload post
// router.post("/note-upload", function (req, res) {
//   var notes = req.body;
//   console.log(notes);
//   res.redirect("note-upload");
// });
// router.post("/note-upload"/*, upload.single("notes"), */function (req, res, next) {
//   // req.file is the `avatar` file
//   var notes = req.file.notes;
//   console.log(notes);
//   res.redirect("note-upload");
// });

//...............................................................................
//
//
//
//
//
//................................................................................

// '/' (/teacher => "index5")
router.get("/", function (req, res) {
  if (req.session.userid != null) {
    res.redirect("teacher/index5" /*, teacherInfo */);
  } else {
    res.redirect("/login");
  }
});
// '/index5' (/teacher/index5 => "index5")
// router.get("/index5", function (req, res) {
//   if (req.session.username != null) {
//     res.render("index5");
//   } else {
//     res.redirect("/login");
//   }
// });
router.get("/index5", function (req, res) {
  if (req.session.userid != null) {
    teacher.getAll("notice", function (results) {
      res.render("teacher/index5", { noticeList: results });
    });
  } else {
    res.redirect("/login");
  }
});
// '/dashboard' (/teacher/dashboard => "index5")
router.get("/dashboard", function (req, res) {
  if (req.session.userid != null) {
    res.redirect("teacher/index5");
  } else {
    res.redirect("/login");
  }
});

// class-routine 'GET'
router.get("/class-routine", function (req, res) {
  teacher.getAll("routine", function (results) {
    res.render("teacher/class-routine", { routineList: results });
    console.log(results);
  });
});
// class-routine 'POST'
router.post("/class-routine", function (req, res) {
  var routineInfo = {
    userName: "routine",
    idName: "teacher_id",
    id: req.body.teacher_id,
  };
  teacher.get(routineInfo, function (results) {
    res.render("teacher/class-routine", { routineList: results });
  });
});

//student-attendence 'GET'
router.get("/student-attendence", function (req, res) {
  res.render("teacher/student-attendence");
});

//exam-grade 'GET'
router.get("/exam-grade", function (req, res) {
  const sql = "SELECT * FROM result";
  db.getResult(sql, function (results) {
    res.render("teacher/exam-grade", { resultList: results });
    console.log(results);
  });
});
//exam-grade 'POST'
router.post("/exam-grade", function (req, res) {
  var result_id = req.body.result_id;
  var class_id = req.body.class_id;
  var section_id = req.body.section_id;
  var subject_id = req.body.subject_id;
  var student_id = req.body.student_id;
  var attendance = req.body.attendance;
  var midmarks = req.body.midmarks;
  var finalmarks = req.body.finalmarks;
  var total = req.body.totalmarks;

  //const sql = `INSERT INTO 'result' VALUES ('${class_id}','${section_id}','${subject_id}','${student_id}','${attendance}','${midmarks}','${finalmarks}','${totalmarks}')`;
  const sql =
    "INSERT INTO `result`(`result_id`,`class_id`, `section_id`, `attendance`, `midmarks`, `finalmarks`, `total`, `subject_id`, `student_id`) VALUES (" +
    result_id +
    "," +
    class_id +
    "," +
    section_id +
    "," +
    attendance +
    "," +
    midmarks +
    "," +
    finalmarks +
    "," +
    total +
    "," +
    subject_id +
    "," +
    student_id +
    ")";
  db.getResult(sql, function (results) {
    res.redirect("exam-grade");
    console.log(req.body.attendance);
  });
});

//grade-sheet 'GET'
router.get("/grade-sheet", function (req, res) {
  const sql = "SELECT * FROM grade";
  db.getResult(sql, function (results) {
    res.render("teacher/grade-sheet", { gradeList: results });
  });
});
//grade-sheet 'POST'
router.post("/grade-sheet", function (req, res) {
  const sql = "SELECT * FROM grade WHERE student_id = " + req.body.student_id;
  db.getResult(sql, function (results) {
    res.render("teacher/grade-sheet", { gradeList: results });
  });
});
//grade-sheetPDF 'POST'
router.post("/grade-sheetPDF", function (req, res) {
  const sql = "SELECT * FROM grade";
  db.getResult(sql, function (results) {
    var html = fs.readFileSync("./views/teacher/grade-sheetPDF.ejs", "utf8");
    const options = { format: "A4" };

    res.render("teacher/grade-sheetPDF", { gradeList: results }, function (
      err,
      html
    ) {
      pdf
        .create(html, options)
        .toFile("./assets/uploads/grade-sheet.pdf", function (err, res) {
          if (err) return console.log(err);
          else {
            console.log(res); // { filename: '/app/businesscard.pdf' }
          }
        });
    });
  });
});

//notice-board 'GET'
router.get("/notice-board", function (req, res) {
  teacher.getAll("notice", function (results) {
    res.render("teacher/notice-board", { noticeList: results });
  });
});
//notice-board 'POST'..........................
router.post("/notice-board", function (req, res) {
  var noticeInfo = {
    notice_id: req.body.notice_id,
    noticedate: req.body.noticedate,
    class_id: req.body.class_id,
    subject_id: req.body.subject_id,
    section_id: req.body.section_id,
    description: req.body.description,
  };
  teacher.insertNotice(noticeInfo, function (results) {
    res.redirect("notice-board");
  });
  //res.render("teacher/notice-board");
});

//messaging 'GET'
router.get("/messaging", function (req, res) {
  res.render("teacher/messaging");
});

//map 'GET'
router.get("/map", function (req, res) {
  res.render("teacher/map");
});

// Teacher-profile 'GET'
router.get("/teacher-profile", function (req, res) {
  console.log("teacher-profile get");
  //console.log(req.session.userid);
  var userInfo = {
    userName: "teacher",
    idName: "teacher_id",
    id: req.session.userid,
  };
  //console.log(userInfo);
  teacher.get(userInfo, function (results) {
    res.render("teacher/teacher-profile", results[0]);
    console.log(results);
  });
});
// Teacher-profile 'POST'
router.post("/teacher-profile", function (req, res) {
  var mysql = require("mysql");

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sms",
  });

  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  const sql = "SELECT * FROM teacher WHERE teacher_id = " + req.session.userid;
  connection.query(sql, function (error, result) {
    var html = fs.readFileSync(
      "./views/teacher/teacher-profilePDF.ejs",
      "utf8"
    );
    const options = { format: "A4" };
    res.render("teacher/teacher-profilePDF", result[0], function (err, html) {
      pdf
        .create(html, options)
        .toFile("./assets/teacher/uploads/profile.pdf", function (err, res) {
          if (err) return console.log(err);
          else {
            console.log(res); // { filename: '/app/businesscard.pdf' }
          }
        });
    });
  });
});
// teacher-profilePDF 'GET'
router.get("/teacher-profilePDF", function (req, res) {
  //res.render("teacher/index5", teacherInfo);
  res.redirect("/teacher-profile");
});

//all student 'GET''
router.get("/all-student", function (req, res) {
  teacher.getAll("student", function (results) {
    res.render("teacher/all-student", { studentList: results });
  });
});
//all student 'POST'
router.post("/all-student", function (req, res) {
  var userInfo = {
    userName: "student",
    idName: "student_id",
    id: req.body.roll,
  };
  teacher.get(userInfo, function (results) {
    res.render("teacher/student-details", results[0]);
  });
});

//export
exports.routes = router;
