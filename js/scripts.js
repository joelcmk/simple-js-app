var repository = [
  {name:'Bulbasaur', height: 0.7, type: 'grass'},
  {name:'Charmander', height: 1.7, type: 'pison'},
  {name:'Primeape', height: 0.5, type: 'grass'},
];
for (var i = 0; i < repository.length; i++) {
    if(repository[i].height >= 1.7) {
      document.write('<p>'+ repository[i].name + ' (height: ' +repository[i].height + ') - Wow that\'s big!</p>');
    } else {
      document.write('<p>'+ repository[i].name + ' (height: ' +repository[i].height + ')</p>');
    }
}


//document.write(repository[0].name);
