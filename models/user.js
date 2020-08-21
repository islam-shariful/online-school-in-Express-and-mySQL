var db = require('./db');

module.exports = {
	
	login: function(user, callback){
		var sql = "select * from student where studentemail=?";
		db.getResults(sql, [user.email], function(result){

			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		})
	}
}