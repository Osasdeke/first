var content = document.querySelectorAll(".inner-container");

content.forEach(function(words){
    words.addEventListener("click", function(){
        if(words.classList.contains("active")){
            
            words.classList.remove("active");
        }

        else{
            words.classList.add("active");

        }
    })
})