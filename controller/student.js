//variable declare
var express = require('express');
var studentdash = require.main.require('./models/studentdash');
var router = express.Router();

var user = {};

router.get('/stdash', function(req, res){
	
	if(req.session.userid != null){

		var st_id = req.session.userid;
		studentdash.getSessionValues(st_id, function(result){
			req.session.name = result.studentname;
			req.session.image = result.studentimage;
		});

		studentdash.notice(req.session.userid,function(result){
		res.render('student/stdash', {
			name: req.session.name,
            image: req.session.image,
            event: result[0],
            notice: result[1] 
             });
		})
	}else{
			res.redirect('/studentlogin');
	}
});

/*router.get('/stdash', function(req, res){

	if(req.session.userid != null){
		studentdash.notice(req.session.userid,function(result){
		res.render('student/stdash', {
            req.session.name:result[2].studentname,
            req.session.image:result[2].studentimage
			name: req.session.name,
            image: req.session.image,
            event: result[0],
            notice: result[1] 
             });
		})
	}else{
			console.log('going from stufentjs');
			res.redirect('/studentlogin');
	}
});*/

router.get('/teacher', function(req, res){

	if(req.session.userid != null){
		studentdash.teacher(user,function(result){
		res.render('student/teacher', {
			name: req.session.name,
            image: req.session.image,
            teacher: result 
             });
		})
	}else{
			console.log('going from stufentjs');
			res.redirect('/studentlogin');
	}
});
router.get('/stprofile', function(req, res){

	if(req.session.userid != null){
		studentdash.profile(req.session.userid,function(result){
		res.render('student/stprofile', {
			name: req.session.name,
            image: req.session.image,
            profile: result 
             });
		})
	}else{
			console.log('going from stufentjs');
			res.redirect('/student/stdash');
	}
});


router.get('/updateprofile', function(req, res){

	if(req.session.userid != null){
		studentdash.profile(req.session.userid,function(result){
		res.render('student/updateprofile', {
			
			name: req.session.name,
            image: req.session.image,
            profile: result 
			});
		})
	}else{
			console.log('going from stufentjs');
			res.redirect('/student/stdash');
	}
});

router.post("/updateprofile", function(req, res){

	var user = {
		name: req.body.name,
		fathername: req.body.fathername,
		mothername: req.body.mothername,
		phone: req.body.phone,
		address: req.body.address,
		id: req.session.userid
	};
	studentdash.updateprofile(user, function(status){

		if(status){
			res.redirect('/student/stprofile');
		}else{
			res.redirect('/student/updateprofile');
		}
	});
});


router.get('/routine', function(req, res){

	if(req.session.userid != null){
		studentdash.routine(req.session.userid,function(result){
		res.render('student/routine', {
			name: req.session.name,
            image: req.session.image,
            routine1: result[0],
            routine2: result[1],
            routine3: result[2],
            routine4: result[3],
            routine5: result[4],
            routine6: result[5]
            });
		})
	}else{
			res.redirect('/student/stdash');
	}
});
router.get('/subject', function(req, res){

	if(req.session.userid != null){
		studentdash.subject(req.session.userid,function(result){
		res.render('student/subject', {
			name: req.session.name,
            image: req.session.image,
            subject: result 
             });
		})
	}else{
			res.redirect('/student/stdash');
	}
});
router.get('/found', function(req, res){

	if(req.session.userid != null){
		studentdash.lostfound(req.session.userid,function(result){
		res.render('student/found', {
			name: req.session.name,
            image: req.session.image,
            found: result 
             });
		})
	}else{
			res.redirect('/student/stdash');
	}
});
router.get('/syllabus', function(req, res){

	if(req.session.userid != null){
		studentdash.syllabus(req.session.userid,function(result){
		res.render('student/syllabus', {
			name: req.session.name,
            image: req.session.image,
            syllabus: result 
             });
		})
	}else{
			res.redirect('/student/stdash');
	}
});
router.get('/notes', function(req, res){

	if(req.session.userid != null){
		studentdash.notes(req.session.userid,function(result){
		res.render('student/notes', {
			name: req.session.name,
            image: req.session.image,
            notes: result 
             });
		})
	}else{
			res.redirect('/student/stdash');
	}
});
router.get('/assignment', function(req, res){

	if(req.session.userid != null){
		studentdash.assignment(req.session.userid,function(result){
		res.render('student/assignment', {
			name: req.session.name,
			image: req.session.image,
			assignment: result[0],
			upload: result[1]  
            });
		})
	}else{
			res.redirect('/student/stdash');
	}
});
router.post("/upload/(:id)", function(req, res){
	var assignment=req.params.id;
	var file= req.files.file;
	var filename= file.name;
	file.mv('./assets/file/'+filename,function(err){})
		
	var user = {
		id: assignment,
		sid: req.session.userid,
		file: filename
	};
	studentdash.upload(user, function(status){

		if(status){
			res.redirect('/student/assignment');
		}else{
			res.redirect('/student/assignment');
		}
	});		
});
router.get('/generatepdf', function(req, res){

	if(req.session.userid != null){
		studentdash.graderesult(req.session.userid,function(result){
		res.render('student/generatepdf', {
			name: req.session.name,
            image: req.session.image,
            grade: result 
            });
		})
	}else{
			res.redirect('/student/stdash');
	}
});


module.exports = router;