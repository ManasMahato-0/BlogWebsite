import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const blogs=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/profile", (req, res) => {
  res.render("profile.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/post", (req, res) => {
  res.render("post.ejs");
});

app.post("/profile",(req,res)=>{
  blogs.unshift(req.body);
  console.log(blogs);
  res.render("profile.ejs",{blogs:blogs});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
