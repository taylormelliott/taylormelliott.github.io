const iBtn = document.querySelector("#div1");
const codeBtn = document.querySelector("#div2");
const stuffBtn = document.querySelector("#div3");

const goAboutPage = () => {
  document.location = "about.html";
};

iBtn.addEventListener("click", goAboutPage);

const goProjectsPage = () => {
  document.location = "projects.html";
};

codeBtn.addEventListener("click", goProjectsPage);

const gostuffPage = () => {
  document.location = "stuff.html";
};

stuffBtn.addEventListener("click", gostuffPage);
