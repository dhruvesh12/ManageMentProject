const sql = require('mysql')




const sqldb=sql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:"edf",

})

module.exports= {
    sqls : sqldb,
    connect : ()=>{
        sqldb.connect((err)=>{
            if(err) throw err
            console.log("connection secured")
        })
    }
}