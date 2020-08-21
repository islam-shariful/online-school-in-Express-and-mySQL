var express 						= require('express');
const { body, validationResult } 	= require('express-validator');
var userloginModel 					= require.main.require('./models/loginModel'); 
var useradminModel 					= require.main.require('./models/adminModel'); 
var router 							= express.Router();

router.get('/', function(req, res){
	if(req.session.userid != null){
		res.render('superadmin/index');
	}else{
			res.redirect('/login');
	}
});

router.get('/createadmin', function(req, res){
	// GET LATEST ID FROM TABLE AND INCREMENT
	if(req.session.userid != null){
		userloginModel.getAdminId(null, function(results){
			var id = results.schooladmin_id; //20-0001-01
			var split = id.split("-");
			var id1 = split[0];
			var id2 = parseInt(split[1]);
			//console.log(id2);
			id2++;			
			const newNumber = id2.toString().padStart(split[1].length, "0");
			var id3 = split[2];
			var new_id = [id1, newNumber, id3].join("-");
			res.render('superadmin/createadmin', {
			userid: new_id
		})
	});
	}else{
			res.redirect('/login');
	}
	//res.render('home/userlist', { userList : results, uname: req.session.username});
});

router.post('/createadmin', [
	//CREATE ADMIN VALIDATION
	// username must not be empty
	body('userid').notEmpty(),
	// password must be at least 8 chars long
	body('password_input').notEmpty().isLength({ min: 8 }).matches(
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
	  ),
	//body('confirm_password').equals('password_input').withMessage("Passwords don't match."),
  	], function(req, res, next) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log(req.body.userid);
		console.log(req.body.username);
		console.log(req.body.password_input);
		console.log(req.body.confirm_password);
	  	return res.status(400).json({ errors: errors.array() });
	}
	
	var user ={
		userid 		: req.body.userid,
		username 	: req.body.username,
		password	: req.body.password_input,
		email		: req.body.email
	}

	useradminModel.insert(user, function(status){
		if(status){
			res.render('superadmin/index');
		}else{
			res.redirect('/superadmin/createadmin');
		}
	});
});

// router.post('/createadmin', function(req, res){
// 	res.render('superadmin/createadmin');
// });

router.get('/listadmin', function(req, res){
	useradminModel.getAll(function(results){
		res.render('superadmin/listadmin', { userList : results});
	});
});



router.get('/updateadmin/:id', function(req, res){

	if(req.session.userid != null){
		useradminModel.get(req.params.id, function(results){
			console.log(results.schooladminname);
		res.render('superadmin/updateadmin', {
			userid: results.schooladmin_id,
			username: results.schooladminname,
            email: results.schooladminemail 
			});
		})
	}else{
			res.redirect('/login');
	}
});

router.post("/updateadmin/:id", function(req, res){

	var user = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password_input,
		userid: req.body.userid
	};
	useradminModel.update(user, function(status){
		if(status){
			useradminModel.getAll(function(results){
				res.render('superadmin/listadmin', { userList : results});
			});
		}else{
			res.render('/superadmin');
		}
	});
});

router.get('/deleteadmin/:id', function(req, res){
	
	useradminModel.get(req.params.id, function(result){
		res.render('superadmin/deleteadmin', {user: result});
	});
	
});

router.post('/deleteadmin/:id', function(req, res){

	useradminModel.delete(req.body.id, function(status){
		if(status){
			useradminModel.getAll(function(results){
				res.render('superadmin/listadmin', { userList : results});
			});
		}else{
			res.redirect('/superadmin');
		}
	});
});



module.exports = router;