//Create New Event
var body = new Event('body');

//Check if body is ready, every 10 milisecond
var intID = setInterval(function(){
    if(document.body){
        document.dispatchEvent(body);
        clearInterval(intID);
    }                    
},10)

//Create new Fragment
var newFragment = function(html){
    var fragment = document.createDocumentFragment();
    var temp = document.createElement('div');
    
    temp.innerHTML = html;
    
    while(temp.firstChild)
        fragment.appendChild(temp.firstChild);
    
    return fragment;
};

//Create Preloader
var preloader = newFragment('<div id="preloader" class="overlay"> <img src="img/spinner.gif" class="spinner"> </div>');

//Use Preloader when body is ready
document.addEventListener('body', function(){
    document.body.insertBefore(preloader, document.body.childNodes[0]);
});

//Remove Preloader
var removePreloader = function(){
    var preloader = document.getElementById('preloader');
    preloader.style.opacity = 1;
    
    var animationID = setInterval(function(){
        preloader.style.opacity -= 0.1;
        if(preloader.style.opacity <= 0.2){
            preloader.parentNode.removeChild(preloader);
            clearInterval(animationID);
        }
    },70);
};

//Remove Preloader when body is loaded
window.addEventListener('load', removePreloader);

//Check if body is ready. 
document.addEventListener('body', function(){ 
    console.log('body is ready');
})