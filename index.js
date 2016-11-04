var express=require('express');
var app=new express();
app.get("/",function(req,res){
	
	 res.send("Helloo world");
});
app.listen(process.env.PORT || 7000);