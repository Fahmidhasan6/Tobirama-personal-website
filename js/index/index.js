$(document).ready(function () {
    "use stricts";
    var $window = $(window);
    //loading event
    $window.on("load", function () {
        $(".loading").slideUp(500, function () {
            $(this).remove();
        });
    });
});