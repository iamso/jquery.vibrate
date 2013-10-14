jQuery Vibrate
==============

Fork of jquery.vibrate from [Andreas Lagerkvist].

So what's different?
--------------------
The original script lets you set a specified element to vibrate every now and then. In addition, this version has an option for controlled vibration (default behavior). e.g. to show a form input error.

How to use it?
--------------
```javascript
// Setup with default options
$(element).vibrate({
	speed:		30,
	duration:	2000,
	frequency:	5000,
	spread:		3,
	continuous: false
});
```
For a demo download the repository and check out the example.

License
-------
http://creativecommons.org/licenses/by/3.0/


[Andreas Lagerkvist]:http://andreaslagerkvist.com/jquery/vibrate/