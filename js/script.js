
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


function ViewModel(){
var self=this;
self.cities=[];
fetch(endpoint).then(blob=>blob.json()).then(data=>cities.push(...data)).then(()=>{
  self.findMatch();
});


self.searchInput=ko.observable();
self.matchedArray=ko.observableArray();
// self.matchedArray= ko.computed(function (){
//             return  self.cities.filter(place=> place.city.match(self.searchInput()) || place.state.match(self.searchInput()));
//             },self);

self.findMatch = function (){
  self.matchedArray.removeAll();
  setTimeout(() => {
    self.matchedArray(self.cities.filter(place=> place.city.match(self.searchInput()) || place.state.match(self.searchInput())));
  }, 1)
 
  return true;
}

}

ko.applyBindings(ViewModel);