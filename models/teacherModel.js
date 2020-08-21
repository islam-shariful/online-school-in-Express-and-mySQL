var db = require('./db');

module.exports ={




	getTeacherId: function(id, callback){
		var sql = "SELECT `tid` FROM `teacherr` WHERE tid LIKE '________03' ORDER BY `tid` DESC LIMIT 1";
		
		db.getResults(sql, [id], function(results){
			
			if(results.length > 0){
				return callback(results[0]);
			}else{
				return callback([]);
			}
		});
	},



		/*get: function(id, callback){
		var sql = "select * from studentt where sid=?";
		db.getResults(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},*/





	getAll: function(callback){
		var sql = "select * from teacherr";
		db.getResults(sql, null,  function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},


	insert: function(teacher, callback){
		var sql = "insert into teacherr values(?, ?, ?, ?, ?, ?, ?, ?, ?)";

		db.execute(sql, ['', teacher.tid, teacher.tName, teacher.gender, teacher.dob, teacher.department, teacher.email , teacher.phone , teacher.address], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}




	
}
