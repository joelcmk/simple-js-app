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
    add: add,
    addListItem: addListItem
  }

  function addListItem(pokemon){
    var $pokemonList = document.querySelector('.pokemon-list');
    var $listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = repository[pokemon].name;
    button.classList.add('pokemon-button');
    $listItem.appendChild(button);
    $pokemonList.appendChild($listItem)

    button.addEventListener('click', function (pokemonName){
      var pokemonName = repository[pokemon].name;
      showDetails(pokemonName);
    });
  }

  function showDetails(pokemon){
      console.log(pokemon);
  }



})();

Object.keys(pokemonRepository.getAll()).forEach(function(currentItem){
  pokemonRepository.addListItem(currentItem);
})
