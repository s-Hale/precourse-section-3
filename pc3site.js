$(document).ready(function() {

    $("#aboutClick").on("click", function() {
        $("#about").removeClass("hidden").siblings().addClass('hidden');
    });
    $("#galleryClick").on("click", function() {
        $("#gallery").removeClass("hidden").siblings().addClass('hidden');
    });
    $("#foodClick").on("click", function() {
        $("#food").removeClass("hidden").siblings().addClass('hidden');
    });
    $("#eventsClick").on("click", function() {
        $("#events").removeClass("hidden").siblings().addClass('hidden');
    });
    $("#contactClick").on("click", function() {
        $("#contact").removeClass("hidden").siblings().addClass('hidden');
    });
    $("#reservationsClick").on("click", function() {
        $("#reservations").removeClass("hidden").siblings().addClass('hidden');
    });
});