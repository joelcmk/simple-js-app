var pokemonRepository = (function(){
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  }

  function addListItem(pokemon){
    var $pokemonList = document.querySelector('.pokemon-list');
    var $listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    $listItem.appendChild(button);
    $pokemonList.appendChild($listItem)

    button.addEventListener('click', function(event){
      showDetails(pokemon);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
    console.log(item);     });
}



})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
