
function rabbitPopulation (lifespan, numOfYears) {
  
  var rabbits = [new Rabbit('young')]
  function Rabbit (lifecycle) {
    this.age = 0;
    this.lifecycle = lifecycle; // 'young', 'adult', 'pregnant', 'dead'
  }
  for (var i = 0; i < numOfYears; i++) {
      debugger;
      rabbits.forEach(function(rabbit, index, arr) {
        if (rabbit.lifecycle === 'pregnant') {
          arr.push(new Rabbit('young'));
          rabbit.age++;
          return;
        }
        
        if (rabbit.age >= lifespan) {
          rabbit.lifecycle = 'dead';
        }
        
        
        if (rabbit.lifecycle === 'adult') {
          rabbit.lifecycle = 'pregnant';
        }
        
          
        if (rabbit.lifecycle === 'young') {
          rabbit.lifecycle = 'adult';
        }
        
        rabbit.age++;
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

console.log(rabbitPopulation(4, 5));
// [ { age: 4, lifecycle: 'pregnant' },
//   { age: 1, lifecycle: 'adult' },
//   { age: 0, lifecycle: 'young' } ] 4
// 3

