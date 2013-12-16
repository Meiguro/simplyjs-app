simply.setText({
  title: 'Hello World!',
  subtitle: 'Cruel',
});

var catText = 'Feline';

/*
var getRandomIndex = function() {
  return Math.floor(Math.random() * fruitList.length);
};
*/

var locations = [
  'London,uk',
  'San+Jose,us',
  'Palo+Alto,us',
];

var locationIndex = 0;

var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';

var requestWeather = function() {
  var url = weatherUrl + locations[locationIndex];
  var success = function(data) {
    simply.setText({ subtitle: data.main.temp.toString() });
  };
  var failure = function(data, status) {
    simply.setText({ subtitle: ':( ' + status }, true);
  };
  ajax({ url: url, type: 'json' }, success, failure);
  simply.setText({ subtitle: 'Loading...' });
};
  
simply.on('singleClick', function(e) {
  console.log('Pressed ' + e.button);
  if (e.button == 'down') {
    if (++locationIndex >= locations.length) { locationIndex = 0; }
    requestWeather();
  }
});

simply.on('longClick', function(e) {
  simply.setText({ title: catText }, true);
});

simply.begin();

requestWeather();
