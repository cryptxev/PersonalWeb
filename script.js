const links = document.querySelectorAll(".scroll");
const sections = document.getElementsByTagName("section");
links.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        links.forEach(linkL => {
            linkL.style.backgroundColor = "var(--reddish-black)"
        })
        const targetID = this.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetID);

        if(targetEl){
            const elTop = targetEl.getBoundingClientRect().top;
            const elHeight = targetEl.offsetHeight;
            const viewHeight = window.innerHeight;
            const scroll = window.pageYOffset + elTop - (viewHeight / 2) + (elHeight / 2);
            window.scrollTo({
                top: scroll,
                behavior: 'smooth'
            });
            targetEl.style.backgroundColor = "var(--dark-black)"
        }
    });  
    let length = sections.length;
    for(let i = 0; i<length; i++){
        if (link == sections[i]){
            link.addEventListener('mouseover', function(){
            link.style.backgroundColor = "var(--dark-black)"
        })
        link.addEventListener('mouseout', function(){
            link.style.backgroundColor = "var(--reddish-black)"
        })
        }
    } 
});

let offsetOld = 0;

document.addEventListener("scroll", hideNav);


function hideNav(){
    const header = document.getElementById("header");
    let offset = window.pageYOffset;
    if(offset>offsetOld){
        header.style.opacity = "0";
        header.style.top = "-100px";
    }else if(offset < offsetOld){
        header.style.top = "0";
        header.style.opacity = "1";
    } 
    offsetOld = offset;
}

let shown = false;
function showMenu(){
    const menu = document.getElementById("dropdown");
    if(!shown){
        menu.style.display = "flex";
        shown = true;
    }else{
        menu.style.display = "none";
        shown = false;
    }
}