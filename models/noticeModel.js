var db = require('./db');

module.exports ={


	getAll: function(callback){
		var sql = "select * from noticeboard";
		db.getResults(sql, null,  function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},


	insert: function(notice, callback){
		var sql = "insert into noticeboard values(?, ?, ?, ?, ?)";

		db.execute(sql, ['', notice.nTitle , notice.nDetails, notice.pBy, notice.date], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}




	
}
