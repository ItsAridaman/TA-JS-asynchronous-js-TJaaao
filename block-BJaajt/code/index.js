// let xhr=new XMLHttpRequest();
// xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
// xhr.onload=function()
// {
//     let userData=JSON.parse(xhr.response);
//     console.log(userData.title);
// }
// xhr.send();

let maindiv=document.querySelector(".main-div");
let input=document.querySelector(".input");
let followers=document.querySelector(".followers");
let following=document.querySelector(".following");
let catdiv=document.querySelector(".cat-div");
let catcontainer=document.querySelector(".cat-container");
let button=document.querySelector(".buttonn");


function display(data)
{
    maindiv.innerHTML="";
    let h1=document.createElement("h");
    h1.innerText="";
    h1.classList.add("h1");
    let img=document.createElement("img");
    img.src=data.avatar_url;
    img.classList.add("image");
    h1.innerText=data.name;
    maindiv.append(h1,img);
    followers.innerText=`Followers:${data.followers}`;
    followers.classList.add("hello");
    following.innerText=`Following:${data.following}`;
    following.classList.add("hello");

}


function info(event)
{
    if(event.keyCode===13)
    {
       let xhr=new XMLHttpRequest();
       xhr.open('GET',`https://api.github.com/users/${event.target.value}`,true);
       xhr.onload=function()
      {
         let userData=JSON.parse(xhr.response)
         display(userData);
     };

     event.target.value="";
         xhr.send();
     }
}


function catInfo()
{
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://api.thecatapi.com/v1/images/search?limit=1&size=full',true);
    xhr.onload=function()
    {
        let userData=JSON.parse(xhr.response);
        let img=document.createElement("img");
        img.src=userData.url;
        let catcontainer=document.querySelector(".cat-container");

        catcontainer.append(img);
    }
    xhr.send();
    console.log("hello india");
}



input.addEventListener('keyup', info);
button.addEventListener('click', catInfo);




