(function(){
  'use strict';

  describe("String Lengths returned in arrays ", function() {

    describe("Case for a single string", function() {

      it("should return [6] for `Godson`", function() {
        expect(stringLength('Godson')).toEqual([6]);
      });

      it("should return [3] for `Mia`", function() {
        expect(stringLength('Mia')).toEqual([3]);
      });

    });

    describe("Case for an array of strings", function() {

      it("should return [4, 5] for ['Adam', 'Frankel']", function() {
        expect(stringLength(['Adam', 'Frankel'])).toEqual([4, 7]);
      });

      it("should return [7, 7, 5] for ['Michael', 'William', 'Smith']", function() {
        expect(stringLength(['Michael', 'William', 'Smith'])).toEqual([7, 7, 5]);
      });

      it("should return [4, 2, 6] for {t: 'This', i: 'is', a: 'Andela'}", function() {
        expect(stringLength({t: 'This', i: 'is', a: 'Andela'})).toEqual([4, 2, 6]);
      });

    });

  });

})();