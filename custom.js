$(window).on({
    load: function() {
        $(".mobile-menu").mCustomScrollbar({
            theme: "minimal"
        });
        $(".archive-post").mCustomScrollbar({
            theme: "minimal-dark"
        });
    },
    scroll: function() {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }
});
$('.nav-icon').on('click', function() {
    $(this).toggleClass('open');
});
var menuLeft = document.getElementById('mobile-menu'),
    showLeft = document.getElementById('showLeft'),
    body = document.body;
var classie;
showLeft.onclick = function() {
    classie.toggle(this, 'active');
    classie.toggle(menuLeft, 'mobile-menu-open');
    disableOther('showLeft');
};

function disableOther(button) {
    if (button !== 'showLeft') {
        classie.toggle(showLeft, 'disabled');
    }
}

function pb_changeFontSize(element, step) {
    var step = parseInt(step, 10);
    var el = document.getElementById(element);
    var curFont = parseInt(el.style.fontSize, '10px');
    var curLineHeight = parseInt(el.style.lineHeight, 10);
    if ((step == "2" && curFont < 30) || (step == "-2" && curFont > 12)) {
        el.style.fontSize = (curFont + step) + 'px';
        el.style.lineHeight = (curLineHeight + step) + 'px';
    }
    return;
}
$(document).ready(function() {
    $.rvFontsize({
        targetSection: '#content .post',
        store: false,
        controllers: {
            appendTo: '#rvfs-controllers',
            showResetButton: true
        }
    });
});
$(document).ready(function() {
    "use strict";
});
var owl = $("#news-feed-carousel");
owl.owlCarousel({
    autoPlay: 5000,
    navigation: false,
    singleItem: true,
    transitionStyle: "fade"
});
$("#content-slide").owlCarousel({
    items: 2,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    pagination: false,
    dots: false,
    lazyLoad: true,
    navigation: true,
    navigationText: ["<i class='fa pe-7s-angle-left'></i>", "<i class='fa pe-7s-angle-right'></i>"],
    afterInit: function(elem) {
        var that = this;
        that.owlControls.prependTo(elem);
    }
});
$("#content-slide-2").owlCarousel({
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    pagination: false,
    dots: false,
    lazyLoad: true,
    navigation: true,
    navigationText: ["<i class='fa pe-7s-angle-left'></i>", "<i class='fa pe-7s-angle-right'></i>"],
    afterInit: function(elem) {
        var that = this;
        that.owlControls.prependTo(elem);
    }
});
$("#content-slide-3").owlCarousel({
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    pagination: false,
    dots: false,
    lazyLoad: true,
    navigation: true,
    navigationText: ["<i class='fa pe-7s-angle-left'></i>", "<i class='fa pe-7s-angle-right'></i>"],
    afterInit: function(elem) {
        var that = this;
        that.owlControls.prependTo(elem);
    }
});
$("#content-slide-4").owlCarousel({
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [980, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 2],
    itemssMobile: [420, 2],
    pagination: false,
    dots: false,
    autoPlay: 3000,
    lazyLoad: true,
    navigation: true,
    navigationText: ["<i class='fa pe-7s-angle-left left'></i>", "<i class='fa pe-7s-angle-right right'></i>"],
    afterInit: function(elem) {
        var that = this;
        that.owlControls.prependTo(elem);
    }
});
$("#content-slide-67").owlCarousel({
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [980, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 2],
    itemssMobile: [420, 2],
    pagination: false,
    dots: false,
    autoPlay: 3000,
    lazyLoad: true,
    navigation: true,
    navigationText: ["<i class='fa pe-7s-angle-left left'></i>", "<i class='fa pe-7s-angle-right right'></i>"],
    afterInit: function(elem) {
        var that = this;
        that.owlControls.prependTo(elem);
    }
});
$("#content-slide-5").owlCarousel({
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    pagination: false,
    dots: false,
    lazyLoad: true,
    navigation: true,
    navigationText: ["<i class='fa pe-7s-angle-left'></i>", "<i class='fa pe-7s-angle-right'></i>"],
    afterInit: function(elem) {
        var that = this;
        that.owlControls.prependTo(elem);
    }
});
$("#content-slide-6").owlCarousel({
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    pagination: false,
    dots: false,
    lazyLoad: true,
    navigation: true,
    navigationText: ["<i class='fa pe-7s-angle-left'></i>", "<i class='fa pe-7s-angle-right'></i>"],
    afterInit: function(elem) {
        var that = this;
        that.owlControls.prependTo(elem);
    }
});
$("#content-slide-7").owlCarousel({
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    pagination: false,
    dots: false,
    lazyLoad: true,
    navigation: true,
    navigationText: ["<i class='fa pe-7s-angle-left'></i>", "<i class='fa pe-7s-angle-right'></i>"],
    afterInit: function(elem) {
        var that = this;
        that.owlControls.prependTo(elem);
    }
});
$("#video-slide").owlCarousel({
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    pagination: false,
    dots: false,
    lazyLoad: true,
    navigation: true,
    navigationText: ["<i class='fa pe-7s-angle-left left'></i>", "<i class='fa pe-7s-angle-right right'></i>"],
    afterInit: function(elem) {
        var that = this;
        that.owlControls.prependTo(elem);
    }
});
var owl = $("#widget-slider");
owl.owlCarousel({
    autoPlay: 5000,
    navigation: false,
    singleItem: true,
    transitionStyle: "fade"
});
$('body').append('<div id="toTop" class="btn btn-info"><span class="fa fa-dot-circle-o top"></span><br>TOP</div>');
$('#toTop').on('click', function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});
$('.side-menu').metisMenu();
$(".se-pre-con").fadeOut("slow");
$('.tab-inner ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
$('.tab-inner ul.tabs li a').on('click', function(g) {
    var tab = $(this).closest('.tab-inner'),
        index = $(this).closest('li').index();
    tab.find('ul.tabs > li').removeClass('current');
    $(this).closest('li').addClass('current');
    tab.find('.tab_content').find('div.tab-item-inner').not('div.tab-item-inner:eq(' + index + ')').slideUp();
    tab.find('.tab_content').find('div.tab-item-inner:eq(' + index + ')').slideDown();
    g.preventDefault();
});
$(".css-i6dzq1").click(function() {
    $("in").remove();
});
$(".css-i6dzq1").click(function() {
    $(".modal").removeClass("in");
});