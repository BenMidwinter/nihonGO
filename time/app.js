const modeList = document.getElementById("mode-list");
modeList.innerHTML = TOPIC.drillModes
  .map(
    (m, i) =>
      `<label class="radio"><input type="radio" name="mode" value="${m.value}"${i === 0 ? " checked" : ""} /> ${m.label}</label>`
  )
  .join("");
initTopicModule(TOPIC);
