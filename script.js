// 预定义的名字列表
const predefinedNames = ["小明", "小红", "小刚", "小丽"];
// 从 localStorage 获取已抽中的名字
const drawnNames = new Set(JSON.parse(localStorage.getItem("drawnNames")) || []);

// 更新 localStorage 中已抽中的名字
function updateDrawnNames() {
  localStorage.setItem("drawnNames", JSON.stringify([...drawnNames]));
}

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

  // 更新 localStorage
  updateDrawnNames();

  document.getElementById("result").innerText = `恭喜你抽中了：${drawnName}`;
  document.getElementById("drawButton").disabled = true;
});
