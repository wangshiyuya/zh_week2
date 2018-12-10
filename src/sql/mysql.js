var mysql=require('mysql');

var pool={
	user:root,
	password:root,
	database:'test',
	connectionLimit:100
}

var con=mysql.createPool(pool);

