let section2 = document.querySelector(".section-2");
let select1 = document.querySelector(".select-1");


let api = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;

function displayOption(sources) {
  sources.forEach(info => {
    let option = document.createElement("option");
    option.innerText = info;
    option.value = info;
    select1.append(option);
  })
};

let allNews = [];

fetch(api)
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => {
    displayInfo(data);
    let sources = data.map(info =>
      info.newsSite);
    let sources1 = new Set(sources);
    displayOption(sources1);
    allNews = data;
  }
  );

function displayInfo(data) {
  data.forEach(element => {
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let img = document.createElement("img");
    img.src = element.imageUrl;
    img.classList.add("image-3");
    div1.append(img);
    let div2 = document.createElement("div");
    div2.classList.add("div2");
    let div5 = document.createElement("div");
    div5.classList.add("div5");
    let h = document.createElement("h");
    div5.append(h);
    h.innerText = element.newsSite;
    let span = document.createElement("span");
    span.classList.add("span");
    span.innerText = element.title;
    let a = document.createElement("a");
    a.href = element.url;
    let h2 = document.createElement("h");
    h2.innerText = "Read More";
    h2.classList.add("h2");
    a.append(h2);
    div2.append(div5, span, a);
    let div3 = document.createElement("div");
    div3.classList.add("section-2-box");
    div3.append(div1, div2);
    section2.append(div3);
  });
};



select1.addEventListener("change", function displaySelected(event) {

  if (event.target.value === "All") {
    section2.innerHTML = "";

    displayInfo(allNews);
  }
  else {
    let final = allNews.filter((value) => value.newsSite === event.target.value);
    section2.innerHTML = "";
    displayInfo(final);
  }
})