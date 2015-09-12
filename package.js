'use strict';
/* global Package */

Package.describe({
  summary: 'FlowRouter link helper method(s)',
  version: '0.0.1',
  name:'anthonyastige:flowlinks',
  git:'git@github.com:AnthonyAstige/flowlinks.git'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');

	api.use([
		'kadira:flow-router@2.6.0'
	]);

	api.addFiles([
		'export.js',
		'flowlinks.js'
	], 'client');

	api.export('FlowLinks');
});
