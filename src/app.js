// requiring modules
const express =require("express");
const app =express();
const path=require("path");
const hbs= require("hbs");
const port = 8000;


//defining paths
const static_path=path.join(__dirname , "../public");
const view_Path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname , "../templates/partials");

// to set view engine
app.set("view engine", "hbs");
app.set('views',view_Path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path))


//handeling routing and responce from  severs 
     app.get("" , (req,res)=>{
          res.render("index");
     });
     app.get("/about" , (req,res)=>{
          res.render("about");
     });
     app.get("/weather" , (req,res)=>{
          res.render("weather");
     });
     app.get("*" , (req,res)=>{
          res.render("404error" , {
               errorMsg:"Opps! :( Page Not Found"
          });
     });

//set port number to server
     app.listen(port , ()=>{
          console.log(`server is listening at ${port}`);
     });




