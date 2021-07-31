const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});

/********************************************************************** */
const express = require("express");
const app = express();
const PORT = 8080;

console.log("Server is listening");

app.use(express.json());

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "shirt",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    req.status(418).send({ message: "we need a logo!" });
  }

  res.send({
    tshirt: "tshirt logo: ${logo} and id: ${id}",
  });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

/********************************************************************** */
/*
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff"></meta>
*/
