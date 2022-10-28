/* Desenvolva seu script aqui */

import { requestPost, infiniteRequest } from "./requests.js";

async function renderPosts() {
  const ul = document.querySelector("ul");

  const section = document.querySelector(".sectionPosts")

  ul.innerHTML = "";

  const post = await requestPost();

  post.news.forEach((element) => {
    createPost(element);
  });

  // if(JSON.parse(localStorage.getItem("category"))){
    
    
  //   const Buttons = document.querySelectorAll(".btnCategory")

  //       let arr = Array.from(Buttons)

  //      const btnFilter = arr.filter(botao=> botao.innerText=== JSON.parse(localStorage.getItem("category")))
       

  //      btnFilter[0].click()       
    
  // }

  const divObserver = document.createElement("div");
  divObserver.classList.add("divObserver");
   section.append(divObserver);

  observer.observe(divObserver);
}

await eventFilter()
renderPosts();


async function createPost(element) {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  li.id = element.id;

  const divPostText = document.createElement("div");
  divPostText.classList.add("divPostText");

  const imgUser = document.createElement("img");
  imgUser.src = element.image;
  imgUser.classList.add("imgPost");

  const titlePost = document.createElement("h1");
  titlePost.innerText = element.title;

  const descriptionPost = document.createElement("p");
  descriptionPost.innerText = element.description;

  const category = document.createElement("span");
  category.innerText = element.category;

  const acess = document.createElement("button");
  acess.innerText = "Acessar Conteúdo";
  acess.classList.add("acess");

  acess.addEventListener("click", () => {
    localStorage.setItem("idPost", JSON.stringify(element.id));

    window.location.replace(`pages/post/index.html`);

  });
  

  divPostText.append(titlePost, descriptionPost, category, acess);

  li.append(imgUser, divPostText);

  ul.append(li);
}

export { renderPosts,createPost };

import { eventFilter } from "./filterBtn.js";



let page = 1;

async function renderInfinite() {

  const dataPost = await infiniteRequest(page);

  if (page<3) {
    dataPost.news.forEach((element) => {
      createPost(element);
    });
    page++;
  }
}

const observer = new IntersectionObserver((entries) => {


  if (entries.some((entry) => entry.isIntersecting)) {
    renderInfinite();
  }
});


