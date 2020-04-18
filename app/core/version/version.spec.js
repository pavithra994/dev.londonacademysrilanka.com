'use strict';

describe('londonAcademyApp.version module', function() {
  beforeEach(module('londonAcademyApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
