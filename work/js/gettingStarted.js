/**
 * Created by User on 14/12/2016.
 */

/** Specific JQuery for the getting started page. Mainly just animations **/

$(document).ready(function () {

    //page 1 code
    $("#start-button1").click(function () {
        $(".hide-all").hide();
        $("#code1-line-5").animate({backgroundColor: 'transparent'}, 0);
        a_line1()
        $("#td-rtnval1").promise().done(function () {
            a_line2();
            $("#td-i-val").promise().done(function () {
                a_line3();
                $("#td-j-val").promise().done(function () {
                    a_line4();
                    $("#td-k-val").promise().done(function () {
                        a_line5();
                    });
                });
            });
        });
    });

    //line 1 function
    var a_line1 = function () {
        $("#code1-line-1").animate({backgroundColor: '#ffff00'}, 1000);
        $("#td-rtnval1").delay(800).show(400);
    }

    //line 2 function
    var a_line2 = function () {
        $("#code1-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $("#td-i").delay(1000).show(400);
        $("#td-i-val").delay(1400).show(400);
    }

    //line 3 function
    var a_line3 = function () {
        $("#code1-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $("#td-j").delay(1000).show(400);
        $("#td-j-val").delay(1400).show(400);
    }

    //line 4 function
    var a_line4 = function () {
        $("#code1-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $("#td-k").delay(1000).show(400);
        $("#td-k-val").delay(1400).show(400);
    }

    //line 5 function
    var a_line5 = function () {
        $("#code1-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $("#td-rtnval-val1").delay(1000).show(400);
    }

    //unhighlight all lines
    var unhighlight_1 = function () {
        $("#code1-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code1-line-5").animate({backgroundColor: 'transparent'}, 0);
    }

    //stepping function
    var currentLine;
    $("#code1-line-1").click(function(){
        $("#step-button1").removeClass("disabled");
        $(".hide-all").hide();
        unhighlight_1();
        currentLine = 1;
    });

    $("#code1-line-2").click(function(){
        $("#step-button1").removeClass("disabled");
        unhighlight_1();
        currentLine = 2;
    });

    $("#code1-line-3").click(function(){
        $("#step-button1").removeClass("disabled");
        unhighlight_1();
        currentLine = 3;
    });

    $("#code1-line-4").click(function(){
        $("#step-button1").removeClass("disabled");
        unhighlight_1();
        currentLine = 4;
    });

    $("#code1-line-5").click(function(){
        $("#step-button1").removeClass("disabled");
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