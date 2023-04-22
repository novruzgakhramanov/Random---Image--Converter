const imageContainerEl = document.querySelector(".image-container");
// console.log(imageContainerEl);

const btnEL = document.querySelector(".btn");

const resetEl = document.getElementById("reset")
// console.log(resetEl);


// console.log(btnEL)



btnEL.addEventListener ("click",()=> {
    imageNum = 10; 
    addNewImages ();
});

function addNewImages(){
    for(let index =0; index < imageNum; index++){
        let newImgEl = document.createElement("img")
        newImgEl.src =`https://picsum.photos/300?random=${Math.floor(
            Math.random() * 2000
          )}`;
          imageContainerEl.appendChild(newImgEl);
    } 
}


function reset (){
    location.reload();
    
    
}



resetEl.addEventListener("click",reset)