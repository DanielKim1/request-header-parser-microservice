const express = require("express");
const app = express();

app.get("/api/whoami", ({ headers }, res) => {
  console.log(headers);
  res.send({
    ipaddress: headers["x-forwarded-for"],
    language: headers["accept-language"],
    software: headers["user-agent"],
  });
});

app.listen(3000);
