/**
 * Created by User on 16/02/2017.
 */

/** Specific JQuery for the classes page. Mainly just animations **/

$(document).ready(function () {
    
    //panel 1
    //panel 1 code 1
    var currentLine1a = 1;
    $("#code1a-line-1").addClass("yellow");

    $("#start-button-1a").click(function () {
        currentLine1a = 1;
        $(".d1a-hide-all").hide();
        $("#d1a-string-top").removeClass("stack-string-top");
        $("#d1a-string-mid").removeClass("stack-string-middle");
        $("#d1a-string-bot").removeClass("stack-string-bottom");
        p1_c1_hideBorders();
        $(".d1a-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-1a").animate({backgroundColor: 'transparent'}, 0);
        p1_c1_line1();
        $("#d1a-rtn-addr-val").promise().done(function () {
            p1_c1_line2a();
            $(".stack-class-1a").promise().done(function () {
                p1_c1_line2b();
                $("#d1a-name-val").promise().done(function () {
                    p1_c1_line2c();
                    $("#d1a-b-val").promise().done(function () {
                        p1_c1_line3();
                        $("#d1a-rtnval-val").promise().done(function () {
                            p1_c1_line4();
                        });
                    });
                });
            });
        });
    });

    //p1 c1 line 1 function
    var p1_c1_line1 = function () {
        $("#code1a-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d1a-link").removeClass("yellow");
        $(".table .stack-heap-1a").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d1a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1a-rtnval").delay(1200).show(400);
        $("#d1a-rtn-addr").delay(1200).show(400);
        $("#d1a-rtn-addr-val").delay(1600).show(400);
    };

    //p1 c1 line 2a function
    var p1_c1_line2a = function () {
        $("#code1a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        $("#class1a-line-3").delay(1000).animate({backgroundColor: '#ffff00'}, 1000);
        $(".stack-class-1a").delay(2000).animate({backgroundColor: '#e8e8e8'}, 500);
    };

    //p1 c1 line 2b function
    var p1_c1_line2b = function () {
        $("#class1a-line-1").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d1a-string-top").addClass("stack-string-top");
            $("#d1a-string-mid").addClass("stack-string-middle");
            $("#d1a-string-bot").addClass("stack-string-bottom");
        }, 800);
        $("#d1a-name").delay(1000).show(400);
        $("#d1a-name-val").delay(1400).show(400);
    };

    //p1 c1 line 2c function
    var p1_c1_line2c = function () {
        $("#class1a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#class1a-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1a-r").delay(1000).show(400);
        $("#d1a-r-val").delay(1400).show(400);
        $("#d1a-g").delay(1800).show(400);
        $("#d1a-g-val").delay(2200).show(400);
        $("#d1a-b").delay(2600).show(400);
        $("#d1a-b-val").delay(3000).show(400);
    }

    //p1 c1 line 3 function
    var p1_c1_line3 = function () {
        $("#code1a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class1a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class1a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1a-rtnval-val").delay(1000).show(400);
    };

    //p1 c1 line 4 function
    var p1_c1_line4 = function () {
        $("#code1a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d1a-hide-all").delay(1000).hide(400);
        $("#code1a-line-4").promise().done(function () {
            p1_c1_hideBorders();
            $("#d1a-string-top").removeClass("stack-string-top");
            $("#d1a-string-mid").removeClass("stack-string-middle");
            $("#d1a-string-bot").removeClass("stack-string-bottom");
        });
    };

    //unhighlight all lines
    var p1_c1_unhighlight = function () {
        $("#code1a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-4").animate({backgroundColor: 'transparent'}, 0);

        $("#class1a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#class1a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class1a-line-3").animate({backgroundColor: 'transparent'}, 1000);
    };

    //show stack border
    var p1_c1_showBorders = function () {
        $(".table .d1a-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d1a-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d1a-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d1a-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-1a").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p1_c1_hideBorders = function () {
        $(".table .d1a-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d1a-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d1a-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d1a-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-1a").animate({backgroundColor: 'transparent'}, 0);
    };
});