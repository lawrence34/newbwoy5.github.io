$(document).ready(function() {
   
    $('img:not(#author1)').hover(function() {
        $(this).fadeTo('normal',.5);
    }, 
      function() {
        $(this).fadeTo('normal',.9);
    });
    
    $('#skype').click(function() {
        alert("My Skype user name is newbwoy.dope, feel free to add me lets talk.");
    });
    
    $('a[href="#about-me"]').click(function() {
        $('html,body').animate({'scrollTop':$('#about-me').offset().top},1000);
    });
    
    $('a[href="#portfolio"]').click(function() {
        $('html,body').animate({'scrollTop':$('#portfolio').offset().top},1000);
    });
    
    $('a[href="#contact-me"]').click(function() {
        $('html,body').animate({'scrollTop':$('#contact-me').offset().top},1000);
    });
    
    $("#top").click(function() {
        $('html,body').animate({'scrollTop':0},1000);
    });
});

 