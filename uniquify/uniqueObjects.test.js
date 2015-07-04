var expect = chai.expect;


describe('uniquify', function() {
  var arr, objects = null;
  
  beforeEach(function() {
    objects = [
      { first: function() {console.log('hi')} },
      { second: 'someString' },
      { 2: {nested: {nestedAgain: 'randomString'}} },
      { "&@$*": "weird key" },
      { 2: 25 }, // duplicate
      { second: 'someString'} // another duplicate
    ];
    arr = [objects[0], _.cloneDeep(objects[0]), objects[1], objects[1],
               JSON.parse(JSON.stringify(objects[1])), objects[2]];
  });

    it('should remove duplicate objects', function() {
      console.log('arr is', arr);
      // var uniqueObjects = uniquifyObjects(arr);
      // expect(uniqueObjects.length).to.equal(7);
    });
})
