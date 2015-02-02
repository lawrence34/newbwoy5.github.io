$(document).ready(function() {
   
    $('img:not(#author1)').hover(function() {
        $(this).fadeTo('normal',.5);
    }, 
      function() {
        $(this).fadeTo('normal',.9);
    });
    
    TweenMax.staggerFrom('img',0.5,{opacity:0,y:200,delay:0.5},0.2);
    
    
});

 