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
        $(".link").removeClass("yellow");
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
        $(".link").removeClass("yellow");
        $("#d1a-age").delay(1000).show(400);
    }

    //p1 c1 line 3 function
    var p1_c1_line3 = function () {
        $("#code1a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d1a-age-val").removeClass("green");
        $("#d1a-age-val").delay(1000).show(400);
    }

    //p1 c1 line 4 function
    var p1_c1_line4 = function () {
        $("#code1a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-4").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".link").removeClass("yellow");
        $("#d1a-age-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
    }

    //p1 c1 line 5 function
    var p1_c1_line5 = function () {
        $("#code1a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#d1a-age-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
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

        $(".link").removeClass("yellow");
        $(".link").removeClass("green");
        $("#code1a-line-1").addClass("yellow");

        $(".d1a-hide-all").hide();
        p1_c1_hideBorders();
        p1_c1_unhighlight();
        currentLine = 1;
    });

    $("#code1a-line-2").click(function(){
        $("#step-button-1a").removeClass("disabled");

        $(".link").removeClass("yellow");
        $(".link").removeClass("green");
        $("#code1a-line-2").addClass("yellow");

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        p1_c1_unhighlight();
        currentLine = 2;
    });

    $("#code1a-line-3").click(function(){
        $("#step-button-1a").removeClass("disabled");

        $(".link").removeClass("yellow");
        $(".link").removeClass("green");
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

        $(".link").removeClass("yellow");
        $("#d1a-age-val").removeClass("green");
        $("#code1a-line-4").addClass("green");

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

        $(".link").removeClass("yellow");
        $(".link").removeClass("green");
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
        $(".link").removeClass("yellow");
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
        $(".link").removeClass("yellow");
        $("#d1b-age-val").removeClass("green");
        $("#d1b-age").delay(1000).show(400);
        $("#d1b-age-val").delay(1400).show(400);
    }

    //p1 c2 line 3 function
    var p1_c2_line3 = function () {
        $("#code1b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-3").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".link").removeClass("yellow");
        $("#d1b-age-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
    }

    //p1 c2 line 4 function
    var p1_c2_line4 = function () {
        $("#code1b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#d1b-age-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
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

        $(".link").removeClass("yellow");
        $(".link").removeClass("green");
        $("#code1b-line-1").addClass("yellow");

        $(".d1b-hide-all").hide();
        p1_c2_hideBorders();
        p1_c2_unhighlight();
        currentLine = 1;
    });

    $("#code1b-line-2").click(function(){
        $("#step-button-1b").removeClass("disabled");

        $(".link").removeClass("yellow");
        $(".link").removeClass("green");
        $("#code1b-line-2").addClass("yellow");

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        p1_c2_unhighlight();
        currentLine = 2;
    });

    $("#code1b-line-3").click(function(){
        $("#step-button-1b").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#d1b-age-val").removeClass("green");
        $("#code1b-line-3").addClass("green");

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        p1_c2_unhighlight();
        currentLine = 3;
    });

    $("#code1b-line-4").click(function(){
        $("#step-button-1b").removeClass("disabled");

        $(".link").removeClass("yellow");
        $(".link").removeClass("green");
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
        $(".link").removeClass("yellow");
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
        $(".link").removeClass("yellow");
        $("#d1c-age").delay(1000).show(400);
    }

    //p1 c2 line 3 function
    var p1_c3_line3 = function () {
        $("#code1c-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-3").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".link").removeClass("yellow");
        $("#d1c-age-val").delay(1000).animate({backgroundColor: '#D9534F'}, 500).show(500).delay(600);
    }

    //p1 c2 line 4 function
    var p1_c3_line4 = function () {
        $("#code1c-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#d1c-age-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $(".link").removeClass("green");
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

        $(".link").removeClass("yellow");
        $(".link").removeClass("green");
        $("#code1c-line-1").addClass("yellow");

        $(".d1c-hide-all").hide();
        p1_c3_hideBorders();
        p1_c3_unhighlight();
        currentLine = 1;
    });

    $("#code1c-line-2").click(function(){
        $("#step-button-1c").removeClass("disabled");

        $(".link").removeClass("yellow");
        $(".link").removeClass("green");
        $("#code1c-line-2").addClass("yellow");

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".d1c-show1").show();
        p1_c3_unhighlight();
        currentLine = 2;
    });

    $("#code1c-line-3").click(function(){
        $("#step-button-1c").removeClass("disabled");

        $(".link").removeClass("yellow");
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

        $(".link").removeClass("yellow");
        $(".link").removeClass("green");
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


    //page 2 code
    $("#start-button2").click(function () {
        $(".hide-all").hide();
        $("#code2-line-6").animate({backgroundColor: 'transparent'}, 0);
        b_line1();
        $("#d2-rtn-addr-val").promise().done(function () {
            b_line2();
            $("#d2-name-val").promise().done(function () {
                b_line3();
                $("#d2-age-val").promise().done(function () {
                    b_line4();
                    $("#d2-name-alias").promise().done(function () {
                        b_line5();
                        $("#d2-age-alias").promise().done(function () {
                            b_line6();
                        });
                    });
                });
            });
        });
    });

    //line 1 function
    var b_line1 = function () {
        $("#code2-line-1").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $(".table .stack-bottom").delay(200).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},100);
        $(".table .stack-top").delay(200).animate({borderTopWidth: '2px', borderTopColor: 'black'},100);
        $(".table .stack-left").delay(200).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},100);
        $(".table .stack-right").delay(200).animate({borderRightWidth: '2px', borderRightColor: 'black'},100);
        $("#d2-rtnval").delay(1200).show(400);
        $("#d2-rtn-addr").delay(1200).show(400);
        $("#d2-rtn-addr-val").delay(1600).show(400);

    }

    //line 2 function
    var b_line2 = function () {
        $("#code2-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d2-name").delay(1000).show(400);
        $("#d2-name-val").delay(1400).show(400);
    }

    //line 3 function
    var b_line3 = function () {
        $("#code2-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d2-age").delay(1000).show(400);
        $("#d2-age-val").delay(1400).show(400);
    }

    //line 4 function
    var b_line4 = function () {
        $("#code2-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d2-name-alias").delay(1000).show(400);
    }

    //line 5 function
    var b_line5 = function () {
        $("#code2-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d2-age-alias").delay(1000).show(400);
    }

    //line 6 function
    var b_line6 = function () {
        $("#code2-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2-line-6").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d2-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var unhighlight_2 = function () {
        $("#code2-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code2-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code2-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code2-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code2-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code2-line-6").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var showBorders2 = function () {
        $(".table .d2-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d2-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d2-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d2-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var hideBorders2 = function () {
        $(".table .d2-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d2-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d2-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d2-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code2-line-1").click(function(){
        $("#step-button2").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code2-line-1").addClass("yellow");

        $(".hide-all").hide();
        hideBorders2();
        unhighlight_2();
        currentLine = 1;
    });

    $("#code2-line-2").click(function(){
        $("#step-button2").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code2-line-2").addClass("yellow");

        showBorders2();
        $(".hide-all").hide();
        $(".d2-show1").show();
        unhighlight_2();
        currentLine = 2;
    });

    $("#code2-line-3").click(function(){
        $("#step-button2").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code2-line-3").addClass("yellow");

        showBorders2();
        $(".hide-all").hide();
        $(".d2-show1").show();
        $(".d2-show2").show();
        unhighlight_2();
        currentLine = 3;
    });

    $("#code2-line-4").click(function(){
        $("#step-button2").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code2-line-4").addClass("yellow");

        showBorders2();
        $(".hide-all").hide();
        $(".d2-show1").show();
        $(".d2-show2").show();
        $(".d2-show3").show();
        unhighlight_2();
        currentLine = 4;
    });

    $("#code2-line-5").click(function(){
        $("#step-button2").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code2-line-5").addClass("yellow");

        showBorders2();
        $(".hide-all").hide();
        $(".d2-show1").show();
        $(".d2-show2").show();
        $(".d2-show3").show();
        $(".d2-show4").show();
        unhighlight_2();
        currentLine = 5;
    });

    $("#code2-line-6").click(function(){
        $("#step-button2").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code2-line-6").addClass("yellow");

        showBorders2();
        $(".hide-all").hide();
        $(".d2-show1").show();
        $(".d2-show2").show();
        $(".d2-show3").show();
        $(".d2-show4").show();
        $(".d2-show5").show();
        unhighlight_2();
        currentLine = 6;
    });


    $("#step-button2").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            b_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            b_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            b_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            b_line4();
            currentLine = 5;
        }
        else if (currentLine == 5) {
            //do line 4 things here
            b_line5();
            currentLine = 6;
        }
        else if (currentLine == 6) {
            b_line6();
            $("#step-button2").addClass("disabled");
            currentLine = 0;
        }

    });


    //page 3 code
    $("#start-button3").click(function () {
        $(".hide-all").hide();
        $("#code3-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#d3-pointer-addr").animate({color: '#777'}, 0);
        c_line1();
        $("#d3-rtn-addr-val").promise().done(function () {
            c_line2();
            $("#d3-bob-HPhone-val").promise().done(function () {
                c_line3();
                $("#d3-bob-MPhone-val").promise().done(function () {
                    c_line4();
                    $("#d3-alice-HPhone-val").promise().done(function () {
                        c_line5();
                    });
                });
            });
        });
    });

    //line 1 function
    var c_line1 = function () {
        $("#code3-line-1").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $(".table .d3-stack-bottom").delay(200).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},50);
        $(".table .d3-stack-top").delay(200).animate({borderTopWidth: '2px', borderTopColor: 'black'},50);
        $(".table .d3-stack-left").delay(200).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},50);
        $(".table .d3-stack-right").delay(200).animate({borderRightWidth: '2px', borderRightColor: 'black'},50);
        $("#d3-rtnval").delay(1200).show(400);
        $("#d3-rtn-addr").delay(1200).show(400);
        $("#d3-rtn-addr-val").delay(1600).show(400);

    }

    //line 2 function
    var c_line2 = function () {
        $("#code3-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d3-bob-HPhone").delay(1000).show(400);
        $("#d3-bob-HPhone-val").delay(1400).show(400);
    }

    //line 3 function
    var c_line3 = function () {
        $("#code3-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d3-bob-MPhone").delay(1000).show(400);
        $("#d3-bob-MPhone-val").delay(1400).show(400);
    }

    //line 4 function
    var c_line4 = function () {
        $("#code3-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d3-alice-HPhone").delay(1000).show(400);
        $("#d3-pointer-addr").delay(1400).animate({color: '#532A78'}, 150);
        $("#d3-alice-HPhone-val").delay(1400).show(400);
    }

    //line 5 function
    var c_line5 = function () {
        $("#code3-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".link").removeClass("yellow");
        $("#d3-rtnval-val").delay(1000).show(400);
    }

    //unhighlight all lines
    var unhighlight_3 = function () {
        $("#code3-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code3-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code3-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code3-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code3-line-5").animate({backgroundColor: 'transparent'}, 0);
    }

    //show stack border
    var showBorders3 = function () {
        $(".table .d3-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d3-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d3-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d3-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
    }

    //hide stack borders
    var hideBorders3 = function () {
        $(".table .d3-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d3-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d3-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d3-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
    }

    //stepping function
    var currentLine;
    $("#code3-line-1").click(function(){
        $("#step-button3").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code3-line-1").addClass("yellow");

        $(".hide-all").hide();
        $("#d3-pointer-addr").animate({color: '#777'}, 0);
        hideBorders3();
        unhighlight_3();
        currentLine = 1;
    });

    $("#code3-line-2").click(function(){
        $("#step-button3").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code3-line-2").addClass("yellow");

        showBorders3();
        $(".hide-all").hide();
        $(".d3-show1").show();
        $("#d3-pointer-addr").animate({color: '#777'}, 0);
        unhighlight_3();
        currentLine = 2;
    });

    $("#code3-line-3").click(function(){
        $("#step-button3").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code3-line-3").addClass("yellow");

        showBorders3();
        $(".hide-all").hide();
        $(".d3-show1").show();
        $(".d3-show2").show();
        $("#d3-pointer-addr").animate({color: '#777'}, 0);
        unhighlight_3();
        currentLine = 3;
    });

    $("#code3-line-4").click(function(){
        $("#step-button3").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code3-line-4").addClass("yellow");

        showBorders3();
        $(".hide-all").hide();
        $(".d3-show1").show();
        $(".d3-show2").show();
        $(".d3-show3").show();
        $("#d3-pointer-addr").animate({color: '#777'}, 0);
        unhighlight_3();
        currentLine = 4;
    });

    $("#code3-line-5").click(function(){
        $("#step-button3").removeClass("disabled");

        $(".link").removeClass("yellow");
        $("#code3-line-5").addClass("yellow");

        showBorders3();
        $(".hide-all").hide();
        $(".d3-show1").show();
        $(".d3-show2").show();
        $(".d3-show3").show();
        $(".d3-show4").show();
        $("#d3-pointer-addr").animate({color: '#532A78'}, 0);
        unhighlight_3();
        currentLine = 5;
    });

    $("#step-button3").click(function () {
        if (currentLine == 1) {
            //do line 1 things here
            c_line1();
            currentLine = 2;
        }
        else if (currentLine == 2) {
            //do line 2 things here
            c_line2();
            currentLine = 3;
        }
        else if (currentLine == 3) {
            //do line 3 things here
            c_line3();
            currentLine = 4;
        }
        else if (currentLine == 4) {
            //do line 4 things here
            c_line4();
            currentLine = 5;
        }
        else if (currentLine == 5) {
            c_line5();
            $("#step-button3").addClass("disabled");
            currentLine = 0;
        }

    });
});

