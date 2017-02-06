/**
 * Created by User on 2/02/2017.
 */

/** Specific JQuery for the getting constants page. Mainly just animations **/

$(document).ready(function () {

    //panel 1
    //panel 1 code 1
    var currentLine1a = 1;
    $("#code1a-line-1").addClass("yellow");

    $("#start-button-1a").click(function () {
        currentLine1a = 1;
        $(".d1a-hide-all").hide();
        p1_c1_hideBorders();
        $("#code1a-line-8").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1a").animate({backgroundColor: 'transparent'}, 0);
        p1_c1_line1();
        $("#d1a-rtn-addr-val").promise().done(function () {
            p1_c1_line2();
            $("#d1a-age-val").promise().done(function () {
                p1_c1_line3();
                $("#d1a-minAge-val").promise().done(function () {
                    p1_c1_line4();
                    $("#d1a-minAge-val").promise().done(function () {
                        p1_c1_line5();
                        $("#d1a-minAge-val").promise().done(function () {
                            p1_c1_line6();
                            $("#d1a-print-l6").promise().done(function () {
                                p1_c1_line7();
                                $("#code1a-line-7").promise().done(function () {
                                    p1_c1_line8();
                                });
                            });
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

    //p1 c1 line 2 function
    var p1_c1_line2 = function () {
        $("#code1a-line-1").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-2").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $("#d1a-age").delay(1000).show(400);
        $("#d1a-age-val").delay(1400).show(400);
    };

    //p1 c1 line 3 function
    var p1_c1_line3 = function () {
        $("#code1a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $("#d1a-minAge-val").html('18');
        $("#d1a-minAge").delay(1000).show(400);
        $("#d1a-minAge-val").delay(1400).show(400);
    };

    //p1 c1 line 4 function
    var p1_c1_line4 = function () {
        $("#code1a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1a-link").removeClass("yellow");
        setTimeout(function () {
            $("#d1a-minAge-val").html('16');
        }, 1000);
        $("#d1a-minAge-val").delay(1000).animate({backgroundColor: 'transparent'}, 500);
    };

    //p1 c1 line 5 function
    var p1_c1_line5 = function () {
        $("#code1a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $("#d1a-age-val").delay(1000).animate({backgroundColor: '#F0AD4E'},1000);
        $("#d1a-minAge-val").delay(1000).animate({backgroundColor: '#F0AD4E'},1000);
    };

    //p1 c1 line 6 function
    var p1_c1_line6 = function () {
        $("#code1a-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#d1a-age-val").animate({backgroundColor: 'transparent'},1000);
        $("#d1a-minAge-val").animate({backgroundColor: 'transparent'},1000);
        $("#code1a-line-6").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $("#d1a-print-l6").delay(1000).show(400);
    };

    //p1 c1 line 7 function
    var p1_c1_line7 = function () {
        $("#code1a-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-7").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
    };

    //p1 c1 line 8 function
    var p1_c1_line8 = function () {
        $("#code1a-line-7").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1a-line-8").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1a-link").removeClass("yellow");
        $("#d1a-rtnval-val").delay(1000).show(400);
    };

    //unhighlight all lines
    var p1_c1_unhighlight = function () {
        $("#code1a-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-4").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-5").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-6").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-7").animate({backgroundColor: 'transparent'}, 0);
        $("#code1a-line-8").animate({backgroundColor: 'transparent'}, 0);
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
        $("#d1a-age-val").animate({backgroundColor: 'transparent'},0);
        $("#d1a-minAge-val").animate({backgroundColor: 'transparent'},0);

        $(".d1a-hide-all").hide();
        p1_c1_hideBorders();
        p1_c1_unhighlight();

        p1_c1_line1();
        currentLine1a = 2;
    });

    $("#code1a-line-2").click(function() {
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-2").addClass("yellow");
        $("#d1a-age-val").animate({backgroundColor: 'transparent'},0);
        $("#d1a-minAge-val").animate({backgroundColor: 'transparent'},0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        p1_c1_unhighlight();

        p1_c1_line2();
        currentLine1a = 3;
    });

    $("#code1a-line-3").click(function() {
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-3").addClass("yellow");
        $("#d1a-age-val").animate({backgroundColor: 'transparent'},0);
        $("#d1a-minAge-val").animate({backgroundColor: 'transparent'},0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        p1_c1_unhighlight();

        p1_c1_line3();
        currentLine1a = 4;
    });

    $("#code1a-line-4").click(function() {
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-4").addClass("yellow");
        $("#d1a-age-val").animate({backgroundColor: 'transparent'},0);
        $("#d1a-minAge-val").animate({backgroundColor: 'transparent'},0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $("#d1a-minAge-val").html('18');
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        p1_c1_unhighlight();

        p1_c1_line4();
        currentLine1a = 5;
    });

    $("#code1a-line-5").click(function() {
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-5").addClass("yellow");
        $("#d1a-age-val").animate({backgroundColor: 'transparent'},0);
        $("#d1a-minAge-val").animate({backgroundColor: 'transparent'},0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $("#d1a-minAge-val").html('16');
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        p1_c1_unhighlight();

        p1_c1_line5();
        currentLine1a = 6;
    });

    $("#code1a-line-6").click(function() {
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-6").addClass("green");
        $("#d1a-age-val").animate({backgroundColor: '#F0AD4E'},0);
        $("#d1a-minAge-val").animate({backgroundColor: '#F0AD4E'},0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $("#d1a-minAge-val").html('16');
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        p1_c1_unhighlight();

        p1_c1_line6();
        currentLine1a = 7;
    });

    $("#code1a-line-7").click(function() {
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-7").addClass("yellow");
        $("#d1a-age-val").animate({backgroundColor: 'transparent'},0);
        $("#d1a-minAge-val").animate({backgroundColor: 'transparent'},0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $("#d1a-minAge-val").html('16');
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        $(".d1a-show6").show();
        p1_c1_unhighlight();

        p1_c1_line7();
        currentLine1a = 8;
    });

    $("#code1a-line-8").click(function() {
        $(".d1a-link").removeClass("yellow");
        $(".d1a-link").removeClass("green");
        $("#code1a-line-8").addClass("yellow");
        $("#d1a-age-val").animate({backgroundColor: 'transparent'},0);
        $("#d1a-minAge-val").animate({backgroundColor: 'transparent'},0);

        p1_c1_showBorders();
        $(".d1a-hide-all").hide();
        $("#d1a-minAge-val").html('16');
        $(".d1a-show1").show();
        $(".d1a-show2").show();
        $(".d1a-show3").show();
        $(".d1a-show6").show();
        p1_c1_unhighlight();

        p1_c1_line8();
        currentLine1a = 1;
    });

    $("#step-button-1a").click(function () {
        if (currentLine1a == 1) {
            //do line 1 things here
            $(".d1a-link").removeClass("yellow");
            $(".d1a-link").removeClass("green");
            $("#code1a-line-1").addClass("yellow");
            $("#d1a-age-val").animate({backgroundColor: 'transparent'},0);
            $("#d1a-minAge-val").animate({backgroundColor: 'transparent'},0);

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
            currentLine1a = 7;
        }
        else if (currentLine1a == 7) {
            p1_c1_line7();
            currentLine1a = 8;
        }
        else if (currentLine1a == 8) {
            p1_c1_line8();
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
        $("#code1b-line-4").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-1b").animate({backgroundColor: 'transparent'}, 0);
        p1_c2_line1();
        $("#d1b-rtn-addr-val").promise().done(function () {
            p1_c2_line2();
            $("#d1b-minAge-val").promise().done(function () {
                p1_c2_line3();
                $("#d1b-const-l2").promise().done(function () {
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
        $(".d1b-link").removeClass("yellow");
        $("#d1b-minAge").delay(1000).show(400);
        $("#d1b-minAge-val").delay(1400).show(400);
    };

    //p1 c2 line 3 function
    var p1_c2_line3 = function () {
        $("#code1b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-3").animate({backgroundColor: '#dd747b'}, 1000);
        $(".d1b-link").removeClass("yellow");
        $("#d1b-const-l2").delay(1000).animate({backgroundColor: '#dd747b'}, 1000);
        $("#d1b-error-l3").delay(1500).show(400);
    };

    //p1 c2 line 4 function
    var p1_c2_line4 = function () {
        $("#code1b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#d1b-const-l2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code1b-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("red");
        $("#d1b-rtnval-val").delay(1000).show(400);
    };

    //unhighlight all lines
    var p1_c2_unhighlight = function () {
        $("#code1b-line-1").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-2").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-3").animate({backgroundColor: 'transparent'}, 0);
        $("#code1b-line-4").animate({backgroundColor: 'transparent'}, 0);
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
        $(".d1b-link").removeClass("red");
        $("#code1b-line-1").addClass("yellow");
        $("#d1b-const-l2").animate({backgroundColor: 'transparent'}, 0);

        $(".d1b-hide-all").hide();
        p1_c2_hideBorders();
        p1_c2_unhighlight();

        p1_c2_line1();
        currentLine1b = 2;
    });

    $("#code1b-line-2").click(function() {
        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("red");
        $("#code1b-line-2").addClass("yellow");
        $("#d1b-const-l2").animate({backgroundColor: 'transparent'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        p1_c2_unhighlight();

        p1_c2_line2();
        currentLine1b = 3;
    });

    $("#code1b-line-3").click(function() {
        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("red");
        $("#code1b-line-3").addClass("red");
        $("#d1b-const-l2").animate({backgroundColor: 'transparent'}, 0);

        p1_c2_showBorders();
        $(".d1b-hide-all").hide();
        $(".d1b-show1").show();
        $(".d1b-show2").show();
        p1_c2_unhighlight();

        p1_c2_line3();
        currentLine1b = 4;
    });

    $("#code1b-line-4").click(function() {
        $(".d1b-link").removeClass("yellow");
        $(".d1b-link").removeClass("red");
        $("#code1b-line-4").addClass("yellow");
        $("#d1b-const-l2").animate({backgroundColor: '#dd747b'}, 0);

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
            $(".d1b-link").removeClass("red");
            $("#code1b-line-1").addClass("yellow");
            $("#d1b-const-l2").animate({backgroundColor: 'transparent'}, 0);

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
            currentLine1b = 1;
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
        $("#code2a-line-6").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-2a").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);
        p2_c1_line1();
        $("#d2a-rtn-addr-val").promise().done(function () {
            p2_c1_line2();
            $("#d2a-evenNum-val").promise().done(function () {
                p2_c1_line3();
                $("#d2a-luckyNum-val").promise().done(function () {
                    p2_c1_line4();
                    $("#d2a-const-l4").promise().done(function () {
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
        $(".d2a-link").removeClass("yellow");
        $("#d2a-evenNum").delay(1000).show(400);
        $("#d2a-evenNum-val").delay(1400).show(400);
    };

    //p2 c1 line 3 function
    var p2_c1_line3 = function () {
        $("#code2a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2a-link").removeClass("yellow");
        $("#d2a-luckyNum").delay(1000).show(400);
        $("#d2a-pointer-addr").delay(1400).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d2a-luckyNum-val").delay(1400).show(400);
    };

    //p2 c1 line 4 function
    var p2_c1_line4 = function () {
        $("#code2a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-4").animate({backgroundColor: '#dd747b'}, 1000);
        $(".d2a-link").removeClass("yellow");
        $("#d2a-const-l4").delay(1000).animate({backgroundColor: '#dd747b'}, 1000);
        $("#d2a-error-l4").delay(1500).show(400);
    };

    //p2 c1 line 5 function
    var p2_c1_line5 = function () {
        $("#code2a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#d2a-const-l4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2a-link").removeClass("yellow");
        $(".d2a-link").removeClass("red");
        $("#d2a-rtnval-val").delay(1000).show(400).delay(200);
    };

    //p2 c1 line 6 function
    var p2_c1_line6 = function () {
        $("#code2a-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2a-line-6").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2a-link").removeClass("yellow");
        $(".d2a-hide-all").delay(1000).hide(400);
        $("#d2a-pointer-addr").delay(1000).animate({color: '#777'}, 150);
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
        $(".d2a-link").removeClass("red");
        $("#code2a-line-1").addClass("yellow");
        $("#d2a-const-l4").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        $(".d2a-hide-all").hide();
        p2_c1_hideBorders();
        p2_c1_unhighlight();

        p2_c1_line1();
        currentLine2a = 2;
    });

    $("#code2a-line-2").click(function() {
        $(".d2a-link").removeClass("yellow");
        $(".d2a-link").removeClass("red");
        $("#code2a-line-2").addClass("yellow");
        $("#d2a-const-l4").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-show1").show();
        p2_c1_unhighlight();

        p2_c1_line2();
        currentLine2a = 3;
    });

    $("#code2a-line-3").click(function() {
        $(".d2a-link").removeClass("yellow");
        $(".d2a-link").removeClass("red");
        $("#code2a-line-3").addClass("yellow");
        $("#d2a-const-l4").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr").animate({color: '#777'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        p2_c1_unhighlight();

        p2_c1_line3();
        currentLine2a = 4;
    });

    $("#code2a-line-4").click(function() {
        $(".d2a-link").removeClass("yellow");
        $(".d2a-link").removeClass("red");
        $("#code2a-line-4").addClass("red");
        $("#d2a-const-l4").animate({backgroundColor: 'transparent'}, 0);
        $("#d2a-pointer-addr").animate({color: '#532A78'}, 0);

        p2_c1_showBorders();
        $(".d2a-hide-all").hide();
        $(".d2a-show1").show();
        $(".d2a-show2").show();
        $(".d2a-show3").show();
        p2_c1_unhighlight();

        p2_c1_line4();
        currentLine2a = 5;
    });

    $("#code2a-line-5").click(function() {
        $(".d2a-link").removeClass("yellow");
        $(".d2a-link").removeClass("red");
        $("#code2a-line-5").addClass("yellow");
        $("#d2a-const-l4").animate({backgroundColor: '#dd747b'}, 0);
        $("#d2a-pointer-addr").animate({color: '#532A78'}, 0);

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

    $("#code2a-line-6").click(function() {
        $(".d2a-link").removeClass("yellow");
        $(".d2a-link").removeClass("red");
        $("#code2a-line-5").addClass("yellow");
        $("#d2a-const-l4").animate({backgroundColor: '#dd747b'}, 0);
        $("#d2a-pointer-addr").animate({color: '#532A78'}, 0);

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
            $(".d2a-link").removeClass("red");
            $("#code2a-line-1").addClass("yellow");
            $("#d2a-const-l4").animate({backgroundColor: 'transparent'}, 0);
            $("#d2a-pointer-addr").animate({color: '#777'}, 0);

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
        p2_c2_hideBorders();
        $("#code2b-line-10").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-2b").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);
        p2_c2_line1();
        $("#d2b-rtn-addr-val").promise().done(function () {
            p2_c2_line2();
            $("#d2b-evenNum1-val").promise().done(function () {
                p2_c2_line3();
                $("#d2b-evenNum2-val").promise().done(function () {
                    p2_c2_line4();
                    $("#d2b-luckyNum-val").promise().done(function () {
                        p2_c2_line5();
                        $("#d2b-evenNum1-val").promise().done(function () {
                            p2_c2_line6();
                            $("#d2b-print-l6").promise().done(function () {
                                p2_c2_line7();
                                $("#d2b-luckyNum-val").promise().done(function () {
                                    p2_c2_line8();
                                    $("#d2b-print-l8").promise().done(function () {
                                        p2_c2_line9();
                                        $("#d2b-rtnval-val").promise().done(function () {
                                            p2_c2_line10();
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
        $("#d2b-evenNum1-val").html('6');
        $("#d2b-evenNum1").delay(1000).show(400);
        $("#d2b-evenNum1-val").delay(1400).show(400);
    };

    //p2 c2 line 3 function
    var p2_c2_line3 = function () {
        $("#code2b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $("#d2b-evenNum2").delay(1000).show(400);
        $("#d2b-evenNum2-val").delay(1400).show(400);
    };

    //p2 c2 line 4 function
    var p2_c2_line4 = function () {
        $("#code2b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $("#d2b-luckyNum-val").html('0x0061ff14');
        $("#d2b-luckyNum").delay(1000).show(400);
        $("#d2b-pointer-addr1").delay(1400).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d2b-luckyNum-val").delay(1400).show(400);
    };

    //p2 c2 line 5 function
    var p2_c2_line5 = function () {
        $("#code2b-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        setTimeout(function () {
            $("#d2b-evenNum1-val").html('10');
        }, 1000);
        $("#d2b-evenNum1-val").delay(1000).animate({backgroundColor: 'transparent'}, 500);
    };

    //p2 c2 line 6 function
    var p2_c2_line6 = function () {
        $("#code2b-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-6").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $("#d2b-evenNum1-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d2b-print-l6").delay(1600).show(400);
    };

    //p2 c2 line 7 function
    var p2_c2_line7 = function () {
        $("#code2b-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#d2b-evenNum1-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-7").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $(".d2b-link").removeClass("green");
        $("#d2b-evenNum1-val").removeClass("green");

        $("#d2b-pointer-addr1").delay(1400).animate({color: '#777', fontWeight: 'bold'}, 150);
        $("#d2b-pointer-addr2").delay(1400).animate({color: '#532A78', fontWeight: 'bold'}, 150);

        setTimeout(function(){
            $("#d2b-luckyNum-val").html('0x0061ff10');
        }, 1400);
        $("#d2b-luckyNum-val").delay(1400).animate({backgroundColor: 'transparent'}, 500);
    };

    //p2 c2 line 8 function
    var p2_c2_line8 = function () {
        $("#code2b-line-7").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-8").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $("#d2b-evenNum2-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d2b-print-l8").delay(1600).show(400);
    };

    //p2 c2 line 9 function
    var p2_c2_line9 = function () {
        $("#code2b-line-8").animate({backgroundColor: 'transparent'}, 1000);
        $("#d2b-evenNum2-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-9").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $(".d2b-link").removeClass("green");
        $("#d2b-luckyNum-val").removeClass("green");

        $("#d2b-rtnval-val").delay(1000).show(400);
    };

    //p2 c2 line 10 function
    var p2_c2_line10 = function () {
        $("#code2b-line-9").animate({backgroundColor: 'transparent'}, 1000);
        $("#code2b-line-10").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d2b-link").removeClass("yellow");
        $(".d2b-hide-all").delay(1000).hide(400);
        $("#d2b-pointer-addr1").delay(1000).animate({color: '#777'}, 150);
        $("#d2b-pointer-addr2").delay(1000).animate({color: '#777'}, 150);
        $("#code2b-line-10").promise().done(function () {
            p2_c2_hideBorders();
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
        $("#code2b-line-10").animate({backgroundColor: 'transparent'}, 0);
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
        $(".d2b-link").removeClass("green");
        $("#code2b-line-1").addClass("yellow");
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);
        $("#d2b-evenNum1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum2-val").animate({backgroundColor: 'transparent'}, 0);

        $(".d2b-hide-all").hide();
        p2_c2_hideBorders();
        p2_c2_unhighlight();

        p2_c2_line1();
        currentLine2b = 2;
    });

    $("#code2b-line-2").click(function(){
        $(".d2b-link").removeClass("yellow");
        $(".d2b-link").removeClass("green");
        $("#code2b-line-2").addClass("yellow");
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);
        $("#d2b-evenNum1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum2-val").animate({backgroundColor: 'transparent'}, 0);

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        p2_c2_unhighlight();

        p2_c2_line2();
        currentLine2b = 3;
    });

    $("#code2b-line-3").click(function(){
        $(".d2b-link").removeClass("yellow");
        $(".d2b-link").removeClass("green");
        $("#code2b-line-3").addClass("yellow");
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);
        $("#d2b-evenNum1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum1-val").html('6');

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
        $(".d2b-link").removeClass("green");
        $("#code2b-line-4").addClass("yellow");
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);
        $("#d2b-evenNum1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum1-val").html('6');

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
        $(".d2b-link").removeClass("green");
        $("#code2b-line-5").addClass("yellow");
        $("#d2b-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);
        $("#d2b-evenNum1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum1-val").html('6');
        $("#d2b-luckyNum-val").html('0x0061ff14');

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
        $(".d2b-link").removeClass("green");
        $("#code2b-line-6").addClass("green");
        $("#d2b-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);
        $("#d2b-evenNum1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum1-val").html('10');
        $("#d2b-luckyNum-val").html('0x0061ff14');

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        $(".d2b-show2").show();
        $(".d2b-show3").show();
        $(".d2b-show4").show();
        p2_c2_unhighlight();

        p2_c2_line6();
        currentLine2b = 7;
    });

    $("#code2b-line-7").click(function(){
        $(".d2b-link").removeClass("yellow");
        $(".d2b-link").removeClass("green");
        $("#code2b-line-7").addClass("yellow");
        $("#d2b-pointer-addr1").animate({color: '#532A78'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#777'}, 0);
        $("#d2b-evenNum1-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d2b-evenNum2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum1-val").html('10');
        $("#d2b-luckyNum-val").html('0x0061ff14');

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        $(".d2b-show2").show();
        $(".d2b-show3").show();
        $(".d2b-show4").show();
        $(".d2b-show6").show();
        p2_c2_unhighlight();

        p2_c2_line7();
        currentLine2b = 8;
    });

    $("#code2b-line-8").click(function(){
        $(".d2b-link").removeClass("yellow");
        $(".d2b-link").removeClass("green");
        $("#code2b-line-8").addClass("green");
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#532A78'}, 0);
        $("#d2b-evenNum1-val").animate({backgroundColor: '#transparent'}, 0);
        $("#d2b-evenNum2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum1-val").html('10');
        $("#d2b-luckyNum-val").html('0x0061ff10');

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        $(".d2b-show2").show();
        $(".d2b-show3").show();
        $(".d2b-show4").show();
        $(".d2b-show6").show();
        p2_c2_unhighlight();

        p2_c2_line8();
        currentLine2b = 9;
    });

    $("#code2b-line-9").click(function(){
        $(".d2b-link").removeClass("yellow");
        $(".d2b-link").removeClass("green");
        $("#code2b-line-9").addClass("yellow");
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#532A78'}, 0);
        $("#d2b-evenNum1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum2-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d2b-evenNum1-val").html('10');
        $("#d2b-luckyNum-val").html('0x0061ff10');

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        $(".d2b-show2").show();
        $(".d2b-show3").show();
        $(".d2b-show4").show();
        $(".d2b-show6").show();
        $(".d2b-show8").show();
        p2_c2_unhighlight();

        p2_c2_line9();
        currentLine2b = 10;
    });

    $("#code2b-line-10").click(function(){
        $(".d2b-link").removeClass("yellow");
        $(".d2b-link").removeClass("green");
        $("#code2b-line-10").addClass("yellow");
        $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
        $("#d2b-pointer-addr2").animate({color: '#532A78'}, 0);
        $("#d2b-evenNum1-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum2-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d2b-evenNum1-val").html('10');
        $("#d2b-luckyNum-val").html('0x0061ff10');

        p2_c2_showBorders();
        $(".d2b-hide-all").hide();
        $(".d2b-show1").show();
        $(".d2b-show2").show();
        $(".d2b-show3").show();
        $(".d2b-show4").show();
        $(".d2b-show6").show();
        $(".d2b-show8").show();
        $(".d2b-show9").show();
        p2_c2_unhighlight();

        p2_c2_line10();
        currentLine2b = 1;
    });

    $("#step-button-2b").click(function () {
        if (currentLine2b == 1) {
            //do line 1 things here
            $(".d2b-link").removeClass("yellow");
            $(".d2b-link").removeClass("green");
            $("#code2b-line-1").addClass("yellow");
            $("#d2b-pointer-addr1").animate({color: '#777'}, 0);
            $("#d2b-pointer-addr2").animate({color: '#777'}, 0);

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
            currentLine2b = 7;
        }
        else if (currentLine2b == 7) {
            p2_c2_line7();
            currentLine2b = 8;
        }
        else if (currentLine2b == 8) {
            p2_c2_line8();
            currentLine2b = 9;
        }
        else if (currentLine2b == 9) {
            p2_c2_line9();
            currentLine2b = 10;
        }
        else if (currentLine2b == 10) {
            p2_c2_line10();
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
        $("#code3a-line-12").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-3a").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr").animate({color: '#777'}, 0);
        p3_c1_line1();
        $("#d3a-rtn-addr-val").promise().done(function () {
            p3_c1_line2();
            $("#d3a-mumAge-val").promise().done(function () {
                p3_c1_line3();
                $("#d3a-dadAge-val").promise().done(function () {
                    p3_c1_line4();
                    $("#d3a-mumAge-val").promise().done(function () {
                        p3_c1_line5();
                        $("#d3a-print-l5").promise().done(function () {
                            p3_c1_line6();
                            $("#d3a-print-l6").promise().done(function () {
                                p3_c1_line7();
                                $("#d3a-mumAge-val").promise().done(function () {
                                    p3_c1_line8();
                                    $("#d3a-print-l8").promise().done(function () {
                                        p3_c1_line9();
                                        $("#d3a-print-l9").promise().done(function () {
                                            p3_c1_line10();
                                            $("#d3a-const-l10").promise().done(function () {
                                                p3_c1_line11();
                                                $("#d3a-rtnval-val").promise().done(function () {
                                                    p3_c1_line12();
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
    });

    //p3 c1 line 1 function
    var p3_c1_line1 = function () {
        $("#code3a-line-1").animate({backgroundColor: '#ffff00'}, 600);
        $(".d3a-link").removeClass("yellow");
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
        $(".d3a-link").removeClass("yellow");
        $("#d3a-mumAge").delay(1000).show(400);
        $("#d3a-mumAge-val").html('49');
        $("#d3a-mumAge-val").delay(1400).show(400);
    };

    //p3 c1 line 3 function
    var p3_c1_line3 = function () {
        $("#code3a-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $("#d3a-dadAge").delay(1000).show(400);
        $("#d3a-pointer-addr").delay(1400).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d3a-dadAge-val").delay(1400).show(400);
    };

    //p3 c1 line 4 function
    var p3_c1_line4 = function () {
        $("#code3a-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3a-link").removeClass("yellow");
        setTimeout(function () {
            $("#d3a-mumAge-val").html('50');
        }, 1000);
        $("#d3a-mumAge-val").delay(1000).animate({backgroundColor: 'transparent'}, 500);
    };

    //p3 c1 line 5 function
    var p3_c1_line5 = function () {
        $("#code3a-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-5").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $("#d3a-mumAge-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d3a-print-l5").delay(1600).show(400);
    };

    //p3 c1 line 6 function
    var p3_c1_line6 = function () {
        $("#code3a-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-6").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#d3a-mumAge-val").removeClass("green");

        $("#d3a-mumAge-val").delay(400).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d3a-print-l6").delay(1800).show(400);
    };

    //p3 c1 line 7 function
    var p3_c1_line7 = function () {
        $("#code3a-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-7").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#d3a-mumAge-val").removeClass("green");

        setTimeout(function () {
            $("#d3a-mumAge-val").html('51');
        }, 1000);
        $("#d3a-mumAge-val").delay(1000).animate({backgroundColor: 'transparent'}, 500);
    };

    //p3 c1 line 8 function
    var p3_c1_line8 = function () {
        $("#code3a-line-7").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-8").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $("#d3a-mumAge-val").delay(1000).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d3a-print-l8").delay(1600).show(400);
    };

    //p3 c1 line 9 function
    var p3_c1_line9 = function () {
        $("#code3a-line-8").animate({backgroundColor: 'transparent'}, 1000);
        $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-9").animate({backgroundColor: '#5CB85C'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#d3a-mumAge-val").removeClass("green");

        $("#d3a-mumAge-val").delay(400).animate({backgroundColor: '#5CB85C'}, 1000);
        $("#d3a-print-l9").delay(1800).show(400);
    };

    //p3 c1 line 10 function
    var p3_c1_line10 = function () {
        $("#code3a-line-9").animate({backgroundColor: 'transparent'}, 1000);
        $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-10").animate({backgroundColor: '#dd747b'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $("#d3a-mumAge-val").removeClass("green");

        $("#d3a-const-l10").delay(1000).animate({backgroundColor: '#dd747b'}, 1000);
    };

    //p3 c1 line 11 function
    var p3_c1_line11 = function () {
        $("#code3a-line-10").animate({backgroundColor: 'transparent'}, 1000);
        $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-11").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("red");
        $("#d3a-rtnval-val").delay(1000).show(400).delay(200);
    };

    //p3 c1 line 12 function
    var p3_c1_line12 = function () {
        $("#code3a-line-11").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3a-line-12").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3a-link").removeClass("yellow");
        $(".d3a-hide-all").delay(1000).hide(400);
        $("#d3a-pointer-addr").delay(1000).animate({color: '#777'}, 150);
        $("#code3a-line-12").promise().done(function () {
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
        $("#code3a-line-8").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-9").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-10").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-11").animate({backgroundColor: 'transparent'}, 0);
        $("#code3a-line-12").animate({backgroundColor: 'transparent'}, 0);
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
        $(".d3a-link").removeClass("red");
        $("#code3a-line-1").addClass("yellow");
        $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr").animate({color: '#777'}, 0);

        $(".d3a-hide-all").hide();
        p3_c1_hideBorders();
        p3_c1_unhighlight();

        p3_c1_line1();
        currentLine3a = 2;
    });

    $("#code3a-line-2").click(function() {
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $(".d3a-link").removeClass("red");
        $("#code3a-line-2").addClass("yellow");
        $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr").animate({color: '#777'}, 0);

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        p3_c1_unhighlight();

        p3_c1_line2();
        currentLine3a = 3;
    });

    $("#code3a-line-3").click(function() {
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $(".d3a-link").removeClass("red");
        $("#code3a-line-3").addClass("yellow");
        $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr").animate({color: '#777'}, 0);
        $("#d3a-mumAge-val").html('49');

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        p3_c1_unhighlight();

        p3_c1_line3();
        currentLine3a = 4;
    });

    $("#code3a-line-4").click(function() {
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $(".d3a-link").removeClass("red");
        $("#code3a-line-4").addClass("yellow");
        $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3a-mumAge-val").html('49');

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        p3_c1_unhighlight();

        p3_c1_line4();
        currentLine3a = 5;
    });

    $("#code3a-line-5").click(function() {
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $(".d3a-link").removeClass("red");
        $("#code3a-line-5").addClass("green");
        $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3a-mumAge-val").html('50');

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        p3_c1_unhighlight();

        p3_c1_line5();
        currentLine3a = 6;
    });

    $("#code3a-line-6").click(function() {
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $(".d3a-link").removeClass("red");
        $("#code3a-line-6").addClass("green");
        $("#d3a-mumAge-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3a-mumAge-val").html('50');

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        $(".d3a-show5").show();
        p3_c1_unhighlight();

        p3_c1_line6();
        currentLine3a = 7;
    });

    $("#code3a-line-7").click(function() {
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $(".d3a-link").removeClass("red");
        $("#code3a-line-7").addClass("yellow");
        $("#d3a-mumAge-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3a-mumAge-val").html('50');

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        $(".d3a-show5").show();
        $(".d3a-show6").show();
        p3_c1_unhighlight();

        p3_c1_line7();
        currentLine3a = 8;
    });

    $("#code3a-line-8").click(function() {
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $(".d3a-link").removeClass("red");
        $("#code3a-line-8").addClass("green");
        $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3a-mumAge-val").html('51');

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        $(".d3a-show5").show();
        $(".d3a-show6").show();
        p3_c1_unhighlight();

        p3_c1_line8();
        currentLine3a = 9;
    });

    $("#code3a-line-9").click(function() {
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $(".d3a-link").removeClass("red");
        $("#code3a-line-9").addClass("green");
        $("#d3a-mumAge-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3a-mumAge-val").html('51');

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        $(".d3a-show5").show();
        $(".d3a-show6").show();
        $(".d3a-show8").show();
        p3_c1_unhighlight();

        p3_c1_line9();
        currentLine3a = 10;
    });

    $("#code3a-line-10").click(function() {
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $(".d3a-link").removeClass("red");
        $("#code3a-line-10").addClass("red");
        $("#d3a-mumAge-val").animate({backgroundColor: '#5CB85C'}, 0);
        $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3a-mumAge-val").html('51');

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        $(".d3a-show5").show();
        $(".d3a-show6").show();
        $(".d3a-show8").show();
        $(".d3a-show9").show();
        p3_c1_unhighlight();

        p3_c1_line10();
        currentLine3a = 11;
    });

    $("#code3a-line-11").click(function() {
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $(".d3a-link").removeClass("red");
        $("#code3a-line-11").addClass("yellow");
        $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-const-l10").animate({backgroundColor: '#dd747b'}, 0);
        $("#d3a-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3a-mumAge-val").html('51');

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        $(".d3a-show5").show();
        $(".d3a-show6").show();
        $(".d3a-show8").show();
        $(".d3a-show9").show();
        p3_c1_unhighlight();

        p3_c1_line11();
        currentLine3a = 12;
    });

    $("#code3a-line-12").click(function() {
        $(".d3a-link").removeClass("yellow");
        $(".d3a-link").removeClass("green");
        $(".d3a-link").removeClass("red");
        $("#code3a-line-12").addClass("yellow");
        $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 0);
        $("#d3a-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3a-mumAge-val").html('51');

        p3_c1_showBorders();
        $(".d3a-hide-all").hide();
        $(".d3a-show1").show();
        $(".d3a-show2").show();
        $(".d3a-show3").show();
        $(".d3a-show5").show();
        $(".d3a-show6").show();
        $(".d3a-show8").show();
        $(".d3a-show9").show();
        $(".d3a-show11").show();
        p3_c1_unhighlight();

        p3_c1_line12();
        currentLine3a = 11;
    });

    $("#step-button-3a").click(function () {
        if (currentLine3a == 1) {
            //do line 1 things here
            $(".d3a-link").removeClass("yellow");
            $(".d3a-link").removeClass("green");
            $(".d3a-link").removeClass("red");
            $("#code3a-line-1").addClass("yellow");
            $("#d3a-mumAge-val").animate({backgroundColor: 'transparent'}, 0);
            $("#d3a-const-l10").animate({backgroundColor: 'transparent'}, 0);
            $("#d3a-pointer-addr").animate({color: '#777'}, 0);

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
            currentLine3a = 8;
        }
        else if (currentLine3a == 8) {
            p3_c1_line8();
            currentLine3a = 9;
        }
        else if (currentLine3a == 9) {
            p3_c1_line9();
            currentLine3a = 10;
        }
        else if (currentLine3a == 10) {
            p3_c1_line10();
            currentLine3a = 11;
        }
        else if (currentLine3a == 11) {
            p3_c1_line11();
            currentLine3a = 12;
        }
        else if (currentLine3a == 12) {
            p3_c1_line12();
            currentLine3a = 1;
        }
    });

    //panel 3 code 2
    var currentLine3b = 1;
    $("#code3b-line-1").addClass("yellow");

    $("#start-button-3b").click(function () {
        currentLine3b = 1;
        $(".d3b-hide-all").hide();
        p3_c2_hideBorders();
        $("#code3b-line-8").animate({backgroundColor: 'transparent'}, 0);
        $(".table .stack-heap-3b").animate({backgroundColor: 'transparent'}, 0);
        $("#d3b-pointer-addr").animate({color: '#777'}, 0);
        p3_c2_line1();
        $("#d3b-rtn-addr-val").promise().done(function () {
            p3_c2_line2();
            $("#d3b-mumPh-val").promise().done(function () {
                p3_c2_line3();
                $("#d3b-myPh-val").promise().done(function () {
                    p3_c2_line4();
                    $("#d3b-flatPh-val").promise().done(function () {
                        p3_c2_line5();
                        $("#d3b-mumPh-val").promise().done(function () {
                            p3_c2_line6();
                            $("#d3b-const-l6").promise().done(function () {
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
        $(".d3b-link").removeClass("yellow");
        $("#d3b-mumPh-val").html('1111111');
        $("#d3b-mumPh").delay(1000).show(400);
        $("#d3b-mumPh-val").delay(1400).show(400);
    };

    //p3 c2 line 3 function
    var p3_c2_line3 = function () {
        $("#code3b-line-2").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-3").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3b-link").removeClass("yellow");
        $("#d3b-myPh").delay(1000).show(400);
        $("#d3b-pointer-addr").delay(1400).animate({color: '#532A78', fontWeight: 'bold'}, 150);
        $("#d3b-myPh-val").delay(1400).show(400);
    };

    //p3 c2 line 4 function
    var p3_c2_line4 = function () {
        $("#code3b-line-3").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-4").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3b-link").removeClass("yellow");
        $("#d3b-flatPh").delay(1000).show(400);
        $("#d3b-flatPh-val").delay(1400).show(400);
    };

    //p3 c2 line 5 function
    var p3_c2_line5 = function () {
        $("#code3b-line-4").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-5").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3b-link").removeClass("yellow");
        setTimeout(function () {
            $("#d3b-mumPh-val").html('7777777');
        }, 1050);
        $("#d3b-mumPh-val").delay(1000).animate({backgroundColor: 'transparent'}, 500);
    };

    //p3 c2 line 6 function
    var p3_c2_line6 = function () {
        $("#code3b-line-5").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-6").animate({backgroundColor: '#dd747b'}, 1000);
        $(".d3b-link").removeClass("yellow");

        $("#d3b-const-l6").delay(1000).animate({backgroundColor: '#dd747b'}, 1000);
        $("#d3b-error-l6").delay(1500).show(400);
    };

    //p3 c2 line 7 function
    var p3_c2_line7 = function () {
        $("#code3b-line-6").animate({backgroundColor: 'transparent'}, 1000);
        $("#d3b-const-l6").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-7").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3b-link").removeClass("yellow");
        $(".d3b-link").removeClass("red");
        $("#d3b-rtnval-val").delay(1000).show(400).delay(200);
    };

    //p3 c2 line 8 function
    var p3_c2_line8 = function () {
        $("#code3b-line-7").animate({backgroundColor: 'transparent'}, 1000);
        $("#code3b-line-8").animate({backgroundColor: '#ffff00'}, 1000);
        $(".d3b-link").removeClass("yellow");
        $(".d3b-hide-all").delay(1000).hide(400);
        $("#d3b-pointer-addr").delay(1000).animate({color: '#777'}, 150);
        $("#code3b-line-8").promise().done(function () {
            p3_c2_hideBorders();
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
        $(".d3b-link").removeClass("red");
        $("#code3b-line-1").addClass("yellow");
        $("#d3b-const-l6").animate({backgroundColor: 'transparent'}, 0);
        $("#d3b-pointer-addr").animate({color: '#777'}, 0);

        $(".d3b-hide-all").hide();
        p3_c2_hideBorders();
        p3_c2_unhighlight();

        p3_c2_line1();
        currentLine3b = 2;
    });

    $("#code3b-line-2").click(function() {
        $(".d3b-link").removeClass("yellow");
        $(".d3b-link").removeClass("red");
        $("#code3b-line-2").addClass("yellow");
        $("#d3b-const-l6").animate({backgroundColor: 'transparent'}, 0);
        $("#d3b-pointer-addr").animate({color: '#777'}, 0);

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $(".d3b-show1").show();
        p3_c2_unhighlight();

        p3_c2_line2();
        currentLine3b = 3;
    });

    $("#code3b-line-3").click(function() {
        $(".d3b-link").removeClass("yellow");
        $(".d3b-link").removeClass("red");
        $("#code3b-line-3").addClass("yellow");
        $("#d3b-const-l6").animate({backgroundColor: 'transparent'}, 0);
        $("#d3b-pointer-addr").animate({color: '#777'}, 0);
        $("#d3b-mumPh-val").html('1111111');

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $(".d3b-show1").show();
        $(".d3b-show2").show();
        p3_c2_unhighlight();

        p3_c2_line3();
        currentLine3b = 4;
    });

    $("#code3b-line-4").click(function() {
        $(".d3b-link").removeClass("yellow");
        $(".d3b-link").removeClass("red");
        $("#code3b-line-4").addClass("yellow");
        $("#d3b-const-l6").animate({backgroundColor: 'transparent'}, 0);
        $("#d3b-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3b-mumPh-val").html('1111111');

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $(".d3b-show1").show();
        $(".d3b-show2").show();
        $(".d3b-show3").show();
        p3_c2_unhighlight();

        p3_c2_line4();
        currentLine3b = 5;
    });

    $("#code3b-line-5").click(function() {
        $(".d3b-link").removeClass("yellow");
        $(".d3b-link").removeClass("red");
        $("#code3b-line-5").addClass("yellow");
        $("#d3b-const-l6").animate({backgroundColor: 'transparent'}, 0);
        $("#d3b-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3b-mumPh-val").html('1111111');

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $(".d3b-show1").show();
        $(".d3b-show2").show();
        $(".d3b-show3").show();
        $(".d3b-show4").show();
        p3_c2_unhighlight();

        p3_c2_line5();
        currentLine3b = 6;
    });

    $("#code3b-line-6").click(function() {
        $(".d3b-link").removeClass("yellow");
        $(".d3b-link").removeClass("red");
        $("#code3b-line-6").addClass("red");
        $("#d3b-const-l6").animate({backgroundColor: 'transparent'}, 0);
        $("#d3b-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3b-mumPh-val").html('7777777');

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $(".d3b-show1").show();
        $(".d3b-show2").show();
        $(".d3b-show3").show();
        $(".d3b-show4").show();
        p3_c2_unhighlight();

        p3_c2_line6();
        currentLine3b = 7;
    });

    $("#code3b-line-7").click(function() {
        $(".d3b-link").removeClass("yellow");
        $(".d3b-link").removeClass("red");
        $("#code3b-line-7").addClass("yellow");
        $("#d3b-const-l6").animate({backgroundColor: '#dd747b'}, 0);
        $("#d3b-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3b-mumPh-val").html('7777777');

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $(".d3b-show1").show();
        $(".d3b-show2").show();
        $(".d3b-show3").show();
        $(".d3b-show4").show();
        $(".d3b-show6").show();
        p3_c2_unhighlight();

        p3_c2_line7();
        currentLine3b = 8;
    });

    $("#code3b-line-8").click(function() {
        $(".d3b-link").removeClass("yellow");
        $(".d3b-link").removeClass("red");
        $("#code3b-line-8").addClass("yellow");
        $("#d3b-const-l6").animate({backgroundColor: 'transparent'}, 0);
        $("#d3b-pointer-addr").animate({color: '#532A78'}, 0);
        $("#d3b-mumPh-val").html('7777777');

        p3_c2_showBorders();
        $(".d3b-hide-all").hide();
        $(".d3b-show1").show();
        $(".d3b-show2").show();
        $(".d3b-show3").show();
        $(".d3b-show4").show();
        $(".d3b-show6").show();
        $(".d3b-show7").show();
        p3_c2_unhighlight();

        p3_c2_line8();
        currentLine3b = 1;
    });

    $("#step-button-3b").click(function () {
        if (currentLine3b == 1) {
            //do line 1 things here
            $(".d3b-link").removeClass("yellow");
            $(".d3b-link").removeClass("red");
            $("#code3b-line-1").addClass("yellow");
            $("#d3b-const-l6").animate({backgroundColor: 'transparent'}, 0);
            $("#d3b-pointer-addr").animate({color: '#777'}, 0);

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

});