import $ from 'jquery';


	// text container function "scroll-up" and "scroll-down" start here
	// -----------------------------------------------------------------
	//  random id genarator function start (to detact scroll element dynamically)
	//  glabally for thit wedding site
	//  -------------------------------------------------------------------------
	function makeid() {
		var text = '';
		var possible =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (var i = 0; i < 5; i++)
			text += possible.charAt(
				Math.floor(Math.random() * possible.length),
			);

		return text;
	}
	// end ID genarator

    
    //stop scroll
    export function stopTabScroll(node) {
        $(node).stop();
    }

    //  end scroll-down function
    

    // horizontal lang scroll-right"upore" function start here
	// -----------------------------------------------
	export function horizontalSlideRight(node) {
		$(node).each(function() {
			let id = makeid();
			var div = $(this);
			div.stop();
			$(this).attr('id', id);
			var remWidth = div[0].scrollWidth - $(this).width();
			var scrollableWidth = remWidth - div.scrollLeft();
			var pos = div.scrollLeft();
			var remainingTime = ((scrollableWidth - pos) * 100) / 10; //here 5 is a speed
			div.animate(
				{
					scrollLeft: remWidth,
				},
				{
					duration: remainingTime,
					easing: 'linear',
				},
			);
		});
    }
    
    // horizontal lang scroll-right"upore" function start here
	// -----------------------------------------------
	export function horizontalSlideleft(node) {
		$(node).each(function() {
			let id = makeid();
			var div = $(this);
			div.stop();
			$(this).attr('id', id);
			// var remWidth = div[0].scrollWidth - $(this).width();
			// var scrollableWidth = remWidth - div.scrollLeft();
			// var pos = div.scrollLeft();
			// var remainingTime = ((scrollableWidth - pos) * 100) / 5; //here 5 is a speed
			div.animate(
				{
					scrollLeft: 0,
				},
				{
					duration: 1500,
					easing: 'linear',
				},
			);
		});
	}