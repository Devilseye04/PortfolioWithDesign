(function(){
    var menu= document.querySelector('ul'),
        menuLink = document.querySelector('#svg');

    menuLink.addEventListener('click',function(e){
        menu.classList.toggle('active');
        e.preventDefault();
    });
})();