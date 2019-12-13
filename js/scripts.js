var pokemonRepository = (function(){
  var repository = [
    {name:'Bulbasaur', height: 0.7, type: 'grass'},
    {name:'Charmander', height: 1.7, type: 'pison'},
    {name:'Primeape', height: 0.5, type: 'grass'},
  ];

  function getAll(){
    return repository;
  }

  function add(item){
    if(typeof(item) !== 'object') {
      alert(item + 'is not an object');
    } else {
    return repository.push(item);
    }
  }

  return {
    getAll: getAll,
    add: add
  }
})();

Object.keys(pokemonRepository.getAll()).forEach(function(currentItem) {
  if(pokemonRepository.getAll()[currentItem].height >= 1.7){
    document.write(pokemonRepository.getAll()[currentItem].name + ': ' + pokemonRepository.getAll()[currentItem].height + ' - Wow that\'s big!<br>');
  } else {
    document.write(pokemonRepository.getAll()[currentItem].name + ': ' + pokemonRepository.getAll()[currentItem].height + '<br>');
  }
});
