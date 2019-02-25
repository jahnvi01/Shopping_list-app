var express=require('express');
var router =express.Router();
var mysql=require('mysql');
var db=mysql.createConnection({
    host : "localhost",
    user:"root",
    password : "jahnvi123",
    database : "mern",
});

db.connect((err)=>{
if(err){throw err;}
else{console.log("connected")};
});
router.get('/',(req,res)=>{
    var sql="select * from shopping order by date desc";
    db.query(sql,(err,arr)=>{
    if(err)throw err;
    //console.log(arr);
    res.json(arr);
    });
   
});

router.post('/',(req,res)=>{
    console.log(req);
    var post=req.body.name;
   
    var sql="insert into shopping (name) values (?)";
    db.query(sql,[post],(err,results,fields)=>{
    if(err)throw err;

    res.json(post);
    });
});

router.delete('/:id',(req,res)=>{
    var post=req.params.id;
    console.log(req);
    var sql="delete from shopping where id=?";
    db.query(sql,[post],(err,results,fields)=>{
    if(err)throw err;

    res.json(post);
    });
});

module.exports=router;