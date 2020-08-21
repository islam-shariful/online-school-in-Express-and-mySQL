var db = require('./db');

module.exports ={

	getAdminId: function(id, callback){
		var sql = "SELECT `schooladmin_id` FROM `schooladmin` WHERE schooladmin_id LIKE '________02' ORDER BY `schooladmin_id` DESC LIMIT 1";
		//callback = callback || function(){};
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

	getAll: function(callback){
		var sql = "select * from login";
		db.getResults(sql, null,  function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
	
	getType: function(user, callback){
		var sql = "select * from login where user_id=? and userpassword=?";
		db.getResults(sql, [user.userid, user.password], function(result){
			if(result.length > 0){
				console.log(result[0]);
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	validate: function(user, callback){
		var sql = "select * from login where user_id=? and userpassword=?";
		
		console.log(user.userid);
		console.log(user.password);
		
		db.getResults(sql, [user.userid, user.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	insert: function(user, callback){
		var sql = "insert into user values(?, ?, ?, ?)";

		db.execute(sql, ['', user.uname, user.password, user.type], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	update: function(user, callback){
		var sql = "update user set username=?, password=?, type=? where id=?";
		db.execute(sql, [user.uname, user.password, user.type, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	delete: function(id, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}