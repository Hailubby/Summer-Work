/**
 * Created by User on 13/12/2016.
 */
/** jquery code common to all pages, eg hiding divs, page initialisations etc**/

$(document).ready(function () {
    //hides all divs except the first one
    $(".anim-panel-container > div").each(function (element) {
        if(element != 0){
            $(this).hide();
        }
    });

    var currAnimId = "anim-1";
    //next button click function, shows next div
    $("#next").click(function () {
        $("#prev").removeClass("disabled");

        var prevAnimId = $(".anim-panel-container > div:visible").attr('id');
        $("#"+prevAnimId+"-btn").removeClass("active");

        currAnimId = $(".anim-panel-container > div:visible").next().attr('id');
        $("#"+currAnimId+"-btn").addClass("active");


        $(".anim-panel-container > div:visible").next().show().prev().hide();
        if ($(".anim-panel-container > div:visible").next().length == 0) {
            $("#next").addClass("disabled");
        }
    });

    //prev button click function, shows previous div
    $("#prev").click(function () {
        $("#next").removeClass("disabled");

        var prevAnimId = $(".anim-panel-container > div:visible").attr('id');
        $("#"+prevAnimId+"-btn").removeClass("active");

        currAnimId = $(".anim-panel-container > div:visible").prev().attr('id');
        $("#"+currAnimId+"-btn").addClass("active");

        $(".anim-panel-container > div:visible").prev().show().next().hide();
        if ($(".anim-panel-container > div:visible").prev().length == 0) {
            $("#prev").addClass("disabled");
        }
    });

    //button click on tool bar shows appropriate div
    $("#anim-1-btn").click(function () {
        if (!($(this).attr('id') === (currAnimId+"-btn"))) {
            $("#"+currAnimId+"-btn").removeClass("active");
            $("#"+currAnimId).hide();
            currAnimId = $(this).attr('id').slice(0,-4);
            $("#"+currAnimId).show();
            $("#"+currAnimId+"-btn").addClass("active");

            $("#next").removeClass("disabled");
            $("#prev").addClass("disabled");
        }
    });

    $("#anim-2-btn").click(function () {
        if (!($(this).attr('id') === (currAnimId+"-btn"))) {
            $("#"+currAnimId+"-btn").removeClass("active");
            $("#"+currAnimId).hide();
            currAnimId = $(this).attr('id').slice(0,-4);
            $("#"+currAnimId).show();
            $("#"+currAnimId+"-btn").addClass("active");

            $("#next").removeClass("disabled");
            $("#prev").removeClass("disabled");
        }
    });

    $("#anim-3-btn").click(function () {
        if (!($(this).attr('id') === (currAnimId+"-btn"))) {
            $("#"+currAnimId+"-btn").removeClass("active");
            $("#"+currAnimId).hide();
            currAnimId = $(this).attr('id').slice(0,-4);
            $("#"+currAnimId).show();
            $("#"+currAnimId+"-btn").addClass("active");

            $("#next").addClass("disabled");
            $("#prev").removeClass("disabled");
        }
    });
});
