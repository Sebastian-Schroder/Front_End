

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
a = document.getElementsByTagName("h1")
for(i in a){
    a[i].onmouseover = event =>{
        let iterations =0;
    
        const interval = setInterval(()=>{
            event.target.innerText = event.target.dataset.value.split("")
            .map((letter,index)=>{
                
                if(index<iterations){
                    return event.target.dataset.value[index];
                }
                
                return letters[Math.floor(Math.random()*26)]
                
            })
            .join("");
            iterations+= 1/3;
            
    
            if(iterations>event.target.dataset.value.length) {clearInterval(interval)};
    
        },30);
    
    }; 
}

// document.querySelector("h1").onmouseover = event =>{
//     let iterations =0;

//     const interval = setInterval(()=>{
//         event.target.innerText = event.target.innerText.split("")
//         .map((letter,index)=>{
            
//             if(index<iterations){
//                 return event.target.dataset.value[index];
//             }
            
//             return letters[Math.floor(Math.random()*26)]
            
//         })
//         .join("");
//         iterations+= 1/3;
        

//         if(iterations>event.target.dataset.value.length) {clearInterval(interval)};

//     },30);

// }; 