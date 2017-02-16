/**
 * Created by User on 14/12/2016.
 */

/** Specific JQuery for the getting started page. Mainly just animations **/

$(document).ready(function () {

    //panel 1
    //panel 1 code 1
    var currentLine1a = 1;
    $("#code1a-line-1").addClass("yellow");

    $("#start-button-1a").click(function () {
        currentLine1a = 1;
        $(".d1a-hide-all").hide();
        p1_c1_hideBorders();
        $(".d1a-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1a").animate({backgroundColor: 'transparent'}, 0);
        p1_c1_line1();
        $("#d1a-rtn-addr-val").promise().done(function () {
            p1_c1_line2();
            $("#d1a-age").promise().done(function () {
                p1_c1_line3();
                $("#d1a-age-val").promise().done(function () {
                    p1_c1_line4();
                    $("#d1a-print-l4").promise().done(function () {
                        p1_c1_line5();
                        $("#d1a-rtnval-val").promise().done(function () {
                            p1_c1_line6();
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
        $(".d1a-link").removeClass("green");
        $(".table .stack-heap-1a").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d1a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1a-rtnval").delay(1200).show(400);
        $("#d1a-rtn-addr").delay(1200).show(400);
        $("#d1a-rtn-addr-val").delay(1600).show(400);
    };

    //p1 c1 line 2 function
    var p1_c1_line2 = function () {
        $("#code1a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1a-age").delay(1000).show(400);
    };

    //p1 c1 line 3 function
    var p1_c1_line3 = function () {
        $("#code1a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d1a-age-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d1a-age-val").delay(1000).show(400);
    };

    //p1 c1 line 4 function
    var p1_c1_line4 = function () {
        $("#code1a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-4").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d1a-age-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d1a-print-l4").delay(1600).show(400);
    };

    //p1 c1 line 5 function
    var p1_c1_line5 = function () {
        $("#code1a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#d1a-age-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-5").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1a-rtnval-val").delay(1000).show(400);
    };

    //p1 c1 line 6 function
    var p1_c1_line6 = function () {
        $("#code1a-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-6").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d1a-hide-all").delay(1000).hide(400);
        $("#code1a-line-6").promise().done(function () {
            p1_c1_hideBorders();
        });
    };

    //unhighlight all lines
    var p1_c1_unhighlight = function () {
        $("#code1a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-6").animate({backgroundColor: 'transparent'}, 0);
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

    //stepping function
    $("#code1a-line-1").click(function(){
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-1").addClass("yellow");

        $(".d1a-hide-all").hide();
        p1_c1_hideBorders();
        p1_c1_unhighlight();

        p1_c1_line1();
        currentLine1a = 2;
    });

    $("#code1a-line-2").click(function(){
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-2").addClass("yellow");

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        p1_c1_unhighlight();

        p1_c1_line2();
        currentLine1a = 3;
    });

    $("#code1a-line-3").click(function(){
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-3").addClass("yellow");
        $("#d1a-age-val").animate({backgroundColor: 'transparent'}, 0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        p1_c1_unhighlight();

        p1_c1_line3();
        currentLine1a = 4;
    });

    $("#code1a-line-4").click(function(){
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-4").addClass("green");
        $("#d1a-age-val").animate({backgroundColor: 'transparent'}, 0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        p1_c1_unhighlight();

        p1_c1_line4();
        currentLine1a = 5;
    });

    $("#code1a-line-5").click(function(){
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-5").addClass("yellow");
        $("#d1a-age-val").animate({backgroundColor: '#5CB85C'}, 0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        $(".d1a-show4").show();
        p1_c1_unhighlight();

        p1_c1_line5();
        currentLine1a = 6;
    });

    $("#code1a-line-6").click(function(){
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-6").addClass("yellow");
        $("#d1a-age-val").animate({backgroundColor: 'transparent'}, 0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        $(".d1a-show4").show();
        $(".d1a-show5").show();
        p1_c1_unhighlight();

        p1_c1_line6();
        currentLine1a = 1;
    });

    $("#step-button-1a").click(function () {
        if (currentLine1a == 1) {
            //do line 1 things here
            $(".d1a-link").removeClass("yellow");
            $(".d1a-link").removeClass("green");
            $("#code1a-line-1").addClass("yellow");

            $(".d1a-hide-all").hide();
            p1_c1_hideBorders();
            p1_c1_unhighlight();

            p1_c1_line1();
            currentLine1a = 2;
        }
        else if (currentLine1a == 2) {
            //do line 2 things here
            p1_c1_line2();
            currentLine1a = 3;
        }
        else if (currentLine1a == 3) {
            //do line 3 things here
            p1_c1_line3();
            currentLine1a = 4;
        }
        else if (currentLine1a == 4) {
            //do line 4 things here
            p1_c1_line4();
            currentLine1a = 5;
        }
        else if (currentLine1a == 5) {
            p1_c1_line5();
            currentLine1a = 6;
        }
        else if (currentLine1a == 6) {
            p1_c1_line6();
            currentLine1a = 1;
        }

    });

    //panel 1 code 2
    var currentLine1b = 1;
    $("#code1b-line-1").addClass("yellow");

    $("#start-button-1b").click(function () {
        currentLine1b = 1;
        $(".d1b-hide-all").hide();
        p1_c2_hideBorders();
        $(".d1b-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1b").animate({backgroundColor: 'transparent'}, 0);
        p1_c2_line1();
        $("#d1b-rtn-addr-val").promise().done(function () {
            p1_c2_line2();
            $("#d1b-age-val").promise().done(function () {
                p1_c2_line3();
                $("#d1b-print-l3").promise().done(function () {
                    p1_c2_line4();
                    $("#d1b-rtnval-val").promise().done(function () {
                        p1_c2_line5();
                    });
                });
            });
        });
    });

    //p1 c2 line 1 function
    var p1_c2_line1 = function () {
        $("#code1b-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("green");
        $(".table .stack-heap-1b").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d1b-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1b-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1b-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1b-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1b-rtnval").delay(1200).show(400);
        $("#d1b-rtn-addr").delay(1200).show(400);
        $("#d1b-rtn-addr-val").delay(1600).show(400);
    };

    //p1 c2 line 2 function
    var p1_c2_line2 = function () {
        $("#code1b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1b-age-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-age").delay(1000).show(400);
        $("#d1b-age-val").delay(1400).show(400);
    };

    //p1 c2 line 3 function
    var p1_c2_line3 = function () {
        $("#code1b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-3").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d1b-age-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d1b-print-l3").delay(1600).show(400);
    };

    //p1 c2 line 4 function
    var p1_c2_line4 = function () {
        $("#code1b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#d1b-age-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1b-rtnval-val").delay(1000).show(400);
    };

    //p1 c2 line 5 function
    var p1_c2_line5 = function () {
        $("#code1b-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-5").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d1b-hide-all").delay(1000).hide(400);
        $("#code1b-line-5").promise().done(function () {
            p1_c2_hideBorders();
        });
    };

    //unhighlight all lines
    var p1_c2_unhighlight = function () {
        $("#code1b-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-5").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p1_c2_showBorders = function () {
        $(".table .d1b-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d1b-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d1b-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d1b-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-1b").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p1_c2_hideBorders = function () {
        $(".table .d1b-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d1b-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d1b-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d1b-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-1b").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code1b-line-1").click(function(){
        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("green");
        $("#code1b-line-1").addClass("yellow");

        $(".d1b-hide-all").hide();
        p1_c2_hideBorders();
        p1_c2_unhighlight();

        p1_c2_line1();
        currentLine1b = 2;
    });

    $("#code1b-line-2").click(function(){
        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("green");
        $("#code1b-line-2").addClass("yellow");
        $("#d1b-age-val").animate({backgroundColor: 'transparent'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        p1_c2_unhighlight();

        p1_c2_line2();
        currentLine1b = 3;
    });

    $("#code1b-line-3").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#d1b-age-val").removeClass("green");
        $("#code1b-line-3").addClass("green");
        $("#d1b-age-val").animate({backgroundColor: 'transparent'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        p1_c2_unhighlight();

        p1_c2_line3();
        currentLine1b = 4;
    });

    $("#code1b-line-4").click(function(){
        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("green");
        $("#code1b-line-4").addClass("yellow");
        $("#d1b-age-val").animate({backgroundColor: '#5CB85C'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        $(".d1b-show3").show();
        p1_c2_unhighlight();

        p1_c2_line4();
        currentLine1b = 5;
    });

    $("#code1b-line-5").click(function(){
        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("green");
        $("#code1b-line-5").addClass("yellow");
        $("#d1b-age-val").animate({backgroundColor: 'transparent'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        $(".d1b-show3").show();
        p1_c2_unhighlight();

        p1_c2_line5();
        currentLine1b = 1;
    });


    $("#step-button-1b").click(function () {
        if (currentLine1b == 1) {
            //do line 1 things here
            $(".d1b-link").removeClass("yellow");
            $(".d1b-link").removeClass("green");
            $("#code1b-line-1").addClass("yellow");

            $(".d1b-hide-all").hide();
            p1_c2_hideBorders();
            p1_c2_unhighlight();

            p1_c2_line1();
            currentLine1b = 2;
        }
        else if (currentLine1b == 2) {
            //do line 2 things here
            p1_c2_line2();
            currentLine1b = 3;
        }
        else if (currentLine1b == 3) {
            //do line 3 things here
            p1_c2_line3();
            currentLine1b = 4;
        }
        else if (currentLine1b == 4) {
            //do line 4 things here
            p1_c2_line4();
            currentLine1b = 5;
        }
        else if (currentLine1b == 5) {
            //do line 5 things here
            p1_c2_line5();
            currentLine1b = 1;
        }

    });

    //panel 1 code 3
    var currentLine1c = 1;
    $("#code1c-line-1").addClass("yellow");

    $("#start-button-1c").click(function () {
        currentLine1c = 1;
        $(".d1c-hide-all").hide();
        p1_c3_hideBorders();
        $(".d1c-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1c").animate({backgroundColor: 'transparent'}, 0);
        p1_c3_line1();
        $("#d1c-rtn-addr-val").promise().done(function () {
            p1_c3_line2();
            $("#d1c-age").promise().done(function () {
                p1_c3_line3();
                $("#d1c-print-l3-2").promise().done(function () {
                    p1_c3_line4();
                    $("#d1c-rtnval-val").promise().done(function () {
                        p1_c3_line5();
                    });
                });
            });
        });
    });

    //p1 c3 line 1 function
    var p1_c3_line1 = function () {
        $("#code1c-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d1c-link").removeClass("yellow");
        $(".d1c-link").removeClass("green");
        $(".table .stack-heap-1c").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d1c-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1c-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1c-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1c-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1c-rtnval").delay(1200).show(400);
        $("#d1c-rtn-addr").delay(1200).show(400);
        $("#d1c-rtn-addr-val").delay(1600).show(400);
    };

    //p1 c3 line 2 function
    var p1_c3_line2 = function () {
        $("#code1c-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1c-age").delay(1000).show(400);
    };

    //p1 c3 line 3 function
    var p1_c3_line3 = function () {
        $("#code1c-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-3").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d1c-age-val").delay(1000).animate({backgroundColor: '#D9534F'}, 500).show(500).delay(600);
        $("#d1c-print-l3-1").delay(1600).show(400);
        $("#d1c-print-l3-2").delay(2000).show(400).delay(100);
    };

    //p1 c3 line 4 function
    var p1_c3_line4 = function () {
        $("#code1c-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#d1c-age-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1c-rtnval-val").delay(1000).show(400);
    };

    //p1 c3 line 5 function
    var p1_c3_line5 = function () {
        $("#code1c-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-5").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d1c-hide-all").delay(1000).hide(400);
        $("#code1c-line-5").promise().done(function () {
            p1_c3_hideBorders();
        });
    };

    //unhighlight all lines
    var p1_c3_unhighlight = function () {
        $("#code1c-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1c-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1c-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1c-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code1c-line-5").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p1_c3_showBorders = function () {
        $(".table .d1c-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d1c-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d1c-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d1c-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-1c").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p1_c3_hideBorders = function () {
        $(".table .d1c-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d1c-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d1c-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d1c-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-1c").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    var currentLine;
    $("#code1c-line-1").click(function(){
        $(".d1c-link").removeClass("yellow");
        $(".d1c-link").removeClass("green");
        $("#code1c-line-1").addClass("yellow");

        $(".d1c-hide-all").hide();
        p1_c3_hideBorders();
        p1_c3_unhighlight();

        p1_c3_line1();
        currentLine1c = 2;
    });

    $("#code1c-line-2").click(function(){
        $(".d1c-link").removeClass("yellow");
        $(".d1c-link").removeClass("green");
        $("#code1c-line-2").addClass("yellow");
        $("#d1c-age-val").animate({backgroundColor: 'transparent'}, 0);

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".d1c-show1").show();
        p1_c3_unhighlight();

        p1_c3_line2();
        currentLine1c = 3;
    });

    $("#code1c-line-3").click(function(){
        $(".d1c-link").removeClass("yellow");
        $(".d1c-link").removeClass("green");
        $("#code1c-line-3").addClass("green");
        $("#d1c-age-val").animate({backgroundColor: 'transparent'}, 0);

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".d1c-show1").show();
        $(".d1c-show2").show();
        p1_c3_unhighlight();

        p1_c3_line3();
        currentLine1c = 4;
    });

    $("#code1c-line-4").click(function(){
        $(".d1c-link").removeClass("yellow");
        $(".d1c-link").removeClass("green");
        $("#code1c-line-4").addClass("yellow");
        $("#d1c-age-val").animate({backgroundColor: '#dd747b'}, 0);

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".d1c-show1").show();
        $(".d1c-show2").show();
        $(".d1c-show3").show();
        p1_c3_unhighlight();

        p1_c3_line4();
        currentLine1c = 5;
    });

    $("#code1c-line-5").click(function(){
        $(".d1c-link").removeClass("yellow");
        $(".d1c-link").removeClass("green");
        $("#code1c-line-5").addClass("yellow");
        $("#d1c-age-val").animate({backgroundColor: 'transparent'}, 0);

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".d1c-show1").show();
        $(".d1c-show2").show();
        $(".d1c-show3").show();
        $(".d1c-show4").show();
        p1_c3_unhighlight();

        p1_c3_line5();
        currentLine1c = 1;
    });


    $("#step-button-1c").click(function () {
        if (currentLine1c == 1) {
            //do line 1 things here
            $(".d1c-link").removeClass("yellow");
            $(".d1c-link").removeClass("green");
            $("#code1c-line-1").addClass("yellow");

            $(".d1c-hide-all").hide();
            p1_c3_hideBorders();
            p1_c3_unhighlight();

            p1_c3_line1();
            currentLine1c = 2;
        }
        else if (currentLine1c == 2) {
            //do line 2 things here
            p1_c3_line2();
            currentLine1c = 3;
        }
        else if (currentLine1c == 3) {
            //do line 3 things here
            p1_c3_line3();
            currentLine1c = 4;
        }
        else if (currentLine1c == 4) {
            //do line 4 things here
            p1_c3_line4();
            currentLine1c = 1;
        }

    });

    //panel 2
    //panel 2 code 1
    var currentLine2a = 1;
    $("#code2a-line-1").addClass("yellow");
    
    $("#start-button-2a").click(function () {
        currentLine2a = 1;
        $(".d2a-hide-all").hide();
        p2_c1_hideBorders();
        $(".d2a-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-2a").animate({backgroundColor: 'transparent'}, 0);
        p2_c1_line1();
        $("#d2a-rtn-addr-val").promise().done(function () {
            p2_c1_line2();
            $("#d2a-odd-val").promise().done(function () {
                p2_c1_line3();
                $("#d2a-even-val").promise().done(function () {
                    p2_c1_line4();
                    $("#d2a-prime-val").promise().done(function () {
                        p2_c1_line5();
                        $("#d2a-rtnval-val").promise().done(function () {
                            p2_c1_line6();
                        });
                    });
                });
            });
        });
    });

    //p2 c1 line 1 function
    var p2_c1_line1 = function () {
        $("#code2a-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d2a-link").removeClass("yellow");
        $(".table .stack-heap-2a").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d2a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d2a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d2a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d2a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d2a-rtnval").delay(1200).show(400);
        $("#d2a-rtn-addr").delay(1200).show(400);
        $("#d2a-rtn-addr-val").delay(1600).show(400);
    };

    //p2 c1 line 2 function
    var p2_c1_line2 = function () {
        $("#code2a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d2a-odd").delay(1000).show(400);
        $("#d2a-odd-val").delay(1400).show(400);
    };

    //p2 c1 line 3 function
    var p2_c1_line3 = function () {
        $("#code2a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d2a-even").delay(1000).show(400);
        $("#d2a-even-val").delay(1400).show(400);
    };

    //p2 c1 line 4 function
    var p2_c1_line4 = function () {
        $("#code2a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d2a-prime").delay(1000).show(400);
        $("#d2a-prime-val").delay(1400).show(400);
    };

    //p2 c1 line 5 function
    var p2_c1_line5 = function () {
        $("#code2a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-5").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d2a-rtnval-val").delay(1000).show(400);
    };

    //p2 c1 line 6 function
    var p2_c1_line6 = function () {
        $("#code2a-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-6").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d2a-hide-all").delay(1000).hide(400);
        $("#code2a-line-6").promise().done(function () {
            p2_c1_hideBorders();
        });
    };

    //unhighlight all lines
    var p2_c1_unhighlight = function () {
        $("#code2a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code2a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code2a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code2a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code2a-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code2a-line-6").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p2_c1_showBorders = function () {
        $(".table .d2a-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d2a-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d2a-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d2a-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-2a").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p2_c1_hideBorders = function () {
        $(".table .d2a-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d2a-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d2a-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d2a-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-2a").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code2a-line-1").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-1").addClass("yellow");

        $(".d2a-hide-all").hide();
        p2_c1_hideBorders();
        p2_c1_unhighlight();

        p2_c1_line1();
        currentLine2a = 2;
    });

    $("#code2a-line-2").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-2").addClass("yellow");

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-show1").show();
        p2_c1_unhighlight();

        p2_c1_line2();
        currentLine2a = 3;
    });

    $("#code2a-line-3").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-3").addClass("yellow");

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        p2_c1_unhighlight();

        p2_c1_line3();
        currentLine2a = 4;
    });

    $("#code2a-line-4").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-4").addClass("yellow");

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3").show();
        p2_c1_unhighlight();

        p2_c1_line4();
        currentLine2a = 5;
    });

    $("#code2a-line-5").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-5").addClass("yellow");

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3").show();
        $(".d2a-show4").show();
        p2_c1_unhighlight();

        p2_c1_line5();
        currentLine2a = 6;
    });

    $("#code2a-line-6").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-6").addClass("yellow");

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3").show();
        $(".d2a-show4").show();
        $(".d2a-show5").show();
        p2_c1_unhighlight();

        p2_c1_line6();
        currentLine2a = 1;
    });

    $("#step-button-2a").click(function () {
        if (currentLine2a == 1) {
            //do line 1 things here
            $(".d2a-link").removeClass("yellow");
            $("#code2a-line-1").addClass("yellow");

            $(".d2a-hide-all").hide();
            p2_c1_hideBorders();
            p2_c1_unhighlight();

            p2_c1_line1();
            currentLine2a = 2;
        }
        else if (currentLine2a == 2) {
            //do line 2 things here
            p2_c1_line2();
            currentLine2a = 3;
        }
        else if (currentLine2a == 3) {
            //do line 3 things here
            p2_c1_line3();
            currentLine2a = 4;
        }
        else if (currentLine2a == 4) {
            //do line 4 things here
            p2_c1_line4();
            currentLine2a = 5;
        }
        else if (currentLine2a == 5) {
            p2_c1_line5();
            currentLine2a = 6;
        }
        else if (currentLine2a == 6) {
            p2_c1_line6();
            currentLine2a = 1;
        }
    });

    //panel 2 code 2
    var currentLine2b = 1;
    $("#code2b-line-1").addClass("yellow");

    $("#start-button-2b").click(function () {
        currentLine2b = 1;
        $(".d2b-hide-all").hide();
        $("#d2b-string-top").removeClass("stack-string-top");
        $("#d2b-string-mid").removeClass("stack-string-middle");
        $("#d2b-string-bot").removeClass("stack-string-bottom");
        p2_c2_hideBorders();
        $(".d2b-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-2b").animate({backgroundColor: 'transparent'}, 0);
        p2_c2_line1();
        $("#d2b-rtn-addr-val").promise().done(function () {
            p2_c2_line2();
            $("#d2b-fruit-val").promise().done(function () {
                p2_c2_line3();
                $("#d2b-mass-val").promise().done(function () {
                    p2_c2_line4();
                    $("#d2b-quantity-val").promise().done(function () {
                        p2_c2_line5();
                        $("#d2b-rtnval-val").promise().done(function () {
                            p2_c2_line6();
                        });
                    });
                });
            });
        });
    });

    //p2 c2 line 1 function
    var p2_c2_line1 = function () {
        $("#code2b-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d2b-link").removeClass("yellow");
        $(".table .stack-heap-2b").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d2b-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d2b-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d2b-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d2b-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d2b-rtnval").delay(1200).show(400);
        $("#d2b-rtn-addr").delay(1200).show(400);
        $("#d2b-rtn-addr-val").delay(1600).show(400);
    };

    //p2 c2 line 2 function
    var p2_c2_line2 = function () {
        $("#code2b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d2b-string-top").addClass("stack-string-top");
            $("#d2b-string-mid").addClass("stack-string-middle");
            $("#d2b-string-bot").addClass("stack-string-bottom");
        }, 800);
        $("#d2b-fruit").delay(1000).show(400);
        $("#d2b-fruit-val").delay(1400).show(400);
    };

    //p2 c2 line 3 function
    var p2_c2_line3 = function () {
        $("#code2b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d2b-mass").delay(1000).show(400);
        $("#d2b-mass-val").delay(1400).show(400);
    };

    //p2 c2 line 4 function
    var p2_c2_line4 = function () {
        $("#code2b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d2b-quantity").delay(1000).show(400);
        $("#d2b-quantity-val").delay(1400).show(400);
    };

    //p2 c2 line 5 function
    var p2_c2_line5 = function () {
        $("#code2b-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-5").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d2b-rtnval-val").delay(1000).show(400);
    };

    //p2 c2 line 6 function
    var p2_c2_line6 = function () {
        $("#code2b-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-6").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d2b-hide-all").delay(1000).hide(400);
        $("#code2b-line-6").promise().done(function () {
            p2_c2_hideBorders();
            $("#d2b-string-top").removeClass("stack-string-top");
            $("#d2b-string-mid").removeClass("stack-string-middle");
            $("#d2b-string-bot").removeClass("stack-string-bottom");
        });
    };

    //unhighlight all lines
    var p2_c2_unhighlight = function () {
        $("#code2b-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-6").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p2_c2_showBorders = function () {
        $(".table .d2b-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d2b-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d2b-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d2b-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-2b").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p2_c2_hideBorders = function () {
        $(".table .d2b-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d2b-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d2b-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d2b-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-2b").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code2b-line-1").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-1").addClass("yellow");
        $("#d2b-string-top").removeClass("stack-string-top");
        $("#d2b-string-mid").removeClass("stack-string-middle");
        $("#d2b-string-bot").removeClass("stack-string-bottom");

        $(".d2b-hide-all").hide();
        p2_c2_hideBorders();
        p2_c2_unhighlight();

        p2_c2_line1();
        currentLine2b = 2;
    });

    $("#code2b-line-2").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-2").addClass("yellow");
        $("#d2b-string-top").removeClass("stack-string-top");
        $("#d2b-string-mid").removeClass("stack-string-middle");
        $("#d2b-string-bot").removeClass("stack-string-bottom");

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        p2_c2_unhighlight();

        p2_c2_line2();
        currentLine2b = 3;
    });

    $("#code2b-line-3").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-3").addClass("yellow");
        $("#d2b-string-top").addClass("stack-string-top");
        $("#d2b-string-mid").addClass("stack-string-middle");
        $("#d2b-string-bot").addClass("stack-string-bottom");

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        $(".d2b-show2").show();
        p2_c2_unhighlight();

        p2_c2_line3();
        currentLine2b = 4;
    });

    $("#code2b-line-4").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-4").addClass("yellow");
        $("#d2b-string-top").addClass("stack-string-top");
        $("#d2b-string-mid").addClass("stack-string-middle");
        $("#d2b-string-bot").addClass("stack-string-bottom");

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        $(".d2b-show2").show();
        $(".d2b-show3").show();
        p2_c2_unhighlight();

        p2_c2_line4();
        currentLine2b = 5;
    });

    $("#code2b-line-5").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-5").addClass("yellow");
        $("#d2b-string-top").addClass("stack-string-top");
        $("#d2b-string-mid").addClass("stack-string-middle");
        $("#d2b-string-bot").addClass("stack-string-bottom");

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        $(".d2b-show2").show();
        $(".d2b-show3").show();
        $(".d2b-show4").show();
        p2_c2_unhighlight();

        p2_c2_line5();
        currentLine2b = 6;
    });

    $("#code2b-line-6").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-6").addClass("yellow");
        $("#d2b-string-top").addClass("stack-string-top");
        $("#d2b-string-mid").addClass("stack-string-middle");
        $("#d2b-string-bot").addClass("stack-string-bottom");

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        $(".d2b-show2").show();
        $(".d2b-show3").show();
        $(".d2b-show4").show();
        $(".d2b-show5").show();
        p2_c2_unhighlight();

        p2_c2_line6();
        currentLine2b = 1;
    });

    $("#step-button-2b").click(function () {
        if (currentLine2b == 1) {
            //do line 1 things here
            $(".d2b-link").removeClass("yellow");
            $("#code2b-line-1").addClass("yellow");
            $("#d2b-string-top").removeClass("stack-string-top");
            $("#d2b-string-mid").removeClass("stack-string-middle");
            $("#d2b-string-bot").removeClass("stack-string-bottom");

            $(".d2b-hide-all").hide();
            p2_c2_hideBorders();
            p2_c2_unhighlight();

            p2_c2_line1();
            currentLine2b = 2;
        }
        else if (currentLine2b == 2) {
            //do line 2 things here
            p2_c2_line2();
            currentLine2b = 3;
        }
        else if (currentLine2b == 3) {
            //do line 3 things here
            p2_c2_line3();
            currentLine2b = 4;
        }
        else if (currentLine2b == 4) {
            //do line 4 things here
            p2_c2_line4();
            currentLine2b = 5;
        }
        else if (currentLine2b == 5) {
            p2_c2_line5();
            currentLine2b = 6;
        }
        else if (currentLine2b == 6) {
            p2_c2_line6();
            currentLine2b = 1;
        }

    });

    //panel 3
    //panel 3 code 1
    var currentLine3a = 1;
    $("#code3a-line-1").addClass("yellow");

    $("#start-button-3a").click(function () {
        currentLine3a = 1;
        $(".d3a-hide-all").hide();
        p3_c1_hideBorders();
        $(".d3a-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-3a").animate({backgroundColor: 'transparent'}, 0);
        p3_c1_line1();
        $("#d3a-rtn-addr-val").promise().done(function () {
            p3_c1_line2();
            $("#d3a-id-val").promise().done(function () {
                p3_c1_line3();
                $("#d3a-print-l3").promise().done(function () {
                    p3_c1_line4();
                    $("#d3a-id-val").promise().done(function () {
                        p3_c1_line5();
                        $("#d3a-print-l5").promise().done(function () {
                            p3_c1_line6();
                            $("#d3a-rtnval-val").promise().done(function () {
                                p3_c1_line7();
                            });
                        });
                    });
                });
            });
        });
    });

    //p3 c1 line 1 function
    var p3_c1_line1 = function () {
        $("#code3a-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $(".table .stack-heap-3a").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d3a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d3a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d3a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d3a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d3a-rtnval").delay(1200).show(400);
        $("#d3a-rtn-addr").delay(1200).show(400);
        $("#d3a-rtn-addr-val").delay(1600).show(400);
    };

    //p3 c1 line 2 function
    var p3_c1_line2 = function () {
        $("#code3a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d3a-id-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-id-val").html('1');

        $("#d3a-id").delay(1000).show(400);
        $("#d3a-id-val").delay(1400).show(400);
    };

    //p3 c1 line 3 function
    var p3_c1_line3 = function () {
        $("#code3a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-3").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d3a-id-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d3a-print-l3").delay(1600).show(400);
    };

    //p3 c1 line 4 function
    var p3_c1_line4 = function () {
        $("#code3a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#d3a-id-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d3a-id-val").html('2');
        }, 1000);
        $("#d3a-id-val").delay(1100).animate({backgroundColor: 'transparent'}, 500);
    };

    //p3 c1 line 5 function
    var p3_c1_line5 = function () {
        $("#code3a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-5").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d3a-id-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d3a-print-l5").delay(1600).show(400);
    };

    //p3 c1 line 6 function
    var p3_c1_line6 = function () {
        $("#code3a-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#d3a-id-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-6").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d3a-rtnval-val").delay(1000).show(400);
    };

    //p3 c1 line 7 function
    var p3_c1_line7 = function () {
        $("#code3a-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-7").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d3a-hide-all").delay(1000).hide(400);
        $("#code3a-line-7").promise().done(function () {
            p3_c1_hideBorders();
        });
    };


    //unhighlight all lines
    var p3_c1_unhighlight = function () {
        $("#code3a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-6").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-7").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p3_c1_showBorders = function () {
        $(".table .d3a-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d3a-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d3a-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d3a-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-3a").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p3_c1_hideBorders = function () {
        $(".table .d3a-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d3a-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d3a-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d3a-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-3a").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code3a-line-1").click(function(){
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#code3a-line-1").addClass("yellow");

        $(".d3a-hide-all").hide();
        p3_c1_hideBorders();
        p3_c1_unhighlight();

        p3_c1_line1();
        currentLine3a = 2;
    });

    $("#code3a-line-2").click(function(){
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#code3a-line-2").addClass("yellow");
        $("#d3a-id-val").animate({backgroundColor: 'transparent'}, 0);

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        p3_c1_unhighlight();

        p3_c1_line2();
        currentLine3a = 3;
    });

    $("#code3a-line-3").click(function(){
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#code3a-line-3").addClass("green");
        $("#d3a-id-val").animate({backgroundColor: 'transparent'}, 0);

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $("#d3a-id-val").html('1');
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        p3_c1_unhighlight();

        p3_c1_line3();
        currentLine3a = 4;
    });

    $("#code3a-line-4").click(function(){
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#code3a-line-4").addClass("yellow");
        $("#d3a-id-val").animate({backgroundColor: '#5CB85C'}, 0);

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $("#d3a-id-val").html('1');
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        p3_c1_unhighlight();

        p3_c1_line4();
        currentLine3a = 5;
    });

    $("#code3a-line-5").click(function(){
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#code3a-line-5").addClass("green");
        $("#d3a-id-val").animate({backgroundColor: 'transparent'}, 0);

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $("#d3a-id-val").html('2');
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        p3_c1_unhighlight();

        p3_c1_line5();
        currentLine3a = 6;
    });

    $("#code3a-line-6").click(function(){
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#code3a-line-6").addClass("yellow");
        $("#d3a-id-val").animate({backgroundColor: '#5CB85C'}, 0);

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $("#d3a-id-val").html('2');
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        $(".d3a-show5").show();
        p3_c1_unhighlight();

        p3_c1_line6();
        currentLine3a = 7;
    });

    $("#code3a-line-7").click(function(){
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#code3a-line-7").addClass("yellow");
        $("#d3a-id-val").animate({backgroundColor: 'transparent'}, 0);

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $("#d3a-id-val").html('2');
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        $(".d3a-show5").show();
        $(".d3a-show6").show();
        p3_c1_unhighlight();

        p3_c1_line7();
        currentLine3a = 1;
    });

    $("#step-button-3a").click(function () {
        if (currentLine3a == 1) {
            //do line 1 things here
            $(".d3a-link").removeClass("yellow");
            $(".d3a-link").removeClass("green");
            $("#code3a-line-1").addClass("yellow");

            $(".d3a-hide-all").hide();
            p3_c1_hideBorders();
            p3_c1_unhighlight();

            p3_c1_line1();
            currentLine3a = 2;
        }
        else if (currentLine3a == 2) {
            //do line 2 things here
            p3_c1_line2();
            currentLine3a = 3;
        }
        else if (currentLine3a == 3) {
            //do line 3 things here
            p3_c1_line3();
            currentLine3a = 4;
        }
        else if (currentLine3a == 4) {
            //do line 4 things here
            p3_c1_line4();
            currentLine3a = 5;
        }
        else if (currentLine3a == 5) {
            p3_c1_line5();
            currentLine3a = 6;
        }
        else if (currentLine3a == 6) {
            p3_c1_line6();
            currentLine3a = 7;
        }
        else if (currentLine3a == 7) {
            p3_c1_line7();
            currentLine3a = 1;
        }
    });

    //panel 3 code 2
    var currentLine3b = 1;
    $("#code3b-line-1").addClass("yellow");

    $("#start-button-3b").click(function () {
        currentLine3b = 1;
        $(".d3b-hide-all").hide();
        $("#d3b-string-top").removeClass("stack-string-top");
        $("#d3b-string-mid").removeClass("stack-string-middle");
        $("#d3b-string-bot").removeClass("stack-string-bottom");
        p3_c2_hideBorders();
        $(".d3b-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-3b").animate({backgroundColor: 'transparent'}, 0);
        p3_c2_line1();
        $("#d3b-rtn-addr-val").promise().done(function () {
            p3_c2_line2();
            $("#d3b-name-val").promise().done(function () {
                p3_c2_line3();
                $("#d3b-age-val").promise().done(function () {
                    p3_c2_line4();
                    $("#d3b-phone-val").promise().done(function () {
                        p3_c2_line5();
                        $("#d3b-name-val").promise().done(function () {
                            p3_c2_line6();
                            $("#d3b-phone-val").promise().done(function () {
                                p3_c2_line7();
                                $("#d3b-rtnval-val").promise().done(function () {
                                    p3_c2_line8();
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    //p3 c2 line 1 function
    var p3_c2_line1 = function () {
        $("#code3b-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d3b-link").removeClass("yellow");
        $(".table .stack-heap-3b").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d3b-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d3b-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d3b-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d3b-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d3b-rtnval").delay(1200).show(400);
        $("#d3b-rtn-addr").delay(1200).show(400);
        $("#d3b-rtn-addr-val").delay(1600).show(400);
    };

    //p3 c2 line 2 function
    var p3_c2_line2 = function () {
        $("#code3b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d3b-string-top").addClass("stack-string-top");
            $("#d3b-string-mid").addClass("stack-string-middle");
            $("#d3b-string-bot").addClass("stack-string-bottom");
        }, 800);
        $("#d3b-name-val").html('"Bob"');
        $("#d3b-name").delay(1000).show(400);
        $("#d3b-name-val").delay(1400).show(400);
    };

    //p3 c2 line 3 function
    var p3_c2_line3 = function () {
        $("#code3b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d3b-age").delay(1000).show(400);
        $("#d3b-age-val").delay(1400).show(400);
    };

    //p3 c2 line 4 function
    var p3_c2_line4 = function () {
        $("#code3b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d3b-phone-val").html('1111111');

        $("#d3b-phone").delay(1000).show(400);
        $("#d3b-phone-val").delay(1400).show(400);
    };

    //p3 c2 line 5 function
    var p3_c2_line5 = function () {
        $("#code3b-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-5").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d3b-name-val").html('"Bob Jones"');
        }, 1000);
        $("#d3b-name-val").delay(1100).animate({backgroundColor: 'transparent'}, 500);
    };

    //p3 c2 line 6 function
    var p3_c2_line6 = function () {
        $("#code3b-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-6").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d3b-phone-val").html('2222222');
        }, 1000);
        $("#d3b-phone-val").delay(1100).animate({backgroundColor: 'transparent'}, 500);
    };

    //p3 c2 line 7 function
    var p3_c2_line7 = function () {
        $("#code3b-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-7").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d3b-rtnval-val").delay(1000).show(400);
    };

    //p3 c2 line 8 function
    var p3_c2_line8 = function () {
        $("#code3b-line-7").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-8").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d3b-hide-all").delay(1000).hide(400);
        $("#code3b-line-8").promise().done(function () {
            p3_c2_hideBorders();
            $("#d3b-string-top").removeClass("stack-string-top");
            $("#d3b-string-mid").removeClass("stack-string-middle");
            $("#d3b-string-bot").removeClass("stack-string-bottom");
        });
    };


    //unhighlight all lines
    var p3_c2_unhighlight = function () {
        $("#code3b-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-6").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-7").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-8").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p3_c2_showBorders = function () {
        $(".table .d3b-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d3b-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d3b-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d3b-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-3b").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p3_c2_hideBorders = function () {
        $(".table .d3b-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d3b-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d3b-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d3b-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-3b").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code3b-line-1").click(function(){
        $(".d3b-link").removeClass("yellow");
        $("#code3b-line-1").addClass("yellow");
        $("#d3b-string-top").removeClass("stack-string-top");
        $("#d3b-string-mid").removeClass("stack-string-middle");
        $("#d3b-string-bot").removeClass("stack-string-bottom");

        $(".d3b-hide-all").hide();
        p3_c2_hideBorders();
        p3_c2_unhighlight();

        p3_c2_line1();
        currentLine3b = 2;
    });

    $("#code3b-line-2").click(function(){
        $(".d3b-link").removeClass("yellow");
        $("#code3b-line-2").addClass("yellow");
        $("#d3b-string-top").removeClass("stack-string-top");
        $("#d3b-string-mid").removeClass("stack-string-middle");
        $("#d3b-string-bot").removeClass("stack-string-bottom");

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $(".d3b-show1").show();
        p3_c2_unhighlight();

        p3_c2_line2();
        currentLine3b = 3;
    });

    $("#code3b-line-3").click(function(){
        $(".d3b-link").removeClass("yellow");
        $("#code3b-line-3").addClass("yellow");
        $("#d3b-string-top").addClass("stack-string-top");
        $("#d3b-string-mid").addClass("stack-string-middle");
        $("#d3b-string-bot").addClass("stack-string-bottom");

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $("#d3b-name-val").html('"Bob"');
        $(".d3b-show1").show();
        $(".d3b-show2").show();
        p3_c2_unhighlight();

        p3_c2_line3();
        currentLine3b = 4;
    });

    $("#code3b-line-4").click(function(){
        $(".d3b-link").removeClass("yellow");
        $("#code3b-line-4").addClass("yellow");
        $("#d3b-string-top").addClass("stack-string-top");
        $("#d3b-string-mid").addClass("stack-string-middle");
        $("#d3b-string-bot").addClass("stack-string-bottom");

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $("#d3b-name-val").html('"Bob"');
        $(".d3b-show1").show();
        $(".d3b-show2").show();
        $(".d3b-show3").show();
        p3_c2_unhighlight();

        p3_c2_line4();
        currentLine3b = 5;
    });

    $("#code3b-line-5").click(function(){
        $(".d3b-link").removeClass("yellow");
        $("#code3b-line-5").addClass("yellow");
        $("#d3b-string-top").addClass("stack-string-top");
        $("#d3b-string-mid").addClass("stack-string-middle");
        $("#d3b-string-bot").addClass("stack-string-bottom");

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $("#d3b-name-val").html('"Bob"');
        $("#d3b-phone-val").html('1111111');
        $(".d3b-show1").show();
        $(".d3b-show2").show();
        $(".d3b-show3").show();
        $(".d3b-show4").show();
        p3_c2_unhighlight();

        p3_c2_line5();
        currentLine3b = 6;
    });

    $("#code3b-line-6").click(function(){
        $(".d3b-link").removeClass("yellow");
        $("#code3b-line-6").addClass("yellow");
        $("#d3b-string-top").addClass("stack-string-top");
        $("#d3b-string-mid").addClass("stack-string-middle");
        $("#d3b-string-bot").addClass("stack-string-bottom");

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $("#d3b-name-val").html('"Bob Jones"');
        $("#d3b-phone-val").html('1111111');
        $(".d3b-show1").show();
        $(".d3b-show2").show();
        $(".d3b-show3").show();
        $(".d3b-show4").show();
        p3_c2_unhighlight();

        p3_c2_line6();
        currentLine3b = 7;
    });

    $("#code3b-line-7").click(function(){
        $(".d3b-link").removeClass("yellow");
        $("#code3b-line-7").addClass("yellow");
        $("#d3b-string-top").addClass("stack-string-top");
        $("#d3b-string-mid").addClass("stack-string-middle");
        $("#d3b-string-bot").addClass("stack-string-bottom");

        p3_c2_showBorders();
        $(".d3a-hide-all").hide();
        $("#d3b-name-val").html('"Bob Jones"');
        $("#d3b-phone-val").html('2222222');
        $(".d3b-show1").show();
        $(".d3b-show2").show();
        $(".d3b-show3").show();
        $(".d3b-show4").show();
        p3_c2_unhighlight();

        p3_c2_line7();
        currentLine3b = 8;
    });

    $("#code3b-line-8").click(function(){
        $(".d3b-link").removeClass("yellow");
        $("#code3b-line-8").addClass("yellow");
        $("#d3b-string-top").addClass("stack-string-top");
        $("#d3b-string-mid").addClass("stack-string-middle");
        $("#d3b-string-bot").addClass("stack-string-bottom");

        p3_c2_showBorders();
        $(".d3a-hide-all").hide();
        $("#d3b-name-val").html('"Bob Jones"');
        $("#d3b-phone-val").html('2222222');
        $(".d3b-show1").show();
        $(".d3b-show2").show();
        $(".d3b-show3").show();
        $(".d3b-show4").show();
        $(".d3b-show7").show();
        p3_c2_unhighlight();

        p3_c2_line8();
        currentLine3b = 1;
    });

    $("#step-button-3b").click(function () {
        if (currentLine3b == 1) {
            //do line 1 things here
            $(".d3b-link").removeClass("yellow");
            $("#code3b-line-1").addClass("yellow");
            $("#d3b-string-top").removeClass("stack-string-top");
            $("#d3b-string-mid").removeClass("stack-string-middle");
            $("#d3b-string-bot").removeClass("stack-string-bottom");

            $(".d3b-hide-all").hide();
            p3_c2_hideBorders();
            p3_c2_unhighlight();

            p3_c2_line1();
            currentLine3b = 2;
        }
        else if (currentLine3b == 2) {
            //do line 2 things here
            p3_c2_line2();
            currentLine3b = 3;
        }
        else if (currentLine3b == 3) {
            //do line 3 things here
            p3_c2_line3();
            currentLine3b = 4;
        }
        else if (currentLine3b == 4) {
            //do line 4 things here
            p3_c2_line4();
            currentLine3b = 5;
        }
        else if (currentLine3b == 5) {
            p3_c2_line5();
            currentLine3b = 6;
        }
        else if (currentLine3b == 6) {
            p3_c2_line6();
            currentLine3b = 7;
        }
        else if (currentLine3b == 7) {
            p3_c2_line7();
            currentLine3b = 8;
        }
        else if (currentLine3b == 8) {
            p3_c2_line8();
            currentLine3b = 1;
        }

    });

    //panel 4
    //code 1
    var currentLine4a = 1;
    $("#code4a-line-1").addClass("yellow");

    $("#start-button-4a").click(function () {
        currentLine4a = 1;
        $(".d4a-hide-all").hide();
        $("#d4a-string-top").removeClass("stack-string-top");
        $("#d4a-string-mid").removeClass("stack-string-middle");
        $("#d4a-string-bot").removeClass("stack-string-bottom");
        p4_c1_hideBorders();
        $(".d4a-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-4a").animate({backgroundColor: 'transparent'}, 0);
        p4_c1_line1();
        $("#d4a-rtn-addr-val").promise().done(function () {
            p4_c1_line2();
            $("#d4a-name-val").promise().done(function () {
                p4_c1_line3();
                $("#d4a-age-val").promise().done(function () {
                    p4_c1_line4();
                    $("#d4a-name-alias").promise().done(function () {
                        p4_c1_line5();
                        $("#d4a-age-alias").promise().done(function () {
                            p4_c1_line6();
                            $("#d4a-rtnval-val").promise().done(function () {
                                p4_c1_line7();
                            });
                        });
                    });
                });
            });
        });
    });

    //p4 c1 line 1 function
    var p4_c1_line1 = function () {
        $("#code4a-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d4a-link").removeClass("yellow");
        $(".table .stack-heap-4a").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d4a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d4a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d4a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d4a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d4a-rtnval").delay(1000).show(400);
        $("#d4a-rtn-addr").delay(1000).show(400);
        $("#d4a-rtn-addr-val").delay(1400).show(400);

    };

    //p4 c1 line 2 function
    var p4_c1_line2 = function () {
        $("#code4a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4a-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d4a-string-top").addClass("stack-string-top");
            $("#d4a-string-mid").addClass("stack-string-middle");
            $("#d4a-string-bot").addClass("stack-string-bottom");
        }, 800);
        $("#d4a-name").delay(1000).show(400);
        $("#d4a-name-val").delay(1400).show(400);
    };

    //p4 c1 line 3 function
    var p4_c1_line3 = function () {
        $("#code4a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4a-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d4a-age").delay(1000).show(400);
        $("#d4a-age-val").delay(1400).show(400);
    };

    //p4 c1 line 4 function
    var p4_c1_line4 = function () {
        $("#code4a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4a-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d4a-name-alias").delay(1000).show(400);
    };

    //p4 c1 line 5 function
    var p4_c1_line5 = function () {
        $("#code4a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4a-line-5").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d4a-age-alias").delay(1000).show(400);
    };

    //p4 c1 line 6 function
    var p4_c1_line6 = function () {
        $("#code4a-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4a-line-6").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d4a-rtnval-val").delay(1000).show(400);
    };

    //p4 c1 line 7 function
    var p4_c1_line7 = function () {
        $("#code4a-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4a-line-7").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d4a-hide-all").delay(1000).hide(400);
        $("#code4a-line-7").promise().done(function () {
            p4_c1_hideBorders();
            $("#d4a-string-top").removeClass("stack-string-top");
            $("#d4a-string-mid").removeClass("stack-string-middle");
            $("#d4a-string-bot").removeClass("stack-string-bottom");
        });
    };

    //unhighlight all lines
    var p4_c1_unhighlight = function () {
        $("#code4a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code4a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code4a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code4a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code4a-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code4a-line-6").animate({backgroundColor: 'transparent'}, 0);
        $("#code4a-line-7").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p4_c1_showBorders = function () {
        $(".table .d4a-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d4a-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d4a-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d4a-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-4a").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p4_c1_hideBorders = function () {
        $(".table .d4a-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d4a-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d4a-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d4a-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-4a").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code4a-line-1").click(function(){
        $(".d4a-link").removeClass("yellow");
        $("#code4a-line-1").addClass("yellow");
        $("#d4a-string-top").removeClass("stack-string-top");
        $("#d4a-string-mid").removeClass("stack-string-middle");
        $("#d4a-string-bot").removeClass("stack-string-bottom");

        $(".d4a-hide-all").hide();
        p4_c1_hideBorders();
        p4_c1_unhighlight();

        p4_c1_line1();
        currentLine4a = 2;
    });

    $("#code4a-line-2").click(function(){
        $(".d4a-link").removeClass("yellow");
        $("#code4a-line-2").addClass("yellow");
        $("#d4a-string-top").removeClass("stack-string-top");
        $("#d4a-string-mid").removeClass("stack-string-middle");
        $("#d4a-string-bot").removeClass("stack-string-bottom");

        p4_c1_showBorders();
        $(".d4a-hide-all").hide();
        $(".d4a-show1").show();
        p4_c1_unhighlight();

        p4_c1_line2();
        currentLine4a = 3;
    });

    $("#code4a-line-3").click(function(){
        $(".d4a-link").removeClass("yellow");
        $("#code4a-line-3").addClass("yellow");
        $("#d4a-string-top").addClass("stack-string-top");
        $("#d4a-string-mid").addClass("stack-string-middle");
        $("#d4a-string-bot").addClass("stack-string-bottom");

        p4_c1_showBorders();
        $(".d4a-hide-all").hide();
        $(".d4a-show1").show();
        $(".d4a-show2").show();
        p4_c1_unhighlight();

        p4_c1_line3();
        currentLine4a = 4;
    });

    $("#code4a-line-4").click(function(){
        $(".d4a-link").removeClass("yellow");
        $("#code4a-line-4").addClass("yellow");
        $("#d4a-string-top").addClass("stack-string-top");
        $("#d4a-string-mid").addClass("stack-string-middle");
        $("#d4a-string-bot").addClass("stack-string-bottom");

        p4_c1_showBorders();
        $(".d4a-hide-all").hide();
        $(".d4a-show1").show();
        $(".d4a-show2").show();
        $(".d4a-show3").show();
        p4_c1_unhighlight();

        p4_c1_line4();
        currentLine4a = 5;
    });

    $("#code4a-line-5").click(function(){
        $(".d4a-link").removeClass("yellow");
        $("#code4a-line-5").addClass("yellow");
        $("#d4a-string-top").addClass("stack-string-top");
        $("#d4a-string-mid").addClass("stack-string-middle");
        $("#d4a-string-bot").addClass("stack-string-bottom");

        p4_c1_showBorders();
        $(".d4a-hide-all").hide();
        $(".d4a-show1").show();
        $(".d4a-show2").show();
        $(".d4a-show3").show();
        $(".d4a-show4").show();
        p4_c1_unhighlight();

        p4_c1_line5();
        currentLine4a = 6;
    });

    $("#code4a-line-6").click(function(){
        $(".d4a-link").removeClass("yellow");
        $("#code4a-line-6").addClass("yellow");
        $("#d4a-string-top").addClass("stack-string-top");
        $("#d4a-string-mid").addClass("stack-string-middle");
        $("#d4a-string-bot").addClass("stack-string-bottom");

        p4_c1_showBorders();
        $(".d4a-hide-all").hide();
        $(".d4a-show1").show();
        $(".d4a-show2").show();
        $(".d4a-show3").show();
        $(".d4a-show4").show();
        $(".d4a-show5").show();
        p4_c1_unhighlight();

        p4_c1_line6();
        currentLine4a = 7;
    });

    $("#code4a-line-7").click(function(){
        $(".d4a-link").removeClass("yellow");
        $("#code4a-line-7").addClass("yellow");
        $("#d4a-string-top").addClass("stack-string-top");
        $("#d4a-string-mid").addClass("stack-string-middle");
        $("#d4a-string-bot").addClass("stack-string-bottom");

        p4_c1_showBorders();
        $(".d4a-hide-all").hide();
        $(".d4a-show1").show();
        $(".d4a-show2").show();
        $(".d4a-show3").show();
        $(".d4a-show4").show();
        $(".d4a-show5").show();
        $(".d4a-show6").show();
        p4_c1_unhighlight();

        p4_c1_line7();
        currentLine4a = 1;
    });


    $("#step-button-4a").click(function () {
        if (currentLine4a == 1) {
            //do line 1 things here
            $(".d4a-link").removeClass("yellow");
            $("#code4a-line-1").addClass("yellow");
            $("#d4a-string-top").removeClass("stack-string-top");
            $("#d4a-string-mid").removeClass("stack-string-middle");
            $("#d4a-string-bot").removeClass("stack-string-bottom");

            $(".d4a-hide-all").hide();
            p4_c1_hideBorders();
            p4_c1_unhighlight();

            p4_c1_line1();
            currentLine4a = 2;
        }
        else if (currentLine4a == 2) {
            //do line 2 things here
            p4_c1_line2();
            currentLine4a = 3;
        }
        else if (currentLine4a == 3) {
            //do line 3 things here
            p4_c1_line3();
            currentLine4a = 4;
        }
        else if (currentLine4a == 4) {
            //do line 4 things here
            p4_c1_line4();
            currentLine4a = 5;
        }
        else if (currentLine4a == 5) {
            //do line 4 things here
            p4_c1_line5();
            currentLine4a = 6;
        }
        else if (currentLine4a == 6) {
            p4_c1_line6();
            currentLine4a = 7;
        }
        else if (currentLine4a == 7) {
            p4_c1_line7();
            currentLine4a = 1;
        }

    });

    //code 2
    var currentLine4b = 1;
    $("#code4b-line-1").addClass("yellow");

    $("#start-button-4b").click(function () {
        currentLine4b = 1;
        $(".d4b-hide-all").hide();
        $("#d4b-string-top").removeClass("stack-string-top");
        $("#d4b-string-mid").removeClass("stack-string-middle");
        $("#d4b-string-bot").removeClass("stack-string-bottom");
        p4_c2_hideBorders();
        $(".d4b-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-4b").animate({backgroundColor: 'transparent'}, 0);
        $("#d4b-pointer-addr").animate({color: '#777'}, 0);

        p4_c2_line1();
        $("#d4b-rtn-addr-val").promise().done(function () {
            p4_c2_line2();
            $("#d4b-name-val").promise().done(function () {
                p4_c2_line3();
                $("#d4b-name-alias").promise().done(function () {
                    p4_c2_line4();
                    $("#d4b-print-l4").promise().done(function () {
                        p4_c2_line5();
                        $("#d4b-print-l5").promise().done(function () {
                            p4_c2_line6();
                            $("#d4b-name-val").promise().done(function () {
                                p4_c2_line7();
                                $("#d4b-print-l7").promise().done(function () {
                                    p4_c2_line8();
                                    $("#d4b-print-l8").promise().done(function () {
                                        p4_c2_line9();
                                        $("#d4b-rtnval-val").promise().done(function () {
                                            p4_c2_line10();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    //p4 c2 line 1 function
    var p4_c2_line1 = function () {
        $("#code4b-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d4b-link").removeClass("yellow");
        $(".d4b-link").removeClass("green");
        $(".table .stack-heap-4b").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d4b-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d4b-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d4b-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d4b-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d4b-rtnval").delay(1000).show(400);
        $("#d4b-rtn-addr").delay(1000).show(400);
        $("#d4b-rtn-addr-val").delay(1400).show(400);
    };

    //p4 c2 line 2 function
    var p4_c2_line2 = function () {
        $("#code4b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4b-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d4b-name-val").animate({backgroundColor: 'transparent'}, 0);
        setTimeout(function(){
            $("#d4b-string-top").addClass("stack-string-top");
            $("#d4b-string-mid").addClass("stack-string-middle");
            $("#d4b-string-bot").addClass("stack-string-bottom");
        }, 800);
        $("#d4b-name-val").html('"Bob"');
        $("#d4b-name").delay(1000).show(400);
        $("#d4b-name-val").delay(1400).show(400);
    };

    //p4 c2 line 3 function
    var p4_c2_line3 = function () {
        $("#code4b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4b-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d4b-name-alias").delay(1000).show(400);
    };

    //p4 c2 line 4 function
    var p4_c2_line4 = function () {
        $("#code4b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4b-line-4").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d4b-name-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d4b-print-l4").delay(1700).show(400);
    };

    //p4 c2 line 5 function
    var p4_c2_line5 = function () {
        $("#code4b-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#d4b-name-val").animate({backgroundColor: 'transparent'}, 500);
        $("#code4b-line-5").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d4b-name-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 800);
        $("#d4b-print-l5").delay(1700).show(400);
    };

    //p4 c2 line 6 function
    var p4_c2_line6 = function () {
        $("#code4b-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#d4b-name-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4b-line-6").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d4b-name-val").html('"Bob Jones"');
        }, 1000);
        $("#d4b-name-val").delay(1100).animate({backgroundColor: 'transparent'}, 500);
    };

    //p4 c2 line 7 function
    var p4_c2_line7 = function () {
        $("#code4b-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4b-line-7").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d4b-name-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d4b-print-l7").delay(1700).show(400);
    };

    //p4 c2 line 8 function
    var p4_c2_line8 = function () {
        $("#code4b-line-7").animate({backgroundColor: 'transparent'}, 1000);
        $("#d4b-name-val").animate({backgroundColor: 'transparent'}, 500);
        $("#code4b-line-8").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d4b-name-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 800);
        $("#d4b-print-l8").delay(1700).show(400);
    };

    //p4 c2 line 9 function
    var p4_c2_line9 = function () {
        $("#code4b-line-8").animate({backgroundColor: 'transparent'}, 1000);
        $("#d4b-name-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4b-line-9").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d4b-rtnval-val").delay(1000).show(400);
    };

    //p4 c2 line 10 function
    var p4_c2_line10 = function () {
        $("#code4b-line-9").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4b-line-10").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d4b-hide-all").delay(1000).hide(400);
        $("#code4b-line-10").promise().done(function () {
            p4_c2_hideBorders();
            $("#d4b-string-top").removeClass("stack-string-top");
            $("#d4b-string-mid").removeClass("stack-string-middle");
            $("#d4b-string-bot").removeClass("stack-string-bottom");
        });
    };

    //unhighlight all lines
    var p4_c2_unhighlight = function () {
        $("#code4b-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code4b-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code4b-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code4b-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code4b-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code4b-line-6").animate({backgroundColor: 'transparent'}, 0);
        $("#code4b-line-7").animate({backgroundColor: 'transparent'}, 0);
        $("#code4b-line-8").animate({backgroundColor: 'transparent'}, 0);
        $("#code4b-line-9").animate({backgroundColor: 'transparent'}, 0);
        $("#code4b-line-10").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p4_c2_showBorders = function () {
        $(".table .d4b-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d4b-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d4b-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d4b-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-4b").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p4_c2_hideBorders = function () {
        $(".table .d4b-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d4b-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d4b-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d4b-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-4b").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code4b-line-1").click(function(){
        $(".d4b-link").removeClass("yellow");
        $(".d4b-link").removeClass("green");
        $("#code4b-line-1").addClass("yellow");

        $("#d4b-string-top").removeClass("stack-string-top");
        $("#d4b-string-mid").removeClass("stack-string-middle");
        $("#d4b-string-bot").removeClass("stack-string-bottom");

        $(".d4b-hide-all").hide();
        p4_c2_hideBorders();
        p4_c2_unhighlight();

        p4_c2_line1();
        currentLine4b = 2;
    });

    $("#code4b-line-2").click(function() {
        $(".d4b-link").removeClass("yellow");
        $(".d4b-link").removeClass("green");
        $("#code4b-line-2").addClass("yellow");
        $("#d4b-name-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d4b-string-top").removeClass("stack-string-top");
        $("#d4b-string-mid").removeClass("stack-string-middle");
        $("#d4b-string-bot").removeClass("stack-string-bottom");

        p4_c2_showBorders();
        $(".d4b-hide-all").hide();
        $(".d4b-show1").show();
        p4_c2_unhighlight();

        p4_c2_line2();
        currentLine4b = 3;
    });

    $("#code4b-line-3").click(function() {
        $(".d4b-link").removeClass("yellow");
        $(".d4b-link").removeClass("green");
        $("#code4b-line-3").addClass("yellow");
        $("#d4b-name-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d4b-string-top").addClass("stack-string-top");
        $("#d4b-string-mid").addClass("stack-string-middle");
        $("#d4b-string-bot").addClass("stack-string-bottom");

        p4_c2_showBorders();
        $(".d4b-hide-all").hide();
        $("#d4b-name-val").html('"Bob"');
        $(".d4b-show1").show();
        $(".d4b-show2").show();
        p4_c2_unhighlight();

        p4_c2_line3();
        currentLine4b = 4;
    });

    $("#code4b-line-4").click(function() {
        $(".d4b-link").removeClass("yellow");
        $(".d4b-link").removeClass("green");
        $("#code4b-line-4").addClass("green");
        $("#d4b-name-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d4b-string-top").addClass("stack-string-top");
        $("#d4b-string-mid").addClass("stack-string-middle");
        $("#d4b-string-bot").addClass("stack-string-bottom");

        p4_c2_showBorders();
        $(".d4b-hide-all").hide();
        $("#d4b-name-val").html('"Bob"');
        $(".d4b-show1").show();
        $(".d4b-show2").show();
        $(".d4b-show3").show();
        p4_c2_unhighlight();

        p4_c2_line4();
        currentLine4b = 5;
    });

    $("#code4b-line-5").click(function() {
        $(".d4b-link").removeClass("yellow");
        $(".d4b-link").removeClass("green");
        $("#code4b-line-5").addClass("green");
        $("#d4b-name-val").animate({backgroundColor: '#5CB85C'}, 0);

        $("#d4b-string-top").addClass("stack-string-top");
        $("#d4b-string-mid").addClass("stack-string-middle");
        $("#d4b-string-bot").addClass("stack-string-bottom");

        p4_c2_showBorders();
        $(".d4b-hide-all").hide();
        $("#d4b-name-val").html('"Bob"');
        $(".d4b-show1").show();
        $(".d4b-show2").show();
        $(".d4b-show3").show();
        $(".d4b-show4").show();
        p4_c2_unhighlight();

        p4_c2_line5();
        currentLine4b = 6;
    });

    $("#code4b-line-6").click(function() {
        $(".d4b-link").removeClass("yellow");
        $(".d4b-link").removeClass("green");
        $("#code4b-line-6").addClass("yellow");
        $("#d4b-name-val").animate({backgroundColor: '#5CB85C'}, 0);

        $("#d4b-string-top").addClass("stack-string-top");
        $("#d4b-string-mid").addClass("stack-string-middle");
        $("#d4b-string-bot").addClass("stack-string-bottom");

        p4_c2_showBorders();
        $(".d4b-hide-all").hide();
        $("#d4b-name-val").html('"Bob"');
        $(".d4b-show1").show();
        $(".d4b-show2").show();
        $(".d4b-show3").show();
        $(".d4b-show4").show();
        $(".d4b-show5").show();
        p4_c2_unhighlight();

        p4_c2_line6();
        currentLine4b = 7;
    });

    $("#code4b-line-7").click(function() {
        $(".d4b-link").removeClass("yellow");
        $(".d4b-link").removeClass("green");
        $("#code4b-line-7").addClass("green");
        $("#d4b-name-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d4b-string-top").addClass("stack-string-top");
        $("#d4b-string-mid").addClass("stack-string-middle");
        $("#d4b-string-bot").addClass("stack-string-bottom");

        p4_c2_showBorders();
        $(".d4b-hide-all").hide();
        $("#d4b-name-val").html('"Bob Jones"');
        $(".d4b-show1").show();
        $(".d4b-show2").show();
        $(".d4b-show3").show();
        $(".d4b-show4").show();
        $(".d4b-show5").show();
        p4_c2_unhighlight();

        p4_c2_line7();
        currentLine4b = 8;
    });

    $("#code4b-line-8").click(function() {
        $(".d4b-link").removeClass("yellow");
        $(".d4b-link").removeClass("green");
        $("#code4b-line-8").addClass("green");
        $("#d4b-name-val").animate({backgroundColor: '#5CB85C'}, 0);

        $("#d4b-string-top").addClass("stack-string-top");
        $("#d4b-string-mid").addClass("stack-string-middle");
        $("#d4b-string-bot").addClass("stack-string-bottom");

        p4_c2_showBorders();
        $(".d4b-hide-all").hide();
        $("#d4b-name-val").html('"Bob Jones"');
        $(".d4b-show1").show();
        $(".d4b-show2").show();
        $(".d4b-show3").show();
        $(".d4b-show4").show();
        $(".d4b-show5").show();
        $(".d4b-show7").show();
        p4_c2_unhighlight();

        p4_c2_line8();
        currentLine4b = 9;
    });

    $("#code4b-line-9").click(function(){
        $(".d4b-link").removeClass("yellow");
        $(".d4b-link").removeClass("green");
        $("#code4b-line-9").addClass("yellow");
        $("#d4b-name-val").animate({backgroundColor: '#5CB85C'}, 0);

        $("#d4b-string-top").addClass("stack-string-top");
        $("#d4b-string-mid").addClass("stack-string-middle");
        $("#d4b-string-bot").addClass("stack-string-bottom");

        p4_c2_showBorders();
        $(".d4b-hide-all").hide();
        $("#d4b-name-val").html('"Bob Jones"');
        $(".d4b-show1").show();
        $(".d4b-show2").show();
        $(".d4b-show3").show();
        $(".d4b-show4").show();
        $(".d4b-show5").show();
        $(".d4b-show7").show();
        $(".d4b-show8").show();
        p4_c2_unhighlight();

        p4_c2_line9();
        currentLine4b = 10;
    });

    $("#code4b-line-10").click(function(){
        $(".d4b-link").removeClass("yellow");
        $(".d4b-link").removeClass("green");
        $("#code4b-line-10").addClass("yellow");
        $("#d4b-name-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d4b-string-top").addClass("stack-string-top");
        $("#d4b-string-mid").addClass("stack-string-middle");
        $("#d4b-string-bot").addClass("stack-string-bottom");

        p4_c2_showBorders();
        $(".d4b-hide-all").hide();
        $("#d4b-name-val").html('"Bob Jones"');
        $(".d4b-show1").show();
        $(".d4b-show2").show();
        $(".d4b-show3").show();
        $(".d4b-show4").show();
        $(".d4b-show5").show();
        $(".d4b-show7").show();
        $(".d4b-show8").show();
        $(".d4b-show9").show();
        p4_c2_unhighlight();

        p4_c2_line10();
        currentLine4b = 1;
    });

    $("#step-button-4b").click(function () {
        if (currentLine4b == 1) {
            //do line 1 things here
            $(".d4b-link").removeClass("yellow");
            $(".d4b-link").removeClass("green");
            $("#code4b-line-1").addClass("yellow");

            $("#d4b-string-top").removeClass("stack-string-top");
            $("#d4b-string-mid").removeClass("stack-string-middle");
            $("#d4b-string-bot").removeClass("stack-string-bottom");

            $(".d4b-hide-all").hide();
            p4_c2_hideBorders();
            p4_c2_unhighlight();

            p4_c2_line1();
            currentLine4b = 2;
        }
        else if (currentLine4b == 2) {
            //do line 2 things here
            p4_c2_line2();
            currentLine4b = 3;
        }
        else if (currentLine4b == 3) {
            //do line 3 things here
            p4_c2_line3();
            currentLine4b = 4;
        }
        else if (currentLine4b == 4) {
            //do line 4 things here
            p4_c2_line4();
            currentLine4b = 5;
        }
        else if (currentLine4b == 5) {
            //do line 4 things here
            p4_c2_line5();
            currentLine4b = 6;
        }
        else if (currentLine4b == 6) {
            p4_c2_line6();
            currentLine4b = 7;
        }
        else if (currentLine4b == 7) {
            p4_c2_line7();
            currentLine4b = 8;
        }
        else if (currentLine4b == 8) {
            p4_c2_line8();
            currentLine4b = 9;
        }
        else if (currentLine4b == 9) {
            p4_c2_line9();
            currentLine4b = 10;
        }
        else if (currentLine4b == 10) {
            p4_c2_line10();
            currentLine4b = 1;
        }

    });


    //panel 5
    //code 1
    var currentLine5a = 1;
    $("#code5a-line-1").addClass("yellow");

    $("#start-button-5a").click(function () {
        currentLine5a = 1;
        $(".d5a-hide-all").hide();
        p5_c1_hideBorders();
        $(".d5a-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-5a").animate({backgroundColor: 'transparent'}, 0);
        $("#d5a-pointer-addr").animate({color: '#777'}, 0);
        p5_c1_line1();
        $("#d5a-rtn-addr-val").promise().done(function () {
            p5_c1_line2();
            $("#d5a-bob-HPhone-val").promise().done(function () {
                p5_c1_line3();
                $("#d5a-bob-MPhone-val").promise().done(function () {
                    p5_c1_line4();
                    $("#d5a-alice-HPhone-val").promise().done(function () {
                        p5_c1_line5();
                        $("#d5a-rtnval-val").promise().done(function () {
                            p5_c1_line6();
                        });
                    });
                });
            });
        });
    });

    //p5 c1 line 1 function
    var p5_c1_line1 = function () {
        $("#code5a-line-1").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d5a-link").removeClass("yellow");
        $(".table .stack-heap-5a").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d5a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d5a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d5a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d5a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d5a-rtnval").delay(1200).show(400);
        $("#d5a-rtn-addr").delay(1200).show(400);
        $("#d5a-rtn-addr-val").delay(1600).show(400);

    };

    //p5 c1 line 2 function
    var p5_c1_line2 = function () {
        $("#code5a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5a-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d5a-bob-HPhone").delay(1000).show(400);
        $("#d5a-bob-HPhone-val").delay(1400).show(400);
    };

    //p5 c1 line 3 function
    var p5_c1_line3 = function () {
        $("#code5a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5a-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d5a-bob-MPhone").delay(1000).show(400);
        $("#d5a-bob-MPhone-val").delay(1400).show(400);
    };

    //p5 c1 line 4 function
    var p5_c1_line4 = function () {
        $("#code5a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5a-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d5a-alice-HPhone").delay(1000).show(400);
        $("#d5a-pointer-addr").delay(1400).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d5a-alice-HPhone-val").delay(1400).show(400);
    };

    //p5 c1 line 5 function
    var p5_c1_line5 = function () {
        $("#code5a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5a-line-5").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d5a-rtnval-val").delay(1000).show(400);
    };

    //p5 c1 line 6 function
    var p5_c1_line6 = function () {
        $("#code5a-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5a-line-6").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d5a-hide-all").delay(1000).hide(400);
        $("#code5a-line-6").promise().done(function () {
            p5_c1_hideBorders();
        });
    };

    //unhighlight all lines
    var p5_c1_unhighlight = function () {
        $("#code5a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code5a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code5a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code5a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code5a-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code5a-line-6").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p5_c1_showBorders = function () {
        $(".table .d5a-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d5a-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d5a-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d5a-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-5a").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p5_c1_hideBorders = function () {
        $(".table .d5a-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d5a-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d5a-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d5a-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-5a").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code5a-line-1").click(function(){
        $(".d5a-link").removeClass("yellow");
        $("#code5a-line-1").addClass("yellow");

        $(".d5a-hide-all").hide();
        $("#d5a-pointer-addr").animate({color: '#777'}, 0);
        p5_c1_hideBorders();
        p5_c1_unhighlight();

        p5_c1_line1();
        currentLine5a = 2;
    });

    $("#code5a-line-2").click(function(){
        $(".d5a-link").removeClass("yellow");
        $("#code5a-line-2").addClass("yellow");

        p5_c1_showBorders();
        $(".d5a-hide-all").hide();
        $("#d5a-pointer-addr").animate({color: '#777'}, 0);
        $(".d5a-show1").show();
        p5_c1_unhighlight();

        p5_c1_line2();
        currentLine5a = 3;
    });

    $("#code5a-line-3").click(function(){
        $(".d5a-link").removeClass("yellow");
        $("#code5a-line-3").addClass("yellow");

        p5_c1_showBorders();
        $(".d5a-hide-all").hide();
        $("#d5a-pointer-addr").animate({color: '#777'}, 0);
        $(".d5a-show1").show();
        $(".d5a-show2").show();
        p5_c1_unhighlight();

        p5_c1_line3();
        currentLine5a = 4;
    });

    $("#code5a-line-4").click(function(){
        $(".d5a-link").removeClass("yellow");
        $("#code5a-line-4").addClass("yellow");

        p5_c1_showBorders();
        $(".d5a-hide-all").hide();
        $("#d5a-pointer-addr").animate({color: '#777'}, 0);
        $(".d5a-show1").show();
        $(".d5a-show2").show();
        $(".d5a-show3").show();
        p5_c1_unhighlight();

        p5_c1_line4();
        currentLine5a = 5;
    });

    $("#code5a-line-5").click(function(){
        $(".d5a-link").removeClass("yellow");
        $("#code5a-line-5").addClass("yellow");

        p5_c1_showBorders();
        $(".d5a-hide-all").hide();
        $("#d5a-pointer-addr").animate({color: '#532A78'}, 0);
        $(".d5a-show1").show();
        $(".d5a-show2").show();
        $(".d5a-show3").show();
        $(".d5a-show4").show();
        p5_c1_unhighlight();

        p5_c1_line5()
        currentLine5a = 6;
    });

    $("#code5a-line-6").click(function(){
        $(".d5a-link").removeClass("yellow");
        $("#code5a-line-6").addClass("yellow");

        p5_c1_showBorders();
        $(".d5a-hide-all").hide();
        $("#d5a-pointer-addr").animate({color: '#532A78'}, 0);
        $(".d5a-show1").show();
        $(".d5a-show2").show();
        $(".d5a-show3").show();
        $(".d5a-show4").show();
        $(".d5a-show5").show();
        p5_c1_unhighlight();

        p5_c1_line6()
        currentLine5a = 1;
    });

    $("#step-button-5a").click(function () {
        if (currentLine5a == 1) {
            //do line 1 things here
            $(".d5a-link").removeClass("yellow");
            $("#code5a-line-1").addClass("yellow");

            $(".d5a-hide-all").hide();
            $("#d5a-pointer-addr").animate({color: '#777'}, 0);
            p5_c1_hideBorders();
            p5_c1_unhighlight();

            p5_c1_line1();
            currentLine5a = 2;
        }
        else if (currentLine5a == 2) {
            //do line 2 things here
            p5_c1_line2();
            currentLine5a = 3;
        }
        else if (currentLine5a == 3) {
            //do line 3 things here
            p5_c1_line3();
            currentLine5a = 4;
        }
        else if (currentLine5a == 4) {
            //do line 4 things here
            p5_c1_line4();
            currentLine5a = 5;
        }
        else if (currentLine5a == 5) {
            p5_c1_line5();
            currentLine5a = 6;
        }
        else if (currentLine5a == 6) {
            p5_c1_line6();
            currentLine5a = 1;
        }
    });

    //code 2
    var currentLine5b = 1;
    $("#code5b-line-1").addClass("yellow");

    $("#start-button-5b").click(function () {
        currentLine5b = 1;
        $(".d5b-hide-all").hide();
        p5_c2_hideBorders();
        $(".d5b-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-5b").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-pointer-addr").animate({color: '#777'}, 0);
        p5_c2_line1();
        $("#d5b-rtn-addr-val").promise().done(function () {
            p5_c2_line2();
            $("#d5b-odd-val").promise().done(function () {
                p5_c2_line3();
                $("#d5b-prime-val").promise().done(function () {
                    p5_c2_line4();
                    $("#d5b-print-l4").promise().done(function () {
                        p5_c2_line5();
                        $("#d5b-print-l5").promise().done(function () {
                            p5_c2_line6();
                            $("#d5b-odd-val").promise().done(function () {
                                p5_c2_line7();
                                $("#d5b-print-l7").promise().done(function () {
                                    p5_c2_line8();
                                    $("#d5b-print-l8").promise().done(function () {
                                        p5_c2_line9();
                                        $("#d5b-print-l9").promise().done(function () {
                                            p5_c2_line10();
                                            $("#d5b-rtnval-val").promise().done(function () {
                                                p5_c2_line11();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    //p5 c2 line 1 function
    var p5_c2_line1 = function () {
        $("#code5b-line-1").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d5b-link").removeClass("yellow");
        $(".d5b-link").removeClass("green");
        $(".table .stack-heap-5b").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d5b-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d5b-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d5b-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d5b-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d5b-rtnval").delay(1200).show(400);
        $("#d5b-rtn-addr").delay(1200).show(400);
        $("#d5b-rtn-addr-val").delay(1600).show(400);
    };

    //p5 c2 line 2 function
    var p5_c2_line2 = function () {
        $("#code5b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5b-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d5b-odd-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-odd-val").html("3");

        $("#d5b-odd").delay(1000).show(400);
        $("#d5b-odd-val").delay(1400).show(400);
    };

    //p5 c2 line 3 function
    var p5_c2_line3 = function () {
        $("#code5b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5b-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d5b-prime-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d5b-prime").delay(1000).show(400);
        $("#d5b-pointer-addr").delay(1400).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d5b-prime-val").delay(1400).show(400);
    };

    //p5 c2 line 4 function
    var p5_c2_line4 = function () {
        $("#code5b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5b-line-4").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d5b-prime-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d5b-print-l4").delay(1600).show(400);
    };

    //p5 c2 line 5 function
    var p5_c2_line5 = function () {
        $("#code5b-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#d5b-prime-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5b-line-5").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d5b-odd-val").delay(900).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d5b-print-l5").delay(1400).show(400);
    };

    //p5 c2 line 6 function
    var p5_c2_line6 = function () {
        $("#code5b-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#d5b-odd-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5b-line-6").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d5b-odd-val").html('5');
        }, 1000);
        $("#d5b-odd-val").delay(1100).animate({backgroundColor: 'transparent'}, 500);
    }

    //p5 c2 line 7 function
    var p5_c2_line7 = function () {
        $("#code5b-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5b-line-7").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d5b-odd-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d5b-print-l7").delay(1500).show(400);
    };

    //p5 c2 line 8 function
    var p5_c2_line8 = function () {
        $("#code5b-line-7").animate({backgroundColor: 'transparent'}, 1000);
        $("#d5b-odd-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5b-line-8").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d5b-prime-val").delay(900).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d5b-print-l8").delay(1400).show(400);
    };

    //p5 c2 line 9 function
    var p5_c2_line9 = function () {
        $("#code5b-line-8").animate({backgroundColor: 'transparent'}, 1000);
        $("#d5b-prime-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5b-line-9").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d5b-odd-val").delay(900).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d5b-print-l9").delay(1400).show(400);
    };

    //p5 c2 line 10 function
    var p5_c2_line10 = function () {
        $("#code5b-line-9").animate({backgroundColor: 'transparent'}, 1000);
        $("#d5b-odd-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5b-line-10").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d5b-rtnval-val").delay(1000).show(400);
    };

    //p5 c2 line 11 function
    var p5_c2_line11 = function () {
        $("#code5b-line-10").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5b-line-11").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d5b-hide-all").delay(1000).hide(400);
        $("#code5b-line-11").promise().done(function () {
            p5_c2_hideBorders();
        });
    };

    //unhighlight all lines
    var p5_c2_unhighlight = function () {
        $("#code5b-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code5b-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code5b-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code5b-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code5b-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code5b-line-6").animate({backgroundColor: 'transparent'}, 0);
        $("#code5b-line-7").animate({backgroundColor: 'transparent'}, 0);
        $("#code5b-line-8").animate({backgroundColor: 'transparent'}, 0);
        $("#code5b-line-9").animate({backgroundColor: 'transparent'}, 0);
        $("#code5b-line-10").animate({backgroundColor: 'transparent'}, 0);
        $("#code5b-line-11").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p5_c2_showBorders = function () {
        $(".table .d5b-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d5b-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d5b-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d5b-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-5b").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p5_c2_hideBorders = function () {
        $(".table .d5b-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d5b-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d5b-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d5b-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-5b").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code5b-line-1").click(function(){
        $(".d5b-link").removeClass("yellow");
        $(".d5b-link").removeClass("green");
        $("#code5b-line-1").addClass("yellow");
        $("#d5b-pointer-addr").animate({color: '#777'}, 0);

        $(".d5b-hide-all").hide();
        p5_c2_hideBorders();
        p5_c2_unhighlight();

        p5_c2_line1();
        currentLine5b = 2;
    });

    $("#code5b-line-2").click(function(){
        $(".d5b-link").removeClass("yellow");
        $(".d5b-link").removeClass("green");
        $("#code5b-line-2").addClass("yellow");
        $("#d5b-odd-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-pointer-addr").animate({color: '#777'}, 0);

        p5_c2_showBorders();
        $(".d5b-hide-all").hide();
        $(".d5b-show1").show();
        p5_c2_unhighlight();

        p5_c2_line2();
        currentLine5b = 3;
    });

    $("#code5b-line-3").click(function(){
        $(".d5b-link").removeClass("yellow");
        $(".d5b-link").removeClass("green");
        $("#code5b-line-3").addClass("yellow");
        $("#d5b-odd-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-prime-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-pointer-addr").animate({color: '#777'}, 0);

        p5_c2_showBorders();
        $(".d5b-hide-all").hide();
        $("#d5b-odd-val").html("3");
        $(".d5b-show1").show();
        $(".d5b-show2").show();
        p5_c2_unhighlight();

        p5_c2_line3();
        currentLine5b = 4;
    });

    $("#code5b-line-4").click(function(){
        $(".d5b-link").removeClass("yellow");
        $(".d5b-link").removeClass("green");
        $("#code5b-line-4").addClass("green");
        $("#d5b-odd-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-prime-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-pointer-addr").animate({color: '#532A78'}, 0);

        p5_c2_showBorders();
        $(".d5b-hide-all").hide();
        $("#d5b-odd-val").html("3");
        $(".d5b-show1").show();
        $(".d5b-show2").show();
        $(".d5b-show3").show();
        p5_c2_unhighlight();

        p5_c2_line4();
        currentLine5b = 5;
    });

    $("#code5b-line-5").click(function() {
        $(".d5b-link").removeClass("yellow");
        $(".d5b-link").removeClass("green");
        $("#code5b-line-5").addClass("green");
        $("#d5b-odd-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-prime-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d5b-pointer-addr").animate({color: '#532A78'}, 0);

        p5_c2_showBorders();
        $(".d5b-hide-all").hide();
        $("#d5b-odd-val").html("3");
        $(".d5b-show1").show();
        $(".d5b-show2").show();
        $(".d5b-show3").show();
        $(".d5b-show4").show();
        p5_c2_unhighlight();

        p5_c2_line5();
        currentLine5b = 6;
    });

    $("#code5b-line-6").click(function() {
        $(".d5b-link").removeClass("yellow");
        $(".d5b-link").removeClass("green");
        $("#code5b-line-6").addClass("yellow");
        $("#d5b-odd-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d5b-prime-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-pointer-addr").animate({color: '#532A78'}, 0);

        p5_c2_showBorders();
        $(".d5b-hide-all").hide();
        $("#d5b-odd-val").html("3");
        $(".d5b-show1").show();
        $(".d5b-show2").show();
        $(".d5b-show3").show();
        $(".d5b-show4").show();
        $(".d5b-show5").show();
        p5_c2_unhighlight();

        p5_c2_line6();
        currentLine5b = 7;
    });

    $("#code5b-line-7").click(function() {
        $(".d5b-link").removeClass("yellow");
        $(".d5b-link").removeClass("green");
        $("#code5b-line-7").addClass("green");
        $("#d5b-odd-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-prime-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-pointer-addr").animate({color: '#532A78'}, 0);

        p5_c2_showBorders();
        $(".d5b-hide-all").hide();
        $("#d5b-odd-val").html("5");
        $(".d5b-show1").show();
        $(".d5b-show2").show();
        $(".d5b-show3").show();
        $(".d5b-show4").show();
        $(".d5b-show5").show();
        p5_c2_unhighlight();

        p5_c2_line7();
        currentLine5b = 8;
    });

    $("#code5b-line-8").click(function() {
        $(".d5b-link").removeClass("yellow");
        $(".d5b-link").removeClass("green");
        $("#code5b-line-8").addClass("green");
        $("#d5b-odd-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d5b-prime-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-pointer-addr").animate({color: '#532A78'}, 0);

        p5_c2_showBorders();
        $(".d5b-hide-all").hide();
        $("#d5b-odd-val").html("5");
        $(".d5b-show1").show();
        $(".d5b-show2").show();
        $(".d5b-show3").show();
        $(".d5b-show4").show();
        $(".d5b-show5").show();
        $(".d5b-show7").show();
        p5_c2_unhighlight();

        p5_c2_line8();
        currentLine5b = 9;
    });

    $("#code5b-line-9").click(function() {
        $(".d5b-link").removeClass("yellow");
        $(".d5b-link").removeClass("green");
        $("#code5b-line-9").addClass("green");
        $("#d5b-odd-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-prime-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d5b-pointer-addr").animate({color: '#532A78'}, 0);

        p5_c2_showBorders();
        $(".d5b-hide-all").hide();
        $("#d5b-odd-val").html("5");
        $(".d5b-show1").show();
        $(".d5b-show2").show();
        $(".d5b-show3").show();
        $(".d5b-show4").show();
        $(".d5b-show5").show();
        $(".d5b-show7").show();
        $(".d5b-show8").show();
        p5_c2_unhighlight();

        p5_c2_line9();
        currentLine5b = 10;
    });

    $("#code5b-line-10").click(function(){
        $(".d5b-link").removeClass("yellow");
        $(".d5b-link").removeClass("green");
        $("#code5b-line-10").addClass("yellow");
        $("#d5b-odd-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d5b-prime-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-pointer-addr").animate({color: '#532A78'}, 0);

        p5_c2_showBorders();
        $(".d5b-hide-all").hide();
        $("#d5b-odd-val").html("5");
        $(".d5b-show1").show();
        $(".d5b-show2").show();
        $(".d5b-show3").show();
        $(".d5b-show4").show();
        $(".d5b-show5").show();
        $(".d5b-show7").show();
        $(".d5b-show8").show();
        $(".d5b-show9").show();
        p5_c2_unhighlight();

        p5_c2_line10();
        currentLine5b = 11;
    });

    $("#code5b-line-11").click(function(){
        $(".d5b-link").removeClass("yellow");
        $(".d5b-link").removeClass("green");
        $("#code5b-line-11").addClass("yellow");
        $("#d5b-odd-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-prime-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5b-pointer-addr").animate({color: '#532A78'}, 0);

        p5_c2_showBorders();
        $(".d5b-hide-all").hide();
        $("#d5b-odd-val").html("5");
        $(".d5b-show1").show();
        $(".d5b-show2").show();
        $(".d5b-show3").show();
        $(".d5b-show4").show();
        $(".d5b-show5").show();
        $(".d5b-show7").show();
        $(".d5b-show8").show();
        $(".d5b-show9").show();
        $(".d5b-show10").show();
        p5_c2_unhighlight();

        p5_c2_line11();
        currentLine5b = 1;
    });

    $("#step-button-5b").click(function () {
        if (currentLine5b == 1) {
            //do line 1 things here
            $(".d5b-link").removeClass("yellow");
            $(".d5b-link").removeClass("green");
            $("#code5b-line-1").addClass("yellow");

            $(".d5b-hide-all").hide();
            $("#d5b-pointer-addr").animate({color: '#777'}, 0);
            p5_c2_hideBorders();
            p5_c2_unhighlight();

            p5_c2_line1();
            currentLine5b = 2;
        }
        else if (currentLine5b == 2) {
            //do line 2 things here
            p5_c2_line2();
            currentLine5b = 3;
        }
        else if (currentLine5b == 3) {
            //do line 3 things here
            p5_c2_line3();
            currentLine5b = 4;
        }
        else if (currentLine5b == 4) {
            //do line 4 things here
            p5_c2_line4();
            currentLine5b = 5;
        }
        else if (currentLine5b == 5) {
            //do line 4 things here
            p5_c2_line5();
            currentLine5b = 6;
        }
        else if (currentLine5b == 6) {
            p5_c2_line6();
            currentLine5b = 7;
        }
        else if (currentLine5b == 7) {
            p5_c2_line7();
            currentLine5b = 8;
        }
        else if (currentLine5b == 8) {
            p5_c2_line8();
            currentLine5b = 9;
        }
        else if (currentLine5b == 9) {
            p5_c2_line9();
            currentLine5b = 10;
        }
        else if (currentLine5b == 10) {
            p5_c2_line10();
            currentLine5b = 11;
        }
        else if (currentLine5b == 11) {
            p5_c2_line11();
            currentLine5b = 1;
        }
    });


    //code 3
    var currentLine5c = 1;
    $("#code5c-line-1").addClass("yellow");

    $("#start-button-5c").click(function () {
        currentLine5c = 1;
        $(".d5c-hide-all").hide();
        $("#d5c-string-top1").removeClass("stack-string-top");
        $("#d5c-string-mid1").removeClass("stack-string-middle");
        $("#d5c-string-bot1").removeClass("stack-string-bottom");
        $("#d5c-string-top2").removeClass("stack-string-top");
        $("#d5c-string-mid2").removeClass("stack-string-middle");
        $("#d5c-string-bot2").removeClass("stack-string-bottom");
        p5_c3_hideBorders();
        $(".d5c-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-5c").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d5c-pointer-addr2").animate({color: '#777'}, 0);
        p5_c3_line1();
        $("#d5c-rtn-addr-val").promise().done(function () {
            p5_c3_line2();
            $("#d5c-colour1-val").promise().done(function () {
                p5_c3_line3();
                $("#d5c-colour2-val").promise().done(function () {
                    p5_c3_line4();
                    $("#d5c-favColor-val").promise().done(function () {
                        p5_c3_line5();
                        $("#d5c-print-l5").promise().done(function () {
                            p5_c3_line6();
                            $("#d5c-print-l6").promise().done(function () {
                                p5_c3_line7();
                                $("#d5c-favColor-val").promise().done(function () {
                                    p5_c3_line8();
                                    $("#d5c-print-l8").promise().done(function () {
                                        p5_c3_line9();
                                        $("#d5c-print-l9").promise().done(function () {
                                            p5_c3_line10();
                                            $("#d5c-rtnval-val").promise().done(function () {
                                                p5_c3_line11();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    //p5 c3 line 1 function
    var p5_c3_line1 = function () {
        $("#code5c-line-1").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d5c-link").removeClass("yellow");
        $(".d5c-link").removeClass("green");
        $(".table .stack-heap-5c").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d5c-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d5c-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d5c-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d5c-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d5c-rtnval").delay(1200).show(400);
        $("#d5c-rtn-addr").delay(1200).show(400);
        $("#d5c-rtn-addr-val").delay(1600).show(400);
    };

    //p5 c3 line 2 function
    var p5_c3_line2 = function () {
        $("#code5c-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5c-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d5c-colour1-val").animate({backgroundColor: 'transparent'}, 0);

        setTimeout(function(){
            $("#d5c-string-top1").addClass("stack-string-top");
            $("#d5c-string-mid1").addClass("stack-string-middle");
            $("#d5c-string-bot1").addClass("stack-string-bottom");
        }, 800);
        $("#d5c-colour1").delay(1000).show(400);
        $("#d5c-colour1-val").delay(1400).show(400);
    };

    //p5 c3 line 3 function
    var p5_c3_line3 = function () {
        $("#code5c-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5c-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d5c-colour2-val").animate({backgroundColor: 'transparent'}, 0);

        setTimeout(function(){
            $("#d5c-string-top2").addClass("stack-string-top");
            $("#d5c-string-mid2").addClass("stack-string-middle");
            $("#d5c-string-bot2").addClass("stack-string-bottom");
        }, 800);
        $("#d5c-colour2").delay(1000).show(400);
        $("#d5c-colour2-val").delay(1400).show(400);
    };

    //p5 c3 line 4 function
    var p5_c3_line4 = function () {
        $("#code5c-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5c-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d5c-favColor-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d5c-favColor").delay(1000).show(400);
        $("#d5c-pointer-addr1").delay(1400).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d5c-favColor-val").delay(1400).show(400);
    };

    //p5 c3 line 5 function
    var p5_c3_line5 = function () {
        $("#code5c-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5c-line-5").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d5c-favColor-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d5c-print-l5").delay(1500).show(400);
    };

    //p5 c3 line 6 function
    var p5_c3_line6 = function () {
        $("#code5c-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#d5c-favColor-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5c-line-6").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d5c-colour1-val").delay(900).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d5c-print-l6").delay(1400).show(400);
    };

    //p5 c3 line 7 function
    var p5_c3_line7 = function () {
        $("#code5c-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#d5c-colour1-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5c-line-7").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d5c-pointer-addr1").delay(1400).animate({color: '#777', fontWeight: 'bold'}, 150);
        $("#d5c-pointer-addr2").delay(1400).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        setTimeout(function(){
            $("#d5c-favColor-val").html('0x0061ff00');
        }, 1400);
        $("#d5c-favColor-val").delay(1400).animate({backgroundColor: 'transparent'}, 500);
    };

    //p5 c3 line 8 function
    var p5_c3_line8 = function () {
        $("#code5c-line-7").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5c-line-8").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d5c-favColor-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d5c-print-l8").delay(1500).show(400);
    }

    //p5 c3 line 9 function
    var p5_c3_line9 = function () {
        $("#code5c-line-8").animate({backgroundColor: 'transparent'}, 1000);
        $("#d5c-favColor-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5c-line-9").animate({backgroundColor: '#5CB85C'}, 1000);

        $("#d5c-colour2-val").delay(900).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d5c-print-l9").delay(1400).show(400);
    };

    //p5 c3 line 10 function
    var p5_c3_line10 = function () {
        $("#code5c-line-9").animate({backgroundColor: 'transparent'}, 1000);
        $("#d5c-colour2-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5c-line-10").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d5c-rtnval-val").delay(1000).show(400);
    };

    //p5 c3 line 11 function
    var p5_c3_line11 = function () {
        $("#code5c-line-10").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5c-line-11").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d5c-hide-all").delay(1000).hide(400);
        $("#code5c-line-11").promise().done(function () {
            p5_c3_hideBorders();
            $("#d5c-string-top").removeClass("stack-string-top");
            $("#d5c-string-mid").removeClass("stack-string-middle");
            $("#d5c-string-bot").removeClass("stack-string-bottom");
        });
    };

    //unhighlight all lines
    var p5_c3_unhighlight = function () {
        $("#code5c-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code5c-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code5c-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code5c-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code5c-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code5c-line-6").animate({backgroundColor: 'transparent'}, 0);
        $("#code5c-line-7").animate({backgroundColor: 'transparent'}, 0);
        $("#code5c-line-8").animate({backgroundColor: 'transparent'}, 0);
        $("#code5c-line-9").animate({backgroundColor: 'transparent'}, 0);
        $("#code5c-line-10").animate({backgroundColor: 'transparent'}, 0);
        $("#code5c-line-11").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p5_c3_showBorders = function () {
        $(".table .d5c-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d5c-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d5c-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d5c-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-5c").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p5_c3_hideBorders = function () {
        $(".table .d5c-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d5c-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d5c-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d5c-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-5c").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code5c-line-1").click(function(){
        $(".d5c-link").removeClass("yellow");
        $(".d5c-link").removeClass("green");
        $("#code5c-line-1").addClass("yellow");

        $("#d5c-string-top1").removeClass("stack-string-top");
        $("#d5c-string-mid1").removeClass("stack-string-middle");
        $("#d5c-string-bot1").removeClass("stack-string-bottom");
        $("#d5c-string-top2").removeClass("stack-string-top");
        $("#d5c-string-mid2").removeClass("stack-string-middle");
        $("#d5c-string-bot2").removeClass("stack-string-bottom");

        $(".d5c-hide-all").hide();
        $("#d5c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d5c-pointer-addr2").animate({color: '#777'}, 0);
        p5_c3_hideBorders();
        p5_c3_unhighlight();

        p5_c3_line1();
        currentLine5c = 2;
    });

    $("#code5c-line-2").click(function(){
        $(".d5c-link").removeClass("yellow");
        $(".d5c-link").removeClass("green");
        $("#code5c-line-2").addClass("yellow");
        $("#d5c-colour1-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d5c-string-top1").removeClass("stack-string-top");
        $("#d5c-string-mid1").removeClass("stack-string-middle");
        $("#d5c-string-bot1").removeClass("stack-string-bottom");
        $("#d5c-string-top2").removeClass("stack-string-top");
        $("#d5c-string-mid2").removeClass("stack-string-middle");
        $("#d5c-string-bot2").removeClass("stack-string-bottom");

        p5_c3_showBorders();
        $(".d5c-hide-all").hide();
        $(".d5c-show1").show();
        $("#d5c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d5c-pointer-addr2").animate({color: '#777'}, 0);
        p5_c3_unhighlight();

        p5_c3_line2();
        currentLine5c = 3;
    });

    $("#code5c-line-3").click(function(){
        $(".d5c-link").removeClass("yellow");
        $(".d5c-link").removeClass("green");
        $("#code5c-line-3").addClass("yellow");
        $("#d5c-colour1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-colour2-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d5c-string-top1").addClass("stack-string-top");
        $("#d5c-string-mid1").addClass("stack-string-middle");
        $("#d5c-string-bot1").addClass("stack-string-bottom");
        $("#d5c-string-top2").removeClass("stack-string-top");
        $("#d5c-string-mid2").removeClass("stack-string-middle");
        $("#d5c-string-bot2").removeClass("stack-string-bottom");

        p5_c3_showBorders();
        $(".d5c-hide-all").hide();
        $(".d5c-show1").show();
        $(".d5c-show2").show();
        $("#d5c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d5c-pointer-addr2").animate({color: '#777'}, 0);
        p5_c3_unhighlight();

        p5_c3_line3();
        currentLine5c = 4;
    });

    $("#code5c-line-4").click(function(){
        $(".d5c-link").removeClass("yellow");
        $(".d5c-link").removeClass("green");
        $("#code5c-line-4").addClass("yellow");
        $("#d5c-colour1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-colour2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-favColor-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d5c-string-top1").addClass("stack-string-top");
        $("#d5c-string-mid1").addClass("stack-string-middle");
        $("#d5c-string-bot1").addClass("stack-string-bottom");
        $("#d5c-string-top2").addClass("stack-string-top");
        $("#d5c-string-mid2").addClass("stack-string-middle");
        $("#d5c-string-bot2").addClass("stack-string-bottom");

        p5_c3_showBorders();
        $(".d5c-hide-all").hide();
        $("#d5c-favColor-val").html('0x0061ff0c');
        $(".d5c-show1").show();
        $(".d5c-show2").show();
        $(".d5c-show3").show();
        $("#d5c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d5c-pointer-addr2").animate({color: '#777'}, 0);
        p5_c3_unhighlight();

        p5_c3_line4();
        currentLine5c = 5;
    });

    $("#code5c-line-5").click(function(){
        $(".d5c-link").removeClass("yellow");
        $(".d5c-link").removeClass("green");
        $("#code5c-line-5").addClass("green");
        $("#d5c-colour1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-colour2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-favColor-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d5c-string-top1").addClass("stack-string-top");
        $("#d5c-string-mid1").addClass("stack-string-middle");
        $("#d5c-string-bot1").addClass("stack-string-bottom");
        $("#d5c-string-top2").addClass("stack-string-top");
        $("#d5c-string-mid2").addClass("stack-string-middle");
        $("#d5c-string-bot2").addClass("stack-string-bottom");

        p5_c3_showBorders();
        $(".d5c-hide-all").hide();
        $("#d5c-favColor-val").html('0x0061ff0c');
        $(".d5c-show1").show();
        $(".d5c-show2").show();
        $(".d5c-show3").show();
        $(".d5c-show4").show();
        $("#d5c-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d5c-pointer-addr2").animate({color: '#777'}, 0);
        p5_c3_unhighlight();

        p5_c3_line5();
        currentLine5c = 6;
    });

    $("#code5c-line-6").click(function() {
        $(".d5c-link").removeClass("yellow");
        $(".d5c-link").removeClass("green");
        $("#code5c-line-6").addClass("green");
        $("#d5c-colour1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-colour2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-favColor-val").animate({backgroundColor: '#5CB85C'}, 0);

        $("#d5c-string-top1").addClass("stack-string-top");
        $("#d5c-string-mid1").addClass("stack-string-middle");
        $("#d5c-string-bot1").addClass("stack-string-bottom");
        $("#d5c-string-top2").addClass("stack-string-top");
        $("#d5c-string-mid2").addClass("stack-string-middle");
        $("#d5c-string-bot2").addClass("stack-string-bottom");

        p5_c3_showBorders();
        $(".d5c-hide-all").hide();
        $("#d5c-favColor-val").html('0x0061ff0c');
        $(".d5c-show1").show();
        $(".d5c-show2").show();
        $(".d5c-show3").show();
        $(".d5c-show4").show();
        $(".d5c-show5").show();
        $("#d5c-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d5c-pointer-addr2").animate({color: '#777'}, 0);
        p5_c3_unhighlight();

        p5_c3_line6();
        currentLine5c = 7;
    });

    $("#code5c-line-7").click(function() {
        $(".d5c-link").removeClass("yellow");
        $(".d5c-link").removeClass("green");
        $("#code5c-line-7").addClass("yellow");
        $("#d5c-colour1-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d5c-colour2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-favColor-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d5c-string-top1").addClass("stack-string-top");
        $("#d5c-string-mid1").addClass("stack-string-middle");
        $("#d5c-string-bot1").addClass("stack-string-bottom");
        $("#d5c-string-top2").addClass("stack-string-top");
        $("#d5c-string-mid2").addClass("stack-string-middle");
        $("#d5c-string-bot2").addClass("stack-string-bottom");

        p5_c3_showBorders();
        $(".d5c-hide-all").hide();
        $("#d5c-favColor-val").html('0x0061ff0c');
        $(".d5c-show1").show();
        $(".d5c-show2").show();
        $(".d5c-show3").show();
        $(".d5c-show4").show();
        $(".d5c-show5").show();
        $(".d5c-show6").show();
        $("#d5c-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d5c-pointer-addr2").animate({color: '#777'}, 0);
        p5_c3_unhighlight();

        p5_c3_line7();
        currentLine5c = 8;
    });

    $("#code5c-line-8").click(function() {
        $(".d5c-link").removeClass("yellow");
        $(".d5c-link").removeClass("green");
        $("#code5c-line-8").addClass("green");
        $("#d5c-colour1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-colour2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-favColor-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d5c-string-top1").addClass("stack-string-top");
        $("#d5c-string-mid1").addClass("stack-string-middle");
        $("#d5c-string-bot1").addClass("stack-string-bottom");
        $("#d5c-string-top2").addClass("stack-string-top");
        $("#d5c-string-mid2").addClass("stack-string-middle");
        $("#d5c-string-bot2").addClass("stack-string-bottom");

        p5_c3_showBorders();
        $(".d5c-hide-all").hide();
        $("#d5c-favColor-val").html('0x0061ff00');
        $(".d5c-show1").show();
        $(".d5c-show2").show();
        $(".d5c-show3").show();
        $(".d5c-show4").show();
        $(".d5c-show5").show();
        $(".d5c-show6").show();
        $("#d5c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d5c-pointer-addr2").animate({color: '#532A78'}, 0);
        p5_c3_unhighlight();

        p5_c3_line8();
        currentLine5c = 9;
    });

    $("#code5c-line-9").click(function() {
        $(".d5c-link").removeClass("yellow");
        $(".d5c-link").removeClass("green");
        $("#code5c-line-9").addClass("green");
        $("#d5c-colour1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-colour2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-favColor-val").animate({backgroundColor: '#5CB85C'}, 0);

        $("#d5c-string-top1").addClass("stack-string-top");
        $("#d5c-string-mid1").addClass("stack-string-middle");
        $("#d5c-string-bot1").addClass("stack-string-bottom");
        $("#d5c-string-top2").addClass("stack-string-top");
        $("#d5c-string-mid2").addClass("stack-string-middle");
        $("#d5c-string-bot2").addClass("stack-string-bottom");

        p5_c3_showBorders();
        $(".d5c-hide-all").hide();
        $("#d5c-favColor-val").html('0x0061ff00');
        $(".d5c-show1").show();
        $(".d5c-show2").show();
        $(".d5c-show3").show();
        $(".d5c-show4").show();
        $(".d5c-show5").show();
        $(".d5c-show6").show();
        $(".d5c-show8").show();
        $("#d5c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d5c-pointer-addr2").animate({color: '#532A78'}, 0);
        p5_c3_unhighlight();

        p5_c3_line9();
        currentLine5c = 10;
    });


    $("#code5c-line-10").click(function(){
        $(".d5c-link").removeClass("yellow");
        $(".d5c-link").removeClass("green");
        $("#code5c-line-10").addClass("yellow");
        $("#d5c-colour1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-colour2-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d5c-favColor-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d5c-string-top1").addClass("stack-string-top");
        $("#d5c-string-mid1").addClass("stack-string-middle");
        $("#d5c-string-bot1").addClass("stack-string-bottom");
        $("#d5c-string-top2").addClass("stack-string-top");
        $("#d5c-string-mid2").addClass("stack-string-middle");
        $("#d5c-string-bot2").addClass("stack-string-bottom");

        p5_c3_showBorders();
        $(".d5c-hide-all").hide();
        $("#d5c-favColor-val").html('0x0061ff00');
        $(".d5c-show1").show();
        $(".d5c-show2").show();
        $(".d5c-show3").show();
        $(".d5c-show4").show();
        $(".d5c-show5").show();
        $(".d5c-show6").show();
        $(".d5c-show8").show();
        $(".d5c-show9").show();
        $("#d5c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d5c-pointer-addr2").animate({color: '#532A78'}, 0);
        p5_c3_unhighlight();

        p5_c3_line10();
        currentLine5c = 11;
    });

    $("#code5c-line-11").click(function(){
        $(".d5c-link").removeClass("yellow");
        $(".d5c-link").removeClass("green");
        $("#code5c-line-11").addClass("yellow");
        $("#d5c-colour1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-colour2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d5c-favColor-val").animate({backgroundColor: 'transparent'}, 0);

        $("#d5c-string-top1").addClass("stack-string-top");
        $("#d5c-string-mid1").addClass("stack-string-middle");
        $("#d5c-string-bot1").addClass("stack-string-bottom");
        $("#d5c-string-top2").addClass("stack-string-top");
        $("#d5c-string-mid2").addClass("stack-string-middle");
        $("#d5c-string-bot2").addClass("stack-string-bottom");

        p5_c3_showBorders();
        $(".d5c-hide-all").hide();
        $("#d5c-favColor-val").html('0x0061ff00');
        $(".d5c-show1").show();
        $(".d5c-show2").show();
        $(".d5c-show3").show();
        $(".d5c-show4").show();
        $(".d5c-show5").show();
        $(".d5c-show6").show();
        $(".d5c-show8").show();
        $(".d5c-show9").show();
        $(".d5c-show10").show();
        $("#d5c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d5c-pointer-addr2").animate({color: '#532A78'}, 0);
        p5_c3_unhighlight();

        p5_c3_line11();
        currentLine5c = 1;
    });

    $("#step-button-5c").click(function () {
        if (currentLine5c == 1) {
            //do line 1 things here
            $(".d5c-link").removeClass("yellow");
            $(".d5c-link").removeClass("green");
            $("#code5c-line-1").addClass("yellow");

            $("#d5c-string-top1").removeClass("stack-string-top");
            $("#d5c-string-mid1").removeClass("stack-string-middle");
            $("#d5c-string-bot1").removeClass("stack-string-bottom");
            $("#d5c-string-top2").removeClass("stack-string-top");
            $("#d5c-string-mid2").removeClass("stack-string-middle");
            $("#d5c-string-bot2").removeClass("stack-string-bottom");

            $(".d5c-hide-all").hide();
            $("#d5c-pointer-addr1").animate({color: '#777'}, 0);
            $("#d5c-pointer-addr2").animate({color: '#777'}, 0);
            p5_c3_hideBorders();
            p5_c3_unhighlight();

            p5_c3_line1();
            currentLine5c = 2;
        }
        else if (currentLine5c == 2) {
            //do line 2 things here
            p5_c3_line2();
            currentLine5c = 3;
        }
        else if (currentLine5c == 3) {
            //do line 3 things here
            p5_c3_line3();
            currentLine5c = 4;
        }
        else if (currentLine5c == 4) {
            //do line 4 things here
            p5_c3_line4();
            currentLine5c = 5;
        }
        else if (currentLine5c == 5) {
            //do line 4 things here
            p5_c3_line5();
            currentLine5c = 6;
        }
        else if (currentLine5c == 6) {
            p5_c3_line6();
            currentLine5c = 7;
        }
        else if (currentLine5c == 7) {
            p5_c3_line7();
            currentLine5c = 8;
        }
        else if (currentLine5c == 8) {
            p5_c3_line8();
            currentLine5c = 9;
        }
        else if (currentLine5c == 9) {
            p5_c3_line9();
            currentLine5c = 10;
        }
        else if (currentLine5c == 10) {
            p5_c3_line10();
            currentLine5c = 11;
        }
        else if (currentLine5c == 11) {
            p5_c3_line11();
            currentLine5c = 1;
        }
    });

});

