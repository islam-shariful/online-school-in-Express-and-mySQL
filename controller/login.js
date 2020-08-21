var express 	= require('express');
const { body, validationResult } = require('express-validator');
var bodyParser 	 = require('body-parser');
var loginModel 	= require.main.require('./models/loginModel');
var router 		= express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', [
	// username must not be empty
	body('userid').notEmpty().isLength({ min: 10 }).isLength({ max: 10 }),
	// password must be at least 8 chars long
	body('password').notEmpty().isLength({ min: 8 }).matches(
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
	  )
    ],function(req, res){
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
	  return res.status(400).json({ errors: errors.array() });
    }

	var user = {
		userid: req.body.userid,
		password: req.body.password
    };
    
    loginModel.getType(user, function(results){
        req.session.userid = results.user_id;
        req.session.username = results.user_id;
        req.session.type = results.usertype;
    });

	loginModel.validate(user, function(status){
		if(status){
            
            if(req.session.type == "superadmin"){
                res.redirect('/superadmin/');
            }
            else if(req.session.type == "schooladmin"){
                res.redirect('/adminHome');
            }
            else if(req.session.type == "teacher"){
                res.redirect('/teacher/index5');
            }
            else if(req.session.type == "student"){
                res.redirect('/student/stdash');
            }
            else if(req.session.type == "parent"){
                res.redirect('/parent/');
            }
		}else{
			res.send('invalid username/password');
		}
	});

});

module.exports = router;