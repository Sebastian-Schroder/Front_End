
const delay = ms => new Promise(res =>setTimeout(res,ms));

const gif_function = async () =>{
    await delay(3000);

    var preloader = document.getElementById("preloader");
    var preloader_gif = document.getElementById("preloader_gif");
    var loading_bar = document.getElementsByClassName("loading");
    preloader.remove();
    preloader_gif.remove();
    while(loading_bar.length>0){
        loading_bar[0].parentNode.removeChild(loading_bar[0]);
    }
    

}

gif_function();

