
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


function ViewModel(){
var self=this;
self.cities=[];
fetch(endpoint).then(blob=>blob.json()).then(data=>cities.push(...data)); // fetch data from the server and pushing the data to cities array

self.searchInput=ko.observable();
self.matchedArray=ko.observableArray();
      
self.findMatch = function (){
  self.matchedArray.removeAll(); // clear matched array
  
  setTimeout(() => {
    const regex= new RegExp(self.searchInput(),'i'); //for matching case insensitive search input //global insensitive
    self.matchedArray(self.cities.filter(place=> place.city.match(regex) || place.state.match(regex)));
  }, 1)
  return true;  //required for keypress event in knockout
};

// On clicking on the suggestion list
self.onClick= function (arg){
  self.searchInput(arg.city+': '+arg.state);
  self.matchedArray.removeAll();
}

}

ko.applyBindings(ViewModel);

