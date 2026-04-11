import express from "express";
import fs from "fs";
import ejs from "ejs";
// console.log(express);

const app = express();

//logic
app.get("/", (req, res) => {
  res.end("heello from express server");
});

app.get("/about", (req, res) => {
  res.end("hi from about");
});

app.get("/products", (req, res) => {
  //   fs.readFile("./product-page.html", "utf-8", (err, data) => {
  //     if (err) return res.json({ err: "something went wrong" });
  //     res.send(data);
  //   });
  res.render("index.html");
});
app.post("/login", (req, res) => {
  //   res.end("login done");
});
app.listen(3000, () => {
  console.log("server started");
});
