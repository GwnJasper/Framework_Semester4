//Nieuw event aanmaken
var body = new Event('body');

//check of body beschikbaar is, elke 10 miliseconde
var intID = setInterval(function(){
    if(document.body){
        document.dispatchEvent(body);
        clearInterval(intID);
    }                    
},10)

//aanmaken van nieuw html fragment
var newFragment = function(html){
    var fragment = document.createDocumentFragment();
    var temp = document.createElement('div');
    
    temp.innerHTML = html;
    
    while(temp.firstChild)
        fragment.appendChild(temp.firstChild);
    
    return fragment;
};

//maken van de preloader.
var preloader = newFragment('<div id="preloader" class="overlay"> <img src="img/spinner.gif" class="spinner"> </div>');

//preloader gebruiken wanneer body beschikbaar is
document.addEventListener('body', function(){
    document.body.insertBefore(preloader, document.body.childNodes[0]);
});

//Preloader weghalen
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

//haal preloader weg wanneer pagina volledig geladan is
window.addEventListener('load', removePreloader);





//Controle of body klaar is
document.addEventListener('body', function(){ 
    console.log('body is ready');
})