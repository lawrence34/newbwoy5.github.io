$(document).ready(function() {
    
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
    
     var typingVal = typing.innerHTML,
       
         start = 0,

         end = 0,

         clear =  setInterval(function() {
    
     var output = typingVal.substr(start,end);
        
     typing.innerHTML = output + "<span id='cursor'>|</span>";
    
      end = end + 1;
    
     if(output === typingVal) {
        
      clearInterval(clear);
         
    }

    },100);

  });

