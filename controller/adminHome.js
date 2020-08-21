var express 		= require('express');
//var userModel 	= require.main.require('./models/user');
var studentModel    = require.main.require('./models/studentModel');
var teacherModel    = require.main.require('./models/teacherModel');
var subjectModel    = require.main.require('./models/subjectModel');
var loginModel    	= require.main.require('./models/loginModel2');
var deleteModel    	= require.main.require('./models/deleteModel');
var noticeModel    	= require.main.require('./models/noticeModel');

var router 		    = express.Router();
const multer 		= require('multer');
const ejs 			= require('ejs');
const path			= require('path');

var storage = multer.diskStorage({
  destination: './assets/images/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

function checkFileType(file, cb){
 
  var filetypes = /jpeg|jpg|png|gif/;
  
  var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  
  var mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

var upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');


router.get('*', function(req, res, next){
	if(req.session.username == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){
	res.render('adminHome');
});
/*router.get('/login.html', function(req, res){
	res.redirect('/login');
});*/

router.get('/all-student', function(req, res){
	studentModel.getAll(function(results){
		res.render('all-student', { studentList : results, uname: req.session.username});
	});

}); 

router.get('/admit-form', function(req, res){

	
		studentModel.getStudentId(null, function(results){
			var id = results.sid; //20-0001-01
			var split = id.split("-");
			var id1 = split[0];
			var id2 = parseInt(split[1]);
			//console.log(id2);
			id2++;			
			const newNumber = id2.toString().padStart(split[1].length, "0");
			var id3 = split[2];
			var new_id = [id1, newNumber, id3].join("-");

			var passs = function () {
         	return  Math.random().toString(36).substr(2, 3)+'-' +Math.random().toString(36).substr(2, 3);
		};

				var auto_pass = passs();

			res.render('admit-form', {
			userid: new_id,
			pass: auto_pass

		})
	});
	  

}); 


router.post('/admit-form', function(req, res){
     var imgPath;

     upload(req, res, (err) => {
    if(err){
      
    } else {
      if(req.file == undefined){
        
      } else {
        
          imgPath= req.file.filename;
       console.log(imgPath);
      }
    }
  });

      var student ={
      	
		sName 		: req.body.sName,
		sid 		: req.body.sid,
		fName 		: req.body.fName,
		mName 		: req.body.mName,
		gender 		: req.body.gender,
		dob 		: req.body.dob,
	  admissionDate : req.body.admissionDate,
	  bGroup 		: req.body.bGroup,
	  religion  	: req.body.religion,
	          eMail : req.body.eMail,
	 admissionClass : req.body.admissionClass,
	     section 	: req.body.section,
	     gPN 		: req.body.gPN, 
	     address 	: req.body.address,
	     pic    	: req.body.myImage,
		password	: req.body.password,
		type		: "04"
	}
	studentModel.insert(student, function(status){
		if(status){
			loginModel.insert(student, function(status){
		if(status){
			
		}else{
			console.log('Insertion Failed try again');
			
		}
	});
			studentModel.getAll(function(results){
		res.render('all-student', { studentList : results, uname: req.session.username});
	});
		}else{
			console.log('Insertion Failed try again');
			res.redirect('/admit-form');
		}
	});

	

	
}); 

router.get('/student-details', function(req, res){

	/*userModel.getAll(function(results){
		res.render('student-details', { });*/

	res.render('student-details');
}); 

router.get('/all-teacher', function(req, res){
	teacherModel.getAll(function(results){
		res.render('all-teacher', { teacherList : results, uname: req.session.username});
	});
}); 

router.get('/teacher-details', function(req, res){
	res.render('teacher-details');
});

router.get('/add-teacher', function(req, res){


		teacherModel.getTeacherId(null, function(results){
			var id = results.tid; //20-0001-01
			var split = id.split("-");
			var id1 = split[0];
			var id2 = parseInt(split[1]);
			//console.log(id2);
			id2++;			
			const newNumber = id2.toString().padStart(split[1].length, "0");
			var id3 = split[2];
			var new_id = [id1, newNumber, id3].join("-");

			var passs2 = function () {
         	return  Math.random().toString(36).substr(2, 3)+'-' +Math.random().toString(36).substr(2, 3);
		};

				var auto_passs = passs2();

			res.render('add-teacher', {
			userid: new_id,
			pass: auto_passs

		})
	});

	//res.render();
});


router.post('/add-teacher', function(req, res){
     


      var teacher ={
      	
		tName 		: req.body.tName,
		tid 		: req.body.tid,
		gender 		: req.body.gender,
		dob 		: req.body.dob,
	  department    : req.body.department,
	  email         : req.body.email,
	     phone 		: req.body.phone, 
	     address 	: req.body.address,
	    password	: req.body.password,
		type		: "03"
	}
	
	teacherModel.insert(teacher, function(status){
		if(status){
			teacherModel.getAll(function(results){
		res.render('all-teacher', { teacherList : results, uname: req.session.username});
	});
		}else{
			res.redirect('/login');
		}
	});
});

	

	





router.get('/add-class', function(req, res){
	res.render('add-class');
});


router.get('/notice-board', function(req, res){
	noticeModel.getAll(function(results){
	res.render('notice-board', { noticeList : results, uname: req.session.username});

	//console.log(req.session.username);
		});
});


router.post('/notice-board', function(req, res){

var notice ={
      	
		nTitle 		: req.body.nTitle,
		nDetails	: req.body.nDetails,
		pBy 		: req.session.username,
		date		: req.body.date
	  
	}
	
	noticeModel.insert(notice, function(status){
		if(status){
			noticeModel.getAll(function(results){
		res.render('notice-board', { noticeList : results, uname: req.session.username});
	});
		}else{
			res.redirect('/login');
		}
	});


	//res.render('notice-board');
});


router.get('/all-class', function(req, res){
	res.render('all-class');
}); 

router.get('/all-subject', function(req, res){

subjectModel.getAll(function(results){
		res.render('all-subject', { subjectList : results, uname: req.session.username});
	});




}); 

router.post('/all-subject', function(req, res){

     var subject ={
      	
		sName 		: req.body.subjectName,
		sCode		: req.body.subjectCode,
		sType 		: req.body.subjectType,
		sClass		: req.body.subjectClass
	  
	}
	
	subjectModel.insert(subject, function(status){
		if(status){
			subjectModel.getAll(function(results){
		res.render('all-subject', { subjectList : results, uname: req.session.username});
	});
		}else{
			res.redirect('/login');
		}
	});


	
}); 

router.get('/class-routine', function(req, res){
	res.render('class-routine');
}); 

router.get('/delete/:id', function(req, res){
	
	studentModel.get(req.params.id, function(result){
		res.render('delete', {student: result});
	});
	
});

router.post('/delete/:id', function(req, res){

	deleteModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/adminHome/all-student');
		}else{
			//res.redirect('/home');
		}
	});
});



module.exports = router;