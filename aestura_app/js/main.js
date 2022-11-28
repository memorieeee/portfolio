$(document).ready(function(){

    const swiper = new Swiper('.visual .popup', { /* 팝업을 감싸는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },

    });

    const swiper_new = new Swiper('.new .popup', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            320: {  /* px 이상이 되면 적용 */
                spaceBetween: 20, 
            },
        },

        centeredSlides: true,
        loop: true,
    });





});//document.ready