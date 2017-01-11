/**
 * Created by User on 14/12/2016.
 */

/** Specific JQuery for the getting started page. Mainly just animations **/

$(document).ready(function () {

    //panel 1
    //panel 1 code 1
    $("#start-button-1a").click(function () {
        $(".d1a-hide-all").hide();
        p1_c1_hideBorders();
        $("#code1a-line-5").animate({backgroundColor: 'transparent'}, 0);
        p1_c1_line1();
        $("#d1a-rtn-addr-val").promise().done(function () {
            p1_c1_line2();
            $("#d1a-age").promise().done(function () {
                p1_c1_line3()
                $("#d1a-age-val").promise().done(function () {
                    p1_c1_line4()
                    $("#d1a-age-val").promise().done(function () {
                        p1_c1_line5();
                    });
                });
            });
        });
    });

    //p1 c1 line 1 function
    var p1_c1_line1 = function () {
        $("#code1a-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d1a-link").removeClass("yellow");
        $(".table .d1a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1a-rtnval").delay(1200).show(400);
        $("#d1a-rtn-addr").delay(1200).show(400);
        $("#d1a-rtn-addr-val").delay(1600).show(400);
    }

    //p1 c1 line 2 function
    var p1_c1_line2 = function () {
        $("#code1a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $("#d1a-age").delay(1000).show(400);
    }

    //p1 c1 line 3 function
    var p1_c1_line3 = function () {
        $("#code1a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $("#d1a-age-val").removeClass("green");
        $("#d1a-age-val").delay(1000).show(400);
    }

    //p1 c1 line 4 function
    var p1_c1_line4 = function () {
        $("#code1a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-4").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $("#d1a-age-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
    }

    //p1 c1 line 5 function
    var p1_c1_line5 = function () {
        $("#code1a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#d1a-age-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#d1a-age-val").removeClass("green");
        $("#d1a-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var p1_c1_unhighlight = function () {
        $("#code1a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-5").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var p1_c1_showBorders = function () {
        $(".table .d1a-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d1a-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d1a-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d1a-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var p1_c1_hideBorders = function () {
        $(".table .d1a-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d1a-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d1a-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d1a-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code1a-line-1").click(function(){
        $("#step-button-1a").removeClass("disabled");

        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-1").addClass("yellow");

        $(".d1a-hide-all").hide();
        p1_c1_hideBorders();
        p1_c1_unhighlight();
        currentLine = 1;
    });

    $("#code1a-line-2").click(function(){
        $("#step-button-1a").removeClass("disabled");

        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-2").addClass("yellow");

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        p1_c1_unhighlight();
        currentLine = 2;
    });

    $("#code1a-line-3").click(function(){
        $("#step-button-1a").removeClass("disabled");

        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-3").addClass("yellow");

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        p1_c1_unhighlight();
        currentLine = 3;
    });

    $("#code1a-line-4").click(function(){
        $("#step-button-1a").removeClass("disabled");

        $(".d1a-link").removeClass("yellow");
        $("#d1a-age-val").removeClass("green");
        $("#code1a-line-4").addClass("green");
        $("#d1a-age-val").animate({backgroundColor: 'transparent'}, 0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        p1_c1_unhighlight();
        currentLine = 4;
    });

    $("#code1a-line-5").click(function(){
        $("#step-button-1a").removeClass("disabled");

        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#d1a-age-val").removeClass("green");
        $("#code1a-line-5").addClass("yellow");

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        $("#d1a-age-val").addClass("green");
        p1_c1_unhighlight();
        currentLine = 5;
    });

    $("#step-button-1a").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            p1_c1_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            p1_c1_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            p1_c1_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            p1_c1_line4();
            currentLine = 5;
        }
        else if (currentLine == 5) {
            p1_c1_line5();
            $("#step-button-1a").addClass("disabled");
            currentLine = 0;
        }

    });

    //panel 1 code 2
    $("#start-button-1b").click(function () {
        $(".d1b-hide-all").hide();
        p1_c2_hideBorders();
        $("#code1b-line-4").animate({backgroundColor: 'transparent'}, 0);
        p1_c2_line1();
        $("#d1b-rtn-addr-val").promise().done(function () {
            p1_c2_line2();
            $("#d1b-age-val").promise().done(function () {
                p1_c2_line3()
                $("#d1b-age-val").promise().done(function () {
                    p1_c2_line4()
                });
            });
        });
    });

    //p1 c2 line 1 function
    var p1_c2_line1 = function () {
        $("#code1b-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d1b-link").removeClass("yellow");
        $(".table .d1b-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1b-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1b-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1b-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1b-rtnval").delay(1200).show(400);
        $("#d1b-rtn-addr").delay(1200).show(400);
        $("#d1b-rtn-addr-val").delay(1600).show(400);
    }

    //p1 c2 line 2 function
    var p1_c2_line2 = function () {
        $("#code1b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1b-link").removeClass("yellow");
        $("#d1b-age-val").removeClass("green");
        $("#d1b-age").delay(1000).show(400);
        $("#d1b-age-val").delay(1400).show(400);
    }

    //p1 c2 line 3 function
    var p1_c2_line3 = function () {
        $("#code1b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-3").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".d1b-link").removeClass("yellow");
        $("#d1b-age-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
    }

    //p1 c2 line 4 function
    var p1_c2_line4 = function () {
        $("#code1b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#d1b-age-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("green");
        $("#d1b-age-val").removeClass("green");
        $("#d1b-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var p1_c2_unhighlight = function () {
        $("#code1b-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-4").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var p1_c2_showBorders = function () {
        $(".table .d1b-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d1b-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d1b-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d1b-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var p1_c2_hideBorders = function () {
        $(".table .d1b-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d1b-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d1b-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d1b-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code1b-line-1").click(function(){
        $("#step-button-1b").removeClass("disabled");

        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("green");
        $("#code1b-line-1").addClass("yellow");

        $(".d1b-hide-all").hide();
        p1_c2_hideBorders();
        p1_c2_unhighlight();
        currentLine = 1;
    });

    $("#code1b-line-2").click(function(){
        $("#step-button-1b").removeClass("disabled");

        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("green");
        $("#code1b-line-2").addClass("yellow");

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        p1_c2_unhighlight();
        currentLine = 2;
    });

    $("#code1b-line-3").click(function(){
        $("#step-button-1b").removeClass("disabled");

        $(".d1b-link").removeClass("yellow");
        $("#d1b-age-val").removeClass("green");
        $("#code1b-line-3").addClass("green");
        $("#d1b-age-val").animate({backgroundColor: 'transparent'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        p1_c2_unhighlight();
        currentLine = 3;
    });

    $("#code1b-line-4").click(function(){
        $("#step-button-1b").removeClass("disabled");

        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("green");
        $("#d1b-age-val").removeClass("green");
        $("#code1b-line-4").addClass("yellow");

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        $("#d1b-age-val").addClass("green");
        p1_c2_unhighlight();
        currentLine = 4;
    });


    $("#step-button-1b").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            p1_c2_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            p1_c2_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            p1_c2_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            p1_c2_line4();
            $("#step-button-1b").addClass("disabled");
            currentLine = 0;
        }

    });

    //panel 1 code 3
    $("#start-button-1c").click(function () {
        $(".d1c-hide-all").hide();
        p1_c3_hideBorders();
        $("#code1c-line-4").animate({backgroundColor: 'transparent'}, 0);
        p1_c3_line1();
        $("#d1c-rtn-addr-val").promise().done(function () {
            p1_c3_line2();
            $("#d1c-age").promise().done(function () {
                p1_c3_line3()
                $("#d1c-age-val").promise().done(function () {
                    p1_c3_line4()
                });
            });
        });
    });

    //p1 c3 line 1 function
    var p1_c3_line1 = function () {
        $("#code1c-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d1c-link").removeClass("yellow");
        $(".table .d1c-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1c-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1c-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1c-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1c-rtnval").delay(1200).show(400);
        $("#d1c-rtn-addr").delay(1200).show(400);
        $("#d1c-rtn-addr-val").delay(1600).show(400);
    }

    //p1 c3 line 2 function
    var p1_c3_line2 = function () {
        $("#code1c-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1c-link").removeClass("yellow");
        $("#d1c-age").delay(1000).show(400);
    }

    //p1 c2 line 3 function
    var p1_c3_line3 = function () {
        $("#code1c-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-3").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".d1c-link").removeClass("yellow");
        $("#d1c-age-val").delay(1000).animate({backgroundColor: '#D9534F'}, 500).show(500).delay(600);
    }

    //p1 c2 line 4 function
    var p1_c3_line4 = function () {
        $("#code1c-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#d1c-age-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1c-link").removeClass("yellow");
        $(".d1c-link").removeClass("green");
        $("#d1c-age-val").removeClass("red");
        $("#d1c-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var p1_c3_unhighlight = function () {
        $("#code1c-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1c-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1c-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1c-line-4").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var p1_c3_showBorders = function () {
        $(".table .d1c-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d1c-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d1c-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d1c-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var p1_c3_hideBorders = function () {
        $(".table .d1c-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d1c-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d1c-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d1c-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code1c-line-1").click(function(){
        $("#step-button-1c").removeClass("disabled");

        $(".d1c-link").removeClass("yellow");
        $(".d1c-link").removeClass("green");
        $("#code1c-line-1").addClass("yellow");

        $(".d1c-hide-all").hide();
        p1_c3_hideBorders();
        p1_c3_unhighlight();
        currentLine = 1;
    });

    $("#code1c-line-2").click(function(){
        $("#step-button-1c").removeClass("disabled");

        $(".d1c-link").removeClass("yellow");
        $(".d1c-link").removeClass("green");
        $("#code1c-line-2").addClass("yellow");

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".d1c-show1").show();
        p1_c3_unhighlight();
        currentLine = 2;
    });

    $("#code1c-line-3").click(function(){
        $("#step-button-1c").removeClass("disabled");

        $(".d1c-link").removeClass("yellow");
        $("#code1c-line-3").addClass("green");

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".d1c-show1").show();
        $(".d1c-show2").show();
        p1_c3_unhighlight();
        currentLine = 3;
    });

    $("#code1c-line-4").click(function(){
        $("#step-button-1c").removeClass("disabled");

        $(".d1c-link").removeClass("yellow");
        $(".d1c-link").removeClass("green");
        $("#d1c-age-val").removeClass("red");
        $("#code1c-line-4").addClass("yellow");

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".d1c-show1").show();
        $(".d1c-show2").show();
        $(".d1c-show3").show();
        $("#d1c-age-val").addClass("red");
        p1_c3_unhighlight();
        currentLine = 4;
    });


    $("#step-button-1c").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            p1_c3_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            p1_c3_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            p1_c3_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            p1_c3_line4();
            $("#step-button-1c").addClass("disabled");
            currentLine = 0;
        }

    });

    //panel 2
    //panel 2 code 1
    $("#start-button-2a").click(function () {
        $(".d2a-hide-all").hide();
        p2_c1_hideBorders();
        $("#code2a-line-5").animate({backgroundColor: 'transparent'}, 0);
        p2_c1_line1();
        $("#d2a-rtn-addr-val").promise().done(function () {
            p2_c1_line2();
            $("#d2a-odd-val").promise().done(function () {
                p2_c1_line3()
                $("#d2a-even-val").promise().done(function () {
                    p2_c1_line4()
                    $("#d2a-prime-val").promise().done(function () {
                        p2_c1_line5();
                    });
                });
            });
        });
    });

    //p2 c1 line 1 function
    var p2_c1_line1 = function () {
        $("#code2a-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d2a-link").removeClass("yellow");
        $(".table .d2a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d2a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d2a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d2a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d2a-rtnval").delay(1200).show(400);
        $("#d2a-rtn-addr").delay(1200).show(400);
        $("#d2a-rtn-addr-val").delay(1600).show(400);
    }

    //p2 c1 line 2 function
    var p2_c1_line2 = function () {
        $("#code2a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2a-link").removeClass("yellow");
        $("#d2a-odd").delay(1000).show(400);
        $("#d2a-odd-val").delay(1400).show(400);
    }

    //p2 c1 line 3 function
    var p2_c1_line3 = function () {
        $("#code2a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2a-link").removeClass("yellow");
        $("#d2a-even").delay(1000).show(400);
        $("#d2a-even-val").delay(1400).show(400);
    }

    //p2 c1 line 4 function
    var p2_c1_line4 = function () {
        $("#code2a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2a-link").removeClass("yellow");
        $("#d2a-prime").delay(1000).show(400);
        $("#d2a-prime-val").delay(1400).show(400);
    }

    //p2 c1 line 5 function
    var p2_c1_line5 = function () {
        $("#code2a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2a-link").removeClass("yellow");
        $("#d2a-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var p2_c1_unhighlight = function () {
        $("#code2a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code2a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code2a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code2a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code2a-line-5").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var p2_c1_showBorders = function () {
        $(".table .d2a-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d2a-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d2a-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d2a-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var p2_c1_hideBorders = function () {
        $(".table .d2a-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d2a-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d2a-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d2a-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code2a-line-1").click(function(){
        $("#step-button-2a").removeClass("disabled");

        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-1").addClass("yellow");

        $(".d2a-hide-all").hide();
        p2_c1_hideBorders();
        p2_c1_unhighlight();
        currentLine = 1;
    });

    $("#code2a-line-2").click(function(){
        $("#step-button-2a").removeClass("disabled");

        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-2").addClass("yellow");

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-show1").show();
        p2_c1_unhighlight();
        currentLine = 2;
    });

    $("#code2a-line-3").click(function(){
        $("#step-button-2a").removeClass("disabled");

        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-3").addClass("yellow");

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        p2_c1_unhighlight();
        currentLine = 3;
    });

    $("#code2a-line-4").click(function(){
        $("#step-button-2a").removeClass("disabled");

        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-4").addClass("yellow");

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3").show();
        p2_c1_unhighlight();
        currentLine = 4;
    });

    $("#code2a-line-5").click(function(){
        $("#step-button-2a").removeClass("disabled");

        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-5").addClass("yellow");

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3").show();
        $(".d2a-show4").show();
        p2_c1_unhighlight();
        currentLine = 5;
    });

    $("#step-button-2a").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            p2_c1_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            p2_c1_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            p2_c1_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            p2_c1_line4();
            currentLine = 5;
        }
        else if (currentLine == 5) {
            p2_c1_line5();
            $("#step-button-2a").addClass("disabled");
            currentLine = 0;
        }

    });

    //panel 2 code 2
    $("#start-button-2b").click(function () {
        $(".d2b-hide-all").hide();
        $("#d2b-string-top").removeClass("stack-string-top");
        $("#d2b-string-mid").removeClass("stack-string-middle");
        $("#d2b-string-bot").removeClass("stack-string-bottom");
        p2_c2_hideBorders();
        $("#code2b-line-5").animate({backgroundColor: 'transparent'}, 0);
        p2_c2_line1();
        $("#d2b-rtn-addr-val").promise().done(function () {
            p2_c2_line2();
            $("#d2b-fruit-val").promise().done(function () {
                p2_c2_line3()
                $("#d2b-mass-val").promise().done(function () {
                    p2_c2_line4()
                    $("#d2b-quantity-val").promise().done(function () {
                        p2_c2_line5();
                    });
                });
            });
        });
    });

    //p2 c2 line 1 function
    var p2_c2_line1 = function () {
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".table .d2b-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d2b-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d2b-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d2b-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d2b-rtnval").delay(1200).show(400);
        $("#d2b-rtn-addr").delay(1200).show(400);
        $("#d2b-rtn-addr-val").delay(1600).show(400);
    }

    //p2 c2 line 2 function
    var p2_c2_line2 = function () {
        $("#code2b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        setTimeout(function(){
            $("#d2b-string-top").addClass("stack-string-top");
            $("#d2b-string-mid").addClass("stack-string-middle");
            $("#d2b-string-bot").addClass("stack-string-bottom");
        }, 800);
        $("#d2b-fruit").delay(1000).show(400);
        $("#d2b-fruit-val").delay(1400).show(400);
    }

    //p2 c2 line 3 function
    var p2_c2_line3 = function () {
        $("#code2b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $("#d2b-mass").delay(1000).show(400);
        $("#d2b-mass-val").delay(1400).show(400);
    }

    //p2 c2 line 4 function
    var p2_c2_line4 = function () {
        $("#code2b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $("#d2b-quantity").delay(1000).show(400);
        $("#d2b-quantity-val").delay(1400).show(400);
    }

    //p2 c2 line 5 function
    var p2_c2_line5 = function () {
        $("#code2b-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $("#d2b-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var p2_c2_unhighlight = function () {
        $("#code2b-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-5").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var p2_c2_showBorders = function () {
        $(".table .d2b-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d2b-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d2b-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d2b-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var p2_c2_hideBorders = function () {
        $(".table .d2b-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d2b-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d2b-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d2b-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code2b-line-1").click(function(){
        $("#step-button-2b").removeClass("disabled");

        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-1").addClass("yellow");
        $("#d2b-string-top").removeClass("stack-string-top");
        $("#d2b-string-mid").removeClass("stack-string-middle");
        $("#d2b-string-bot").removeClass("stack-string-bottom");

        $(".d2b-hide-all").hide();
        p2_c2_hideBorders();
        p2_c2_unhighlight();
        currentLine = 1;
    });

    $("#code2b-line-2").click(function(){
        $("#step-button-2b").removeClass("disabled");

        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-2").addClass("yellow");
        $("#d2b-string-top").removeClass("stack-string-top");
        $("#d2b-string-mid").removeClass("stack-string-middle");
        $("#d2b-string-bot").removeClass("stack-string-bottom");

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        p2_c2_unhighlight();
        currentLine = 2;
    });

    $("#code2b-line-3").click(function(){
        $("#step-button-2b").removeClass("disabled");

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
        currentLine = 3;
    });

    $("#code2b-line-4").click(function(){
        $("#step-button-2b").removeClass("disabled");

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
        currentLine = 4;
    });

    $("#code2b-line-5").click(function(){
        $("#step-button-2b").removeClass("disabled");

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
        currentLine = 5;
    });

    $("#step-button-2b").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            p2_c2_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            p2_c2_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            p2_c2_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            p2_c2_line4();
            currentLine = 5;
        }
        else if (currentLine == 5) {
            p2_c2_line5();
            $("#step-button-2b").addClass("disabled");
            currentLine = 0;
        }

    });

    //panel 3
    //panel 3 code 1
    $("#start-button-3a").click(function () {
        $(".d3a-hide-all").hide();
        p3_c1_hideBorders();
        $("#code3a-line-6").animate({backgroundColor: 'transparent'}, 0);
        p3_c1_line1();
        $("#d3a-rtn-addr-val").promise().done(function () {
            p3_c1_line2();
            $("#d3a-id-val").promise().done(function () {
                p3_c1_line3()
                $("#d3a-id-val").promise().done(function () {
                    p3_c1_line4()
                    $("#d3a-id-val").promise().done(function () {
                        p3_c1_line5();
                        $("#d3a-id-val").promise().done(function () {
                            p3_c1_line6();
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
        $(".table .d3a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d3a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d3a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d3a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d3a-rtnval").delay(1200).show(400);
        $("#d3a-rtn-addr").delay(1200).show(400);
        $("#d3a-rtn-addr-val").delay(1600).show(400);
    }

    //p3 c1 line 2 function
    var p3_c1_line2 = function () {
        $("#code3a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $("#d3a-id-val").removeClass("green");
        $("#d3a-id-val").html('1');
        $("#d3a-id").delay(1000).show(400);
        $("#d3a-id-val").delay(1400).show(400);
    }

    //p3 c1 line 3 function
    var p3_c1_line3 = function () {
        $("#code3a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-3").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $("#d3a-id-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
    }

    //p3 c1 line 4 function
    var p3_c1_line4 = function () {
        $("#code3a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#d3a-id-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#d3a-id-val").removeClass("green");
        setTimeout(function(){
            $("#d3a-id-val").html('2');
        }, 1000);
        $("#d3a-id-val").delay(1100).animate({backgroundColor: 'transparent'}, 500);
    }

    //p3 c1 line 5 function
    var p3_c1_line5 = function () {
        $("#code3a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-5").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $("#d3a-id-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
    }

    //p3 c1 line 5 function
    var p3_c1_line6 = function () {
        $("#code3a-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#d3a-id-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-6").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#d3a-id-val").removeClass("green");
        $("#d3a-rtnval-val").delay(1000).show(400);
    }


    //unhighlight all lines
    var p3_c1_unhighlight = function () {
        $("#code3a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-6").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var p3_c1_showBorders = function () {
        $(".table .d3a-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d3a-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d3a-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d3a-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var p3_c1_hideBorders = function () {
        $(".table .d3a-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d3a-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d3a-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d3a-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code3a-line-1").click(function(){
        $("#step-button-3a").removeClass("disabled");

        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#code3a-line-1").addClass("yellow");

        $(".d3a-hide-all").hide();
        p3_c1_hideBorders();
        p3_c1_unhighlight();
        currentLine = 1;
    });

    $("#code3a-line-2").click(function(){
        $("#step-button-3a").removeClass("disabled");

        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#code3a-line-2").addClass("yellow");

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        p3_c1_unhighlight();
        currentLine = 2;
    });

    $("#code3a-line-3").click(function(){
        $("#step-button-3a").removeClass("disabled");

        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#d3a-id-val").removeClass("green");
        $("#d3a-id-val").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-3").addClass("green");

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $("#d3a-id-val").html('1');
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        p3_c1_unhighlight();
        currentLine = 3;
    });

    $("#code3a-line-4").click(function(){
        $("#step-button-3a").removeClass("disabled");

        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#code3a-line-4").addClass("yellow");

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $("#d3a-id-val").html('1');
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $("#d3a-id-val").addClass("green");
        p3_c1_unhighlight();
        currentLine = 4;
    });

    $("#code3a-line-5").click(function(){
        $("#step-button-3a").removeClass("disabled");

        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#d3a-id-val").removeClass("green");
        $("#d3a-id-val").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-5").addClass("green");

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $("#d3a-id-val").html('2');
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        p3_c1_unhighlight();
        currentLine = 5;
    });

    $("#code3a-line-6").click(function(){
        $("#step-button-3a").removeClass("disabled");

        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#code3a-line-6").addClass("yellow");

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $("#d3a-id-val").html('2');
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $("#d3a-id-val").addClass("green");
        p3_c1_unhighlight();
        currentLine = 6;
    });

    $("#step-button-3a").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            p3_c1_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            p3_c1_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            p3_c1_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            p3_c1_line4();
            currentLine = 5;
        }
        else if (currentLine == 5) {
            p3_c1_line5();
            currentLine = 6;
        }
        else if (currentLine == 6) {
            p3_c1_line6();
            $("#step-button-3a").addClass("disabled");
            currentLine = 0;
        }

    });

    //panel 3 code 2
    $("#start-button-3b").click(function () {
        $(".d3b-hide-all").hide();
        p3_c2_hideBorders();
        $("#code3b-line-7").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-3b").animate({backgroundColor: 'transparent'}, 0);
        p3_c2_line1();
        $("#d3b-rtn-addr-val").promise().done(function () {
            p3_c2_line2();
            $("#d3b-name-val").promise().done(function () {
                p3_c2_line3()
                $("#d3b-age-val").promise().done(function () {
                    p3_c2_line4()
                    $("#d3b-phone-val").promise().done(function () {
                        p3_c2_line5();
                        $("#d3b-name-val").promise().done(function () {
                            p3_c2_line6();
                            $("#d3b-phone-val").promise().done(function () {
                                p3_c2_line7();
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
        $(".table .stack-heap-3b").animate({backgroundColor: '#F5F5FF5'}, 500);
        $(".table .d3b-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d3b-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d3b-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d3b-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d3b-rtnval").delay(1200).show(400);
        $("#d3b-rtn-addr").delay(1200).show(400);
        $("#d3b-rtn-addr-val").delay(1600).show(400);
    }

    //p3 c2 line 2 function
    var p3_c2_line2 = function () {
        $("#code3b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3b-link").removeClass("yellow");
        setTimeout(function(){
            $("#d3b-string-top").addClass("stack-string-top");
            $("#d3b-string-mid").addClass("stack-string-middle");
            $("#d3b-string-bot").addClass("stack-string-bottom");
        }, 800);
        $("#d3b-name-val").html('"Bob"');
        $("#d3b-name").delay(1000).show(400);
        $("#d3b-name-val").delay(1400).show(400);
    }

    //p3 c2 line 3 function
    var p3_c2_line3 = function () {
        $("#code3b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3b-link").removeClass("yellow");
        $("#d3b-age").delay(1000).show(400);
        $("#d3b-age-val").delay(1400).show(400);
    }

    //p3 c2 line 4 function
    var p3_c2_line4 = function () {
        $("#code3b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3b-link").removeClass("yellow");
        $("#d3b-phone-val").html('1111111');
        $("#d3b-phone").delay(1000).show(400);
        $("#d3b-phone-val").delay(1400).show(400);
    }

    //p3 c2 line 5 function
    var p3_c2_line5 = function () {
        $("#code3b-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3b-link").removeClass("yellow");
        setTimeout(function(){
            $("#d3b-name-val").html('"Bob Jones"');
        }, 1000);
        $("#d3b-name-val").delay(1100).animate({backgroundColor: 'transparent'}, 500);
    }

    //p3 c2 line 6 function
    var p3_c2_line6 = function () {
        $("#code3b-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-6").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3a-link").removeClass("yellow");
        setTimeout(function(){
            $("#d3b-phone-val").html('2222222');
        }, 1000);
        $("#d3b-phone-val").delay(1100).animate({backgroundColor: 'transparent'}, 500);
    }

    //p3 c2 line 7 function
    var p3_c2_line7 = function () {
        $("#code3b-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-7").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3b-link").removeClass("yellow");
        $("#d3b-rtnval-val").delay(1000).show(400);
    }


    //unhighlight all lines
    var p3_c2_unhighlight = function () {
        $("#code3b-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-6").animate({backgroundColor: 'transparent'}, 0);
        $("#code3b-line-7").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var p3_c2_showBorders = function () {
        $(".table .d3b-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d3b-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d3b-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d3b-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-3b").animate({backgroundColor: '#F5F5FF5'}, 0);
    }

    //hide stack borders
    var p3_c2_hideBorders = function () {
        $(".table .d3b-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d3b-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d3b-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d3b-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-3b").animate({backgroundColor: 'transparent'}, 0);
    }

    //stepping function
    var currentLine3b = 1;
    $("#code3b-line-1").addClass("yellow");
    $("#code3b-line-1").click(function(){
        $("#step-button-3b").removeClass("disabled");

        $(".d3b-link").removeClass("yellow");
        $("#code3b-line-1").addClass("yellow");
        $("#d3b-string-top").removeClass("stack-string-top");
        $("#d3b-string-mid").removeClass("stack-string-middle");
        $("#d3b-string-bot").removeClass("stack-string-bottom");

        $(".d3b-hide-all").hide();
        p3_c2_hideBorders();
        p3_c2_unhighlight();
        currentLine3b = 1;
    });

    $("#code3b-line-2").click(function(){
        $("#step-button-3b").removeClass("disabled");

        $(".d3b-link").removeClass("yellow");
        $("#code3b-line-2").addClass("yellow");
        $("#d3b-string-top").removeClass("stack-string-top");
        $("#d3b-string-mid").removeClass("stack-string-middle");
        $("#d3b-string-bot").removeClass("stack-string-bottom");

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $(".d3b-show1").show();
        p3_c2_unhighlight();
        currentLine3b = 2;
    });

    $("#code3b-line-3").click(function(){
        $("#step-button-3b").removeClass("disabled");

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
        currentLine3b = 3;
    });

    $("#code3b-line-4").click(function(){
        $("#step-button-3b").removeClass("disabled");

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
        currentLine3b = 4;
    });

    $("#code3b-line-5").click(function(){
        $("#step-button-3b").removeClass("disabled");

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
        currentLine3b = 5;
    });

    $("#code3b-line-6").click(function(){
        $("#step-button-3b").removeClass("disabled");

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
        currentLine3b = 6;
    });

    $("#code3b-line-7").click(function(){
        $("#step-button-3b").removeClass("disabled");

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
        currentLine3b = 7;
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
            currentLine3b = 1;
        }

    });

    //panel 4
    //code 1
    $("#start-button-4a").click(function () {
        $(".d4a-hide-all").hide();
        p4_c1_hideBorders();
        $("#code4a-line-6").animate({backgroundColor: 'transparent'}, 0);
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
        $(".table .d4a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d4a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d4a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d4a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d4a-rtnval").delay(1000).show(400);
        $("#d4a-rtn-addr").delay(1000).show(400);
        $("#d4a-rtn-addr-val").delay(1400).show(400);

    }

    //p4 c1 line 2 function
    var p4_c1_line2 = function () {
        $("#code4a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4a-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d4a-link").removeClass("yellow");
        setTimeout(function(){
            $("#d4a-string-top").addClass("stack-string-top");
            $("#d4a-string-mid").addClass("stack-string-middle");
            $("#d4a-string-bot").addClass("stack-string-bottom");
        }, 800);
        $("#d4a-name").delay(1000).show(400);
        $("#d4a-name-val").delay(1400).show(400);
    }

    //p4 c1 line 3 function
    var p4_c1_line3 = function () {
        $("#code4a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4a-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d4a-link").removeClass("yellow");
        $("#d4a-age").delay(1000).show(400);
        $("#d4a-age-val").delay(1400).show(400);
    }

    //p4 c1 line 4 function
    var p4_c1_line4 = function () {
        $("#code4a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4a-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d4a-link").removeClass("yellow");
        $("#d4a-name-alias").delay(1000).show(400);
    }

    //p1 c1 line 5 function
    var p4_c1_line5 = function () {
        $("#code4a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4a-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d4a-link").removeClass("yellow");
        $("#d4a-age-alias").delay(1000).show(400);
    }

    //p1 c1 line 6 function
    var p4_c1_line6 = function () {
        $("#code4a-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code4a-line-6").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d4a-link").removeClass("yellow");
        $("#d4a-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var p4_c1_unhighlight = function () {
        $("#code4a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code4a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code4a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code4a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code4a-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code4a-line-6").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var p4_c1_showBorders = function () {
        $(".table .d4a-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d4a-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d4a-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d4a-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var p4_c1_hideBorders = function () {
        $(".table .d4a-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d4a-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d4a-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d4a-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code4a-line-1").click(function(){
        $("#step-button-4a").removeClass("disabled");

        $(".d4a-link").removeClass("yellow");
        $("#code4a-line-1").addClass("yellow");
        $("#d4a-string-top").removeClass("stack-string-top");
        $("#d4a-string-mid").removeClass("stack-string-middle");
        $("#d4a-string-bot").removeClass("stack-string-bottom");

        $(".d4a-hide-all").hide();
        p4_c1_hideBorders();
        p4_c1_unhighlight();
        currentLine = 1;
    });

    $("#code4a-line-2").click(function(){
        $("#step-button-4a").removeClass("disabled");

        $(".d4a-link").removeClass("yellow");
        $("#code4a-line-2").addClass("yellow");
        $("#d4a-string-top").removeClass("stack-string-top");
        $("#d4a-string-mid").removeClass("stack-string-middle");
        $("#d4a-string-bot").removeClass("stack-string-bottom");

        p4_c1_showBorders();
        $(".d4a-hide-all").hide();
        $(".d4a-show1").show();
        p4_c1_unhighlight();
        currentLine = 2;
    });

    $("#code4a-line-3").click(function(){
        $("#step-button-4a").removeClass("disabled");

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
        currentLine = 3;
    });

    $("#code4a-line-4").click(function(){
        $("#step-button-4a").removeClass("disabled");

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
        currentLine = 4;
    });

    $("#code4a-line-5").click(function(){
        $("#step-button-4a").removeClass("disabled");

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
        currentLine = 5;
    });

    $("#code4a-line-6").click(function(){
        $("#step-button-4a").removeClass("disabled");

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
        currentLine = 6;
    });


    $("#step-button-4a").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            p4_c1_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            p4_c1_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            p4_c1_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            p4_c1_line4();
            currentLine = 5;
        }
        else if (currentLine == 5) {
            //do line 4 things here
            p4_c1_line5();
            currentLine = 6;
        }
        else if (currentLine == 6) {
            p4_c1_line6();
            $("#step-button4a").addClass("disabled");
            currentLine = 0;
        }

    });


    //panel 5
    //code 1
    $("#start-button-5a").click(function () {
        $(".d5a-hide-all").hide();
        p5_c1_hideBorders();
        $("#code5a-line-5").animate({backgroundColor: 'transparent'}, 0);
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
                    });
                });
            });
        });
    });

    //p5 c1 line 1 function
    var p5_c1_line1 = function () {
        $("#code5a-line-1").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d5a-link").removeClass("yellow");
        $(".table .d5a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d5a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d5a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d5a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d5a-rtnval").delay(1200).show(400);
        $("#d5a-rtn-addr").delay(1200).show(400);
        $("#d5a-rtn-addr-val").delay(1600).show(400);

    }

    //p5 c1 line 2 function
    var p5_c1_line2 = function () {
        $("#code5a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5a-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d5a-link").removeClass("yellow");
        $("#d5a-bob-HPhone").delay(1000).show(400);
        $("#d5a-bob-HPhone-val").delay(1400).show(400);
    }

    //p5 c1 line 3 function
    var p5_c1_line3 = function () {
        $("#code5a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5a-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d5a-link").removeClass("yellow");
        $("#d5a-bob-MPhone").delay(1000).show(400);
        $("#d5a-bob-MPhone-val").delay(1400).show(400);
    }

    //p5 c1 line 4 function
    var p5_c1_line4 = function () {
        $("#code5a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5a-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d5a-link").removeClass("yellow");
        $("#d5a-alice-HPhone").delay(1000).show(400);
        $("#d5a-pointer-addr").delay(1400).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d5a-alice-HPhone-val").delay(1400).show(400);
    }

    //p5 c1 line 5 function
    var p5_c1_line5 = function () {
        $("#code5a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code5a-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d5a-link").removeClass("yellow");
        $("#d5a-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var p5_c1_unhighlight = function () {
        $("#code5a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code5a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code5a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code5a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code5a-line-5").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var p5_c1_showBorders = function () {
        $(".table .d5a-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d5a-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d5a-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d5a-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var p5_c1_hideBorders = function () {
        $(".table .d5a-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d5a-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d5a-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d5a-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code5a-line-1").click(function(){
        $("#step-button-5a").removeClass("disabled");

        $(".d5a-link").removeClass("yellow");
        $("#code5a-line-1").addClass("yellow");

        $(".d5a-hide-all").hide();
        $("#d5a-pointer-addr").animate({color: '#777'}, 0);
        p5_c1_hideBorders();
        p5_c1_unhighlight();
        currentLine = 1;
    });

    $("#code5a-line-2").click(function(){
        $("#step-button-5a").removeClass("disabled");

        $(".d5a-link").removeClass("yellow");
        $("#code5a-line-2").addClass("yellow");

        p5_c1_showBorders();
        $(".d5a-hide-all").hide();
        $(".d5a-show1").show();
        $("#d5a-pointer-addr").animate({color: '#777'}, 0);
        p5_c1_unhighlight();
        currentLine = 2;
    });

    $("#code5a-line-3").click(function(){
        $("#step-button-5a").removeClass("disabled");

        $(".d5a-link").removeClass("yellow");
        $("#code5a-line-3").addClass("yellow");

        p5_c1_showBorders();
        $(".d5a-hide-all").hide();
        $(".d5a-show1").show();
        $(".d5a-show2").show();
        $("#d5a-pointer-addr").animate({color: '#777'}, 0);
        p5_c1_unhighlight();
        currentLine = 3;
    });

    $("#code5a-line-4").click(function(){
        $("#step-button-5a").removeClass("disabled");

        $(".d5a-link").removeClass("yellow");
        $("#code5a-line-4").addClass("yellow");

        p5_c1_showBorders();
        $(".d5a-hide-all").hide();
        $(".d5a-show1").show();
        $(".d5a-show2").show();
        $(".d5a-show3").show();
        $("#d5a-pointer-addr").animate({color: '#777'}, 0);
        p5_c1_unhighlight();
        currentLine = 4;
    });

    $("#code5a-line-5").click(function(){
        $("#step-button-5a").removeClass("disabled");

        $(".d5a-link").removeClass("yellow");
        $("#code5a-line-5").addClass("yellow");

        p5_c1_showBorders();
        $(".d5a-hide-all").hide();
        $(".d5a-show1").show();
        $(".d5a-show2").show();
        $(".d5a-show3").show();
        $(".d5a-show4").show();
        $("#d5a-pointer-addr").animate({color: '#532A78'}, 0);
        p5_c1_unhighlight();
        currentLine = 5;
    });

    $("#step-button-5a").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            p5_c1_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            p5_c1_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            p5_c1_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            p5_c1_line4();
            currentLine = 5;
        }
        else if (currentLine == 5) {
            p5_c1_line5();
            $("#step-button-5a").addClass("disabled");
            currentLine = 0;
        }

    });
});

