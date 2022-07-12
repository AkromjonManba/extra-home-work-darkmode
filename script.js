const elModeBtn = document.querySelector(".mode-btn");
const elBody = document.querySelector("body");
function changeTheme() {
  if (window.localStorage.getItem("theme") == "dark") {
    elBody.classList.add("dark")
  } else {
    elBody.classList.remove("dark")
  }
}
var theme = false;
elModeBtn.addEventListener("click", function () {
    elModeBtn.classList.toggle("active")
  theme = !theme
  window.localStorage.setItem("theme", theme ? "dark" : "light");
  changeTheme()
})
changeTheme()