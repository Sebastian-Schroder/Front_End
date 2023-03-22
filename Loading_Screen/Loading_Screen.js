
const delay = ms => new Promise(res =>setTimeout(res,ms));

const gif_function = async () =>{
    await delay(3000);

    var preloader = document.getElementById("preloader");
    var preloader_gif = document.getElementById("preloader_gif");
    var loading_bar = document.getElementById("loading_bar");
    preloader.remove();
    preloader_gif.remove();
    loading_bar.remove();
    

}

gif_function();

