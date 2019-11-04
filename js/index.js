$(function(){
    $("#nav li").on("click","a",function(){
        var url = $(this).attr("url");
        $("#wrapper").load(url);
    });

    $("#nav li:nth-child(1)>a").trigger("click");

})
    
    
  
