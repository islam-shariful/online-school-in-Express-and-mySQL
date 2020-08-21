var db = require('./db');

module.exports ={

	/*getAdminId: function(id, callback){
		var sql = "SELECT `student_id` FROM `student` WHERE student_id LIKE '________02' ORDER BY `student_id` DESC LIMIT 1";
		
		db.getResults(sql, [id], function(results){
			//console.log(results);
			//console.log('2');
			if(results.length > 0){
				return callback(results[0]);
			}else{
				return callback([]);
			}
		});
	},

validate: function(user, callback){
		var sql = "select * from login where user_id=? and userpassword=?";
		db.getResults(sql, [user.username, user.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},*/



	insert: function(student, callback){
		var sql = "insert into login values(?, ?, ?, ?)";

		db.execute(sql, ['',student.sid, student.password, student.type ], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}


	
}
