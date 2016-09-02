'use strict';
var $scope, $controller;

describe('Template Controller', function() {

    beforeEach(function() {
        module('ngRoute');
        module('templateApp.color');
    });

    beforeEach(inject(function(_$controller_) {
        $scope = {
            color : ""
        };
        
        $controller = _$controller_('colorController', {
            $scope: $scope,
            $routeParams: {color: 'red'}
        });
    }));

    it('Color Controller should exist', inject(function() {
        expect($scope.color).to.be.equal('red');
    }));
});