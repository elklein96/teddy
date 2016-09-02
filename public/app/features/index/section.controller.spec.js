'use strict';
var $scope, $controller;

describe('Template Controller', function() {

    beforeEach(module('templateApp.main'));

    beforeEach(inject(function(_$controller_) {
        $scope = {
            foo : ""
        };
        
        $controller = _$controller_('templateController', {
            $scope: $scope
        });
    }));

    it('Template Controller should exist', inject(function() {
        expect($scope.foo).to.be.equal('bar');
    }));
});