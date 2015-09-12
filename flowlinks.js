'use strict';
/* global Flowlinks, FlowRouter */

// Reactively adds .active to each link based on weather or not that route is present
FlowLinks.markActive = function(links) {
	// Mark active
	FlowRouter.watchPathChange();
	var path = FlowRouter.current().path;
	_.each(links, function(link, ii) {
		links[ii].active = (path === link.href);
	});
	return links;
};
