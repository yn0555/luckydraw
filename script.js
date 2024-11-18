// 预定义的名字列表
const predefinedNames = ["小明", "小红", "小刚", "小丽"];
const drawnNames = new Set();

document.getElementById("drawButton").addEventListener("click", () => {
  const remainingNames = predefinedNames.filter((name) => !drawnNames.has(name));

  if (remainingNames.length === 0) {
    document.getElementById("result").innerText = "所有名字已被抽完！";
    document.getElementById("drawButton").disabled = true;
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingNames.length);
  const drawnName = remainingNames[randomIndex];
  drawnNames.add(drawnName);

  document.getElementById("result").innerText = `恭喜你抽中了：${drawnName}`;
  document.getElementById("drawButton").disabled = true;
});
