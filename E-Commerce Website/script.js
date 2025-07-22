const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
};

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img"); 
var product = document.getElementsByClassName("pro");

// smallimg[0].addEventListener("click", ()=> {
//   MainImg.src = smallimg[0].src;
// })
// smallimg[1].addEventListener("click", ()=> {
//   MainImg.src = smallimg[1].src;
// })
// smallimg[2].addEventListener("click", ()=> {
//   MainImg.src = smallimg[2].src;
// })
// smallimg[3].addEventListener("click", ()=> {
//   MainImg.src = smallimg[3].src;
// })

Array.from(smallimg).forEach(img => {
  img.addEventListener("click", () => {
    MainImg.src = img.src;
  });
})


Array.from(product).forEach(img => {
    img.addEventListener("click", ()=> {
        window.location.href="sproduct.html"
    })
})


