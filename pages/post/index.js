/* Desenvolva seu script aqui */

import { chosenPost } from "../home/requests.js";


function home(){

let btnHome = document.querySelector(".btnHome")

btnHome.addEventListener("click",(event)=>{


    window.location.replace(`/index.html`);


})
}

home()



async function renderPostID(){

let newPost = await chosenPost()


        
    let section = document.querySelector(".sectionPost")
    
    const divPost = document.createElement("div")
    divPost.classList.add("divPost")
    
    const titlePost = document.createElement("h1");
    titlePost.innerText = newPost.title;
    titlePost.classList.add("titlePost")

    const descriptionPost = document.createElement("p")
    descriptionPost.innerText = newPost.description


    const imgUser = document.createElement("img");
    imgUser.src =newPost.image
    imgUser.classList.add("imgPost");

    const divContent = document.createElement("div")
    divContent.classList.add("divContent")
    

    const content = document.createElement("p")
    content.innerText = newPost.content

    divPost.append(titlePost,descriptionPost)
    divContent.append(content)
   
    section.append(divPost,imgUser,divContent)



}

renderPostID()


function buttonCategories(){

    // let newPost = await chosenPost()

let btn = document.querySelectorAll(".btnCategory")


btn.forEach(element => {

    element.addEventListener("click",(event)=>{


        let teste = element.innerText

        localStorage.setItem("category", JSON.stringify(teste))

        window.location.replace(`/index.html`)
    
    })


    
});

}

buttonCategories()