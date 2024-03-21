const {createPool} = require('mysql');

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"Soham@2010",
    database:"taskmaster",
    connectionLimit:10

})

pool.query('select * from table2',(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})
