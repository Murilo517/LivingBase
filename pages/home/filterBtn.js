import {createPost, renderPosts} from "./index.js"
import { requestPost } from "./requests.js";




async function eventFilter() {
    const filterButtons = document.querySelectorAll(".btnCategory");
    const ul = document.querySelector("ul");
  
    filterButtons.forEach((button) => {
        
      button.addEventListener("click", async () => {

        ul.innerHTML = "";
  
        const filter = button.innerText;
  
        if (filter === "Todos") {
          
         renderPosts()
        }

         const filteredPost = await filterPost(filter)
          
         filteredPost.forEach(element =>{
         
          createPost(element)

         })
 
      });
    });
  }
  
 async function filterPost(text) {

    let postApi = await requestPost()


    const filteredPost =  postApi.news.filter((post) =>
   
      post.category === text
    );

    return filteredPost
  }
  


export {eventFilter}


