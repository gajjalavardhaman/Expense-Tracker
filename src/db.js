const Pool=require("pg").Pool;
//allows to incent this pool and configure it like where and how we are gonna connect to db

const pool=new Pool({
    user: " ",
    password:"",
    host: "localhost",
    database: " ",
    port:5432
});

//configuring where db is located

module.exports=pool;
//setting this up and to run queries