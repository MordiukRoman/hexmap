jQuery(document).ready((function($) {
  var terrainBtns = document.querySelectorAll(".terrain-btn")
    , customColor = "#FFA100"
    , changeCustom = document.querySelector("#change-custom")
    , customBtn = document.querySelector("#custom")
    , hexes = document.querySelectorAll(".hex")
    , hexMap = document.querySelector("#hex-map")
    , dragging = !1
    , selectedTerrain = "ltbrush"
    , fill = "#85A35C"
    , stroke = "#444444"
    , terrainType = 1;

  function terrainTypeToTerrainName(terrainType) {
    if (!terrainType) return "hide";
    switch (terrainType) {
      case 1: 
        return "clear";
      case 2:
        return "ltbrush";
      case 3:
        return "forest";
      case 4:
        return "urban";
      case 5:
        return "hill";
      case 6:
        return "mountain";
      case 7:
        return "water";
      case 8:
        return "custom";
      }
  }
  function customColorStart() {
      changeCustom.value = customColor,
      customBtn.style.backgroundColor = customColor,
      changeCustom.addEventListener("input", changeColor, !1),
      changeCustom.addEventListener("change", changeColor, !1),
      changeCustom.select()
  }
  function changeColor(event) {
      customColor = event.target.value,
      customBtn.style.backgroundColor = customColor,
      terrainBtns.forEach(b=>b.classList.remove("active")),
      customBtn.classList.add("active"),
      selectedTerrain = customBtn.id
  }
  function changeTerrain(e, terrain) {
      switch (terrain || selectedTerrain) {
      case "clear":
          fill = "#BBC77E",
          stroke = "#444444",
          terrainType = 1;
          break;
      case "ltbrush":
          fill = "#85A35C",
          stroke = "#444444",
          terrainType = 2;
          break;
      case "forest":
          fill = "#656D38",
          stroke = "#444444",
          terrainType = 3;
          break;
      case "urban":
          fill = "#666666",
          stroke = "#444444",
          terrainType = 4;
          break;
      case "hill":
          fill = "#C3A452",
          stroke = "#444444",
          terrainType = 5;
          break;
      case "mountain":
          fill = "#A67E36",
          stroke = "#444444",
          terrainType = 6;
          break;
      case "water":
          fill = "#75ABDD",
          stroke = "#444444",
          terrainType = 7;
          break;
      case "hide":
          fill = "transparent",
          stroke = "transparent",
          terrainType = 0;
          break;
      case "custom":
          fill = customColor,
          stroke = "#444444",
          terrainType = 8
      }
      e.setAttribute("fill", fill),
      e.setAttribute("stroke", stroke),
      e.setAttribute("data-terrain", terrainType)
  }
  function getArray() {
      let hexArray = []
        , rows = document.querySelectorAll(".row");
      for (let i = 0; i < rows.length; i++) {
          let row = [];
          hexesInRow = rows[i].querySelectorAll(".hex");
          for (let j = 0; j < hexesInRow.length; j++) {
              let terrainInt = parseInt(hexesInRow[j].getAttribute("data-terrain"));
              row.push(terrainInt)
          }
          hexArray.push(row)
      }
      return hexArray
  }
  function makeHexesFromArray(hexArray) {
    for (let i = 0; i < hexArray.length; i++) {
      let row = [];
      for (let j = 0; j < hexArray[i].length; j++) {
      }
      hexArray.push(row)
  }
  }
  function endDrag() {
      dragging = !1
  }
  customColorStart(),
  terrainBtns.forEach((function(btn) {
      btn.addEventListener("click", ()=>{
          terrainBtns.forEach(b=>b.classList.remove("active")),
          btn.classList.add("active"),
          selectedTerrain = btn.id
      }
      )
  }
  )),
  hexes.forEach((function(e) {
      e.addEventListener("mouseenter", ()=>{
          !0 === dragging && changeTerrain(e)
      }
      )
  }
  )),
  hexes.forEach((function(e) {
      e.addEventListener("mousedown", ()=>{
          dragging = !0,
          changeTerrain(e)
      }
      )
  }
  )),
  document.addEventListener("mouseup", endDrag),
  $("#download-btn").on("click", (function(e) {
      e.preventDefault();
      var svg = hexMap.outerHTML;
      document.querySelector("#svgcode").value = svg,
      $("#svgform").submit()
  }
  )),
  $("#copy-btn").on("click", (function(e) {
      e.preventDefault();
      let hexArray = getArray();
      hexArray = JSON.stringify(hexArray);
      navigator.clipboard.writeText(hexArray);
      console.log(hexArray);
      hexes.forEach()
  }
  ))


}));
