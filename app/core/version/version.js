'use strict';

angular.module('myApp.version', [
  'londonAcademyApp.version.interpolate-filter',
  'londonAcademyApp.version.version-directive'
])

.value('version', '0.1');
