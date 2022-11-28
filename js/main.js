$(document).ready(function(){

    $('header .logo').on('click', function(){
        console.log('눌렀어')
        // $(window).scrollTop(100)
        $('html,body').animate({
            scrollTop : 0
        },500)
    })


    let scrolling
    let header_top
    scrollChk()
    $(window).scroll(function(){
        scrollChk()
    })

    function scrollChk(){ //함수의 선언 
        scrolling = $(window).scrollTop();
        header_top = $('.header').offset().top
        // console.log(scrolling);
        if(scrolling > header_top){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    }

    let menuName = $('.header')  // 상단에 고정할 메뉴 영역 선택자
    let menuItem = $('.header ul li') // data-link 값을 준 클릭할 요소의 선택자
    let sectionName
    let moveTop
    let areaTop
    let areaH
    let areaName
    let scrollTop
    menuItem.on('click', function(){
        sectionName = $(this).attr('data-link')
        moveTop = $('*[data-menu="'+sectionName+'"]').offset().top - menuName.height() + 20
        $('html, body').animate({
            scrollTop : moveTop 
        }, 500)
    })
    menuChk()
    $(window).scroll(function(){
        menuChk()
    })
    function menuChk(){
        scrollTop = $(window).scrollTop()
    
        $.each($('*[data-menu]'), function(idx, item){
            areaTop = $('*[data-menu]').eq(idx).offset().top 
            // console.log(scrollTop,$('*[data-menu]').first().offset().top,menuName.height())
            areaH = $('*[data-menu]').eq(idx).height()
            areaName = $('*[data-menu]').eq(idx).attr('data-menu')
            if((scrollTop >= areaTop - menuName.height()) && (scrollTop < areaTop + areaH - menuName.height())){
                menuItem.removeClass('active')
                menuItem.siblings('[data-link="'+areaName+'"]').addClass('active')
            }else if(scrollTop < $('*[data-menu]').first().offset().top - menuName.height()){
                menuItem.removeClass('active')
            }else if(scrollTop > $('*[data-menu]').last().offset().top + $('*[data-menu]').last().height()){
                menuItem.removeClass('active')
            }
        });
    }




});//document.ready 종료