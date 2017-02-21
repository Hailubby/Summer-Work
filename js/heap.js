/**
 * Created by User on 24/01/2017.
 */

/** Specific JQuery for the heap page. Mainly just animations **/

$(document).ready(function () {

    //panel 1
    //code 1
    var currentLine1a = 1;
    $("#code1a-line-1").addClass("yellow");

    $("#start-button-1a").click(function () {
        currentLine1a = 1;
        $(".d1a-hide-all").hide();
        $(".d1a-hide-all-heap").hide();
        p1_c1_hideBorders();
        $(".d1a-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1a").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1a-heap1").animate({backgroundColor: 'transparent'}, 0);
        $("#d1a-pointer-addr").animate({color: '#777'}, 0);
        p1_c1_line1();
        $("#d1a-rtn-addr-val").promise().done(function () {
            p1_c1_line2();
            $("#d1a-age-val").promise().done(function () {
                p1_c1_line3();
                $("#d1a-heap-age-val").promise().done(function () {
                    p1_c1_line4();
                    $("#d1a-mem-leak").promise().done(function () {
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
        $(".table .d1a-heap1").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d1a-pointer-addr").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d1a-age-val").delay(1600).show(400);
    };

    //p1 c1 line 3 function
    var p1_c1_line3 = function () {
        $("#code1a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1a-heap-age-val").delay(1000).show(400);
    };

    //p1 c1 line 4 function
    var p1_c1_line4 = function () {
        $("#code1a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1a-rtnval-val").delay(1000).show(400);
        $(".d1a-heap1").delay(1400).animate({backgroundColor: '#dd747b'}, 700);
        $("#d1a-mem-leak").delay(2100).show(400).delay(400);
    };

    //p1 c1 line 5 function
    var p1_c1_line5 = function () {
        $("#code1a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-5").animate({backgroundColor: '#ffff00'}, 1000);

        $(".d1a-hide-all").delay(1000).hide(400);
        $("#code1a-line-5").promise().done(function () {
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

        $(".table .d1a-heap1").animate({backgroundColor: 'transparent'}, 0);

        $(".d1a-hide-all").hide();
        $(".d1a-hide-all-heap").hide();
        $("#d1a-pointer-addr").animate({color: '#777'}, 0);
        p1_c1_hideBorders();
        p1_c1_unhighlight();

        p1_c1_line1();
        currentLine1a = 2;
    });

    $("#code1a-line-2").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-2").addClass("yellow");

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-hide-all-heap").hide();
        $(".table .d1a-heap1").animate({backgroundColor: 'transparent'}, 0);
        $("#d1a-pointer-addr").animate({color: '#777'}, 0);
        $(".d1a-show1").show();
        p1_c1_unhighlight();

        p1_c1_line2();
        currentLine1a = 3;
    });

    $("#code1a-line-3").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-3").addClass("yellow");

        p1_c1_showBorders();
        $(".table .d1a-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d1a-pointer-addr").animate({color: '#532A78'}, 0);
        $(".d1a-hide-all").hide();
        $(".d1a-hide-all-heap").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        p1_c1_unhighlight();

        p1_c1_line3();
        currentLine1a = 4;
    });

    $("#code1a-line-4").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-4").addClass("yellow");

        p1_c1_showBorders();
        $(".table .d1a-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d1a-pointer-addr").animate({color: '#532A78'}, 0);
        $(".d1a-hide-all").hide();
        $(".d1a-hide-all-heap").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        p1_c1_unhighlight();

        p1_c1_line4();
        currentLine1a = 5;
    });

    $("#code1a-line-5").click(function(){
        $(".d1a-link").removeClass("yellow");
        $("#code1a-line-5").addClass("yellow");

        p1_c1_showBorders();
        $(".table .d1a-heap1").animate({backgroundColor: '#dd747b'}, 0);
        $("#d1a-pointer-addr").animate({color: '#532A78'}, 0);
        $(".d1a-hide-all").hide();
        $(".d1a-hide-all-heap").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        $(".d1a-show4").show();
        p1_c1_unhighlight();

        p1_c1_line5();
        currentLine1a = 1;
    });


    $("#step-button-1a").click(function () {
        if (currentLine1a == 1) {
            //do line 1 things here
            $(".d1a-link").removeClass("yellow");
            $("#code1a-line-1").addClass("yellow");

            $(".table .d1a-heap1").animate({backgroundColor: 'transparent'}, 0);

            $(".d1a-hide-all").hide();
            $(".d1a-hide-all-heap").hide();
            $("#d1a-pointer-addr").animate({color: '#777'}, 0);
            p1_c1_hideBorders();
            p1_c1_unhighlight();

            p1_c1_line1();
            currentLine1a = 2;
        }
        else if (currentLine1a == 2) {
            //do line 2 things here
            $(".d1a-link").removeClass("yellow");
            p1_c1_line2();
            currentLine1a = 3;
        }
        else if (currentLine1a == 3) {
            //do line 3 things here
            $(".d1a-link").removeClass("yellow");
            p1_c1_line3();
            currentLine1a = 4;
        }
        else if (currentLine1a == 4) {
            //do line 4 things here
            $(".d1a-link").removeClass("yellow");
            p1_c1_line4();
            currentLine1a = 5;
        }
        else if (currentLine1a == 5) {
            //do line 5 things here
            $(".d1a-link").removeClass("yellow");
            p1_c1_line5();
            currentLine1a = 1;
        }
    });


    //code 2
    var currentLine1b = 1;
    $("#code1b-line-1").addClass("yellow");

    $("#start-button-1b").click(function () {
        currentLine1b = 1;
        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        p1_c2_hideBorders();
        $(".d1b-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1b").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1b-heap1").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-heap-age-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-pointer-addr").animate({color: '#777'}, 0);
        p1_c2_line1();
        $("#d1b-rtn-addr-val").promise().done(function () {
            p1_c2_line2();
            $("#d1b-heap-age-val").promise().done(function () {
                p1_c2_line3();
                $("#d1b-heap-age-val").promise().done(function () {
                    p1_c2_line4();
                    $("#d1b-mem-leak").promise().done(function () {
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

        $("#d1b-age").delay(1000).show(400);
        $(".table .d1b-heap1").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d1b-pointer-addr").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d1b-age-val").delay(1600).show(400);
        $("#d1b-heap-age-val").html('23');
        $("#d1b-heap-age-val").delay(2000).show(400);
    };

    //p1 c1 line 3 function
    var p1_c2_line3 = function () {
        $("#code1b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1b-heap-age-val").delay(1000).animate({backgroundColor: '#d1d1d1'}, 500);
        setTimeout(function(){
            $("#d1b-heap-age-val").html('24');
        }, 1900);
        $("#d1b-heap-age-val").delay(1900).show(400);
    };

    //p1 c2 line 4 function
    var p1_c2_line4 = function () {
        $("#code1b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $("#d1b-heap-age-val").animate({backgroundColor: 'transparent'}, 1000);

        $("#d1b-rtnval-val").delay(1000).show(400);
        $(".d1b-heap1").delay(1400).animate({backgroundColor: '#dd747b'}, 700);
        $("#d1b-mem-leak").delay(2100).show(400).delay(400);
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
        $("#code1b-line-1").addClass("yellow");

        $(".table .d1b-heap1").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-heap-age-val").animate({backgroundColor: 'transparent'}, 0);

        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        $("#d1b-pointer-addr").animate({color: '#777'}, 0);
        p1_c2_hideBorders();
        p1_c2_unhighlight();

        p1_c2_line1();
        currentLine1b = 2;
    });

    $("#code1b-line-2").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-2").addClass("yellow");

        $(".table .d1b-heap1").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-heap-age-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-pointer-addr").animate({color: '#777'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        $(".d1b-show1").show();
        p1_c2_unhighlight();

        p1_c2_line2();
        currentLine1b = 3;
    });

    $("#code1b-line-3").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-3").addClass("yellow");

        $(".table .d1b-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d1b-heap-age-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d1b-heap-age-val").html('23');

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        p1_c2_unhighlight();

        p1_c2_line3();
        currentLine1b = 4;
    });

    $("#code1b-line-4").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-4").addClass("yellow");

        $(".table .d1b-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d1b-heap-age-val").animate({backgroundColor: '#d1d1d1'}, 0);
        $("#d1b-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d1b-heap-age-val").html('24');

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        p1_c2_unhighlight();

        p1_c2_line4();
        currentLine1b = 5;
    });

    $("#code1b-line-5").click(function(){
        $(".d1b-link").removeClass("yellow");
        $("#code1b-line-5").addClass("yellow");

        $(".table .d1b-heap1").animate({backgroundColor: '#dd747b'}, 0);
        $("#d1b-heap-age-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d1b-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d1b-heap-age-val").html('24');

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-hide-all-heap").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        $(".d1b-show4").show();
        p1_c2_unhighlight();

        p1_c2_line5();
        currentLine1b = 1;
    });


    $("#step-button-1b").click(function () {
        if (currentLine1b == 1) {
            //do line 1 things here
            $(".d1b-link").removeClass("yellow");
            $("#code1b-line-1").addClass("yellow");

            $(".table .d1b-heap1").animate({backgroundColor: 'transparent'}, 0);
            $("#d1b-heap-age-val").animate({backgroundColor: 'transparent'}, 0);

            $(".d1b-hide-all").hide();
            $(".d1b-hide-all-heap").hide();
            $("#d1b-pointer-addr").animate({color: '#777'}, 0);
            p1_c2_hideBorders();
            p1_c2_unhighlight();

            p1_c2_line1();
            currentLine1b = 2;
        }
        else if (currentLine1b == 2) {
            //do line 2 things here
            $(".d1b-link").removeClass("yellow");
            p1_c2_line2();
            currentLine1b = 3;
        }
        else if (currentLine1b == 3) {
            //do line 3 things here
            $(".d1b-link").removeClass("yellow");
            p1_c2_line3();
            currentLine1b = 4;
        }
        else if (currentLine1b == 4) {
            //do line 4 things here
            $(".d1b-link").removeClass("yellow");
            p1_c2_line4();
            currentLine1b = 5;
        }
        else if (currentLine1b == 5) {
            //do line 5 things here
            $(".d1b-link").removeClass("yellow");
            p1_c2_line5();
            currentLine1b = 1;
        }
    });

    //code 3
    var currentLine1c = 1;
    $("#code1c-line-1").addClass("yellow");

    $("#start-button-1c").click(function () {
        currentLine1c = 1;
        $(".d1c-hide-all").hide();
        $(".d1c-hide-all-heap").hide();
        p1_c3_hideBorders();
        $(".d1c-link").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1c-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1c-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d1c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d1c-pointer-addr2").animate({color: '#777'}, 0);
        p1_c3_line1();
        $("#d1c-rtn-addr-val").promise().done(function () {
            p1_c3_line2();
            $("#d1c-heap-age-val").promise().done(function () {
                p1_c3_line3();
                $("#d1c-heap-drivingAge-val").promise().done(function () {
                    p1_c3_line4();
                    $("#d1c-mem-leak2").promise().done(function () {
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
        $(".table .d1c-heap1").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d1c-pointer-addr1").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d1c-age-val").delay(1600).show(400);
        $("#d1c-heap-age-val").delay(2000).show(400);
    };

    //p1 c3 line 3 function
    var p1_c3_line3 = function () {
        $("#code1c-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-3").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1c-drivingAge").delay(1000).show(400);
        $(".table .d1c-heap2").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d1c-pointer-addr2").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d1c-drivingAge-val").delay(1600).show(400);
        $("#d1c-heap-drivingAge-val").delay(2000).show(400);
    };

    //p1 c3 line 4 function
    var p1_c3_line4 = function () {
        $("#code1c-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1c-line-4").animate({backgroundColor: '#ffff00'}, 1000);

        $("#d1c-rtnval-val").delay(1000).show(400);
        $(".d1c-heap1").delay(1400).animate({backgroundColor: '#dd747b'}, 700);
        $(".d1c-heap2").delay(1400).animate({backgroundColor: '#dd747b'}, 700);
        $("#d1c-mem-leak1").delay(2100).show(400).delay(400);
        $("#d1c-mem-leak2").delay(2100).show(400).delay(400);
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
    $("#code1c-line-1").click(function(){
        $(".d1c-link").removeClass("yellow");
        $("#code1c-line-1").addClass("yellow");

        $(".table .d1c-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1c-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d1c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d1c-pointer-addr2").animate({color: '#777'}, 0);

        $(".d1c-hide-all").hide();
        $(".d1c-hide-all-heap").hide();
        p1_c3_hideBorders();
        p1_c3_unhighlight();

        p1_c3_line1();
        currentLine1c = 2;
    });

    $("#code1c-line-2").click(function(){
        $(".d1c-link").removeClass("yellow");
        $("#code1c-line-2").addClass("yellow");

        $(".table .d1c-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d1c-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d1c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d1c-pointer-addr2").animate({color: '#777'}, 0);

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".d1c-hide-all-heap").hide();
        $(".d1c-show1").show();
        p1_c3_unhighlight();

        p1_c3_line2();
        currentLine1c = 3;
    });

    $("#code1c-line-3").click(function(){
        $(".d1c-link").removeClass("yellow");
        $("#code1c-line-3").addClass("yellow");

        $(".table .d1c-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d1c-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d1c-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d1c-pointer-addr2").animate({color: '#777'}, 0);

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".d1c-hide-all-heap").hide();
        $(".d1c-show1").show();
        $(".d1c-show2").show();
        p1_c3_unhighlight();

        p1_c3_line3();
        currentLine1c = 4;
    });

    $("#code1c-line-4").click(function(){
        $(".d1c-link").removeClass("yellow");
        $("#code1c-line-4").addClass("yellow");

        $(".table .d1c-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d1c-heap2").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d1c-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d1c-pointer-addr2").animate({color: '#532A78'}, 0);

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".d1c-hide-all-heap").hide();
        $(".d1c-show1").show();
        $(".d1c-show2").show();
        $(".d1c-show3").show();
        p1_c3_unhighlight();

        p1_c3_line4();
        currentLine1c = 5;
    });

    $("#code1c-line-5").click(function(){
        $(".d1c-link").removeClass("yellow");
        $("#code1c-line-5").addClass("yellow");

        $(".table .d1c-heap1").animate({backgroundColor: '#dd747b'}, 0);
        $(".table .d1c-heap2").animate({backgroundColor: '#dd747b'}, 0);
        $("#d1c-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d1c-pointer-addr2").animate({color: '#532A78'}, 0);

        p1_c3_showBorders();
        $(".d1c-hide-all").hide();
        $(".d1c-hide-all-heap").hide();
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
            $("#code1c-line-1").addClass("yellow");

            $(".table .d1c-heap1").animate({backgroundColor: 'transparent'}, 0);
            $(".table .d1c-heap2").animate({backgroundColor: 'transparent'}, 0);
            $("#d1c-pointer-addr1").animate({color: '#777'}, 0);
            $("#d1c-pointer-addr2").animate({color: '#777'}, 0);

            $(".d1c-hide-all").hide();
            $(".d1c-hide-all-heap").hide();
            p1_c3_hideBorders();
            p1_c3_unhighlight();

            p1_c3_line1();
            currentLine1c = 2;
        }
        else if (currentLine1c == 2) {
            //do line 2 things here
            $(".d1c-link").removeClass("yellow");
            p1_c3_line2();
            currentLine1c = 3;
        }
        else if (currentLine1c == 3) {
            //do line 3 things here
            $(".d1c-link").removeClass("yellow");
            p1_c3_line3();
            currentLine1c = 4;
        }
        else if (currentLine1c == 4) {
            //do line 4 things here
            $(".d1c-link").removeClass("yellow");
            p1_c3_line4();
            currentLine1c = 5;
        }
        else if (currentLine1c == 5) {
            //do line 5 things here
            $(".d1c-link").removeClass("yellow");
            p1_c3_line5();
            currentLine1c = 1;
        }
    });

    //panel 2
    //code 1
    var currentLine2a = 1;
    $("#code2a-line-1").addClass("yellow");

    $("#start-button-2a").click(function () {
        currentLine2a = 1;
        $(".d2a-hide-all").hide();
        p2_c1_hideBorders();
        $("#code2a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2a-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2a-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2a-pointer-addr2").animate({color: '#777'}, 0);
        p2_c1_line1();
        $("#d2a-rtn-addr-val").promise().done(function () {
            p2_c1_line2();
            $("#d2a-heap-faveNum-val1").promise().done(function () {
                p2_c1_line3();
                $("#d2a-mem-leak").promise().done(function () {
                    p2_c1_line4();
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
        $(".d2a-link").removeClass("yellow");
        $("#d2a-faveNum").delay(1000).show(400);
        $(".table .d2a-heap1").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d2a-pointer-addr1").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d2a-faveNum-val").html('0x001d54f0');
        $("#d2a-faveNum-val").delay(1600).show(400);
        $("#d2a-heap-faveNum-val1").delay(2000).show(400);
    };

    //p2 c1 line 3 function
    var p2_c1_line3 = function () {
        $("#code2a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2a-link").removeClass("yellow");
        $(".table .d2a-heap2").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d2a-pointer-addr2").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d2a-pointer-addr1").delay(1600).animate({color: '#777'}, 150);
        setTimeout(function(){
            $("#d2a-faveNum-val").html('0x001d54f4');
        }, 1600);
        $("#d2a-heap-faveNum-val2").delay(1800).show(400);
        $(".d2a-heap1").delay(2200).animate({backgroundColor: '#dd747b'}, 700);
        $("#d2a-mem-leak").delay(2900).show(400);
    };

    //p2 c1 line 4 function
    var p2_c1_line4 = function () {
        $("#code2a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2a-link").removeClass("yellow");
        $("#d2a-rtnval-val").delay(1000).show(400);
    };

    //unhighlight all lines
    var p2_c1_unhighlight = function () {
        $("#code2a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code2a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code2a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code2a-line-4").animate({backgroundColor: 'transparent'}, 0);
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
        $(".table .d2a-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2a-heap2").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code2a-line-1").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-1").addClass("yellow");

        $(".d2a-hide-all").hide();
        $("#d2a-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2a-pointer-addr2").animate({color: '#777'}, 0);
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
        $(".table .d2a-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2a-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2a-pointer-addr2").animate({color: '#777'}, 0);
        $(".d2a-show1").show();
        p2_c1_unhighlight();

        p2_c1_line2();
        currentLine2a = 3;
    });

    $("#code2a-line-3").click(function(){
        $(".d2a-link").removeClass("yellow");
        $("#code2a-line-3").addClass("yellow");

        p2_c1_showBorders();
        $(".table .d2a-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d2a-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d2a-pointer-addr2").animate({color: '#777'}, 0);
        $(".d2a-hide-all").hide();
        $("#d2a-faveNum-val").html('0x001d54f0');
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
        $(".table .d2a-heap1").animate({backgroundColor: '#dd747b'}, 0);
        $(".table .d2a-heap2").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d2a-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2a-pointer-addr2").animate({color: '#532A78'}, 0);
        $(".d2a-hide-all").hide();
        $("#d2a-faveNum-val").html('0x001d54f4');
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3").show();
        p2_c1_unhighlight();

        p2_c1_line4();
        currentLine2a = 1;
    });


    $("#step-button-2a").click(function () {
        if (currentLine2a == 1) {
            //do line 1 things here
            $(".d2a-link").removeClass("yellow");
            $("#code2a-line-1").addClass("yellow");

            $(".d2a-hide-all").hide();
            $("#d2a-pointer-addr1").animate({color: '#777'}, 0);
            $("#d2a-pointer-addr2").animate({color: '#777'}, 0);
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
            currentLine2a = 1;
        }
    });

    //code 2
    var currentLine2b = 1;
    $("#code2b-line-1").addClass("yellow");

    $("#start-button-2b").click(function () {
        currentLine2b = 1;
        $(".d2b-hide-all").hide();
        p2_c2_hideBorders();
        $("#code2b-line-5").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2b-heap1").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-pointer-addr").animate({color: '#777'}, 0);
        p2_c2_line1();
        $("#d2b-rtn-addr-val").promise().done(function () {
            p2_c2_line2();
            $("#d2b-heap-faveNum-val").promise().done(function () {
                p2_c2_line3();
                $(".table .d2b-heap1").promise().done(function () {
                    p2_c2_line4();
                    $("#d2b-faveNum-val").promise().done(function () {
                        p2_c2_line5();
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
        $(".d2b-link").removeClass("yellow");
        $("#d2b-faveNum").delay(1000).show(400);
        $(".table .d2b-heap1").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d2b-pointer-addr").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d2b-faveNum-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $("#d2b-faveNum-val").html("0x001d54f8");
        $("#d2b-faveNum-val").delay(1600).show(400);
        $("#d2b-heap-faveNum-val").delay(2000).show(400);
    };

    //p2 c2 line 3 function
    var p2_c2_line3 = function () {
        $("#code2b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $("#d2b-pointer-addr").delay(1000).animate({color: '#777', fontWeight: 'bold'}, 150);
        $("#d2b-faveNum-val").delay(1000).hide(400);
        $(".table .d2b-heap1").delay(1000).animate({backgroundColor: 'transparent'},500);
    };

    //p2 c2 line 4 function
    var p2_c2_line4 = function () {
        $("#code2b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $("#d2b-faveNum-val").html('0');
        $("#d2b-faveNum-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2b-faveNum-val").delay(1000).show(400);
    };

    //p2 c2 line 5 function
    var p2_c2_line5 = function () {
        $("#code2b-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $("#d2b-rtnval-val").delay(1000).show(400);
    };

    //unhighlight all lines
    var p2_c2_unhighlight = function () {
        $("#code2b-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code2b-line-5").animate({backgroundColor: 'transparent'}, 0);
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
        $(".table .d2b-heap1").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code2b-line-1").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-1").addClass("yellow");

        $(".d2b-hide-all").hide();
        $("#d2b-pointer-addr").animate({color: '#777'}, 0);
        p2_c2_hideBorders();
        p2_c2_unhighlight();

        p2_c2_line1();
        currentLine2b = 2;
    });

    $("#code2b-line-2").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-2").addClass("yellow");

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".table .d2b-heap1").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-pointer-addr").animate({color: '#777'}, 0);
        $(".d2b-show1").show();
        p2_c2_unhighlight();

        p2_c2_line2();
        currentLine2b = 3;
    });

    $("#code2b-line-3").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-3").addClass("yellow");

        p2_c2_showBorders();
        $(".table .d2b-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d2b-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d2b-faveNum-val").html("0x001d54f8");
        $("#d2b-faveNum-val").animate({color: '#532A78', fontWeight: 'bold'}, 0);
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        $(".d2b-show2").show();
        $(".d2b-show2-delete-temp").show();
        p2_c2_unhighlight();

        p2_c2_line3();
        currentLine2b = 4;
    });

    $("#code2b-line-4").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-4").addClass("yellow");

        p2_c2_showBorders();
        $(".table .d2b-heap1").animate({backgroundColor: '#transparent'}, 0);
        $("#d2b-pointer-addr").animate({color: '#777'}, 0);
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        $(".d2b-show2").show();
        p2_c2_unhighlight();

        p2_c2_line4();
        currentLine2b = 5;
    });

    $("#code2b-line-5").click(function(){
        $(".d2b-link").removeClass("yellow");
        $("#code2b-line-5").addClass("yellow");

        p2_c2_showBorders();
        $(".table .d2b-heap1").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-faveNum-val").html("0");
        $("#d2b-faveNum-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        $(".d2b-show2").show();
        $(".d2b-show2-delete-temp").show();
        p2_c2_unhighlight();

        p2_c2_line5();
        currentLine2b = 1;
    });


    $("#step-button-2b").click(function () {
        if (currentLine2b == 1) {
            //do line 1 things here
            $(".d2b-link").removeClass("yellow");
            $("#code2b-line-1").addClass("yellow");

            $(".d2b-hide-all").hide();
            $("#d2b-pointer-addr").animate({color: '#777'}, 0);
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
            //do line 4 things here
            p2_c2_line5();
            currentLine2b = 1;
        }
    });

    //code 3
    var currentLine2c = 1;
    $("#code2c-line-1").addClass("yellow");

    $("#start-button-2c").click(function () {
        currentLine2c = 1;
        $(".d2c-hide-all").hide();
        p2_c3_hideBorders();
        $("#code2c-line-6").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2c-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2c-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2c-pointer-addr2").animate({color: '#777'}, 0);
        p2_c3_line1();
        $("#d2c-rtn-addr-val").promise().done(function () {
            p2_c3_line2();
            $("#d2c-heap-faveNum-val1").promise().done(function () {
                p2_c3_line3();
                $(".table .d2c-heap1").promise().done(function () {
                    p2_c3_line4();
                    $("#d2c-faveNum-val").promise().done(function () {
                        p2_c3_line5();
                        $("#d2c-heap-faveNum-val2").promise().done(function () {
                            p2_c3_line6();
                        });
                    });
                });
            });
        });
    });

    //p2 c3 line 1 function
    var p2_c3_line1 = function () {
        $("#code2c-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d2c-link").removeClass("yellow");
        $(".table .stack-heap-2c").animate({backgroundColor: '#F5F5F5'}, 500);
        $(".table .d2c-stack-bottom").delay(50).animate({borderBottomWidth: '2px', borderBottomColor: 'black'},30);
        $(".table .d2c-stack-top").delay(50).animate({borderTopWidth: '2px', borderTopColor: 'black'},30);
        $(".table .d2c-stack-left").delay(50).animate({borderLeftWidth: '2px', borderLeftColor: 'black'},30);
        $(".table .d2c-stack-right").delay(50).animate({borderRightWidth: '2px', borderRightColor: 'black'},30);
        $("#d2c-rtnval").delay(1200).show(400);
        $("#d2c-rtn-addr").delay(1200).show(400);
        $("#d2c-rtn-addr-val").delay(1600).show(400);
    };

    //p2 c3 line 2 function
    var p2_c3_line2 = function () {
        $("#code2c-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2c-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2c-link").removeClass("yellow");
        $("#d2c-faveNum").delay(1000).show(400);
        $(".table .d2c-heap1").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d2c-pointer-addr1").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d2c-faveNum-val").html('0x001d54f0');
        $("#d2c-faveNum-val").delay(1600).show(400);
        $("#d2c-heap-faveNum-val1").delay(2000).show(400);
    };

    //p2 c3 line 3 function
    var p2_c3_line3 = function () {
        $("#code2c-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2c-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2c-link").removeClass("yellow");
        $("#d2c-pointer-addr1").delay(1000).animate({color: '#777', fontWeight: 'bold'}, 150);
        $("#d2c-faveNum-val").delay(1000).hide(400);
        $(".table .d2c-heap1").delay(1000).animate({backgroundColor: 'transparent'},500);
    };

    //p2 c3 line 4 function
    var p2_c3_line4 = function () {
        $("#code2c-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2c-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2c-link").removeClass("yellow");
        $("#d2c-faveNum-val").html('0');
        $("#d2c-faveNum-val").animate({color: '#777', fontWeight: 'bold'}, 0);
        $("#d2c-faveNum-val").delay(1000).show(400);
    };

    //p2 c3 line 5 function
    var p2_c3_line5 = function () {
        $("#code2c-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2c-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2c-link").removeClass("yellow");

        setTimeout(function(){
            $("#d2c-faveNum-val").html('0x001d54fc');
            $("#d2c-faveNum-val").animate({color: '#532A78', fontWeight: 'bold'}, 150);
        }, 1000);
        $(".table .d2c-heap2").delay(1200).animate({backgroundColor: '#F5F5F5'},500);
        $("#d2c-pointer-addr2").delay(1600).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d2c-heap-faveNum-val2").delay(1800).show(400);
    };

    //p2 c3 line 6 function
    var p2_c3_line6 = function () {
        $("#code2c-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2c-line-6").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2c-link").removeClass("yellow");
        $("#d2c-rtnval-val").delay(1000).show(400);
    };

    //unhighlight all lines
    var p2_c3_unhighlight = function () {
        $("#code2c-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code2c-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code2c-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code2c-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code2c-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code2c-line-6").animate({backgroundColor: 'transparent'}, 0);
    };

    //show stack border
    var p2_c3_showBorders = function () {
        $(".table .d2c-stack-bottom").animate({borderBottomWidth: '2px', borderBottomColor: 'black'},0);
        $(".table .d2c-stack-top").animate({borderTopWidth: '2px', borderTopColor: 'black'},0);
        $(".table .d2c-stack-left").animate({borderLeftWidth: '2px', borderLeftColor: 'black'},0);
        $(".table .d2c-stack-right").animate({borderRightWidth: '2px', borderRightColor: 'black'},0);
        $(".table .stack-heap-2c").animate({backgroundColor: '#F5F5F5'}, 0);
    };

    //hide stack borders
    var p2_c3_hideBorders = function () {
        $(".table .d2c-stack-bottom").animate({borderBottomWidth: '1px', borderBottomColor: '#dddddd'},0);
        $(".table .d2c-stack-top").animate({borderTopWidth: '1px', borderTopColor: '#dddddd'},0);
        $(".table .d2c-stack-left").animate({borderLeftWidth: '1px', borderLeftColor: '#dddddd'},0);
        $(".table .d2c-stack-right").animate({borderRightWidth: '1px', borderRightColor: '#dddddd'},0);
        $(".table .stack-heap-2c").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2c-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2c-heap2").animate({backgroundColor: 'transparent'}, 0);
    };

    //stepping function
    $("#code2c-line-1").click(function(){
        $(".d2c-link").removeClass("yellow");
        $("#code2c-line-1").addClass("yellow");

        $(".d2c-hide-all").hide();
        $("#d2c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2c-pointer-addr2").animate({color: '#777'}, 0);
        p2_c3_hideBorders();
        p2_c3_unhighlight();

        p2_c3_line1();
        currentLine2c = 2;
    });

    $("#code2c-line-2").click(function(){
        $(".d2c-link").removeClass("yellow");
        $("#code2c-line-2").addClass("yellow");

        p2_c3_showBorders();
        $(".d2c-hide-all").hide();
        $(".table .d2c-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2c-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2c-pointer-addr2").animate({color: '#777'}, 0);
        $(".d2c-show1").show();
        p2_c3_unhighlight();

        p2_c3_line2();
        currentLine2c = 3;
    });

    $("#code2c-line-3").click(function(){
        $(".d2c-link").removeClass("yellow");
        $("#code2c-line-3").addClass("yellow");

        p2_c3_showBorders();
        $(".table .d2c-heap1").animate({backgroundColor: '#F5F5F5'}, 0);
        $(".table .d2c-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2c-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d2c-pointer-addr2").animate({color: '#777'}, 0);
        $("#d2c-faveNum-val").html("0x001d54f0");
        $("#d2c-faveNum-val").animate({color: '#532A78'}, 0);
        $(".d2c-hide-all").hide();
        $(".d2c-show1").show();
        $(".d2c-show2").show();
        $(".d2c-show2-delete-temp").show();
        p2_c3_unhighlight();

        p2_c3_line3();
        currentLine2c = 4;
    });

    $("#code2c-line-4").click(function(){
        $(".d2c-link").removeClass("yellow");
        $("#code2cb-line-4").addClass("yellow");

        p2_c3_showBorders();
        $(".table .d2c-heap1").animate({backgroundColor: '#transparent'}, 0);
        $(".table .d2c-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2c-pointer-addr2").animate({color: '#777'}, 0);
        $(".d2c-hide-all").hide();
        $(".d2c-show1").show();
        $(".d2c-show2").show();
        p2_c3_unhighlight();

        p2_c3_line4();
        currentLine2c = 5;
    });

    $("#code2c-line-5").click(function(){
        $(".d2c-link").removeClass("yellow");
        $("#code2cb-line-5").addClass("yellow");

        p2_c3_showBorders();
        $(".table .d2c-heap1").animate({backgroundColor: '#transparent'}, 0);
        $(".table .d2c-heap2").animate({backgroundColor: 'transparent'}, 0);
        $("#d2c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2c-pointer-addr2").animate({color: '#777'}, 0);
        $("#d2c-faveNum-val").html("0");
        $("#d2c-faveNum-val").animate({color: '#777'}, 0);
        $(".d2c-hide-all").hide();
        $(".d2c-show1").show();
        $(".d2c-show2").show();
        $(".d2c-show2-delete-temp").show();
        p2_c3_unhighlight();

        p2_c3_line5();
        currentLine2c = 6;
    });

    $("#code2c-line-6").click(function(){
        $(".d2c-link").removeClass("yellow");
        $("#code2c-line-6").addClass("yellow");

        p2_c3_showBorders();
        $(".table .d2c-heap1").animate({backgroundColor: 'transparent'}, 0);
        $(".table .d2c-heap2").animate({backgroundColor: '#F5F5F5'}, 0);
        $("#d2c-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2c-pointer-addr2").animate({color: '#532A78'}, 0);
        $(".d2c-hide-all").hide();
        $("#d2c-faveNum-val").html("0x001d54fc");
        $("#d2c-faveNum-val").animate({color: '#532A78'}, 0);
        $(".d2c-show1").show();
        $(".d2c-show2").show();
        $(".d2c-show2-delete-temp").show();
        $(".d2c-show4").show();
        p2_c3_unhighlight();

        p2_c3_line6();
        currentLine2c = 1;
    });


    $("#step-button-2c").click(function () {
        if (currentLine2c == 1) {
            //do line 1 things here
            $(".d2c-link").removeClass("yellow");
            $("#code2c-line-1").addClass("yellow");

            $(".d2c-hide-all").hide();
            $("#d2c-pointer-addr1").animate({color: '#777'}, 0);
            $("#d2c-pointer-addr2").animate({color: '#777'}, 0);
            p2_c3_hideBorders();
            p2_c3_unhighlight();

            p2_c3_line1();
            currentLine2c = 2;
        }
        else if (currentLine2c == 2) {
            //do line 2 things here
            p2_c3_line2();
            currentLine2c = 3;
        }
        else if (currentLine2c == 3) {
            //do line 3 things here
            p2_c3_line3();
            currentLine2c = 4;
        }
        else if (currentLine2c == 4) {
            //do line 4 things here
            p2_c3_line4();
            currentLine2c = 5;
        }
        else if (currentLine2c == 5) {
            //do line 5 things here
            p2_c3_line5();
            currentLine2c = 6;
        }
        else if (currentLine2c == 6) {
            //do line 6 things here
            p2_c3_line6();
            currentLine2c = 1;
        }
    });
});