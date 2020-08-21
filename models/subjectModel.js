var db = require('./db');

module.exports ={









	getAll: function(callback){
		var sql = "select * from subjectt";
		db.getResults(sql, null,  function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},


	insert: function(subject, callback){
		var sql = "insert into subjectt values(?, ?, ?, ?, ?)";

		db.execute(sql, ['', subject.sName, subject.sCode, subject.sType, subject.sClass], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}




	
}
