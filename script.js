const func = () => {
  const div = document.createElement("div");
  div.setAttribute("id", "firstextenson");
  document.body.appendChild(div);
  const maindiv = document.getElementById("firstextenson");
  maindiv.addEventListener("click", async () => {
    await navigator.clipboard.writeText(maindiv.innerText);
    maindiv.style.borderColor = "greenyellow";
  });
  document.addEventListener("mousedown", (e) => {
    e.preventDefault();
    e.stopPropagation()
    if (
      e.target.id.toUpperCase() !== "FIRSTEXTENSON" &&
      e.target.id.toUpperCase() !== "DETAILDIV"
    ) {
      const data = e.target;
      const cssdata = window.getComputedStyle(data);
      maindiv.innerText = `color:${cssdata.getPropertyValue("color")};
        font-size:${cssdata.getPropertyValue("font-size")};
        font-family:${cssdata.getPropertyValue("font-family")};
        font-weight:${cssdata.getPropertyValue("font-weight")};
        font-style:${cssdata.getPropertyValue("font-style")};
        background-color:${cssdata.getPropertyValue("background-color")};
        `;
      maindiv.style.borderColor = "tomato";
    }
  });
};
func();
