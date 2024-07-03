// JavaScript Document
$(document).ready(function(){
  $("#btn-toggle").click(function(){
    $(".menu").slideToggle("slow");
	$(".icon-menu").slideToggle("slow");
  });
	
	$("#btn-1").click(function(){
    	$("#drop-1").slideToggle();
		$("#drop-2").slideUp();
	 });
	
		$("#btn-2").click(function(){
    	$("#drop-2").slideToggle();
		$("#drop-1").slideUp();
	 });
	
	$("#btn-3").click(function(){
    	$("#drop-3").slideToggle();
		$("#drop-2").slideUp();
	 });
	
	$("#btn-4").click(function(){
    	$("#drop-4").slideToggle();
		$("#drop-3").slideUp();
	 });
	
	
});
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}




