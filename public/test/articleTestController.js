
describe('mainController', function() {
    var scope;
    var controller;

    beforeEach(module('chirpApp'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('mainController', {
            $scope: scope
        });
    }));


    it('should have a post function', function() {
        expect(scope.images).to.be.eql([]);
        expect(scope.post).to.be.a('function');
    });
});