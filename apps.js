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


const companyProfile = document.getElementsByClassName("company-profile");
const tokoJasa = document.getElementsByClassName("toko-jasa");
const personal = document.getElementsByClassName("personal");

const allBtn = document.getElementById("all-btn")
allBtn.addEventListener('click', function onClick(){
  allBtn.style.backgroundColor = "#7269E3";
  companyBtn.style.backgroundColor = "transparent";
  tokoBtn.style.backgroundColor = "transparent";
  personalBtn.style.backgroundColor = "transparent";
})

const companyBtn = document.getElementById("company-btn")
companyBtn.addEventListener('click', function onClick() {
  // alert ("company");
  companyBtn.style.backgroundColor = "#7269E3";
  allBtn.style.backgroundColor = "transparent";
  tokoBtn.style.backgroundColor = "transparent";
  personalBtn.style.backgroundColor = "transparent";
  companyProfile.style.display = "block";
  tokoJasa.display = "none";
  personal.display = "none";
})

const tokoBtn = document.getElementById("toko-btn")
tokoBtn.addEventListener('click', function onClick() {
  // alert ("toko");
  tokoBtn.style.backgroundColor = "#7269E3";
  allBtn.style.backgroundColor = "transparent";
  companyBtn.style.backgroundColor = "transparent";
  personalBtn.style.backgroundColor = "transparent";
  companyProfile.style.display = "none";
  tokoJasa.style.display = "block";
  personal.style.display = "none";
})

const personalBtn = document.getElementById("personal-btn")
personalBtn.addEventListener('click', function onClick(){
  // alert ("personal");
  personalBtn.style.backgroundColor = "#7269E3";
  allBtn.style.backgroundColor = "transparent";
  companyBtn.style.backgroundColor = "transparent";
  tokoBtn.style.backgroundColor = "transparent";
  companyProfile.style.display = "none";
  tokoJasa.style.display = "none";
  personal.style.display = "block";
})