$(".main").onepage_scroll({
    sectionContainer: "section",
    // easing: "cubic-bezier(0.175, 0.885, 0.420, 1.310)",
    easing: "ease-in-out",
    animationTime: 1200,
    pagination: false,
    updateURL: true,
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: "vertical"
 });

 function up() {
    $(".main").moveUp();
 }

 function down() {
    $(".main").moveDown();
 }

 function home() {
    $(".main").moveTo(1);
 }