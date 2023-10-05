
let open = document.getElementById("mobile");
hide.onclick = function(){
    open.style.right= "0%";
}
let close = document.getElementById("mobile");
close.onclick= function(){
    close.style.right= "-100%"; 
}



const answer = document.getElementById("answer")
        const arrow = document.getElementById("arrow")
        arrow.addEventListener("click", () =>{
            if(arrow.click){
                answer.style.display="block"
            }else{
                answer.style.display="none"
            }
        })