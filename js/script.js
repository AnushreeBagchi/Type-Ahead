
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


function ViewModel(){
var self=this;
self.cities=[];
fetch(endpoint).then(blob=>blob.json()).then(data=>cities.push(...data));

self.searchInput=ko.observable();
self.matchedArray=ko.observableArray();
      
self.findMatch = function (){
  self.matchedArray.removeAll();
  setTimeout(() => {
    self.matchedArray(self.cities.filter(place=> place.city.match(self.searchInput()) || place.state.match(self.searchInput())));
  }, 1)
 
  return true; 
};

self.onClick= function (arg){
  self.searchInput(arg.city+': '+arg.state);
  self.matchedArray.removeAll();
}

}

ko.applyBindings(ViewModel);

// Updates required:
// 1. DIsplay blank array Before
// 2. Handle backspace
// 3. Handle case sensitive
