$(document).ready(function(){
		$('img#view-bio').click(function(){
			$(this).parent().prev().slideToggle('slow');
			var src = $(this).attr('src') == "/images/hide-bio.png" ? "/images/view-bio.png" : "/images/hide-bio.png";
			$(this).attr('src' ,src);
			return false;
		});
});