$(document).ready(function(){

    /** These are the animations on the Projects page. */
    $('.categorytab').click(function() {
        $('.categorytab').removeClass('selectedtab');
        $(this).addClass('selectedtab');
        var category = $(this).text();
        if (category == 'Featured') {
            $('.project').hide();
            $('.featured').show();
        } else if (category == 'Personal') {
            $('.project').hide();
            $('.personalproj').show();
        } else if (category == 'Work') {
            $('.project').hide();
            $('.workproj').show();
        } else {
            $('.project').hide();
            $('.school').show();
        }
    });

    $('.projpic').hover(function() {
        $(this).find('.pic1').hide();
        $(this).find('.pic2').show();
    }, function() {
        $(this).find('.pic2').hide();
        $(this).find('.pic1').show();
    });

    /** These are the animations on the Blog page. */

    $('.barpoint').hover(function() {
        var color = $(this).css('color');
        if (color == 'rgb(153, 153, 153)') {
            $(this).css({'color': 'black'});
        }
    }, function() {
        var color = $(this).css('color');
        if (color == 'rgb(0, 0, 0)') {
            $(this).css({'color': '#999'});
        }
    });

    $('.barpoint').click(function(event) {
        $('.barpoint').css('color', '#999');
        $('.all').css('color', '#61B329');
        $(this).parent().children().css('color', '#999');
        $(this).css('color', '#61B329');
        var id = $(this).attr('id');
        var category = "." + id;
        if ($(this).hasClass('all')) {
            $('.blogpost').show();
        } else {
            $('.blogpost').hide();
            $(category).show();
        }
    });

});
