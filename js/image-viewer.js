const heroImage = document.getElementById('hero-image');
heroImage.dataset.next = heroImage.src;
const links = document.getElementsByClassName('menu-item');
for(let i=0;i < links.length; i++){
    links[i].onclick = handleClick
}
function handleClick(){
    if(this.dataset.image !=heroImage.dataset.next) {
    this.classList.remove('button');
    this.classList.add('selected');
    let siblings = this.parentElement.children;
    for(let i=0; i < siblings.length; i++){
        if (siblings[i]!=this){
            siblings[i].classList.remove('selected');
            siblings[i].classList.add('button');
        }
    }
    heroImage.style.opacity = 0;
    heroImage.style.transition = "opacity 0.2s"
    heroImage.dataset.next = this.dataset.image;
    heroImage.ontransitionend = function(event){
        heroImage.style.opacity =1;
        heroImage.src = event.target.dataset.next;


    }
    }

}