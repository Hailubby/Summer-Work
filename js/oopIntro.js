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
        $(".table .stack-class-1a").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d1a-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1a-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1a-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1a-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1a-rtnval").delay(1200).show(400);
        $("#d1a-rtn-addr").delay(1200).show(400);
        $("#d1a-rtn-addr-val").delay(1600).show(400);
    };


    //p1 c1 line 2a function. constructor call
    var p1_c1_line2a = function () {
        $("#code1a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        $("#class1a-line-3").delay(1000).animate({backgroundColor: '#ffff00'}, 800);
        $(".stack-class-1a").delay(1800).animate({backgroundColor: '#e8e8e8'}, 800);
    };

    //p1 c1 line 2b function. string
    var p1_c1_line2b = function () {
        $("#class1a-line-1").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d1a-string-top").addClass("stack-string-top");
            $("#d1a-string-bot").addClass("stack-string-bottom");
        }, 800);
        $("#d1a-name").delay(1000).show(400);
        $("#d1a-name-val").delay(1400).show(400);
    };

    //p1 c1 line 2c function. ints
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
            $(".table .stack-class-1a").animate({backgroundColor: 'transparent'}, 0);
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

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        p1_c1_unhighlight();

        p1_c1_line2a();
        currentLine1a = 3;
    });

    //string click. 2b
    $("#class1a-line-1").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-2").addClass("yellow");
        $("#class1a-line-3").addClass("yellow");
        $("#class1a-line-1").addClass("yellow");

        $("#d1a-string-top").removeClass("stack-string-top");
        $("#d1a-string-bot").removeClass("stack-string-bottom");
        $(".table .stack-class-1a").animate({backgroundColor: '#e8e8e8'}, 0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        p1_c1_unhighlight();

        p1_c1_line2b();
        currentLine1a = 4;
    });

    //int r g b click. 2c
    $("#class1a-line-2").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-2").addClass("yellow");
        $("#class1a-line-3").addClass("yellow");
        $("#class1a-line-2").addClass("yellow");

        $("#d1a-string-top").addClass("stack-string-top");
        $("#d1a-string-bot").addClass("stack-string-bottom");
        $(".table .stack-class-1a").animate({backgroundColor: '#e8e8e8'}, 0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2b").show();
        p1_c1_unhighlight();

        p1_c1_line2c();
        currentLine1a = 5;
    });

    //line 3 rtn click
    $("#code1a-line-3").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-3").addClass("yellow");

        $("#d1a-string-top").addClass("stack-string-top");
        $("#d1a-string-bot").addClass("stack-string-bottom");
        $(".table .stack-class-1a").animate({backgroundColor: '#e8e8e8'}, 0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2b").show();
        $(".d1a-show2c").show();
        p1_c1_unhighlight();

        p1_c1_line3();
        currentLine1a = 6;
    });

    //end brace click
    $("#code1a-line-4").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-4").addClass("yellow");

        $("#d1a-string-top").addClass("stack-string-top");
        $("#d1a-string-bot").addClass("stack-string-bottom");
        $(".table .stack-class-1a").animate({backgroundColor: '#e8e8e8'}, 0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2b").show();
        $(".d1a-show2c").show();
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

            $(".d1a-hide-all").hide();
            p1_c1_hideBorders();
            p1_c1_unhighlight();

            p1_c1_line1();
            currentLine1a = 2;
        }
        else if (currentLine1a == 2) {
            //do line 3 things here
            $(".d1a-link").removeClass("yellow");
            p1_c1_line2a();
            currentLine1a = 3;
        }
        else if (currentLine1a == 3) {
            //do line 4 things here
            $(".d1a-link").removeClass("yellow");
            $("#code1a-line-2").addClass("yellow");
            $("#class1a-line-3").addClass("yellow");
            p1_c1_line2b();
            currentLine1a = 4;
        }
        else if (currentLine1a == 4) {
            $(".d1a-link").removeClass("yellow");
            $("#code1a-line-2").addClass("yellow");
            $("#class1a-line-3").addClass("yellow");
            p1_c1_line2c();
            currentLine1a = 5;
        }
        else if (currentLine1a == 5) {
            $(".d1a-link").removeClass("yellow");
            p1_c1_line3();
            currentLine1a = 6;
        }
        else if (currentLine1a == 6) {
            $(".d1a-link").removeClass("yellow");
            p1_c1_line4();
            currentLine1a = 1;
        }

    });

    //panel 2 code 1
    var currentLine1b = 1;
    $("#code1b-line-1").addClass("yellow");

    $("#start-button-1b").click(function () {
        currentLine1b = 1;
        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        $("#d1b-string-top").removeClass("stack-string-top");
        $("#d1b-string-bot").removeClass("stack-string-bottom");
        p1_c2_hideBorders();
        $(".d1b-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1b").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1b-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-pointer-addr").animate({color: '#777'}, 0);
        p1_c2_line1();
        $("#d1b-rtn-addr-val").promise().done(function () {
            p1_c2_line2a();
            $("#d1b-favCol-val").promise().done(function () {
                p1_c2_line2b();
                $("#d1b-name-val").promise().done(function () {
                    p1_c2_line2c();
                    $("#d1b-b-val").promise().done(function () {
                        p1_c2_line3();
                        $("#d1b-mem-leak").promise().done(function () {
                            p1_c2_line4();
                        });
                    });
                });
            });
        });
    });

    //p1 c2 line 1 function
    var p1_c2_line1 = function () {
        $("#code1b-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d1b-link").removeClass("yellow");
        $(".table .stack-heap-1b").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d1b-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d1b-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d1b-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d1b-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d1b-rtnval").delay(1200).show(400);
        $("#d1b-rtn-addr").delay(1200).show(400);
        $("#d1b-rtn-addr-val").delay(1600).show(400);
    };

    //p1 c2 line 2a function. pointer & constructor call
    var p1_c2_line2a = function () {
        $("#code1b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1b-favCol").delay(1000).show(400);
        $("#class1b-line-3").delay(1400).animate({backgroundColor: '#ffff00'}, 800);
        $(".table .d1b-heap-class").delay(2200).animate({backgroundColor: '#e8e8e8'}, 800);

        $("#d1b-pointer-addr").delay(3000).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d1b-favCol-val").delay(3000).show(400);
    };

    //p1 c2 line 2b function. string
    var p1_c2_line2b = function () {
        $("#class1b-line-1").animate({backgroundColor: '#ffff00'}, 1000);

        setTimeout(function(){
            $("#d1b-string-top").addClass("stack-string-top");
            $("#d1b-string-bot").addClass("stack-string-bottom");
        }, 800);
        $("#d1b-name").delay(1000).show(400);
        $("#d1b-name-val").delay(1400).show(400);
    };

    //p1 c2 line 2c function. ints
    var p1_c2_line2c = function () {
        $("#class1b-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#class1b-line-2").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1b-r").delay(1000).show(400);
        $("#d1b-r-val").delay(1400).show(400);
        $("#d1b-g").delay(1800).show(400);
        $("#d1b-g-val").delay(2200).show(400);
        $("#d1b-b").delay(2600).show(400);
        $("#d1b-b-val").delay(3000).show(400);
    }

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
        $(".table .d1b-heap-class").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-pointer-addr").animate({color: '#777'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        $(".d1b-show1").show();
        p1_c2_unhighlight();

        p1_c2_line2a();
        currentLine1b = 3;
    });

    //string click. 2b
    $("#class1b-line-1").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-2").addClass("yellow");
        $("#class1b-line-3").addClass("yellow");
        $("#class1b-line-1").addClass("yellow");

        $("#d1b-string-top").removeClass("stack-string-top");
        $("#d1b-string-bot").removeClass("stack-string-bottom");
        $(".table .d1b-heap-class").animate({backgroundColor: '#e8e8e8'}, 0);
        $("#d1b-pointer-addr").animate({color: '#532A78'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        $(".d1b-show1").show();
        $(".d1b-show2a").show();
        p1_c2_unhighlight();

        p1_c2_line2b();
        currentLine1b = 4;
    });

    //int r g b click. 2c
    $("#class1b-line-2").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-2").addClass("yellow");
        $("#class1b-line-3").addClass("yellow");
        $("#class1b-line-2").addClass("yellow");

        $("#d1b-string-top").addClass("stack-string-top");
        $("#d1b-string-bot").addClass("stack-string-bottom");
        $(".table .d1b-heap-class").animate({backgroundColor: '#e8e8e8'}, 0);
        $("#d1b-pointer-addr").animate({color: '#532A78'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        $(".d1b-show1").show();
        $(".d1b-show2a").show();
        $(".d1b-show2b").show();
        p1_c2_unhighlight();

        p1_c2_line2c();
        currentLine1b = 5;
    });

    //line 3 rtn click
    $("#code1b-line-3").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-3").addClass("yellow");

        $("#d1b-string-top").addClass("stack-string-top");
        $("#d1b-string-bot").addClass("stack-string-bottom");
        $(".table .d1b-heap-class").animate({backgroundColor: '#e8e8e8'}, 0);
        $("#d1b-pointer-addr").animate({color: '#532A78'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2a").show();
        $(".d1b-show2b").show();
        $(".d1b-show2c").show();
        p1_c2_unhighlight();

        p1_c2_line3();
        currentLine1b = 6;
    });

    //end brace click
    $("#code1b-line-4").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-4").addClass("yellow");

        $("#d1b-string-top").addClass("stack-string-top");
        $("#d1b-string-bot").addClass("stack-string-bottom");
        $(".table .d1b-heap-class").animate({backgroundColor: '#dd747b'}, 0);
        $("#d1b-pointer-addr").animate({color: '#532A78'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2a").show();
        $(".d1b-show2b").show();
        $(".d1b-show2c").show();
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
            p1_c2_line2a();
            currentLine1b = 3;
        }
        else if (currentLine1b == 3) {
            //do line 4 things here
            $(".d1b-link").removeClass("yellow");
            $("#code1b-line-2").addClass("yellow");
            $("#class1b-line-3").addClass("yellow");
            p1_c2_line2b();
            currentLine1b = 4;
        }
        else if (currentLine1b == 4) {
            $(".d1b-link").removeClass("yellow");
            $("#code1b-line-2").addClass("yellow");
            $("#class1b-line-3").addClass("yellow");
            p1_c2_line2c();
            currentLine1b = 5;
        }
        else if (currentLine1b == 5) {
            $(".d1b-link").removeClass("yellow");
            p1_c2_line3();
            currentLine1b = 6;
        }
        else if (currentLine1b == 6) {
            $(".d1b-link").removeClass("yellow");
            p1_c2_line4();
            currentLine1b = 1;
        }

    });
});