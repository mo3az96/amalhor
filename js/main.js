$(window).on('load', function () {
    $("body").removeClass("overflow");
});
$(document).ready(function () {
    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 12,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
    });

    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })

    $('.clickable').click(function () {
        $(".clickable").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".clickable").not(this).siblings().slideUp(500);
    })
    ///////// **header** /////////
    $('.search-msg-btn').click(function () {
        $(".header-search").fadeToggle(400);
    })
    if ($(window).width() <= 1199) {
        $('.search-btn').click(function () {
            $(".header-search").fadeToggle(400);
        })
        $('.menu-btn').click(function () {
            $(".header-navbar").slideDown(400);
            $("body").addClass("overflow");
        })
        $('.close-btn').click(function () {
            $(".header-navbar").slideUp(400);
            $("body").removeClass("overflow");
        })
        $('.filters-btn,.filter-overlay').click(function () {
            $(".filters-btn").toggleClass("active");
            $(".search-filters-cont").toggleClass("active");
            $(".filter-overlay").fadeToggle(300);
        })
    }
    $('.dropdown-dtn').click(function () {
        $(this).siblings(".dropdown-list").fadeIn();
        $(this).siblings(".dropdown-overlay").show();
    })
    $('.dropdown-overlay').click(function () {
        $(".dropdown-list").fadeOut();
        $('.dropdown-overlay').hide();
    })
    ///////// **input password** /////////
    $('span.show').click(function () {
        var input = $(this).siblings("input");
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    //////////** sign slider **//////////
    var signswiper = new Swiper('.sign-slider .swiper-container', {
        spaceBetween: 12,
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.sign-slider .swiper-btn-next',
            prevEl: '.sign-slider .swiper-btn-prev',
        },
    });
    ///////// **stars** /////////

    $('.big-stars>span').click(function () {
        var rateVal = $(this).attr("data-value");
        $(".big-stars>input").prop('checked', false);
        $(".big-stars>span").removeClass("active");
        for (var i = 1; i <= rateVal; i++) {
            $(".big-stars>input[value=" + i + "]").prop('checked', true);
            $(".big-stars>span[data-value=" + i + "]").addClass("active");
        }
    })
    ///////// **range-slider** /////////

    $(".range-slider-input").on("input", function (e) {
        var width = $(this).val()
        $(this).siblings(".value-bg").width(width * 10 + "%");
    });
    ///////// **tabs slider** /////////
    var tabChange = function () {
        var tabs = $('.how-steps > li > a');
        var tabsli = $('.how-steps > li ');
        var active = tabs.filter('.active').parents("li");
        var next = active.next('li').length ? active.next('li').find('a') : tabsli.filter(':first-child').find('a');
        next.tab('show')
    }
    var tabCycle = setInterval(tabChange, 10000)
    $(function () {
        $('.how-steps a').click(function (e) {
            e.preventDefault();
            clearInterval(tabCycle);
            $(this).tab('show')
            setTimeout(function () {
                tabCycle = setInterval(tabChange, 10000)
            }, 1000);
        });
    });

    ///////// **date** /////////
    $('.input-datepicker').datepicker();

    ///////// **charts** /////////
    if ($("#charts").length == !0) {
        var els = document.getElementsByClassName("mo-chart");
        let allValue = document.getElementById("charts").getAttribute("data-all");
        let allTitle = document.getElementById("charts").getAttribute("data-all-title");

        Array.from(els).forEach((el) => {
            let value = el.getAttribute("data-value");
            let title = el.getAttribute("data-title");
            let bg = el.getAttribute("data-bg");
            const myChart = new Chart(
                el, {
                type: 'doughnut',
                data: {
                    labels: [
                        title,
                        allTitle,
                    ],
                    datasets: [{
                        data: [value, allValue],
                        backgroundColor: [
                            bg,
                            '#e5e5e5',
                        ],
                        borderColor: 'rgba(0, 0, 0, 0)',
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    tooltips: {
                        rtl: true,
                        display: false
                    },
                    hover: {
                        mode: null
                    },
                }
            }
            );
        });
    }


    ///////// **date** /////////
    $('input:radio[name=payment-type]').change(function () {
        var valueId = $(this).val();
        if ($("input[name='payment-type']:checked").val() == valueId) {
            $(".method-form").not("#" + valueId).slideUp();
            $("#" + valueId).slideDown();
        }
    });

    $('.confirm-modal .submit').click(function () {
        $(".first-confirm").slideUp();
        $(".sec-confirm").slideDown();
        setTimeout("$('#confirm').modal('hide')", 3000);
    });


});
