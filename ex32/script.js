import calculate from "./calculete.js"
import copyToClipboard from "./copyToClipboard.js"
import { handCleanButon, handleButtonPress, handleTyping } from "./keyHandlrs.js"
import theme from "./theme.js"

//const input = document.getElementById("input")
//const resultInput = document.getElementById("result")

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.getElementById("clear").addEventListener("click", handCleanButon)
document.getElementById('input').addEventListener('keydown',handleTyping)
input.addEventListener("keydown",handleTyping)
document.getElementById("equal").addEventListener("click", calculate)
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)
document.getElementById("themeSwitcher").addEventListener("click",
theme
 )