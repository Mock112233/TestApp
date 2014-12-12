// Global queue that keeps track of all commands, always required.
var _ctq = _ctq || [];
var PUBLISHER_ID = 522;

_ctq.push(['newCompareToStrip', 'a']);

_ctq.push(['a.setPublisherID', PUBLISHER_ID]);

_ctq.push(['a.setFormID', 'search-form']);
_ctq.push(['a.setCityNameID', 'city']);
_ctq.push(['a.setCheckInID', 'check-in']);
_ctq.push(['a.setCheckOutID', 'check-out']);
_ctq.push(['a.setGuestsID', 'guests']);
_ctq.push(['a.setRoomsID', 'rooms']);		
_ctq.push(['a.setAnchorID', 'ct-anchor']);

 _ctq.push(['a.optThumbSize', 'small']);

_ctq.push(['a.optMaxChecked', '1']);			

_ctq.push(['a.optMaxAdvertisers', '6']);					

// Optional parameter to specify a URL or string for tracking purposes.
// Shows up in your referral reports.
	_ctq.push(['a.setReferralURL', 'http://www.clicktripz.com/docs/api.php']);

// If set to false, will display windows "side by side".
_ctq.push(['a.optCascadeWindows', 'false']);

// Draw the CompareToStrip in your specified anchor div.
_ctq.push(['a.draw']);
(function() {
	var ct = document.createElement('script');
	ct.type = 'text/javascript';
	ct.async = true;
	ct.src = ('https:' == document.location.protocol ? 'https://' : 'http://')
		   + 'static.clicktripz.com/scripts/js/ct.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ct, s);
})();