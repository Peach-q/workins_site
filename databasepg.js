const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "wooower",
    port: 5432 ,
    password: "Z0rGIcH",
    database: "Kb4Site"
})

client.connect();
client.query(`Select * from users`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
});
