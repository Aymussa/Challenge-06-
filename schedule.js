setInterval(
    function () {
        $("#currentTime").text(moment().format("DDD MMM, YYYY hh:mm:ss"))

    }, 1000)

    // Timeblock(
    //     function (){$('#9am').text("9am");
    // })
      $("button").on("click", function(event){
        console.log($(event.target).siblings("textarea").val);

      })


    $("textarea").text(localStorage.setItem("#9am", "9am slot"))

    $("textarea").text(localStorage.getItem("#9am", "Button"));

     $("textarea").addClass("future");

