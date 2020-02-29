const eventButton = {
    apply(button , func){
        button.addEventListener('click' , eventButton[func]())
    },
    appearForm(){
        const registerDoner = document.querySelector(".register")
        return registerDoner.classList.toggle("hide")
    }
}
