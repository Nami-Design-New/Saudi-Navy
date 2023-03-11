$(document).ready(function () {
  // nav menu
  $(".navBtn").click(function () {
    $(this).toggleClass("active");
    $(".navMenu").toggleClass("active");
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 1) {
      $("header").addClass("headerAnimate");
    } else {
      $("header").removeClass("headerAnimate");
    }
  });
  //
  $(document).ready(function () {
    $(".tablinksItem").click(function () {
      $(".tablinksItem").removeClass("active");
      $(this).addClass("active");

      $(".tabContentItem").removeClass("active");
      var index = $(this).index();
      $(".tabContentItem").eq(index).addClass("active");
    });
  });
  //mainSwiper
  var mainSwiper = new Swiper(".mainSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    // effect: "fade",
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainSwiperPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSwiperNext",
      prevEl: ".mainSwiperPrev",
    },
  });
  //clientsSlider
  var clientsSlider = new Swiper(".clientsSlider", {
    spaceBetween: 10,
    loop: true,
    // effect: "fade",
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".clientsSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".clientsSliderNext",
      prevEl: ".clientsSliderPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
      },

      467: {
        slidesPerView: 4,
      },

      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },

      1200: {
        slidesPerView: 5,
      },
    },
  });

  //testimonialsSlider
  var testimonialsSlider = new Swiper(".testimonialsSlider", {
    spaceBetween: 50,
    centeredSlides: true,
    // loop: true,
    // effect: "fade",
    speed: 500,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".testimonialsSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonialsSliderNext",
      prevEl: ".testimonialsSliderPrev",
    },
  });
});
$(document).ready(function () {
  $(".datatable").DataTable({
    // "columnDefs": [
    //   { "orderable": false, "targets": [0] }
    // ],
    searching: true,
    "lengthChange": false,
    "language": {
      "sEmptyTable": "لا توجد بيانات متاحة في الجدول",
      "sInfo": "عرض السجلات _START_ إلى _END_ من أصل _TOTAL_ مدخل",
      "sInfoEmpty": "عرض السجلات 0 إلى 0 من أصل 0 مدخل",
      "sInfoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
      "sInfoPostFix": "",
      "sLengthMenu": "أظهر _MENU_ مُدخل",
      "sLoadingRecords": "جارٍ التحميل...",
      "sProcessing": "جارٍ المعالجة...",
      "sSearch": "البحث:",
      "sZeroRecords": "لم يتم العثور على أية سجلات",
      "oPaginate": {
        "sFirst": "الأول",
        "sLast": "الأخير",
        "sNext": "التالي",
        "sPrevious": "السابق"
      },
      "oAria": {
        "sSortAscending": ": تفعيل لترتيب العمود تصاعدياً",
        "sSortDescending": ": تفعيل لترتيب العمود تنازلياً"
      }
    }

  });
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".spinner").fadeOut("slow");
  // odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  // select2
  $(".select2search").select2();
  $(".select2").select2({
    minimumResultsForSearch: -1,
  });
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 150);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 1000,
    // easing: "linear",
    once: false,
  });
});
