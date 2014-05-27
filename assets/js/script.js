$(document).ready(function(){

    /** These are the animations on the Index page. */
    
    $('.button').hover(function() {
        $(this).css({'background': '#DDD'});
    }, function() {
        $(this).css({'background': '#D0D0D0'});
    });

    /** These are the animations on the Projects page. */
    $('.categorytab').click(function() {
        $('.categorydescript').hide();
        $('.categorytab').removeClass('selectedtab');
        $(this).addClass('selectedtab');
        var category = $(this).text();
        if (category == 'All') {
            $('.project').show();
        } else if (category == 'Personal') {
            $('.project').hide();
            $('.personalproj').show();
        } else if (category == 'CS 61B') {
            $('.project').hide();
            $('.cs61b').show();
        } else {
            $('.project').hide();
            $('.cs61c').show();
        }
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
        $(this).parent().children().css('color', '#999');
        $(this).css('color', '#00B2EE');
        var id = $(this).attr('id');
        var title = " " + $(this).html() + '.';
        $('.blogpost').hide();
        if (id == 'alltime' | id=='all') {
            $('.blogpost').show();
            $('#nothere').hide();
        } else if (id == '201311') {
            $('#nothere').hide();
            $('.201311').show();
        } else if (id == '201312') {
            $('#nothere').hide();
            $('.201312').show();
        } else if (id == '201402') {
            $('#nothere').hide();
            $('.201402').show();
        } else if (id == '201404') {
            $('#nothere').hide();
            $('.201404').show();
        } else if (id == 'christianity') {
            $('.christianity').show();
            $('#nothere').append(title);
            $('#nothere').show();
        } else if (id == 'cs') {
            $('#nothere').hide();
            $('.cs').show();
        } else if (id == 'gov') {
            $('#nothere').hide();
            $('.gov').show();
        } else if (id == 'personal') {
            $('#nothere').hide();
            $('.personal').show();
        }
    });

});
