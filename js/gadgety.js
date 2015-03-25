// Function to hide the sidelogo on load and then show sidelogo 
// once the window is scrolled up/down past a certain point.
$(function() {
	$("#sidelogo").hide();
			
	$(window).on('scroll', function() {
	var yScrollPos = window.pageYOffset;
	var scrollDownTest = 225;           
	var scrollUpTest = 225;
		if(yScrollPos > scrollDownTest) {
			$("#sidelogo").fadeIn(300);
		}
				
		if(yScrollPos < scrollUpTest) {
			$("#sidelogo").fadeOut(300);
		}
	});
				
});

// Function to show the current day's date
function printToday()
{
	var today = new Date();
	document.write(today.toDateString());
}


// Variables and a function to randomize the tagline div upon page load
	var taglines = ["I'm pretty sure I'm turning into a robot.", "I really like shiny things. Like a lot.",
						     "Inspector Gadget's go to website.", "The gadgetiest place on earth!", "Gadgeting since 1985."];								
	var currentTagline = taglines[Math.floor(Math.random()*taglines.length)];

	$(function() {
		$(window).load(function() {
			$("#tagline").text(currentTagline);
		});
	});
	
$('nav li ul').hide().removeClass('fallback');
$('nav li').hover(
  function () {
    $('ul', this).stop().slideDown(100);
  },
  function () {
    $('ul', this).stop().slideUp(100);
  }
);
