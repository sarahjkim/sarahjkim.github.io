$(document).ready(function(){

    /** These are the sidebar animations. */
    
    $('#sidebar').hover(function() {
        $('#sidebarfull').animate({"left": "0px"}, 400);
    }, function() {
    });
    
    $('#sidebarfull').hover(function() {
    }, function() {
        $(this).animate({"left": "-65px"}, 400);
    });

    $('#abouticon').hover(function() {
        $('#abouttag').show();
    }, function() {
        $('#abouttag').hide();
    });

    $('#workicon').hover(function() {
        $('#worktag').show();
    }, function() {
        $('#worktag').hide();
    });

    $('#projectsicon').hover(function() {
        $('#projectstag').show();
    }, function() {
        $('#projectstag').hide();
    });

    $('#blogicon').hover(function() {
        $('#blogtag').show();
    }, function() {
        $('#blogtag').hide();
    });

    $('#resumeicon').hover(function() {
        $('#resumetag').show();
    }, function() {
        $('#resumetag').hide();
    });

    $('#emailicon').hover(function() {
        $('#emailtag').show();
    }, function() {
        $('#emailtag').hide();
    });

    /** These are the animations on the Index page. */
    
    $('.button').hover(function() {
        $(this).css({'background': '#DDD'});
    }, function() {
        $(this).css({'background': '#D0D0D0'});
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

    $('.barpoint').click(function() {
        $(this).parent().children().css('color', '#999');
        $(this).css('color', '#00B2EE');
        var id = $(this).attr('id');
        $('.blogpost').hide();
        if (id == 'alltime' | id=='all') {
            $('.blogpost').show(400);
        } else if (id == '201311') {
            $('.201311').show(400);
        } else if (id == '201312') {
            $('.201312').show(400);
        } else if (id == 'christianity') {
            $('.christianity').show(400);
        } else if (id == 'cs') {
            $('.cs').show(400);
        } else if (id == 'gov') {
            $('.gov').show(400);
        } else if (id == 'personal') {
            $('.personal').show(400);
        }
    });

});
