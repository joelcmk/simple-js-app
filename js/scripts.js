var repository = [
  {name:'Bulbasaur', height: 0.7, type: 'grass'},
  {name:'Charmander', height: 1.7, type: 'pison'},
  {name:'Primeape', height: 0.5, type: 'grass'},
];

Object.keys(repository).forEach(function(currentItem) {
  if(repository[currentItem].height >= 1.7){
    document.write(repository[currentItem].name + ': ' + repository[currentItem].height + ' - Wow that\'s big!<br>');
  } else {
    document.write(repository[currentItem].name + ': ' + repository[currentItem].height + '<br>');
  }
});
