/***
@title:
Vibrate

@version:
2.0

@author:
Andreas Lagerkvist

@date:
2008-08-31

@url:
http://andreaslagerkvist.com/jquery/vibrate/

@license:
http://creativecommons.org/licenses/by/3.0/

@copyright:
2008 Andreas Lagerkvist (andreaslagerkvist.com)

@requires:
jquery

@does:
This plug-in makes any element you want "vibrate" every now and then. Can be used in conjunction with blink for maximum annoyance!

@howto:
jQuery('#ad-area').vibrate(); would make #ad-area vibrate every now and then, options are available, please check the source.

Vibrate currently only works with elements positioned 'static'.

@exampleHTML:
I should vibrate every now and then

@exampleJS:
jQuery('#jquery-vibrate-example').vibrate();

@Additions by soDEV.ch
 - set CSS Position value back to what it was before
 - add CSS Transform support for other browsers
 - return left and top to 0
 - for controlled vibration (useful for form input error) set 'continuous' to false (default)
 - for original behavior (vibrating every now and then) set 'continuous' to true
***/


jQuery.fn.vibrate = function (conf) {
	var config = jQuery.extend({
		speed:		30, 
		duration:	2000, 
		frequency:	5000, 
		spread:		3,
		continuous: false
	}, conf);

	return this.each(function () {
		var t = jQuery(this),
				tPos = t.css('position'),
				vibrate = function () {
					var topPos	= Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2),
							leftPos	= Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2),
							rotate	= Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2);

					t.css({
						position:			'relative', 
						left:				leftPos + 'px', 
						top:				topPos + 'px'
						//WebkitTransform:	'rotate(' + rotate + 'deg)'  // cheers to erik@birdy.nu for the rotation-idea
					});
					t.css('-webkit-transform','rotate('+rotate+'deg)');
		      t.css('-moz-transform','rotate('+rotate+'deg)'); 
		      t.css('-ms-transform','rotate('+rotate+'deg)');
		      t.css('-o-transform','rotate('+rotate+'deg)');
		      t.css('transform','rotate('+rotate+'deg)');
				},
				doVibration = function () {
					var vibrationInterval = setInterval(vibrate, config.speed),
							stopVibration = function () {
								clearInterval(vibrationInterval);
								t.css({
									position:	tPos,
									left: 0,
									top: 0
									//WebkitTransform:	'rotate(0deg)'
								});
								t.css('-webkit-transform','rotate(0deg)');
				        t.css('-moz-transform','rotate(0deg)'); 
				        t.css('-ms-transform','rotate(0deg)');
				        t.css('-o-transform','rotate(0deg)');
				        t.css('transform','rotate(0deg)');
							};
	
					setTimeout(stopVibration, config.duration);
				};				
				if (config.continuous) setInterval(doVibration, config.frequency);
				else doVibration();
	});
};