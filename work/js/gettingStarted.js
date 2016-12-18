/**
 * Created by User on 14/12/2016.
 */

/** Specific JQuery for the getting started page. Mainly just animations **/

$(document).ready(function () {

    //page 1 code
    $("#start-button1").click(function () {
        $(".hide-all").hide();
        $("#code1-line-5").animate({backgroundColor: 'transparent'}, 0);
        a_line1();
        $("#d1-rtn-addr-val").promise().done(function () {
            a_line2();
            $("#d1-name-val").promise().done(function () {
                a_line3();
                $("#d1-age-val").promise().done(function () {
                    a_line4();
                    $("#d1-phn-num-val").promise().done(function () {
                        a_line5();
                    });
                });
            });
        });
    });

    //line 1 function
    var a_line1 = function () {
        $("#code1-line-1").animate({backgroundColor: '#ffff00'}, 1000);
        $(".table .stack-bottom").delay(200).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},100);
        $(".table .stack-top").delay(200).animate({borderTopWidth: '2px', borderTopColor: 'black'},100);
        $(".table .stack-left").delay(200).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},100);
        $(".table .stack-right").delay(200).animate({borderRightWidth: '2px', borderRightColor: 'black'},100);
        $("#d1-rtnval").delay(1200).show(400);
        $("#d1-rtn-addr").delay(1200).show(400);
        $("#d1-rtn-addr-val").delay(1600).show(400);

    }

    //line 2 function
    var a_line2 = function () {
        $("#code1-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d1-name").delay(1000).show(400);
        $("#d1-name-val").delay(1400).show(400);
    }

    //line 3 function
    var a_line3 = function () {
        $("#code1-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d1-age").delay(1000).show(400);
        $("#d1-age-val").delay(1400).show(400);
    }

    //line 4 function
    var a_line4 = function () {
        $("#code1-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d1-phn-num").delay(1000).show(400);
        $("#d1-phn-num-val").delay(1400).show(400);
    }

    //line 5 function
    var a_line5 = function () {
        $("#code1-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d1-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var unhighlight_1 = function () {
        $("#code1-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code1-line-5").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var showBorders = function () {
        $(".table .stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders

    var hideBorders = function () {
        $(".table .stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code1-line-1").click(function(){
        $("#step-button1").removeClass("disabled");
        $(".hide-all").hide();
        hideBorders();
        unhighlight_1();
        currentLine = 1;
    });

    $("#code1-line-2").click(function(){
        $("#step-button1").removeClass("disabled");
        showBorders();
        $(".hide-all").hide();
        $(".d1-show1").show();
        unhighlight_1();
        currentLine = 2;
    });

    $("#code1-line-3").click(function(){
        $("#step-button1").removeClass("disabled");
        $(".hide-all").hide();
        $(".d1-show1").show();
        $(".d1-show2").show();
        unhighlight_1();
        currentLine = 3;
    });

    $("#code1-line-4").click(function(){
        $("#step-button1").removeClass("disabled");
        $(".hide-all").hide();
        $(".d1-show1").show();
        $(".d1-show2").show();
        $(".d1-show3").show();
        unhighlight_1();
        currentLine = 4;
    });

    $("#code1-line-5").click(function(){
        $("#step-button1").removeClass("disabled");
        $(".hide-all").hide();
        $(".d1-show1").show();
        $(".d1-show2").show();
        $(".d1-show3").show();
        $(".d1-show4").show();
        unhighlight_1();
        currentLine = 5;
    });

    $("#step-button1").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            a_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            a_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            a_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            a_line4();
            currentLine = 5;
        }
        else if (currentLine == 5) {
            a_line5();
            $("#step-button1").addClass("disabled");
            currentLine = 0;
        }

    });
});