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

function followersList(data)
    {
        followers.innerHTML="";
        let xhr=new XMLHttpRequest();
        xhr.open('GET',`https://api.github.com/users/${data}/followers`,true);
        xhr.onload=function()
       {
          let myData=JSON.parse(xhr.response);
          let h1=document.createElement("h");

             h1.innerText="Followers:";
             h1.classList.add("h2");
             followers.append(h1);
               let requiredInfo=myData.slice(0,5);
                  for(let record of requiredInfo)
                      {
                             let img=document.createElement("img");
                             img.src=record.avatar_url;
                             img.classList.add("image-members");
                             followers.append(img);
                       }
         };
     xhr.send();
    }

    function followingList(data)
    {
        following.innerHTML="";

        let xhr=new XMLHttpRequest();
        xhr.open('GET',`https://api.github.com/users/${data}/following`,true);
        xhr.onload=function()
       {
          let myData=JSON.parse(xhr.response);
          let h1=document.createElement("h");

             h1.innerText="Following:";
             h1.classList.add("h2");
             following.append(h1);
             let requiredInfo=myData.slice(0,5);

                  for(let record of requiredInfo)
                      {
                             let img=document.createElement("img");
                             img.src=record.avatar_url;
                             img.classList.add("image-members");
                             following.append(img);
                       }
         };
     xhr.send();
    }


    
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
         followersList(userData.login);
         followingList(userData.login);
     };

     event.target.value="";
     
         xhr.send();
     }
}


function catInfo()
{
    catcontainer.innerHTML="";
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://api.thecatapi.com/v1/images/search?limit=1&size=full',true);
    xhr.onload=function()
    {
        let userData=JSON.parse(xhr.response);
        
        for(info of userData)
        {
               let img=document.createElement("img");
               img.src=info.url;
               img.classList.add("image-cat");
               catcontainer.append(img);

        }
    }
    xhr.send();
}



input.addEventListener('keyup', info);
button.addEventListener('click', catInfo);




