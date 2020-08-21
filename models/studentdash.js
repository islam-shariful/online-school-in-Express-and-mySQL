var db = require('./db');

module.exports = {
	
	getSessionValues: function(user, callback){
		var sql = "SELECT * FROM student where student_id=?";
		db.getResults(sql,user, function(result){
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		})
	},


	notice: function(user, callback){
		var sql = "SELECT * FROM event;SELECT * FROM notice as n,student as s,subject as sb WHERE s.class_id=n.class_id AND s.section_id=n.section_id AND sb.subject_id=n.subject_id AND s.student_id=? ORDER BY n.noticedate DESC";
		db.getResults(sql,user, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	},

	teacher: function(user, callback){
		var sql = "SELECT * FROM teacher ";
		db.getResults(sql,user, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	},

	profile: function(user, callback){
		var sql = "SELECT * FROM student WHERE student_id=?";
		db.getResults(sql,user, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	},

	updateprofile: function(user, callback){
		var sql = "UPDATE student SET studentname=?,studentfathername=?,studentmothername=?,guardiannumber=?,studentaddress=? WHERE student_id = ?";
		db.execute(sql, [user.name,user.fathername,user.mothername,user.phone,user.address, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	routine: function(user, callback){
		var sql = "SELECT * FROM student as ST,routine as R WHERE ST.class_id=R.class_id AND ST.section_id=R.section_id AND ST.student_id=? AND R.day='Saturday' ORDER BY R.startingtime ASC;SELECT * FROM student as ST,routine as R WHERE ST.class_id=R.class_id AND ST.section_id=R.section_id AND ST.student_id=? AND R.day='Sunday' ORDER BY R.startingtime ASC;SELECT * FROM student as ST,routine as R WHERE ST.class_id=R.class_id AND ST.section_id=R.section_id AND ST.student_id=? AND R.day='Monday' ORDER BY R.startingtime ASC;SELECT * FROM student as ST,routine as R WHERE ST.class_id=R.class_id AND ST.section_id=R.section_id AND ST.student_id=? AND R.day='Tuesday' ORDER BY R.startingtime ASC;SELECT * FROM student as ST,routine as R WHERE ST.class_id=R.class_id AND ST.section_id=R.section_id AND ST.student_id=? AND R.day='Wednessday' ORDER BY R.startingtime ASC;SELECT * FROM student as ST,routine as R WHERE ST.class_id=R.class_id AND ST.section_id=R.section_id AND ST.student_id=? AND R.day='Thursday' ORDER BY R.startingtime ASC;";
		db.getResults(sql,[user,user,user,user,user,user], function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	},

	subject: function(user, callback){
		var sql = "SELECT * FROM teacher as t,student as s,subject as sb WHERE s.class_id=sb.class_id AND t.subject_id=sb.subject_id AND s.student_id=?";
		db.getResults(sql,user, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	},

	lostfound: function(user, callback){
		var sql = "SELECT * FROM lostfound ORDER BY lostday DESC";
		db.getResults(sql,user, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	},

	syllabus: function(user, callback){
		var sql = "SELECT * FROM subject as S,student as ST,syllabus as SY WHERE ST.class_id=SY.class_id AND ST.section_id=SY.section_id AND S.subject_id=SY.subject_id AND ST.student_id=?";
		db.getResults(sql,user, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	},

	notes: function(user, callback){
		var sql = "SELECT * FROM subject as S,student as ST,note as N WHERE ST.class_id=N.class_id AND ST.section_id=N.section_id AND S.subject_id=N.subject_id AND ST.student_id=? ORDER BY N.subject_id";
		db.getResults(sql,user, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	},

	assignment: function(user, callback){
		var sql = "SELECT * FROM subject as S,student as ST, assignment as A,teacher as T WHERE ST.class_id=A.class_id AND S.subject_id=T.subject_id AnD ST.section_id=A.section_id AND S.subject_id=A.subject_id AND ST.student_id=? ORDER BY A.date DESC LIMIT 30;SELECT * FROM subject as S,student as ST, assignment as A,teacher as T,upload as U WHERE ST.class_id=A.class_id AND S.subject_id=T.subject_id AnD ST.section_id=A.section_id AND S.subject_id=A.subject_id AND A.assignment_id=U.assignment_id AND ST.student_id=? ORDER BY U.uploaddate DESC LIMIT 30";
		db.getResults(sql,[user,user], function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	},

	upload: function(user, callback){
		var sql = "INSERT INTO `upload` (`assignment_id`, `uploadfilename`, `uploaddate`, `student_id`) VALUES (?, ?, CURRENT_TIMESTAMP, ?);";
		db.getResults(sql,[user.id,user.file,user.sid], function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	},

	graderesult: function(user, callback){
		var sql = "SELECT * FROM result as R,grade as G,subject as S,student as ST WHERE ST.class_id=R.class_id AND ST.section_id=R.section_id AND S.subject_id=R.subject_id AND G.subject_id=R.subject_id  AND ST.student_id=?";
		db.getResults(sql,user, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	},

}