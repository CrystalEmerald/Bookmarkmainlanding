
const toggleBtn = document.querySelector('.toggle_btn')
const navBar = document.querySelector('.navbar')

toggleBtn.onclick = function () {
    navBar.classList.toggle('open')
    const isOpen = navBar.classList.contains('open')

}

const toggleKey = document.querySelector('.mybutton')
const displayTextKey = document.querySelector('.displaytext')

toggleKey.onclick = function () {
    displayTextKey.classList.toggle('open')
    const isOpen = displayTextKey.classList.contains('open')
}
const toggleKey2 = document.querySelector('.mybutton2')
const displayTextKey2 = document.querySelector('.displaytext2')

toggleKey2.onclick = function () {
    displayTextKey2.classList.toggle('open')
    const isOpen = displayTextKey2.classList.contains('open')
}
const toggleKey3 = document.querySelector('.mybutton3')
const displayTextKey3 = document.querySelector('.displaytext3')

toggleKey3.onclick = function () {
    displayTextKey3.classList.toggle('open')
    const isOpen = displayTextKey3.classList.contains('open')
}
const toggleKey4 = document.querySelector('.mybutton4')
const displayTextKey4 = document.querySelector('.displaytext4')

toggleKey4.onclick = function () {
    displayTextKey4.classList.toggle('open')
    const isOpen = displayTextKey4.classList.contains('open')
}