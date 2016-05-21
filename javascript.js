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
    
    var clothes = [
    
        { 'season' : 'beach', 'name' : 'sandals' }, 
        { 'season' : 'beach', 'name' : 'hawaiian'},
        { 'season' : 'beach', 'name' : 'hat'},
        { 'season' : 'beach', 'name' : 'shorts'},
        
        { 'season' : 'winter', 'name' : 'boots'},
        { 'season' : 'winter', 'name' : 'hat'},
        { 'season' : 'winter', 'name' : 'mittens'},
        { 'season' : 'winter', 'name' : 'sweater'},
        
        { 'season' : 'western', 'name' : 'cowboyboots'},
        { 'season' : 'western', 'name' : 'cowboyhat'},
        { 'season' : 'western', 'name' : 'cowboyjacket'},
        { 'season' : 'western', 'name' : 'lasso'},
        
        { 'season' : 'fancy', 'name' : 'dress'},
        { 'season' : 'fancy', 'name' : 'suit'},
        { 'season' : 'fancy', 'name' : 'shoe'},
        { 'season' : 'fancy', 'name' : 'hat'},
                       
    ];
    
    
    function randomclothes() {
        var randomnumber = Math.floor(Math.random() * (clothes.length));
        return clothes[randomnumber];
            
    }
    
    
    // Starts the game and change the background
    
    $("#gamestart").on("click",function(){
        
        startseason(seasons[0]);
        
    });


    // Start season winter 
    
    function startseason(season){
        $("#background").removeClass().addClass(season+'-background');
        screensize();
       scoredisplay();
       setInterval(moveclothes,500);
       
    }
    
    
    // The score
    
    var scoreValue = 0;
    
    function scoredisplay(){
        $('#score span').text( scoreValue );
    }
    
    function scoreup(){
        scoreValue++;
        scoredisplay();
    }
    
    function scoredown(){
        scoreValue--;
        scoredisplay();
    }
    
    function score(clothingItem) {
        var currentseason= seasons[0];
        if(currentseason===clothingItem.season){
            scoreup(); 
        }
        else{
            scoredown();
        }
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
            var random = randomclothes();
            var classname= random.season+"-"+random.name;
            $('<div/>').addClass("clothes").addClass(classname).css({left:left}).appendTo(clothescontainer);
    
        }
        
    }
    
    function moveclothes() {
        
        
        var clothes = $(".clothes");
        for(var i = 0; i <  clothes.length; i++){
           var item = $(clothes[i])
           var top= item.position().top;
           var newposition = top +20;
          item.css("top", newposition);
          
          // collision dectection
          console.log(item)
          var rect1 = $("#person")[0].getBoundingClientRect();
          var rect2 = $(item).getBoundingClientRect();

if (rect1.left< rect2.left + rect2.width &&
   rect1.left + rect1.width > rect2.left &&
   rect1.top < rect2.top + rect2.height &&
   rect1.height + rect1.top > rect2.top) {
    // collision detected!
    console.log("we collided");
}
          
        }
        
        
    }


    function moveleft() {
        
      var left = $("#person").position().left;
      
      var newposition = left -18;
      if(newposition<=0) {
          newposition=0
      }
    $('#person').css("left",newposition)    
    }
    
    
     function moveright() {
        var right = $("#person").position().left;
        var newposition = right +18;
      if(newposition>=window.innerWidth -$("#person").width()) {
          newposition=window.innerWidth -$("#person").width()
      }
        
         $('#person').css("left",newposition);
    }  

});