$("#preamble-btn-1").hover(function() {
    $("#preamble-btn-2").css({
        "background-color": "blue",
        "font-size": "1.5em",
    
    });
});




    $("#preamble-btn-2").hover(function() {
        $("#preamble-btn-1").css({
            "transform": "rotate(360deg)",
        
        });
    });

$("#preamble-btn-2").hover(function(){

    $("#preamble-btn-1").toggleClass("rotate")

})

$(".header-left").hover(function(){
    $("#menu").toggleClass("active")
})

$(document).scroll(function(){
    let distance=$(document).scrollTop()
    let height = $(document).height()=($window).height();
    let ratio = distance/height;

   $(".header-right").html(ratio)
    "transform"; "rotate"("360 + ratio")
})


$(".album-thumbs").flickity({
    wrapAround: true,
    pageDots: false

})


// fade and dots 
