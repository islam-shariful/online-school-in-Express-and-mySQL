var db = require('./db');

module.exports ={


	delete: function(id, callback){
		var sql = "delete from studentt where sid=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}