// let section2=document.querySelector(".section-2");
// let section2a=document.querySelector(".section-2-a");
// let section2b=document.querySelector(".section-2-b");


fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=30')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => {data.forEach(element => {
    let section2=document.querySelector(".section-2");
    let section2a=document.querySelector(".section-2-a");
    let section2b=document.querySelector(".section-2-b");
    // let img=document.createElement("img");
    // img.innerText=element.imageUrl;
    // section2a.append(img);
    let h=document.createElement("h");
    h.innerText="Read More";
    section2b.append(h);
  })});

  
