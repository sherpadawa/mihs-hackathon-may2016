$( document ).ready( function() {
    
    
    $(window).keydown(function(event){
         if(event.keyCode==37) {
            moveleft();
            
        }
         if(event.keyCode==39) {
            moveright();
         }    
        
    });
   
    
    
    
    var seasons=["winter","spring","beach"];
    
    
    // Starts the game and change the background
    
    $("#gamestart").on("click",function(){
        
        startseason(seasons[0]);
        
    });
});

    // Start season winter 
    
    function startseason(season){
        $("#container").addClass(season);
        screensize();
    }
    
    
//Take the width of your screen
    function screensize() {
      
        var width = $("#container").width();  
        var widthsize =width % 100 ;
        var clothingcounts = Math.floor(width/100);
        var closetmargin =widthsize/2+"px";
         insertclothes(clothingcounts);
       $("#closet").css({"margin-left":closetmargin}) ;
    }


    function insertclothes(clothingcounts) {
        var clothescontainer =$("#closet") ;
        for (var i = 0; i < clothingcounts; i++) {
            var left= i*100+"px";
        
            $('<div/>').addClass("clothes").css({left:left}).appendTo(clothescontainer);
    
        }
        
    }


    function moveleft() {
        console.log("moveleft");
      var left = $("#person").position().left;
      
      var newposition = left -18;
      if(newposition<=0) {
          newposition=0
      }
    $('#person').css("left",newposition)    
      console.log(left);
    }
    
    
     function moveright() {
        console.log("moveright");
        var right = $("#person").position().left;
        var newposition = right +18;
      if(newposition>=window.innerWidth -$("#person").width()) {
          newposition=window.innerWidth -$("#person").width()
      }
        
         $('#person').css("left",newposition);
         console.log(right);
    }  
// collision dectection
     var rect1 = {x: 5, y: 5, width: 50, height: 50}
     var rect2 = {x: 20, y: 10, width: 10, height: 10}
     /*
     if (rect1.x < rect2.x + rect2.width 
   rect1.x + rect1.width > rect2.x 
   rect1.y < rect2.y + rect2.height 
   rect1.height + rect1.y > rect2.y) {}*/