let imagesection = document.querySelector(".images-section");
let input = document.querySelector(".input");


const url = 'https://api.unsplash.com/photos/?client_id=AsNXOxgA-rIH_5UdDGgL0rAOXiR_FP6EbZ5N9AzbqIk';

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function () {
   let myData = JSON.parse(xhr.response);
   console.log(myData);
   for (info of myData) {
      let img = document.createElement("img");
      img.classList.add("image10");

      img.src = info.urls.thumb;
      imagesection.append(img);
   }
};
xhr.send();

function searchInfo(event) {
   if (event.keyCode === 13) {
      imagesection.innerHTML = "";
      const url1 = `https://api.unsplash.com/search/photos?query=${event.target.value}&client_id=AsNXOxgA-rIH_5UdDGgL0rAOXiR_FP6EbZ5N9AzbqIk`;

      let xhr = new XMLHttpRequest();
      xhr.open('GET', url1, true);
      xhr.onload = function () {
         let myData = JSON.parse(xhr.response);
         console.log(myData);
         let record = myData.results;
         for (info of record) {
            let img = document.createElement("img");
            img.classList.add("image10");
            img.src = info.urls.thumb;
            imagesection.append(img);
         }
      };
      xhr.send();
      event.target.value = "";
   };
};


input.addEventListener("keyup", searchInfo);
