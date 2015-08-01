
// age is private per http://javascript.crockford.com/private.html
function rabbitPopulation (lifespan, numOfYears) {
  
  var rabbits = [new Rabbit('young')]
  function Rabbit (lifecycle) {
    var age = 0;
    this.lifecycle = lifecycle; // 'young', 'adult', 'pregnant', 'dead'
    this.incrementAge = function() {
      age++;
    }
  }

  Rabbit.prototype.live = function() {
    this.incrementAge();
    if (this.age >= lifespan) {
      this.lifecycle = 'dead';
    }

    if (this.lifecycle === 'adult') {
      this.lifecycle = 'pregnant';
    } 

    if (this.lifecycle === 'young') {
      this.lifecycle = 'adult';
    }
  }
  for (var i = 0; i < numOfYears; i++) {
      rabbits.forEach(function(rabbit, index, arr) {
        if (rabbit.lifecycle === 'pregnant') {
          arr.push(new Rabbit('young'));
          rabbit.live();
          return;
        }
        rabbit.live();

      });

  }
  
  console.log(rabbits, numOfYears);
  var result = 0;
  for (var j = 0; j < rabbits.length; j++) {
        if (rabbits[j].lifecycle != 'dead') {
          result++
        } else {
        }
  }
  return result;
}

console.log(rabbitPopulation(4, 4));
// [ { age: 4, lifecycle: 'pregnant' },
//   { age: 1, lifecycle: 'adult' },
//   { age: 0, lifecycle: 'young' } ] 4
// 3

