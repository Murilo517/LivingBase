const myHeaders = {
  "Content-Type": "application/json",
};

const requestPost = async () => {
  try {
    const request = await fetch(
      "https://m2-api-living.herokuapp.com/news?page=1",
      {
        method: "GET",
        headers: myHeaders,
      }
    );
    const res = await request.json();

    localStorage.setItem("post", JSON.stringify(res));

    return res;
  } catch (err) {
    console.log(err);
  }
};

const chosenPost = async () => {
  try {
    const request = await fetch(
      `https://m2-api-living.herokuapp.com/news/${getLocalPost()}`,
      {
        method: "GET",
        headers: myHeaders,
      }
    );

    const res = await request.json();

    return res
  } catch(err){
    console.log(err);
  }
};

chosenPost()



function getLocalPost() {
  let postId = JSON.parse(localStorage.getItem("idPost"));

  return postId;
}



const infiniteRequest = async(page)=>{

  try {
    const request = await fetch(
      `https://m2-api-living.herokuapp.com/news?page=${page}`,
      {
        method: "GET",
        headers: myHeaders,
      }
    );
    const res = await request.json();

    localStorage.setItem("post", JSON.stringify(res));

    return res;
  } catch (err) {
    console.log(err);
  }



}






export { requestPost, chosenPost,infiniteRequest};
