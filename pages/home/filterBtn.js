import {renderPosts} from "./index.js"




function eventFilter() {
    const filterButtons = document.querySelectorAll(".btnCategory");
    const ul = document.querySelector("ul");
  
    filterButtons.forEach((button) => {
        
      button.addEventListener("click", () => {

        ul.innerHTML = "";
  
        const filter = button.innerText;
  
        if (filter === "Todos") {

          renderPosts();
        }
        // const filteredPosts = filterPost(filter);
  
        // createCard(filteredPosts);
      });
    });
  }
  
  function filterPost(text) {

    let teste = renderPosts()

    const post = products.filter((products) =>
      products.category.includes(text)
    );
  
    return post
  }
  


export {eventFilter}