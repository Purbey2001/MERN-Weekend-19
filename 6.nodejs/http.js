import http from "http";
// console.log(http);

// const PORT = 3000 || process.env.PORT;
const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
  //   res.setHeader("mentor", "vikas");
  //   res.end("hello from server");
  //   console.log(req.headers);
  //   console.log(req.url);
  //   console.log(req.method);
  if (req.url === "/") {
    res.end("hello from home page");
  } else if (req.url === "/about") {
    res.end("hello from about page");
  } else if (req.url === "/contact") {
    res.end("hello from contact page");
  } else {
    res.statusCode = 404;
    res.end("page not found");
  }

  //logic
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});
