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

    /** These are the other animations on the Index page. */
    $('.button').hover(function() {
        $(this).css({'background': '#DDD'});
    }, function() {
        $(this).css({'background': '#D0D0D0'});
    });

});
