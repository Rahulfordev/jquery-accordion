$(document).ready(function () {
  $(".accordion-container .acc:nth-child(1) .accordion-head").addClass(
    "active"
  );
  $(".accordion-container .acc:nth-child(1) .accordion-content").slideDown();
  $(".accordion-head").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).siblings(".accordion-content").slideUp();
      $(this).removeClass("active");
    } else {
      $(".accordion-content").slideUp();
      $(".accordion-head").removeClass("active");
      $(this).siblings(".accordion-content").slideToggle();
      $(this).toggleClass("active");
    }
  });
});
