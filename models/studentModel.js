var db = require('./db');

module.exports ={




	getStudentId: function(id, callback){
		var sql = "SELECT `sid` FROM `studentt` WHERE sid LIKE '________04' ORDER BY `sid` DESC LIMIT 1";
		
		db.getResults(sql, [id], function(results){
			
			if(results.length > 0){
				return callback(results[0]);
			}else{
				return callback([]);
			}
		});
	},



		get: function(id, callback){
		var sql = "select * from studentt where sid=?";
		db.getResults(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},





	getAll: function(callback){
		var sql = "select * from studentt";
		db.getResults(sql, null,  function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},


	insert: function(student, callback){
		var sql = "insert into studentt values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

		db.execute(sql, ['', student.sName, student.sid, student.fName, student.mName, student.gender, student.dob, student.admissionDate, student.bGroup , student.religion , student.eMail , student.admissionClass , student.section , student.gPN , student.address , student.pic], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}




	
}
