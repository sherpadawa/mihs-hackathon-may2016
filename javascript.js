$( document ).ready( function() {
    
    
    $(window).keydown(function(event){
       if(event.keyCode==37) {
            moveleft();
            
        }
   if(event.keyCode==39) {
            moveright();
   
   
   
    });
    
    
    var seasons=["winter","spring","beach"];
    
    $("#gamestart").on("click",function(){
        
        startseason(seasons[0]);
        
        
    });
    
    function startseazon(){
        
        
    };
    
});
    function moveleft() console.log("moveleft");