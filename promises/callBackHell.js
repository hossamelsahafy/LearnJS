function makeitRed(e) {
    e.target.style.color = "red";
}
let p = document.querySelector(".test");
p.addEventListener("click", makeitRed);
function iAmAcallBack() {
        console.log('I am A CallBack function');
  };

setTimeout(iAmAcallBack, 2000);

setTimeout(() => {
    console.log("Download Photo From URL");
    setTimeout(() => {
        console.log("Resize Photo");
        setTimeout(() => {
            console.log("Add Logo To The Photo");
            setTimeout(() => {
                console.log("Show Photo In WebSite");
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);
