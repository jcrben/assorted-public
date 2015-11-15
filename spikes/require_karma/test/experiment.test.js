define(['logger', 'src/textTransformer', 'bower_components/chai/chai'], function(logger, textTransformer, chai) {
var expect = chai.expect;
console.log('running experiment.js')
    describe('just checking', function() {

        // testHelper.setup();

        it('works for app', function() {
            // var el = $('<div></div>');
            var x = 10;
            var xTransformed = textTransformer(10);
            console.log('xTransformed is:', xTransformed)
            expect(xTransformed).to.equal('10 points');
            // var app = new App(el);
            // app.render();

            // expect(el.text()).toEqual('require.js up and running');
        });


        it('works for underscore', function() {
            // just checking that _ works
            // expect(_.size([1,2,3])).toEqual(3);
        });

    });

});