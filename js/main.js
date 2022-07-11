let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button bosildi");
    formValidation();
});
  



let formValidation = () => {
    if(input.value === ""){
        msg.innerHTML = "Bo'sh bo'lishi mumkin emas";
        console.log("Failure");
    }
    else{
        console.log("Sucses");
        msg.innerHTML = "";
        acceptData();
    }
};


let data = {};

let acceptData = () => {
    data["text"] = input.value;
    createPost();
    // console.log(data);
};

let createPost = () => {
    posts.innerHTML += `
        <div>
            <p>${data.text}</p>
            <span class="options">
                <i onClick="editPosts(this)" class="fas fa-edit"></i>
                <i onClick="deletePosts(this)" class="fas fa-trash-alt"></i>
            </span>
        </div>
    `;
    input.value = '';
};

let deletePosts = (e) => {
    e.parentElement.parentElement.remove();
  };
  

let editPosts = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};
  