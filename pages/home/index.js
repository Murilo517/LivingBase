/* Desenvolva seu script aqui */

import { requestPost, infiniteRequest } from "./requests.js";

const post = await requestPost();


const renderPosts = async () => {
  const ul = document.querySelector("ul");

  post.news.forEach((element) => {
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

    const acess = document.createElement("button");
    acess.innerText = "Acessar Conteúdo";
    acess.classList.add("acess");

    acess.addEventListener("click", () => {
      localStorage.setItem("idPost", JSON.stringify(element.id));

      window.location.replace(`pages/post/index.html`);
    });

    divPostText.append(titlePost, descriptionPost, acess);

    li.append(imgUser, divPostText);

    ul.append(li);
  });
};

renderPosts();

export { renderPosts };

import { eventFilter } from "./filterBtn.js";

// eventFilter()












let page = 1


async function infinitePost() {
  const dataPost = await infiniteRequest(page);

  if (dataPost.nextPage) {
    dataPost.news.forEach((element) => {
      renderPosts(element);
    });
   page++

  }

}

const ul = document.querySelector("ul");

const observer = new IntersectionObserver((teste) => {
//   infinitePost();
});

observer.observe(ul);
