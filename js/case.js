 $(document).ready(function (e) {
 	$(".case_list a").mouseenter(function(e) {
    $(this).children(".case_list_cover").addClass("cover");

})
$(".case_list a").mouseleave(function(e) {
    $(this).children(".case_list_cover").removeClass("cover");

});
 })