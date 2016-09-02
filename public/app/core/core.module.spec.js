'use strict';

describe('Core Factories', function() {

    var reqHandler;

    beforeEach(function() {
        module('templateApp.core');
    });

    afterEach(inject(function($httpBackend) {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

    it('templateFactory.fetch() success', inject(function(templateFactory, $httpBackend) {
        $httpBackend.whenGET('/api')
                .respond(200, {foo:'bar'});

        templateFactory.fetch().then(function(data) {
            expect(data.foo).to.be.equal('bar');
        });
        $httpBackend.flush();
    }));

    it('templateFactory.change() success', inject(function(templateFactory, $httpBackend) {
        $httpBackend.whenPUT('/api')
                .respond(200, {foo:'bas'});

        templateFactory.change().then(function(data) {
            expect(data.foo).to.be.equal('bas');
        });
        $httpBackend.flush();
    }));

    it('templateFactory.create() success', inject(function(templateFactory, $httpBackend) {
        $httpBackend.whenPOST('/api')
                .respond(200, {foo:'bar'});

        templateFactory.create().then(function(data) {
            expect(data.foo).to.be.equal('bar');
        });
        $httpBackend.flush();
    }));

    it('templateFactory.delete() success', inject(function(templateFactory, $httpBackend) {
        $httpBackend.whenDELETE('/api')
                .respond(200, {foo:'bas'});

        templateFactory.remove().then(function(data) {
            expect(data.foo).to.be.equal('bas');
        });
        $httpBackend.flush();
    }));

    it('templateFactory.fetch() bad response', inject(function(templateFactory, $httpBackend) {
        $httpBackend.whenGET('/api')
                .respond(500, {res:'internal error'});

        templateFactory.fetch().catch(function(data) {
            expect(data.data.res).to.be.equal('internal error');
        });
        $httpBackend.flush();
    }));

    it('templateFactory.change() bad response', inject(function(templateFactory, $httpBackend) {
        $httpBackend.whenPUT('/api')
                .respond(500, {res:'internal error'});

        templateFactory.change().catch(function(data) {
            expect(data.data.res).to.be.equal('internal error');
        });
        $httpBackend.flush();
    }));

    it('templateFactory.create() bad response', inject(function(templateFactory, $httpBackend) {
        $httpBackend.whenPOST('/api')
                .respond(500, {res:'internal error'});

        templateFactory.create().catch(function(data) {
            expect(data.data.res).to.be.equal('internal error');
        });
        $httpBackend.flush();
    }));

    it('templateFactory.delete() bad response', inject(function(templateFactory, $httpBackend) {
        $httpBackend.whenDELETE('/api')
                .respond(500, {res:'internal error'});

        templateFactory.remove().catch(function(data) {
            expect(data.data.res).to.be.equal('internal error');
        });
        $httpBackend.flush();
    }));
});