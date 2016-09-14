$(document).ready(function(){
    // Condition d'affichage du bouton
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $('.go_top').fadeIn();
        }
        else{
            $('.go_top').fadeOut();
        }
    });
    // Evenement au clic
    $('.go_top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});