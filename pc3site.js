$(document).ready(function() {

    $("#aboutClick").on("click", function() {
        $("#about").removeClass("hidden").hide().fadeIn(800).siblings().addClass('hidden');
    });
    $("#galleryClick").on("click", function() {
        $("#gallery").removeClass("hidden").hide().fadeIn(800).siblings().addClass('hidden');
    });
    $("#foodClick").on("click", function() {
        $("#food").removeClass("hidden").hide().fadeIn(800).siblings().addClass('hidden');
    });
    $("#eventsClick").on("click", function() {
        $("#events").removeClass("hidden").hide().fadeIn(800).siblings().addClass('hidden');
    });
    $("#contactClick").on("click", function() {
        $("#contact").removeClass("hidden").hide().fadeIn(800).siblings().addClass('hidden');
    });
    $("#reservationsClick").on("click", function() {
        $("#reservations").removeClass("hidden").hide().fadeIn(800).siblings().addClass('hidden');
    });
});