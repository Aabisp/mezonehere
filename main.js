// Dark,Light Mode Switch
var theme = document.getElementById("theme-btn");
theme.onclick = function() {
    document.body.classList.toggle("light");
    theme.style.transform = "translateY(-5px)";
    setTimeout(function() {
        theme.style.transform = "translateY(0px)";
    }, 200);
}
// diffeenrt pages in one
var hom = document.getElementById("hom");
var abo = document.getElementById("abo");
var por = document.getElementById("por");
var con = document.getElementById("con");
var hc = document.getElementById("header");
var ac = document.getElementById("about");
var pc = document.getElementById("work");
var cc = document.getElementById("contact");

hom.onclick = function () {
  hc.style.display = "block";
  ac.style.display = "none";
  pc.style.display = "none";
  cc.style.display = "none";

};

abo.onclick = function () {
  hc.style.display = "none";
  ac.style.display = "block";
  pc.style.display = "none";
  cc.style.display = "none";
};

por.onclick = function () {
  hc.style.display = "none";
  ac.style.display = "none";
  pc.style.display = "block";
  cc.style.display = "none";
};

con.onclick = function () {
  hc.style.display = "none";
  ac.style.display = "none";
  pc.style.display = "none";
  cc.style.display = "block";
};