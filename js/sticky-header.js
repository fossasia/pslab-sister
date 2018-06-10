$(document).ready(function(){
	$("#labs-tab").on("click",function(){window.location.href = "http://labs.fossasia.org";})

	var stickyNavTop = $('#sticky-navbar').offset().top;
	var stickyNavBar = function(){
	var scrollTop = $(window).scrollTop();

	if (scrollTop > stickyNavTop) {
		
	    $('#sticky-navbar').addClass('sticky');
	} else {
		$('#sticky-navbar').removeClass('sticky');
	}

	// This runs only one time i.e., when page loads for the first time.
	// After page is loaded, this code doesn't observe window's width changes
	if($( window ).width() > 776){
		if (scrollTop > 60) {
			$("#light-logo").hide();
			$("#dark-logo").show();
			$('#sticky-navbar').addClass('sticked');
		}
		else {
			$("#dark-logo").hide();
			$("#light-logo").show();
			$('#sticky-navbar').removeClass('sticked');
		}

	}else if($( window ).width() < 776){
		$("#light-logo").hide();
		$("#dark-logo").show();
	}
	};


	// Checks for width and scrollTop every time window's width changes
	$(window).resize(() => {
		if($( window ).width() > 776){
			if ($(window).scrollTop() > 60) {
				$("#light-logo").hide();
				$("#dark-logo").show();
				$('#sticky-navbar').addClass('sticked');
			}else {
				$("#dark-logo").hide();
				$("#light-logo").show();
				$('#sticky-navbar').removeClass('sticked');
			}
		}else if($( window ).width() < 776){
			$("#light-logo").hide();
			$("#dark-logo").show();
		}
	})

	stickyNavBar();

	$(window).scroll(function() {
	  stickyNavBar();
	});
});
