$(document).ready(function ()  {
    $('#mycarousel').carousel({
        interval: 2000
    })
    $('#carousel-button').click(function () {
        if ($('#carousel-button').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('pause')
            $('#carousel-button').children('span').removeClass('fa-play').addClass('fa-pause')
        }
        else{
            $('#mycarousel').carousel('cycle')
            $('#carousel-button').children('span').removeClass('fa-pause').addClass('fa fa-play')
        }
    })
    $('#login-btn').click(function () {
        $('#loginmodal').modal()
    })
    $('#reserve-btn').click(function() {
        $('#reservemodal').modal()
    })
})