$('#navitems a').hover(function () {
    $(this).css("color", "red")
}, function () {
    $(this).css("color", "#333")
})

$('#dectice').hover(function () {
    // over
    $('.fl .dropdown-layer').show()
    $(this).css({
        "background-color": " #fff",
        "border-left": " #ccc 1px solid",
        "border-right": " #ccc 1px solid",
        "border-bottom": " #fff 1px solid",
        "border-top": "#ccc 1px solid"
    })
}, function () {
    // out
    $('.fl .dropdown-layer').hide()
    $(this).css("background", " #f5f5f5")

}
);
$('.fl .dropdown-layer').hover(function () {
    // over
    $('.fl .dropdown-layer').show()
    $('#dectice').css({
        "background-color": " #fff",
        "border-left": " #ccc 1px solid",
        "border-right": " #ccc 1px solid",
        "border-bottom": " #fff 1px solid",
        "border-top": "#ccc 1px solid"
    })

}, function () {
    // out
    $('.fl .dropdown-layer').hide()
    $('#dectice').css({ "background": " #f5f5f5", "border": "none" })
}
);

$('#foreMy').hover(function () {
    // over
    $('#foreMy .dropdown-layer').show()
    $(this).css({ "background": " #fff" },
        { "border-left": " #ccc 1px solid" },
        { "border-right": " #ccc 1px solid" },

        { "border-top": "#ccc 1px solid" })

}, function () {
    // out
    $('#foreMy .dropdown-layer').hide()
    $(this).css("background", " #f5f5f5")
}
);

$('#foreFo').hover(function () {
    // over
    $('#foreFo .dropdown-layer').show()
    $(this).css({ "background": " #fff" },
        { "border-left": " #ccc 1px solid" },
        { "border-right": " #ccc 1px solid" },

        { "border-top": "#ccc 1px solid" })

}, function () {
    // out
    $('#foreFo .dropdown-layer').hide()
    $(this).css("background", " #f5f5f5")
}
);

$('#foreWeb').hover(function () {
    // over
    $('#foreWeb .dropdown-layer').show()
    $(this).css({ "background": " #fff" },
        { "border-left": " #ccc 1px solid" },
        { "border-right": " #ccc 1px solid" },

        { "border-top": "#ccc 1px solid" })

}, function () {
    // out
    $('#foreWeb .dropdown-layer').hide()
    $(this).css("background", " #f5f5f5")
}
);

$('#foreSe').hover(function () {
    // over
    $('#foreSe .dropdown-layer').show()
    $(this).css({ "background": " #fff" },
        { "border-left": " #ccc 1px solid" },
        { "border-right": " #ccc 1px solid" },

        { "border-top": "#ccc 1px solid" })

}, function () {
    // out
    $('#foreSe .dropdown-layer').hide()
    $(this).css("background", " #f5f5f5")
}
);


$('#foreMob').hover(function () {
    // over
    $('#foreMob .dropdown-layer').show()
    $(this).css({ "background": " #fff" },
        { "border-left": " #ccc 1px solid" },
        { "border-right": " #ccc 1px solid" },

        { "border-top": "#ccc 1px solid" })

}, function () {
    // out
    $('#foreMob .dropdown-layer').hide()
    $(this).css("background", " #f5f5f5")
}
);
$('.deitem a').hover(function (e) {
    $(this).css("background", " #ccc")

}, function () {
    // out
    $(this).css("background", " #fff")
});

$(".settleup").hover(function () {
    $('.settleup .dropdown-layer').show()
}, function () {
    $('.settleup .dropdown-layer').hide()
})

$('.cate_menu_item').hover(function () {
    $('#J_popCtn').show()
    var index = $(this).data("index");
    $('#cate_item' + index + '').show()
}, function () {
    var index = $(this).data("index");
    $('#cate_item' + index + '').hide()

    $('#J_popCtn').hide()
})







// 顶部图片

$.get('/topImg', function (resData) {
    $('.topbanner a').css('background', JSON.parse(resData)[0].url)
    $('.topbanner a').attr('href', JSON.parse(resData)[0].href)
});

$('#J_event_close').click(function () {
    $('.topbanner').hide()
})

//   获得省
$.get('/province', function (data) {
    var province = JSON.parse(data)
    var html = ''
    for (var i = 0; i < province.length; i++) {
        if (i == 0) {
            html += '<div class="deitem"><a data-id="' + province[i].id + '" class="selected">' + province[i].name + '</a></div>'
        }
        else {
            html += '<div class="deitem"><a data-id="' + province[i].id + '"">' + province[i].name + '</a></div>'

        }
    }
    $('.fl .decList').html(html)
})

// 获得navitems旁边的图片
$.get('/topImg', function (resData) {
    var html = '<a style="' + JSON.parse(resData)[1].url + '"></a>'
    $('#treasure').html(html)
    var bmHtml = ' <img class="fs_act_lk_img" src="' + JSON.parse(resData)[2].url + '">'
    $('#J_fs_act_lk').html(bmHtml)
    var bbHtml = ' <img src="' + JSON.parse(resData)[3].url + '">'
    $('.fs_act_banner_lk').html(bbHtml)
})

// 热词
$.get('/hotWords', function (resData) {
    var html = ''
    var word = JSON.parse(resData)
    for (var i = 0; i < word.length; i++) {
        if (i == 0) {
            html += ' <a href="' + word[i].href + '" class="col-red">' + word[i].text + '</a>'
        }
        else {
            html += ' <a href="' + word[i].href + '" >' + word[i].text + '</a>'
        }
    }
    var j = 0
    setInterval(function () {
        $('.form #J_searchbg').text(word[j].text)
        j++
        if (j >= word.length) {
            j = 0
        }
    }, 3000);
    // $('.carousel-inner').html(html)
    $('.hotwords').html(html)
})

$.get('/industry', function (resData) {
    var html1 = ''

    var html2 = ''
    var photo = JSON.parse(resData)
    var mini = photo[0].mini
    var big = photo[1].big
    for (var i = 0; i < mini.length; i++) {
        html1 += '<a href="//mall.jd.com/index-1000086745.html" class="cate_brand_lk" clstag="h|keycount|head|category_18e01" target="_blank">'
        html1 += '<img width="83" height="35" src="' + mini[i].src + '" data-webp="no"></a>'
    }
    for (var j = 0; j < big.length; j++) {
        html2 += '<a href="//list.jd.com/list.html?cat=9855,9858,9921" class="cate_promotion_lk" clstag="h|keycount|head|category_18f01" target="_blank">'
        html2 += '<img  width="168" height="134" src="' + big[j].src + '"data-webp="no"></a>'
    }
    $('.cate_brand ').html(html1)
    $('.cate_promotion').html(html2)
})
// 热词
$.get('/banner', function (resData) {
    var html = ''
    var photo = JSON.parse(resData)
    for (var i = 0; i < photo.length; i++) {
        if (i == 0) {
            html += ' <div class="item active">'

            html += ' <img src="' + photo[i].src + '"  alt="...">'
            html += ' <div class="carousel-caption"></div>'
            html += '</div>'
        }
        else {
            html += ' <div class="item">'

            html += ' <img src="' + photo[i].src + '"  alt="...">'
            html += ' <div class="carousel-caption"></div>'
            html += ' </div>'
        }

    }
    $('.focus_list .carousel-inner').html(html)
})



$('#J_fs_act_lk').hover(function () {
    $('#J_fs_act').addClass("fs_brand_active")
}, function () {
    $('#J_fs_act').removeClass("fs_brand_active")
})
$('.fs_act_banner').hover(function () {
    $('#J_fs_act').addClass("fs_brand_active")
}, function () {
    $('#J_fs_act').removeClass("fs_brand_active")
})

$('.form input').bind('input propertychange', function () {
    $(this).css("background-color", "#FFF");
})

function myFunction() {
    setInterval(function () { alert("Hello"); }, 3000);
}

$('#J_news .mod_tab_head .news_first').click(function () {
    $(this).next().next().css("transform", "translateX(0px)")
    $('#J_news .mod_tab_content .mod_tab_content_item_on').show()
})
$('#J_news .mod_tab_head .news_last').click(function () {
    $(this).next().css("transform", "translateX(54px)")
    $('#J_news .mod_tab_content .mod_tab_content_item_on').hide()
})

window.onscroll = function () {
    var t = document.documentElement.scrollTop
    if (t >= 720) {
        $('#search').show()
    }
    else {
        $('#search').hide()
    }
}

//  秒杀
function startTime() {
    var today = new Date()
    var h = 24 - today.getHours()
    var m = 60 - today.getMinutes()
    var s = 60 - today.getSeconds()
    // add a zero in front of numbers<10
    m = checkTime(m)
    s = checkTime(s)
    $('.cd_hour .cd_item_txt').text(h)
    $('.cd_minute .cd_item_txt').text(m)
    $('.cd_second .cd_item_txt').text(s)
    t = setTimeout('startTime()', 500)
}

$.get('/miaosha', function (resData) {
    var htmlA = ''
    var html = ''
    var miaosha = JSON.parse(resData)
    console.log(miaosha)
    for (var i = 0; i < miaosha.length; i++) {
        if (i < 4) {
            htmlA += ' <div data-index="' + i + '" class="slider_item sk_item sk_item_13 slider_active" style="float: left; width: 200px;">'
            htmlA += '<a class="sk_item_lk" href="//miaosha.jd.com/#5540120" target="_blank" title="' + miaosha[i].title + '">'
            htmlA += ' <div class="lazyimg lazyimg_loaded sk_item_img">'
            htmlA += '<img src="' + miaosha[i].photo + '" class="lazyimg_img">'
            htmlA += ' </div> <p class="sk_item_name">' + miaosha[i].title + '</p>'
            htmlA += ' <div class="sk_item_price"><span class="mod_price sk_item_price_new">'
            htmlA += '<i>¥</i><span>' + miaosha[i].nowMoney + '</span>'
            htmlA += '</span><span class="mod_price sk_item_price_origin">'
            htmlA += '<i>¥</i><span>' + miaosha[i].lastMoney + '</span>'
            htmlA += '</span></div></a></div>'
        }
        else {
            html += ' <div data-index="' + i + '" class="slider_item sk_item sk_item_13 slider_active" style="float: left; width: 200px;">'
            html += '<a class="sk_item_lk" href="//miaosha.jd.com/#5540120" target="_blank" title="' + miaosha[i].title + '">'
            html += ' <div class="lazyimg lazyimg_loaded sk_item_img">'
            html += '<img src="' + miaosha[i].photo + '" class="lazyimg_img">'
            html += ' </div> <p class="sk_item_name">' + miaosha[i].title + '</p>'
            html += ' <div class="sk_item_price"><span class="mod_price sk_item_price_new">'
            html += '<i>¥</i><span>' + miaosha[i].nowMoney + '</span>'
            html += '</span><span class="mod_price sk_item_price_origin">'
            html += '<i>¥</i><span>' + miaosha[i].lastMoney + '</span>'
            html += '</span></div></a></div>'
        }
    }
    $('.sk_list .slider_list .active').html(htmlA)
    $('.sk_list .slider_list #iitme').html(html)

})
$.get('/vogue', function (resData) {
    var html = ''
    var html1 = ''

    var html2 = ''
    var html3 = ''
    var vogue = JSON.parse(resData)
    console.log(vogue)
    $('#J_vogue .floorhd h3').text(vogue.title)
    
    for (var j = 0; j < 2; j++) {
        html += '<div class="box sort">'
        html += ' <div class="box_hd"><a class="box_hd_lk">'
        html += '<h3 class="box_tit">' + vogue.list[j].title + '</h3><i class="box_hd_arrow"></i><span class="box_subtit">' + vogue.list[j].tag + '</span>'
        html += '</a></div>'
        html += ' <div class="box_bd">'
        html += ' <div class="sort_wrapper clearfix"><a class="sort_large" href="//channel.jd.com/yundongcheng.html" target="_blank"'
        html += '  clstag="h|keycount|vogue|chan#01_c01">'
        html += '<div class="lazyimg lazyimg_loaded sort_large_img"><img src="' + vogue.list[j].largeImg + '"'
        html += ' class="lazyimg_img"></div>'
        html += '  </a><a class="sort_middle" >'
        html += '<div class="lazyimg lazyimg_loaded sort_middle_img"><img src="' + vogue.list[j].middle[0] + '" class="lazyimg_img"></div>'
        html += '</a><a class="sort_middle" href="//channel.jd.com/1318-1463.html" target="_blank" title="健身训练" clstag="h|keycount|vogue|chan#01_c03">'
        html += '<div class="lazyimg lazyimg_loaded sort_middle_img"><img src="' + vogue.list[j].middle[1] + '" class="lazyimg_img"></div>'
        html += '</a></div></div></div>'
    }
    $('#chn1 .grid_c1').append(html)
    html1 += ' <div class="box act box_last">'
    html1 += '<div class="act_inner"><a class="act_lk"> <div class="lazyimg lazyimg_loaded act_img">'
    html1 += '<img src="' + vogue.list[2].url + '" class="lazyimg_img">'
    html1 += '</div></a></div></div></div>'
    $('#chn1 .grid_c1').append(html1)
    html2 += ' <div class="box act box_last">'
    html2 += '<div class="act_inner"><a class="act_lk"> <div class="lazyimg lazyimg_loaded act_img">'
    html2 += '<img src="' + vogue.list[3].url + '" class="lazyimg_img">'
    html2 += '</div></a></div></div></div>'
    $('#chn2 .grid_c1').append(html2)
    html3 += '<div class="box sort">'
    html3 += ' <div class="box_hd"><a class="box_hd_lk">'
    html3 += '<h3 class="box_tit">' + vogue.list[7].title + '</h3><i class="box_hd_arrow"></i><span class="box_subtit">' + vogue.list[7].tag + '</span>'
    html3 += '</a></div>'
    html3 += ' <div class="box_bd">'
    html3 += ' <div class="sort_wrapper clearfix"><a class="sort_large" href="//channel.jd.com/yundongcheng.html" target="_blank"'
    html3 += '  clstag="h|keycount|vogue|chan#01_c01">'
    html3 += '<div class="lazyimg lazyimg_loaded sort_large_img"><img src="' + vogue.list[7].largeImg + '"'
    html3 += ' class="lazyimg_img"></div>'
    html3 += '  </a><a class="sort_middle" >'
    html3 += '<div class="lazyimg lazyimg_loaded sort_middle_img"><img src="' + vogue.list[7].middle[0] + '" class="lazyimg_img"></div>'
    html3 += '</a><a class="sort_middle" href="//channel.jd.com/1318-1463.html" target="_blank" title="健身训练" clstag="h|keycount|vogue|chan#01_c03">'
    html3 += '<div class="lazyimg lazyimg_loaded sort_middle_img"><img src="' + vogue.list[7].middle[1] + '" class="lazyimg_img"></div>'
    html3 += '</a></div></div></div>'
    $('#chn3 .grid_c1').append(html3)



    $('#chn2 #scene1 h4').html( vogue.list[4].title[0]+'<span class="treasure_scene_subtit">'+ vogue.list[4].tag[0]+'</span>')
    $('#chn2 #scene2 h4').html( vogue.list[4].title[1]+'<span class="treasure_scene_subtit">'+ vogue.list[4].tag[1]+'</span>')
    // $('#chn4 #scene1 h4 span').text( vogue.list[4].tag[0])
    // $('#chn4 #scene2 h4 span').text( vogue.list[4].tag[1])
})

function checkTime(i) {
    if (i < 10) { i = "0" + i }
    return i
}

$('.sk_list .slider_control_prev').click(function () {
    $('#miaosha').carousel('prev');
})
$('.sk_list .slider_control_next').click(function () {
    $('#miaosha').carousel('next');
})