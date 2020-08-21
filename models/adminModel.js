var db = require('./db');

module.exports ={

	get: function(id, callback){
		var sql = "select * from schooladmin where schooladmin_id=?";
		db.getResults(sql, [id], function(result){
			if(result.length > 0){
				console.log(result);
				console.log("1");
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	getAll: function(callback){
		var sql = "select * from schooladmin";
		db.getResults(sql, null,  function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	validate: function(user, callback){
		var sql = "select * from admin where username=? and password=?";
		db.getResults(sql, [user.uname, user.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	insert: function(user, callback){
		var sql = "INSERT INTO `schooladmin` (`schooladmin_id`, `schooladminname`, `schooladminemail`) VALUES (?,?,?)";

		db.execute(sql, [user.userid, user.username, user.email], function(status){
            
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
        
        var sql2 = "INSERT INTO `login` (`user_id`, `userpassword`, `usertype`) VALUES (?,?,?)";

		db.execute(sql2, [user.userid, user.password, "schooladmin"], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	update: function(user, callback){
		var sql = "update schooladmin set schooladminname=?, schooladminemail=? where schooladmin_id=?";
		db.execute(sql, [user.username, user.email, user.userid], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
		
		var sql2 = "update login set userpassword=? where user_id=?";
		db.execute(sql2, [user.password, user.userid], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
		
	},

	delete: function(id, callback){
		var sql = "delete from schooladmin where schooladmin_id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
		
		var sql2 = "delete from login where user_id=?";
		db.execute(sql2, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}