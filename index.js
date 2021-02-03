const bannerElement = document.getElementsByClassName("banner")[0];
const span = document.getElementsByTagName("span")[0];
const h3 = document.getElementsByTagName("h3")[0];
const pictureImage = document.getElementsByTagName("picture")[0];

window.addEventListener("load", () => {
    span.innerText = bannerElement.clientHeight
    h3.innerText = pictureImage.querySelector('img').currentSrc
})

window.addEventListener("resize", () => {
    span.innerText = bannerElement.clientHeight
    h3.innerText = pictureImage.querySelector('img').currentSrc
})