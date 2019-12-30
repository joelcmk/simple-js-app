var pokemonRepository = (function(){
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  var $modalContainer = document.querySelector('#modal-container');

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

  function showModal(img, name, height) {
    //Clear all existing modal content
    $modalContainer.innerHTML = "";

    var modal = document.createElement('div');
    modal.classList.add('modal');

    // Add the new modal content
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    var imgElement = document.createElement('img');
    imgElement.setAttribute("src", img);

    var nameElement = document.createElement('h1');
    nameElement.innerText = name;

    var heightElement = document.createElement('p');
    heightElement.innerText = 'Height = ' + height;

    modal.appendChild(closeButtonElement);
    modal.appendChild(imgElement);
    modal.appendChild(nameElement);
    modal.appendChild(heightElement);
    $modalContainer.appendChild(modal);

    $modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    $modalContainer.classList.remove('is-visible')
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    };
  })

  window.addEventListener('click', (e) => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    };
  })

  function showDetails(item) {
    loadDetails(item).then(function () {
    showModal(item.imageUrl, item.name, item.height);     });
}


 return {
    getAll: getAll,
    add: add,
    showModal: showModal,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  }

})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
