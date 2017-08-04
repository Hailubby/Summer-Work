/**
 * Created by User on 22/02/2017.
 */

/** Specific JQuery for the oop introduction page. Mainly just animations **/

$(document).ready(function () {

    //panel 1
    //panel 1 code 1
    var currentLine1a = 1;
    $("#code1a-line-1").addClass("yellow");

    $("#start-button-1a").click(function () {
        currentLine1a = 1;
        $(".d1a-hide-all").hide();
        $("#d1a-string-top").removeClass("stack-string-top");
        $("#d1a-string-bot").removeClass("stack-string-bottom");
        p1_c1_hideBorders();
        $(".d1a-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-1a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-label-1a").animate({backgroundColor: 'transparent'}, 0);
        p1_c1_line1();
        $("#d1a-rtn-addr-val").promise().done(function () {
            p1_c1_line2();
            $("#d1a-b-val").promise().done(function () {
                p1_c1_line3();
                $("#d1a-rtnval-val").promise().done(function () {
                    p1_c1_line4();
                });
            });
        });
    });

    //p1 c1 line 1 function
    var p1_c1_line1 = function () {
        $("#code1a-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d1a-link").removeClass("yellow");
        $(".table .stack-heap-1a").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .stack-class-1a").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d1a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1a-rtnval").delay(1200).show(400);
        $("#d1a-rtn-addr").delay(1200).show(400);
        $("#d1a-rtn-addr-val").delay(1600).show(400);
    };

    //p1 c1 line 2 function. stack class
    var p1_c1_line2 = function () {
        $("#code1a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        //constructor call
        $("#class1a-line-3").delay(1000).animate({backgroundColor: '#ffff00'}, 800);
        $(".stack-class-1a").delay(1800).animate({backgroundColor: '#c6e5a6'}, 800);
        $(".stack-class-label-1a").delay(1800).animate({backgroundColor: '#c6e5a6'}, 800);
        $("#d1a-class-label").delay(2200).show(400);

        //string declaration
        $("#class1a-line-1").delay(2600).animate({backgroundColor: '#ffff00'}, 1000).delay(1000).animate({backgroundColor: 'transparent'}, 1000);;

        setTimeout(function(){
            $("#d1a-string-top").addClass("stack-string-top");
            $("#d1a-string-bot").addClass("stack-string-bottom");
        }, 3600);

        $("#d1a-name").delay(3800).show(400);
        $("#d1a-name-val").delay(4200).show(400);

        //int declaration
        $("#class1a-line-2").delay(4600).animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1a-r").delay(5600).show(400);
        $("#d1a-r-val").delay(6000).show(400);

        $("#d1a-g").delay(6400).show(400);
        $("#d1a-g-val").delay(6800).show(400);

        $("#d1a-b").delay(7200).show(400);
        $("#d1a-b-val").delay(7600).show(400);
    };

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
            $(".table .stack-class-1a").animate({backgroundColor: 'transparent'}, 0);
            $(".table .stack-class-label-1a").animate({backgroundColor: 'transparent'}, 0);
            $("#d1a-string-top").removeClass("stack-string-top");
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

    //stepping function
    $("#code1a-line-1").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-1").addClass("yellow");

        $("#d1a-string-top").removeClass("stack-string-top");
        $("#d1a-string-bot").removeClass("stack-string-bottom");
        $(".table .stack-class-1a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-label-1a").animate({backgroundColor: 'transparent'}, 0);

        $(".d1a-hide-all").hide();
        p1_c1_hideBorders();
        p1_c1_unhighlight();

        p1_c1_line1();
        currentLine1a = 2;
    });

    $("#code1a-line-2").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-2").addClass("yellow");

        $("#d1a-string-top").removeClass("stack-string-top");
        $("#d1a-string-bot").removeClass("stack-string-bottom");
        $(".table .stack-class-1a").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .stack-class-label-1a").animate({backgroundColor: 'transparent'}, 0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        p1_c1_unhighlight();

        p1_c1_line2();
        currentLine1a = 3;
    });

    //line 3 rtn click
    $("#code1a-line-3").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-3").addClass("yellow");

        $("#d1a-string-top").addClass("stack-string-top");
        $("#d1a-string-bot").addClass("stack-string-bottom");
        $(".table .stack-class-1a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-label-1a").animate({backgroundColor: '#c6e5a6'}, 0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        p1_c1_unhighlight();

        p1_c1_line3();
        currentLine1a = 4;
    });

    //end brace click
    $("#code1a-line-4").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-4").addClass("yellow");

        $("#d1a-string-top").addClass("stack-string-top");
        $("#d1a-string-bot").addClass("stack-string-bottom");
        $(".table .stack-class-1a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-lebel-1a").animate({backgroundColor: '#c6e5a6'}, 0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        p1_c1_unhighlight();

        p1_c1_line4();
        currentLine1a = 1;
    });

    $("#step-button-1a").click(function () {
        if (currentLine1a == 1) {
            //do line 1 things here
            $(".d1a-link").removeClass("yellow");
            $("#code1a-line-1").addClass("yellow");

            $("#d1a-string-top").removeClass("stack-string-top");
            $("#d1a-string-bot").removeClass("stack-string-bottom");
            $(".table .stack-class-1a").animate({backgroundColor: 'transparent'}, 0);
            $(".table .stack-class-label-1a").animate({backgroundColor: 'transparent'}, 0);

            $(".d1a-hide-all").hide();
            p1_c1_hideBorders();
            p1_c1_unhighlight();

            p1_c1_line1();
            currentLine1a = 2;
        }
        else if (currentLine1a == 2) {
            //do line 3 things here
            $(".d1a-link").removeClass("yellow");
            p1_c1_line2();
            currentLine1a = 3;
        }
        else if (currentLine1a == 3) {
            //do line 4 things here
            $(".d1a-link").removeClass("yellow");
            p1_c1_line3();
            currentLine1a = 4;
        }
        else if (currentLine1a == 4) {
            $(".d1a-link").removeClass("yellow");
            p1_c1_line4();
            currentLine1a = 1;
        }
    });

    //panel 1 code 2
    var currentLine1b = 1;
    $("#code1b-line-1").addClass("yellow");

    $("#start-button-1b").click(function () {
        currentLine1b = 1;
        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        $("#d1b-string-top").removeClass("stack-string-top");
        $("#d1b-string-bot").removeClass("stack-string-bottom");
        $("#d1b-pointer-top").removeClass("stack-pointer-top");
        $("#d1b-pointer-bot").removeClass("stack-pointer-bottom");
        p1_c2_hideBorders();
        $(".d1b-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1b").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-1b").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1b-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-pointer-addr").animate({color: '#777'}, 0);
        p1_c2_line1();
        $("#d1b-rtn-addr-val").promise().done(function () {
            p1_c2_line2();
            $("#d1b-b-val").promise().done(function () {
                p1_c2_line3();
                $("#d1b-mem-leak").promise().done(function () {
                    p1_c2_line4();
                });
            });
        });
    });

    //p1 c2 line 1 function
    var p1_c2_line1 = function () {
        $("#code1b-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d1b-link").removeClass("yellow");
        $(".table .stack-heap-1b").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .stack-class-1b").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d1b-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1b-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1b-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1b-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1b-rtnval").delay(1200).show(400);
        $("#d1b-rtn-addr").delay(1200).show(400);
        $("#d1b-rtn-addr-val").delay(1600).show(400);
    };

    //p1 c2 line 2 function. heap class
    var p1_c2_line2 = function () {
        $("#code1b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d1b-pointer-top").addClass("stack-pointer-top");
            $("#d1b-pointer-bot").addClass("stack-pointer-bottom");
        }, 800);
        //constructor call
        $("#class1b-line-3").delay(1000).animate({backgroundColor: '#ffff00'}, 800);
        $("#d1b-favCol").delay(1000).show(400);
        $(".stack-class-1b").delay(2200).animate({backgroundColor: '#a6c6e5'}, 800);
        $(".table .d1b-heap-class").delay(2200).animate({backgroundColor: '#a6c6e5'}, 800);

        $("#d1b-pointer-addr").delay(3000).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d1b-favCol-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $("#d1b-favCol-val").html('0x001d54f4');
        $("#d1b-favCol-val").delay(3000).show(400);

        //string declaration
        $("#class1b-line-1").delay(3400).animate({backgroundColor: '#ffff00'}, 1000).delay(1000).animate({backgroundColor: 'transparent'}, 1000);

        setTimeout(function(){
            $("#d1b-string-top").addClass("stack-string-top");
            $("#d1b-string-bot").addClass("stack-string-bottom");
        }, 4400);
        $("#d1b-name").delay(4600).show(400);
        $("#d1b-name-val").delay(5000).show(400);

        //int declaration
        $("#class1b-line-2").delay(5400).animate({backgroundColor: '#ffff00'}, 1000);
        $("#d1b-r").delay(6400).show(400);
        $("#d1b-r-val").delay(6800).show(400);

        $("#d1b-g").delay(7200).show(400);
        $("#d1b-g-val").delay(7600).show(400);

        $("#d1b-b").delay(8000).show(400);
        $("#d1b-b-val").delay(8400).show(400);

    };

    //p1 c2 line 3 function
    var p1_c2_line3 = function () {
        $("#code1b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class1b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class1b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1b-rtnval-val").delay(1000).show(400);
        $(".d1b-heap-class").delay(1400).animate({backgroundColor: '#dd747b'}, 700);
        $("#d1b-mem-leak").delay(2100).show(400).delay(400);
    };

    //p1 c2 line 4 function
    var p1_c2_line4 = function () {
        $("#code1b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d1b-hide-all").delay(1000).hide(400);
        $("#code1b-line-4").promise().done(function () {
            p1_c2_hideBorders();
            $(".table .stack-class-1b").animate({backgroundColor: 'transparent'}, 0);
            $(".stack-class-1b").animate({backgroundColor: 'transparent'}, 0);
            $("#d1b-pointer-top").removeClass("stack-pointer-top");
            $("#d1b-pointer-bot").removeClass("stack-pointer-bottom");
        });
    };

    //unhighlight all lines
    var p1_c2_unhighlight = function () {
        $("#code1b-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-4").animate({backgroundColor: 'transparent'}, 0);

        $("#class1b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#class1b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class1b-line-3").animate({backgroundColor: 'transparent'}, 1000);
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
        $("#code1b-line-1").addClass("yellow");

        $("#d1b-string-top").removeClass("stack-string-top");
        $("#d1b-string-bot").removeClass("stack-string-bottom");
        $("#d1b-pointer-top").removeClass("stack-pointer-top");
        $("#d1b-pointer-bot").removeClass("stack-pointer-bottom");
        $(".stack-class-1b").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1b-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-pointer-addr").animate({color: '#777'}, 0);

        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        p1_c2_hideBorders();
        p1_c2_unhighlight();

        p1_c2_line1();
        currentLine1b = 2;
    });

    $("#code1b-line-2").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-2").addClass("yellow");

        $("#d1b-string-top").removeClass("stack-string-top");
        $("#d1b-string-bot").removeClass("stack-string-bottom");
        $("#d1b-pointer-top").removeClass("stack-pointer-top");
        $("#d1b-pointer-bot").removeClass("stack-pointer-bottom");
        $(".stack-class-1b").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d1b-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-pointer-addr").animate({color: '#777'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        $(".d1b-show1").show();
        p1_c2_unhighlight();

        p1_c2_line2();
        currentLine1b = 3;
    });

    //line 3 rtn click
    $("#code1b-line-3").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-3").addClass("yellow");

        $("#d1b-string-top").addClass("stack-string-top");
        $("#d1b-string-bot").addClass("stack-string-bottom");
        $("#d1b-pointer-top").addClass("stack-pointer-top");
        $("#d1b-pointer-bot").addClass("stack-pointer-bottom");
        $(".stack-class-1b").animate({backgroundColor: '#a6c6e5'}, 0);
        $(".table .d1b-heap-class").animate({backgroundColor: '#a6c6e5'}, 0);
        $("#d1b-pointer-addr").animate({color: '#532A78'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        p1_c2_unhighlight();

        p1_c2_line3();
        currentLine1b = 4;
    });

    //end brace click
    $("#code1b-line-4").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-4").addClass("yellow");

        $("#d1b-string-top").addClass("stack-string-top");
        $("#d1b-string-bot").addClass("stack-string-bottom");
        $("#d1b-pointer-top").addClass("stack-pointer-top");
        $("#d1b-pointer-bot").addClass("stack-pointer-bottom");
        $(".stack-class-1b").animate({backgroundColor: '#a6c6e5'}, 0);
        $(".table .d1b-heap-class").animate({backgroundColor: '#dd747b'}, 0);
        $("#d1b-pointer-addr").animate({color: '#532A78'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        $(".d1b-show3").show();
        p1_c2_unhighlight();

        p1_c2_line4();
        currentLine1b = 1;
    });

    $("#step-button-1b").click(function () {
        if (currentLine1b == 1) {
            //do line 1 things here
            $(".d1b-link").removeClass("yellow");
            $("#code1b-line-1").addClass("yellow");

            $("#d1b-string-top").removeClass("stack-string-top");
            $("#d1b-string-bot").removeClass("stack-string-bottom");
            $("#d1b-pointer-top").removeClass("stack-pointer-top");
            $("#d1b-pointer-bot").removeClass("stack-pointer-bottom");
            $(".stack-class-1b").animate({backgroundColor: 'transparent'}, 0);
            $(".table .d1b-heap-class").animate({backgroundColor: 'transparent'}, 0);
            $("#d1b-pointer-addr").animate({color: '#777'}, 0);

            $(".d1b-hide-all").hide();
            $(".d1b-hide-all-heap").hide();
            p1_c2_hideBorders();
            p1_c2_unhighlight();

            p1_c2_line1();
            currentLine1b = 2;
        }
        else if (currentLine1b == 2) {
            //do line 3 things here
            $(".d1b-link").removeClass("yellow");
            p1_c2_line2();
            currentLine1b = 3;
        }
        else if (currentLine1b == 3) {
            //do line 4 things here
            $(".d1b-link").removeClass("yellow");
            p1_c2_line3();
            currentLine1b = 4;
        }
        else if (currentLine1b == 4) {
            $(".d1b-link").removeClass("yellow");
            p1_c2_line4();
            currentLine1b = 5;
        }

    });

    //panel 2
    //panel 2 code 1
    var currentLine2a = 1;
    $("#code2a-line-1").addClass("yellow");

    $("#start-button-2a").click(function () {
        currentLine2a = 1;
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $("#d2a-string-top1").removeClass("stack-string-top");
        $("#d2a-string-bot1").removeClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").removeClass("stack-pointer-top");
        $("#d2a-pointer-bot").removeClass("stack-pointer-bottom");
        p2_c1_hideBorders();
        $(".d2a-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-2a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-2a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);
        p2_c1_line1();
        $("#d2a-rtn-addr-val").promise().done(function () {
            p2_c1_line2();
            $("#d2a-age1-val").promise().done(function () {
                p2_c1_line3();
                $("#d2a-age2-val").promise().done(function () {
                    p2_c1_line4();
                    $(".table .d2a-heap-class").promise().done(function () {
                        p2_c1_line5();
                        $("#d2a-jack-val").promise().done(function () {
                            p2_c1_line6();
                            $("#d2a-rtnval-val").promise().done(function () {
                                p2_c1_line7();
                            });
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
        $(".table .stack-class-2a").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d2a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d2a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d2a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d2a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d2a-rtnval").delay(1200).show(400);
        $("#d2a-rtn-addr").delay(1200).show(400);
        $("#d2a-rtn-addr-val").delay(1600).show(400);
    };

    //p2 c1 line 2 function. stack class
    var p2_c1_line2 = function () {
        $("#code2a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        //constructor call
        $("#class2a-line-3").delay(1000).animate({backgroundColor: '#ffff00'}, 800);
        $(".stack-class-2a").delay(1800).animate({backgroundColor: '#c6e5a6'}, 800);
        $(".stack-class-label-2a").delay(1800).animate({backgroundColor: '#c6e5a6'}, 800);
        $("#d2a-class-label").delay(2200).show(400);

        //string declaration
        $("#class2a-line-1").delay(2600).animate({backgroundColor: '#ffff00'}, 1000).delay(1000).animate({backgroundColor: 'transparent'}, 1000);;

        setTimeout(function(){
            $("#d2a-string-top1").addClass("stack-string-top");
            $("#d2a-string-bot1").addClass("stack-string-bottom");
        }, 3600);

        $("#d2a-name1").delay(3800).show(400);
        $("#d2a-name1-val").delay(4200).show(400);

        //int declaration
        $("#class2a-line-2").delay(4600).animate({backgroundColor: '#ffff00'}, 1000);

        $("#d2a-age1").delay(5600).show(400);
        $("#d2a-age1-val").delay(6000).show(400);
    };

    //p2 c1 line 3 function. heap class
    var p2_c1_line3 = function () {
        $("#code2a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class2a-line-2").animate({backgroundColor: 'transparent'}, 1000).delay(4400).animate({backgroundColor: '#ffff00'}, 1000);
        $("#class2a-line-3").animate({backgroundColor: 'transparent'}, 1000).delay(300).animate({backgroundColor: '#ffff00'}, 800);
        $("#code2a-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d2a-pointer-top").addClass("stack-pointer-top");
            $("#d2a-pointer-bot").addClass("stack-pointer-bottom");
        }, 800);

        $("#d2a-jack").delay(1000).show(400);
        $(".stack-class-2a-2").delay(2200).animate({backgroundColor: '#a6c6e5'}, 800);
        $(".table .d2a-heap-class").delay(2200).animate({backgroundColor: '#a6c6e5'}, 800);

        $("#d2a-pointer-addr").delay(3000).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d2a-jack-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $("#d2a-jack-val").html('0x001d54f4');
        $("#d2a-jack-val").delay(3000).show(400);

        //string declaration
        $("#class2a-line-1").delay(3400).animate({backgroundColor: '#ffff00'}, 1000).delay(1000).animate({backgroundColor: 'transparent'}, 1000);

        setTimeout(function(){
            $("#d2a-string-top2").addClass("stack-string-top");
            $("#d2a-string-bot2").addClass("stack-string-bottom");
        }, 4400);
        $("#d2a-name2").delay(4600).show(400);
        $("#d2a-name2-val").delay(5000).show(400);

        //int declaration
        $("#d2a-age2").delay(6400).show(400);
        $("#d2a-age2-val").delay(6800).show(400);

    };

    //p2 c1 line 4 function
    var p2_c1_line4 = function () {
        $("#class2a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class2a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d2a-pointer-addr").delay(1000).animate({color: '#777', fontWeight: 'bold'}, 150);
        $("#d2a-jack-val").delay(1000).animate({color: '#777', fontWeight: 'bold'}, 150);
        $(".table .d2a-heap-class").delay(1000).animate({backgroundColor: 'transparent'},500).delay(700);
        setTimeout(function(){
            $("#d2a-string-top2").removeClass("stack-string-top");
            $("#d2a-string-bot2").removeClass("stack-string-bottom");
        }, 1000);
        $("#d2a-name2").delay(1000).hide(400);
        $("#d2a-name2-val").delay(1000).hide(400);
        $("#d2a-age2").delay(1000).hide(400);
        $("#d2a-age2-val").delay(1000).hide(400);
        $(".table .stack-class-2a-2").delay(1000).animate({backgroundColor: '#F5F5F5'}, 500);
    };

    //p2 c1 line 5 function
    var p2_c1_line5 = function () {
        $("#code2a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-5").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d2a-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2a-jack-val").delay(1000).animate({backgroundColor: '#d1d1d1'}, 500);
        setTimeout(function(){
            $("#d2a-jack-val").html('0');
        }, 1900);
        $("#d2a-jack-val").delay(1900).show(400);
    };

    //p2 c1 line 6 function
    var p2_c1_line6 = function () {
        $("#code2a-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-6").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 1000);

        $("#d2a-rtnval-val").delay(1000).show(400);
    };

    //p2 c1 line 7 function
    var p2_c1_line7 = function () {
        $("#code2a-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-7").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d2a-hide-all").delay(1000).hide(400);
        $("#code2a-line-7").promise().done(function () {
            p2_c1_hideBorders();
            $(".table .stack-class-2a").animate({backgroundColor: 'transparent'}, 0);
            $(".table .stack-class-2a-2").animate({backgroundColor: 'transparent'}, 0);
            $(".table .stack-class-label-2a").animate({backgroundColor: 'transparent'}, 0);
            $("#d2a-string-top1").removeClass("stack-string-top");
            $("#d2a-string-bot1").removeClass("stack-string-bottom");
            $("#d2a-string-top2").removeClass("stack-string-top");
            $("#d2a-string-bot2").removeClass("stack-string-bottom");
            $("#d2a-pointer-top").removeClass("stack-pointer-top");
            $("#d2a-pointer-bot").removeClass("stack-pointer-bottom");
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
        $("#code2a-line-7").animate({backgroundColor: 'transparent'}, 0);

        $("#class2a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#class2a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class2a-line-3").animate({backgroundColor: 'transparent'}, 1000);
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

        $("#d2a-string-top1").removeClass("stack-string-top");
        $("#d2a-string-bot1").removeClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").removeClass("stack-pointer-top");
        $("#d2a-pointer-bot").removeClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        p2_c1_hideBorders();
        p2_c1_unhighlight();

        p2_c1_line1();
        currentLine2a = 2;
    });

    $("#code2a-line-2").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-2").addClass("yellow");

        $("#d2a-string-top1").removeClass("stack-string-top");
        $("#d2a-string-bot1").removeClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").removeClass("stack-pointer-top");
        $("#d2a-pointer-bot").removeClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $(".d2a-show1").show();
        p2_c1_unhighlight();

        p2_c1_line2();
        currentLine2a = 3;
    });

    $("#code2a-line-3").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-3").addClass("yellow");

        $("#d2a-string-top1").addClass("stack-string-top");
        $("#d2a-string-bot1").addClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").removeClass("stack-pointer-top");
        $("#d2a-pointer-bot").removeClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $("#d2a-jack-val").html('0x001d54f4');
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        p2_c1_unhighlight();

        p2_c1_line3();
        currentLine2a = 4;
    });

    $("#code2a-line-4").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-4").addClass("yellow");

        $("#d2a-string-top1").addClass("stack-string-top");
        $("#d2a-string-bot1").addClass("stack-string-bottom");
        $("#d2a-string-top2").addClass("stack-string-top");
        $("#d2a-string-bot2").addClass("stack-string-bottom");
        $("#d2a-pointer-top").addClass("stack-pointer-top");
        $("#d2a-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#a6c6e5'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: '#a6c6e5'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $("#d2a-jack-val").html('0x001d54f4');
        $("#d2a-pointer-addr").animate({color: '#532A78'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3a").show();
        $(".d2a-show3").show();
        p2_c1_unhighlight();

        p2_c1_line4();
        currentLine2a = 5;
    });

    $("#code2a-line-5").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-5").addClass("yellow");

        $("#d2a-string-top1").addClass("stack-string-top");
        $("#d2a-string-bot1").addClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").addClass("stack-pointer-top");
        $("#d2a-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2a-jack-val").html('0x001d54f4');
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3a").show();
        p2_c1_unhighlight();

        p2_c1_line5();
        currentLine2a = 6;
    });

    $("#code2a-line-6").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-6").addClass("yellow");

        $("#d2a-string-top1").addClass("stack-string-top");
        $("#d2a-string-bot1").addClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").addClass("stack-pointer-top");
        $("#d2a-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: '#d1d1d1'}, 0);
        $("#d2a-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2a-jack-val").html('0');
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3a").show();
        p2_c1_unhighlight();

        p2_c1_line6();
        currentLine2a = 7;
    });

    $("#code2a-line-7").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-7").addClass("yellow");

        $("#d2a-string-top1").addClass("stack-string-top");
        $("#d2a-string-bot1").addClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").addClass("stack-pointer-top");
        $("#d2a-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2a-jack-val").html('0');
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3a").show();
        $(".d2a-show6").show();
        p2_c1_unhighlight();

        p2_c1_line7();
        currentLine2a = 1;
    });

    $("#step-button-2a").click(function () {
        if (currentLine2a == 1) {
            //do line 1 things here
            $(".d2a-link").removeClass("yellow");
            $("#code2a-line-1").addClass("yellow");

            $("#d2a-string-top1").removeClass("stack-string-top");
            $("#d2a-string-bot1").removeClass("stack-string-bottom");
            $("#d2a-string-top2").removeClass("stack-string-top");
            $("#d2a-string-bot2").removeClass("stack-string-bottom");
            $("#d2a-pointer-top").removeClass("stack-pointer-top");
            $("#d2a-pointer-bot").removeClass("stack-pointer-bottom");
            $(".table .stack-class-2a").animate({backgroundColor: 'transparent'}, 0);
            $(".table .stack-class-label-2a").animate({backgroundColor: 'transparent'}, 0);
            $(".table .stack-class-2a-2").animate({backgroundColor: 'transparent'}, 0);
            $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
            $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
            $("#d2a-pointer-addr").animate({color: '#777'}, 0);

            $(".d2a-hide-all").hide();
            $(".d2a-hide-all-heap").hide();
            p2_c1_hideBorders();
            p2_c1_unhighlight();

            p2_c1_line1();
            currentLine2a = 2;
        }
        else if (currentLine2a == 2) {
            //do line 3 things here
            $(".d1a-link").removeClass("yellow");
            p2_c1_line2();
            currentLine2a = 3;
        }
        else if (currentLine2a == 3) {
            //do line 4 things here
            $(".d2a-link").removeClass("yellow");
            p2_c1_line3();
            currentLine2a = 4;
        }
        else if (currentLine2a == 4) {
            $(".d2a-link").removeClass("yellow");
            p2_c1_line4();
            currentLine2a = 5;
        }
        else if (currentLine2a == 5) {
            $(".d2a-link").removeClass("yellow");
            p2_c1_line5();
            currentLine2a = 6;
        }
        else if (currentLine2a == 6) {
            $(".d2a-link").removeClass("yellow");
            p2_c1_line6();
            currentLine2a = 7;
        }
        else if (currentLine2a == 7) {
            $(".d2a-link").removeClass("yellow");
            p2_c1_line7();
            currentLine2a = 1;
        }
    });

    //panel 2 code 2
    var currentLine2b = 1;
    $("#code2b-line-1").addClass("yellow");

    $("#start-button-2b").click(function () {
        currentLine2b = 1;
        $(".d2b-hide-all").hide();
        $(".d2b-hide-all-heap").hide();
        $("#d2b-string-top1").removeClass("stack-string-top");
        $("#d2b-string-bot1").removeClass("stack-string-bottom");
        $("#d2b-string-top2").removeClass("stack-string-top");
        $("#d2b-string-bot2").removeClass("stack-string-bottom");
        $("#d2b-pointer-top").removeClass("stack-pointer-top");
        $("#d2b-pointer-bot").removeClass("stack-pointer-bottom");
        p2_c2_hideBorders();
        $(".d2b-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-2b").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-2b").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2b-heap-class1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2b-heap-class2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);
        p2_c2_line1();
        $("#d2b-rtn-addr-val").promise().done(function () {
            p2_c2_line2();
            $("#d2b-age1-val").promise().done(function () {
                p2_c2_line3();
                $(".table .d2b-heap-class1").promise().done(function () {
                    p2_c2_line4();
                    $("#d2b-jack-val").promise().done(function () {
                        p2_c2_line5();
                        $("#d2b-age2-val").promise().done(function () {
                            p2_c2_line6();
                            $(".table .d2b-heap-class2").promise().done(function () {
                                p2_c2_line7();
                                $("#d2b-jack-val").promise().done(function () {
                                    p2_c2_line8();
                                    $("#d2b-rtnval-val").promise().done(function () {
                                        p2_c2_line9();
                                    });
                                });
                            });
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
        $(".table .stack-class-2b").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d2b-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d2b-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d2b-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d2b-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d2b-rtnval").delay(1200).show(400);
        $("#d2b-rtn-addr").delay(1200).show(400);
        $("#d2b-rtn-addr-val").delay(1600).show(400);
    };

    //p2 c2 line 2 function. heap class1
    var p2_c2_line2 = function () {
        $("#code2b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d2b-pointer-top").addClass("stack-pointer-top");
            $("#d2b-pointer-bot").addClass("stack-pointer-bottom");
        }, 800);

        //constructor call
        $("#d2b-jack").delay(1000).show(400);
        $("#class2b-line-3").delay(1300).animate({backgroundColor: '#ffff00'}, 800);
        $(".table .stack-class-2b").delay(2200).animate({backgroundColor: '#c6e5a6'}, 800);
        $(".table .d2b-heap-class1").delay(2200).animate({backgroundColor: '#c6e5a6'}, 800);

        $("#d2b-pointer-addr1").delay(3000).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d2b-jack-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $("#d2b-jack-val").html('0x001d54f0');
        $("#d2b-jack-val").delay(3000).show(400);

        //string declaration
        $("#class2b-line-1").delay(3400).animate({backgroundColor: '#ffff00'}, 1000).delay(1000).animate({backgroundColor: 'transparent'}, 1000);

        setTimeout(function(){
            $("#d2b-string-top1").addClass("stack-string-top");
            $("#d2b-string-bot1").addClass("stack-string-bottom");
        }, 4400);
        $("#d2b-name1").delay(4600).show(400);
        $("#d2b-name1-val").delay(5000).show(400);

        //int declaration
        $("#class2b-line-2").delay(5400).animate({backgroundColor: '#ffff00'}, 800);
        $("#d2b-age1").delay(6600).show(400);
        $("#d2b-age1-val").delay(7000).show(400);

    };

    //p2 c2 line 3 function
    var p2_c2_line3 = function () {
        $("#class2b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class2b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d2b-string-top1").removeClass("stack-string-top");
            $("#d2b-string-bot1").removeClass("stack-string-bottom");
        }, 1000);
        $("#d2b-pointer-addr1").delay(1000).animate({color: '#777', fontWeight: 'bold'}, 150);
        $("#d2b-jack-val").delay(1000).animate({color: '#777', fontWeight: 'bold'}, 150);
        $("#d2b-name1").delay(1000).hide(400);
        $("#d2b-name1-val").delay(1000).hide(400);
        $("#d2b-age1").delay(1000).hide(400);
        $("#d2b-age1-val").delay(1000).hide(400);
        $(".table .d2b-heap-class1").delay(1000).animate({backgroundColor: 'transparent'},500).delay(700);
        $(".table .stack-class-2b").delay(1000).animate({backgroundColor: '#F5F5F5'},500);
    };

    //p2 c2 line 4 function
    var p2_c2_line4 = function () {
        $("#code2b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d2b-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2b-jack-val").delay(1000).animate({backgroundColor: '#d1d1d1'}, 500);
        setTimeout(function(){
            $("#d2b-jack-val").html('0');
        }, 1900);
        $("#d2b-jack-val").delay(1900).show(400);
    };

    //p2 c2 line 5 function. heap class2
    var p2_c2_line5 = function () {
        $("#code2b-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-5").animate({backgroundColor: '#ffff00'}, 1000);

        //constructor call
        $("#class2b-line-3").delay(1300).animate({backgroundColor: '#ffff00'}, 800);
        $(".table .stack-class-2b").delay(2200).animate({backgroundColor: '#a6c6e5'}, 800);
        $(".table .d2b-heap-class2").delay(2200).animate({backgroundColor: '#a6c6e5'}, 800);
        $("#d2b-jack-val").animate({backgroundColor: 'transparent'}, 1000).delay(2000).animate({backgroundColor: '#d1d1d1'}, 500);
        setTimeout(function(){
            $("#d2b-jack-val").html('0x001d5500');
            $("#d2b-jack-val").css({color: '#532A78'});
        }, 3900);
        $("#d2b-pointer-addr2").delay(4200).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d2b-jack-val").delay(4200).show(400);

        //string declaration
        $("#class2b-line-1").delay(4600).animate({backgroundColor: '#ffff00'}, 1000).delay(1000).animate({backgroundColor: 'transparent'}, 1000);

        setTimeout(function(){
            $("#d2b-string-top2").addClass("stack-string-top");
            $("#d2b-string-bot2").addClass("stack-string-bottom");
        }, 5600);
        $("#d2b-name2").delay(5800).show(400);
        $("#d2b-name2-val").delay(6200).show(400);

        //int declaration
        $("#class2b-line-2").delay(6600).animate({backgroundColor: '#ffff00'}, 800);
        $("#d2b-age2").delay(7800).show(400);
        $("#d2b-age2-val").delay(8200).show(400);
    };

    //p2 c2 line 6 function
    var p2_c2_line6 = function () {
        $("#class2b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class2b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-6").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d2b-string-top2").removeClass("stack-string-top");
            $("#d2b-string-bot2").removeClass("stack-string-bottom");
        }, 1000);
        $("#d2b-pointer-addr2").delay(1000).animate({color: '#777', fontWeight: 'bold'}, 150);
        $("#d2b-jack-val").animate({backgroundColor: 'transparent'}, 1000).animate({color: '#777', fontWeight: 'bold'}, 150);
        $("#d2b-name2").delay(1000).hide(400);
        $("#d2b-name2-val").delay(1000).hide(400);
        $("#d2b-age2").delay(1000).hide(400);
        $("#d2b-age2-val").delay(1000).hide(400);
        $(".table .d2b-heap-class2").delay(1000).animate({backgroundColor: 'transparent'},500).delay(700);
        $(".table .stack-class-2b").delay(1000).animate({backgroundColor: '#F5F5F5'},500);
    };

    //p2 c2 line 7 function
    var p2_c2_line7 = function () {
        $("#code2b-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-7").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d2b-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2b-jack-val").delay(1000).animate({backgroundColor: '#d1d1d1'}, 500);
        setTimeout(function(){
            $("#d2b-jack-val").html('0');
        }, 1900);
        $("#d2b-jack-val").delay(1900).show(400);
    };

    //p2 c2 line 8 function
    var p2_c2_line8 = function () {
        $("#code2b-line-7").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-8").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d2b-jack-val").animate({backgroundColor: 'transparent'}, 1000);

        $("#d2b-rtnval-val").delay(1000).show(400);
    };

    //p2 c2 line 9 function
    var p2_c2_line9 = function () {
        $("#code2b-line-8").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-9").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d2b-hide-all").delay(1000).hide(400);
        $("#code2b-line-9").promise().done(function () {
            p2_c2_hideBorders();
            $(".table .stack-class-2b").animate({backgroundColor: 'transparent'},0);
            $("#d2b-string-top1").removeClass("stack-string-top");
            $("#d2b-string-bot1").removeClass("stack-string-bottom");
            $("#d2b-string-top2").removeClass("stack-string-top");
            $("#d2b-string-bot2").removeClass("stack-string-bottom");
            $("#d2b-pointer-top").removeClass("stack-pointer-top");
            $("#d2b-pointer-bot").removeClass("stack-pointer-bottom");
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
        $("#code2b-line-7").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-8").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-9").animate({backgroundColor: 'transparent'}, 0);

        $("#class2b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#class2b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class2b-line-3").animate({backgroundColor: 'transparent'}, 1000);
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

        $("#d2b-string-top1").removeClass("stack-string-top");
        $("#d2b-string-bot1").removeClass("stack-string-bottom");
        $("#d2b-string-top2").removeClass("stack-string-top");
        $("#d2b-string-bot2").removeClass("stack-string-bottom");
        $("#d2b-pointer-top").removeClass("stack-pointer-top");
        $("#d2b-pointer-bot").removeClass("stack-pointer-bottom");
        $(".table .stack-class-2b").animate({backgroundColor: 'transparent'},0);
        $(".table .d2b-heap-class1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2b-heap-class2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);

        $(".d2b-hide-all").hide();
        $(".d2b-hide-all-heap").hide();
        p2_c2_hideBorders();
        p2_c2_unhighlight();

        p2_c2_line1();
        currentLine2b = 2;
    });

    $("#code2b-line-2").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-2").addClass("yellow");

        $("#d2b-string-top1").removeClass("stack-string-top");
        $("#d2b-string-bot1").removeClass("stack-string-bottom");
        $("#d2b-string-top2").removeClass("stack-string-top");
        $("#d2b-string-bot2").removeClass("stack-string-bottom");
        $("#d2b-pointer-top").removeClass("stack-pointer-top");
        $("#d2b-pointer-bot").removeClass("stack-pointer-bottom");
        $(".table .stack-class-2b").animate({backgroundColor: '#F5F5F5'},0);
        $(".table .d2b-heap-class1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2b-heap-class2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $("#d2b-jack-val").html('0x001d54f0');
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-hide-all-heap").hide();
        $(".d2b-show1").show();
        p2_c2_unhighlight();

        p2_c2_line2();
        currentLine2b = 3;
    });

    $("#code2b-line-3").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-3").addClass("yellow");

        $("#d2b-string-top1").addClass("stack-string-top");
        $("#d2b-string-bot1").addClass("stack-string-bottom");
        $("#d2b-string-top2").removeClass("stack-string-top");
        $("#d2b-string-bot2").removeClass("stack-string-bottom");
        $("#d2b-pointer-top").addClass("stack-pointer-top");
        $("#d2b-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2b").animate({backgroundColor: '#c6e5a6'},0);
        $(".table .d2b-heap-class1").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .d2b-heap-class2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $("#d2b-jack-val").html('0x001d54f0');
        $("#d2b-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-hide-all-heap").hide();
        $(".d2b-show1").show();
        $(".d2b-show2a").show();
        p2_c2_unhighlight();

        p2_c2_line3();
        currentLine2b = 4;
    });

    $("#code2b-line-4").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-4").addClass("yellow");

        $("#d2b-string-top1").removeClass("stack-string-top");
        $("#d2b-string-bot1").removeClass("stack-string-bottom");
        $("#d2b-string-top2").removeClass("stack-string-top");
        $("#d2b-string-bot2").removeClass("stack-string-bottom");
        $("#d2b-pointer-top").addClass("stack-pointer-top");
        $("#d2b-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2b").animate({backgroundColor: '#F5F5F5'},0);
        $(".table .d2b-heap-class1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2b-heap-class2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2b-jack-val").html('0x001d54f0');
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-hide-all-heap").hide();
        $(".d2b-show1").show();
        $(".d2b-show2a").show();
        p2_c2_unhighlight();

        p2_c2_line4();
        currentLine2b = 5;
    });

    $("#code2b-line-5").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-5").addClass("yellow");

        $("#d2b-string-top1").removeClass("stack-string-top");
        $("#d2b-string-bot1").removeClass("stack-string-bottom");
        $("#d2b-string-top2").removeClass("stack-string-top");
        $("#d2b-string-bot2").removeClass("stack-string-bottom");
        $("#d2b-pointer-top").addClass("stack-pointer-top");
        $("#d2b-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2b").animate({backgroundColor: '#F5F5F5'},0);
        $(".table .d2b-heap-class1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2b-heap-class2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({backgroundColor: '#d1d1d1'}, 0);
        $("#d2b-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2b-jack-val").html('0');
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-hide-all-heap").hide();
        $(".d2b-show1").show();
        $(".d2b-show2a").show();
        p2_c2_unhighlight();

        p2_c2_line5();
        currentLine2b = 6;
    });

    $("#code2b-line-6").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-6").addClass("yellow");

        $("#d2b-string-top1").removeClass("stack-string-top");
        $("#d2b-string-bot1").removeClass("stack-string-bottom");
        $("#d2b-string-top2").addClass("stack-string-top");
        $("#d2b-string-bot2").addClass("stack-string-bottom");
        $("#d2b-pointer-top").addClass("stack-pointer-top");
        $("#d2b-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2b").animate({backgroundColor: '#a6c6e5'},0);
        $(".table .d2b-heap-class1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2b-heap-class2").animate({backgroundColor: '#a6c6e5'}, 0);
        $("#d2b-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $("#d2b-jack-val").html('0x001d5500');
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#532A78'}, 0);

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-hide-all-heap").hide();
        $(".d2b-show1").show();
        $(".d2b-show2a").show();
        $(".d2b-show5").show();
        p2_c2_unhighlight();

        p2_c2_line6();
        currentLine2b = 7;
    });

    $("#code2b-line-7").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-7").addClass("yellow");

        $("#d2b-string-top1").removeClass("stack-string-top");
        $("#d2b-string-bot1").removeClass("stack-string-bottom");
        $("#d2b-string-top2").removeClass("stack-string-top");
        $("#d2b-string-bot2").removeClass("stack-string-bottom");
        $("#d2b-pointer-top").addClass("stack-pointer-top");
        $("#d2b-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2b").animate({backgroundColor: '#F5F5F5'},0);
        $(".table .d2b-heap-class1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2b-heap-class2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2b-jack-val").html('0x001d5500');
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-hide-all-heap").hide();
        $(".d2b-show1").show();
        $(".d2b-show2a").show();
        p2_c2_unhighlight();

        p2_c2_line7();
        currentLine2b = 8;
    });

    $("#code2b-line-8").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-8").addClass("yellow");

        $("#d2b-string-top1").removeClass("stack-string-top");
        $("#d2b-string-bot1").removeClass("stack-string-bottom");
        $("#d2b-string-top2").removeClass("stack-string-top");
        $("#d2b-string-bot2").removeClass("stack-string-bottom");
        $("#d2b-pointer-top").addClass("stack-pointer-top");
        $("#d2b-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2b").animate({backgroundColor: '#F5F5F5'},0);
        $(".table .d2b-heap-class1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2b-heap-class2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({backgroundColor: '#d1d1d1'}, 0);
        $("#d2b-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2b-jack-val").html('0');
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-hide-all-heap").hide();
        $(".d2b-show1").show();
        $(".d2b-show2a").show();
        p2_c2_unhighlight();

        p2_c2_line8();
        currentLine2b = 9;
    });

    $("#code2b-line-9").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-9").addClass("yellow");

        $("#d2b-string-top1").removeClass("stack-string-top");
        $("#d2b-string-bot1").removeClass("stack-string-bottom");
        $("#d2b-string-top2").removeClass("stack-string-top");
        $("#d2b-string-bot2").removeClass("stack-string-bottom");
        $("#d2b-pointer-top").addClass("stack-pointer-top");
        $("#d2b-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2b").animate({backgroundColor: '#F5F5F5'},0);
        $(".table .d2b-heap-class1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2b-heap-class2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2b-jack-val").html('0');
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-hide-all-heap").hide();
        $(".d2b-show1").show();
        $(".d2b-show2a").show();
        $(".d2b-show8").show();
        p2_c2_unhighlight();

        p2_c2_line9();
        currentLine2b = 1;
    });

    $("#step-button-2b").click(function () {
        if (currentLine2b == 1) {
            //do line 1 things here
            $(".d2b-link").removeClass("yellow");
            $("#code2b-line-1").addClass("yellow");

            $("#d2b-string-top1").removeClass("stack-string-top");
            $("#d2b-string-bot1").removeClass("stack-string-bottom");
            $("#d2b-string-top2").removeClass("stack-string-top");
            $("#d2b-string-bot2").removeClass("stack-string-bottom");
            $("#d2b-pointer-top").removeClass("stack-pointer-top");
            $("#d2b-pointer-bot").removeClass("stack-pointer-bottom");
            $(".table .stack-class-2b").animate({backgroundColor: 'transparent'},0);
            $(".table .d2b-heap-class1").animate({backgroundColor: 'transparent'}, 0);
            $(".table .d2b-heap-class2").animate({backgroundColor: 'transparent'}, 0);
            $("#d2b-jack-val").animate({backgroundColor: 'transparent'}, 0);
            $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
            $("#d2b-pointer-addr2").animate({color: '#777'}, 0);

            $(".d2b-hide-all").hide();
            $(".d2b-hide-all-heap").hide();
            p2_c2_hideBorders();
            p2_c2_unhighlight();

            p2_c2_line1();
            currentLine2b = 2;
        }
        else if (currentLine2b == 2) {
            //do line 3 things here
            $(".d1b-link").removeClass("yellow");
            p2_c2_line2();
            currentLine2b = 3;
        }
        else if (currentLine2b == 3) {
            //do line 4 things here
            $(".d2b-link").removeClass("yellow");
            p2_c2_line3();
            currentLine2b = 4;
        }
        else if (currentLine2b == 4) {
            $(".d2b-link").removeClass("yellow");
            p2_c2_line4();
            currentLine2b = 5;
        }
        else if (currentLine2b == 5) {
            $(".d2b-link").removeClass("yellow");
            p2_c2_line5();
            currentLine2b = 6;
        }
        else if (currentLine2b == 6) {
            $(".d2b-link").removeClass("yellow");
            p2_c2_line6();
            currentLine2b = 7;
        }
        else if (currentLine2b == 7) {
            $(".d2b-link").removeClass("yellow");
            p2_c2_line7();
            currentLine2b = 8;
        }
        else if (currentLine2b == 8) {
            $(".d2b-link").removeClass("yellow");
            p2_c2_line8();
            currentLine2b = 9;
        }
        else if (currentLine2b == 9) {
            $(".d2b-link").removeClass("yellow");
            p2_c2_line9();
            currentLine2b = 1;
        }
    });

    //panel 3
    //panel 3 code 1
    var currentLine2a = 1;
    $("#code3a-line-1").addClass("yellow");

    $("#start-button-3a").click(function () {
        currentLine3a = 1;
        $(".d3a-hide-all").hide();
        $(".d3a-hide-all-heap").hide();
        $("#d3a-string-top1").removeClass("stack-string-top");
        $("#d3a-string-bot1").removeClass("stack-string-bottom");
        $("#d3a-string-top2").removeClass("stack-string-top");
        $("#d3a-string-bot2").removeClass("stack-string-bottom");
        $("#d3a-string-top3").removeClass("stack-string-top");
        $("#d3a-string-bot3").removeClass("stack-string-bottom");
        $("#d3a-string-top4").removeClass("stack-string-top");
        $("#d3a-string-bot4").removeClass("stack-string-bottom");

        $("#d3a-pointer-top1").removeClass("stack-pointer-top");
        $("#d3a-pointer-bot1").removeClass("stack-pointer-bottom");
        $("#d3a-pointer-top2").removeClass("stack-pointer-top");
        $("#d3a-pointer-bot2").removeClass("stack-pointer-bottom");
        p3_c1_hideBorders();
        $(".d3a-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-3a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d3a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-3a-1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-3a-2").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-3a-3").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-3a-4").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-label-3a1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-label-3a2").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr1").animate({color: '#777'}, 0);
        $("#d3a-pointer-addr2").animate({color: '#777'}, 0);

        p3_c1_line1();
        $("#d3a-rtn-addr-val").promise().done(function () {
            p3_c1_line2();
            $("#d3a-age1-val").promise().done(function () {
                p3_c1_line3();
                // $("#d3a-age2-val").promise().done(function () {
                //     p3_c1_line4();
                //     $(".table .d3a-heap-class").promise().done(function () {
                //         p3_c1_line5();
                //         $("#d3a-jack-val").promise().done(function () {
                //             p3_c1_line6();
                //             $("#d3a-rtnval-val").promise().done(function () {
                //                 p3_c1_line7();
                //             });
                //         });
                //     });
                // });
            });
        });
    });

    //p3 c1 line 1 function
    var p3_c1_line1 = function () {
        $("#code3a-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d3a-link").removeClass("yellow");
        $(".table .stack-heap-3a").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .stack-class-3a-1").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .stack-class-3a-2").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .stack-class-3a-3").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .stack-class-3a-4").animate({backgroundColor: '#F5F5F5'}, 500);

        $(".table .d3a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d3a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d3a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d3a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d3a-rtnval").delay(1200).show(400);
        $("#d3a-rtn-addr").delay(1200).show(400);
        $("#d3a-rtn-addr-val").delay(1600).show(400);
    };

    //p3 c1 line 2 function. stack class
    var p3_c1_line2 = function () {
        $("#code3a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        //constructor call
        $("#class3a-line-3").delay(1000).animate({backgroundColor: '#ffff00'}, 800);
        $(".stack-class-3a-1").delay(1800).animate({backgroundColor: '#c6e5a6'}, 800);
        $(".stack-class-label-3a1").delay(1800).animate({backgroundColor: '#c6e5a6'}, 800);
        $("#d3a-class-label1").delay(2200).show(400);

        //string declaration
        $("#class3a-line-1").delay(2600).animate({backgroundColor: '#ffff00'}, 1000).delay(1000).animate({backgroundColor: 'transparent'}, 1000);;

        setTimeout(function(){
            $("#d3a-string-top1").addClass("stack-string-top");
            $("#d3a-string-bot1").addClass("stack-string-bottom");
        }, 3600);

        $("#d3a-name1").delay(3800).show(400);
        $("#d3a-name1-val").delay(4200).show(400);

        //int declaration
        $("#class3a-line-2").delay(4600).animate({backgroundColor: '#ffff00'}, 1000);

        $("#d3a-age1").delay(5600).show(400);
        $("#d3a-age1-val").delay(6000).show(400);
    };

    //p3 c1 line 3 function. heap class
    var p3_c1_line3 = function () {
        $("#code3a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class3a-line-2").animate({backgroundColor: 'transparent'}, 1000).delay(4400).animate({backgroundColor: '#ffff00'}, 1000);
        $("#class3a-line-3").animate({backgroundColor: 'transparent'}, 1000).delay(300).animate({backgroundColor: '#ffff00'}, 800);
        $("#code3a-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d3a-pointer-top1").addClass("stack-pointer-top");
            $("#d3a-pointer-bot1").addClass("stack-pointer-bottom");
        }, 800);

        $("#d3a-marge").delay(1000).show(400);
        $(".stack-class-3a-2").delay(2200).animate({backgroundColor: '#a6c6e5'}, 800);
        $(".table .d3a-heap-class1").delay(2200).animate({backgroundColor: '#a6c6e5'}, 800);

        $("#d3a-pointer-addr1").delay(3000).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d3a-marge-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $("#d3a-marge-val").html('0x001d54f4');
        $("#d3a-marge-val").delay(3000).show(400);

        //string declaration
        $("#class3a-line-1").delay(3400).animate({backgroundColor: '#ffff00'}, 1000).delay(1000).animate({backgroundColor: 'transparent'}, 1000);

        setTimeout(function(){
            $("#d3a-string-top2").addClass("stack-string-top");
            $("#d3a-string-bot2").addClass("stack-string-bottom");
        }, 4400);
        $("#d3a-name2").delay(4600).show(400);
        $("#d3a-name2-val").delay(5000).show(400);

        //int declaration
        $("#d3a-age2").delay(6400).show(400);
        $("#d3a-age2-val").delay(6800).show(400);

    };

    // //p3 c1 line 4 function
    // var p3_c1_line4 = function () {
    //     $("#class2a-line-2").animate({backgroundColor: 'transparent'}, 1000);
    //     $("#class2a-line-3").animate({backgroundColor: 'transparent'}, 1000);
    //     $("#code2a-line-3").animate({backgroundColor: 'transparent'}, 1000);
    //     $("#code2a-line-4").animate({backgroundColor: '#ffff00'}, 1000);
    //
    //     $("#d2a-pointer-addr").delay(1000).animate({color: '#777', fontWeight: 'bold'}, 150);
    //     $("#d2a-jack-val").delay(1000).animate({color: '#777', fontWeight: 'bold'}, 150);
    //     $(".table .d2a-heap-class").delay(1000).animate({backgroundColor: 'transparent'},500).delay(700);
    //     setTimeout(function(){
    //         $("#d2a-string-top2").removeClass("stack-string-top");
    //         $("#d2a-string-bot2").removeClass("stack-string-bottom");
    //     }, 1000);
    //     $("#d2a-name2").delay(1000).hide(400);
    //     $("#d2a-name2-val").delay(1000).hide(400);
    //     $("#d2a-age2").delay(1000).hide(400);
    //     $("#d2a-age2-val").delay(1000).hide(400);
    //     $(".table .stack-class-2a-2").delay(1000).animate({backgroundColor: '#F5F5F5'}, 500);
    // };
    //
    // //p3 c1 line 5 function
    // var p3_c1_line5 = function () {
    //     $("#code2a-line-4").animate({backgroundColor: 'transparent'}, 1000);
    //     $("#code2a-line-5").animate({backgroundColor: '#ffff00'}, 1000);
    //
    //     $("#d2a-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
    //     $("#d2a-jack-val").delay(1000).animate({backgroundColor: '#d1d1d1'}, 500);
    //     setTimeout(function(){
    //         $("#d2a-jack-val").html('0');
    //     }, 1900);
    //     $("#d2a-jack-val").delay(1900).show(400);
    // };
    //
    // //p3 c1 line 6 function
    // var p3_c1_line6 = function () {
    //     $("#code2a-line-5").animate({backgroundColor: 'transparent'}, 1000);
    //     $("#code2a-line-6").animate({backgroundColor: '#ffff00'}, 1000);
    //     $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 1000);
    //
    //     $("#d2a-rtnval-val").delay(1000).show(400);
    // };
    //
    // //p3 c1 line 7 function
    // var p3_c1_line7 = function () {
    //     $("#code2a-line-6").animate({backgroundColor: 'transparent'}, 1000);
    //     $("#code2a-line-7").animate({backgroundColor: '#ffff00'}, 1000);
    //
    //     $(".d2a-hide-all").delay(1000).hide(400);
    //     $("#code2a-line-7").promise().done(function () {
    //         p2_c1_hideBorders();
    //         $(".table .stack-class-2a").animate({backgroundColor: 'transparent'}, 0);
    //         $(".table .stack-class-2a-2").animate({backgroundColor: 'transparent'}, 0);
    //         $(".table .stack-class-label-2a").animate({backgroundColor: 'transparent'}, 0);
    //         $("#d2a-string-top1").removeClass("stack-string-top");
    //         $("#d2a-string-bot1").removeClass("stack-string-bottom");
    //         $("#d2a-string-top2").removeClass("stack-string-top");
    //         $("#d2a-string-bot2").removeClass("stack-string-bottom");
    //         $("#d2a-pointer-top").removeClass("stack-pointer-top");
    //         $("#d2a-pointer-bot").removeClass("stack-pointer-bottom");
    //     });
    // };

    //unhighlight all lines
    var p3_c1_unhighlight = function () {
        $("#code3a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-6").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-7").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-8").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-9").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-10").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-11").animate({backgroundColor: 'transparent'}, 0);

        $("#class3a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#class3a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#class3a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#class3a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#class3a-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#class3a-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#class3a-line-7").animate({backgroundColor: 'transparent'}, 1000);
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
    $("#code2a-line-1").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-1").addClass("yellow");

        $("#d2a-string-top1").removeClass("stack-string-top");
        $("#d2a-string-bot1").removeClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").removeClass("stack-pointer-top");
        $("#d2a-pointer-bot").removeClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        p2_c1_hideBorders();
        p2_c1_unhighlight();

        p2_c1_line1();
        currentLine2a = 2;
    });

    $("#code2a-line-2").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-2").addClass("yellow");

        $("#d2a-string-top1").removeClass("stack-string-top");
        $("#d2a-string-bot1").removeClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").removeClass("stack-pointer-top");
        $("#d2a-pointer-bot").removeClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $(".d2a-show1").show();
        p2_c1_unhighlight();

        p2_c1_line2();
        currentLine2a = 3;
    });

    $("#code2a-line-3").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-3").addClass("yellow");

        $("#d2a-string-top1").addClass("stack-string-top");
        $("#d2a-string-bot1").addClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").removeClass("stack-pointer-top");
        $("#d2a-pointer-bot").removeClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $("#d2a-jack-val").html('0x001d54f4');
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        p2_c1_unhighlight();

        p2_c1_line3();
        currentLine2a = 4;
    });

    $("#code2a-line-4").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-4").addClass("yellow");

        $("#d2a-string-top1").addClass("stack-string-top");
        $("#d2a-string-bot1").addClass("stack-string-bottom");
        $("#d2a-string-top2").addClass("stack-string-top");
        $("#d2a-string-bot2").addClass("stack-string-bottom");
        $("#d2a-pointer-top").addClass("stack-pointer-top");
        $("#d2a-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#a6c6e5'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: '#a6c6e5'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $("#d2a-jack-val").html('0x001d54f4');
        $("#d2a-pointer-addr").animate({color: '#532A78'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3a").show();
        $(".d2a-show3").show();
        p2_c1_unhighlight();

        p2_c1_line4();
        currentLine2a = 5;
    });

    $("#code2a-line-5").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-5").addClass("yellow");

        $("#d2a-string-top1").addClass("stack-string-top");
        $("#d2a-string-bot1").addClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").addClass("stack-pointer-top");
        $("#d2a-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2a-jack-val").html('0x001d54f4');
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3a").show();
        p2_c1_unhighlight();

        p2_c1_line5();
        currentLine2a = 6;
    });

    $("#code2a-line-6").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-6").addClass("yellow");

        $("#d2a-string-top1").addClass("stack-string-top");
        $("#d2a-string-bot1").addClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").addClass("stack-pointer-top");
        $("#d2a-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: '#d1d1d1'}, 0);
        $("#d2a-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2a-jack-val").html('0');
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3a").show();
        p2_c1_unhighlight();

        p2_c1_line6();
        currentLine2a = 7;
    });

    $("#code2a-line-7").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-7").addClass("yellow");

        $("#d2a-string-top1").addClass("stack-string-top");
        $("#d2a-string-bot1").addClass("stack-string-bottom");
        $("#d2a-string-top2").removeClass("stack-string-top");
        $("#d2a-string-bot2").removeClass("stack-string-bottom");
        $("#d2a-pointer-top").addClass("stack-pointer-top");
        $("#d2a-pointer-bot").addClass("stack-pointer-bottom");
        $(".table .stack-class-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-label-2a").animate({backgroundColor: '#c6e5a6'}, 0);
        $(".table .stack-class-2a-2").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-jack-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2a-jack-val").html('0');
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-hide-all-heap").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3a").show();
        $(".d2a-show6").show();
        p2_c1_unhighlight();

        p2_c1_line7();
        currentLine2a = 1;
    });

    $("#step-button-2a").click(function () {
        if (currentLine2a == 1) {
            //do line 1 things here
            $(".d2a-link").removeClass("yellow");
            $("#code2a-line-1").addClass("yellow");

            $("#d2a-string-top1").removeClass("stack-string-top");
            $("#d2a-string-bot1").removeClass("stack-string-bottom");
            $("#d2a-string-top2").removeClass("stack-string-top");
            $("#d2a-string-bot2").removeClass("stack-string-bottom");
            $("#d2a-pointer-top").removeClass("stack-pointer-top");
            $("#d2a-pointer-bot").removeClass("stack-pointer-bottom");
            $(".table .stack-class-2a").animate({backgroundColor: 'transparent'}, 0);
            $(".table .stack-class-label-2a").animate({backgroundColor: 'transparent'}, 0);
            $(".table .stack-class-2a-2").animate({backgroundColor: 'transparent'}, 0);
            $(".table .d2a-heap-class").animate({backgroundColor: 'transparent'}, 0);
            $("#d2a-jack-val").animate({backgroundColor: 'transparent'}, 0);
            $("#d2a-pointer-addr").animate({color: '#777'}, 0);

            $(".d2a-hide-all").hide();
            $(".d2a-hide-all-heap").hide();
            p2_c1_hideBorders();
            p2_c1_unhighlight();

            p2_c1_line1();
            currentLine2a = 2;
        }
        else if (currentLine2a == 2) {
            //do line 3 things here
            $(".d1a-link").removeClass("yellow");
            p2_c1_line2();
            currentLine2a = 3;
        }
        else if (currentLine2a == 3) {
            //do line 4 things here
            $(".d2a-link").removeClass("yellow");
            p2_c1_line3();
            currentLine2a = 4;
        }
        else if (currentLine2a == 4) {
            $(".d2a-link").removeClass("yellow");
            p2_c1_line4();
            currentLine2a = 5;
        }
        else if (currentLine2a == 5) {
            $(".d2a-link").removeClass("yellow");
            p2_c1_line5();
            currentLine2a = 6;
        }
        else if (currentLine2a == 6) {
            $(".d2a-link").removeClass("yellow");
            p2_c1_line6();
            currentLine2a = 7;
        }
        else if (currentLine2a == 7) {
            $(".d2a-link").removeClass("yellow");
            p2_c1_line7();
            currentLine2a = 1;
        }
    });
});