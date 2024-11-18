document.getElementById("drawButton").addEventListener("click", () => {
    fetch("/draw", { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          document.getElementById("result").innerText = `恭喜你抽中了：${data.name}`;
          document.getElementById("drawButton").disabled = true;
        } else {
          document.getElementById("result").innerText = data.message;
        }
      })
      .catch((error) => console.error("Error:", error));
  });
  