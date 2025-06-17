
let bu = document.getElementById("bu")

bu.addEventListener("click",()=>{
     let image_div = document.createElement("div")
     document.querySelector(".gallery").append(image_div)

     let img = document.createElement("img")
     image_div.append(img)
     img.alt = "image"
     img.src =  'https://picsum.photos/200/150?random=' + Math.floor(Math.random() * 1000);
     img.style.margin = "12px"
})