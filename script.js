let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let gm = document.getElementById("gm").value;
let ghub = document.getElementById("ghub").value;
let pnumb = document.getElementById("pnumb").value;
let loc = document.getElementById("loc").value;
let sk = document.getElementById("sk").value;
let ed1 = document.getElementById("ed1").value;
let ed2 = document.getElementById("ed2").value;
let abtme = document.getElementById("abtme").value;
let pdesc = document.getElementById("pdesc").value;
let pname = document.getElementById("pname").value;
var cnt = 0;

function createprojectli() {
  cnt++;
  var str = "pli" + cnt;
  pname = document.getElementById("pname").value;
  pdesc = document.getElementById("pdesc").value;
  var divparent = document.createElement("li");
  var divh = document.createElement("h5");
  var divp = document.createElement("p");
  divparent.className = "pli";
  divh.innerHTML = pname;
  divp.innerHTML = pdesc;
  document.getElementById("projectli").appendChild(divparent);
  divparent.setAttribute("id", str);
  document.getElementById(str).appendChild(divh);
  document.getElementById(str).appendChild(divp);
  document.getElementById("pname").value = "";
  document.getElementById("pdesc").value = "";
}

function fetchval() {
  fname = document.getElementById("fname").value;
  lname = document.getElementById("lname").value;
  gm = document.getElementById("gm").value;
  ghub = document.getElementById("ghub").value;
  pnumb = document.getElementById("pnumb").value;
  loc = document.getElementById("loc").value;
  sk = document.getElementById("sk").value;
  ed1 = document.getElementById("ed1").value;
  ed2 = document.getElementById("ed2").value;
  abtme = document.getElementById("abtme").value;
  pdesc = document.getElementById("pdesc").value;
  pname = document.getElementById("pname").value;
}

const resume = document.getElementById("mRC");

function createR1() {
  fetchval();
  resume.innerHTML = `
  <h1>${fname}</h1>
    
  `;
}
