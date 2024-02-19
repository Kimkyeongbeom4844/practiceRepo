const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  res.setHeader("Access-Control-Allow-origin", "http://localhost:3000"); // 모든 출처(orogin)을 허용
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // 모든 HTTP 메서드 허용
  res.setHeader("Access-Control-Allow-Credentials", "true"); // 클라이언트와 서버 간에 쿠키 주고받기 허용
  res.cookie("exampleCookie", "cookieValue", {
    // maxAge: 900000,
    httpOnly: true,
  });
  res.json({ message: "cookie set successfully!" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
