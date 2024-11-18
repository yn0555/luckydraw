const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// 数据存储
let predefinedNames = ["小明", "小红", "小刚", "小丽"];
let drawnNames = new Set(); // 存储已抽的名字

app.post("/draw", (req, res) => {
  const remainingNames = predefinedNames.filter((name) => !drawnNames.has(name));
  
  if (remainingNames.length === 0) {
    return res.json({ success: false, message: "所有名字已被抽完！" });
  }

  const randomIndex = Math.floor(Math.random() * remainingNames.length);
  const drawnName = remainingNames[randomIndex];
  drawnNames.add(drawnName);

  res.json({ success: true, name: drawnName });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
