function navMenu() {
  let listDefault = document.getElementById("list-default")
  let listActive = document.getElementById("list-active")
  let navMenu = document.getElementById("nav-menu");

  listDefault.classList.toggle("block")
  listDefault.classList.toggle("hidden")
  listActive.classList.toggle("hidden")
  listActive.classList.toggle("block")

  navMenu.classList.toggle("right-[-50rem]");
  navMenu.classList.toggle("right-0");
}

let PUstartup = document.getElementById("PUstartup");
function CPstartup() {
  PUstartup.style.display = "block";
}
function closePU() {
  PUstartup.style.display = "none";
}

let PUbusiness = document.getElementById("PUbusiness");
function CPbusiness() {
  PUbusiness.style.display = "block";
}
function closeBusiness() {
  PUbusiness.style.display = "none";
}

let PUbiz = document.getElementById("PUbiz");
function CPbiz() {
  PUbiz.style.display = "block";
}
function closeBiz() {
  PUbiz.style.display = "none";
}

let PUenterprise = document.getElementById("PUenterprise");
function CPenterprise() {
  PUenterprise.style.display = "block";
}
function closeEnterprise() {
  PUenterprise.style.display = "none";
}
