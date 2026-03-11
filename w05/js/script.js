$("#preamble-btn-1").click(function() {
    $("#preamble-btn-2").css({
        "background-color": "blue",
        "font-size": "1.5em",
    
    });
});




    $("#preamble-btn-2").click(function() {
        $("#preamble-btn-1").css({
            "transform": "rotate(360deg)",
        
        });
    });

$("#preamble-btn-2").click(function(){

    $("#preamble-btn-1").toggleClass("rotate")

})
