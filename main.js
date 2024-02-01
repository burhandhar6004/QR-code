let input = document.querySelector("input");
let imgBox = document.querySelector(".imgBox")
let imgTag = document.querySelector("#imgTag");
let button = document.querySelector("button");



const qrGenerator = async () => {
    let response = await fetch(` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`);
   imgTag.setAttribute("src", response.url);
}


button.addEventListener('click', qrGenerator);