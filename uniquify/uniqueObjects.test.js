var expect = chai.expect;

describe('uniquify', function() {
  var arr = null, 
      objects = null,
      uniqueObjects = null;
  
  beforeEach(function() {

    objects = [
      { first: function() {console.log('hi');} },
      { second: 'someString' },
      { 2: {nested: {nestedAgain: 'randomString'}} },
      { "&@$*": "" },
      { 2: 25 }, 
      { null: undefined}
    ];
    arr = [objects[0], _.cloneDeep(objects[0]), objects[1], objects[1], objects[2]];

  });

    it('should remove only duplicate objects', function() {
      expect(arr.length).to.equal(5);
      uniqueObjects = uniquifyObjects(arr);
      expect(uniqueObjects.length).to.equal(4);
    });

    it('should maintain the order less the duplicates', function() {
      expect(arr[2]).to.equal(arr[3]);
      uniqueObjects = uniquifyObjects(arr);
      expect(uniqueObjects[2]).to.not.equal(uniqueObjects[3]);
    });

    it('should return the same array', function() {
      uniqueObjects = uniquifyObjects(arr);
      expect(uniqueObjects).to.equal(arr);
    });
});