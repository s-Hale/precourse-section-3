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

    //reservations

    $("#searchButton").on('click', function() {
        var branch = $('#branchMenu').val();
        var guestNum = $('#numoguests').val();
        var arrDate = $('#chosenday').val();
        var peopleString = guestNum <= 1 ? "person" : "people";
        var newArrDate = arrDate.split('-');
        var monthsArr = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        var monthNum = parseInt(newArrDate[1]);
        var finalRes = monthsArr[monthNum - 1];
        var newDateWordMsg = newArrDate[2] + " " + finalRes + " " + newArrDate[0];

        if (!guestNum || !arrDate || !branch) {
            var error = "please ensure you have entered all required data";
            $(".resultJSstring").hide().fadeIn(200).text(error);
        } else {

            var fullMsg = "you have selected our " + branch + " branch for " + guestNum + " " + peopleString + "," + " arriving on " + newDateWordMsg + ".";
            $(".resultJSstring").hide().fadeIn(700).text(fullMsg);
        }


    });



});