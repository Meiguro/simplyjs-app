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

var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk';

var requestWeather = function() {
  ajax({ url: weatherUrl, type: 'json' }, function(data) {
    simply.setText({ subtitle: data.main });
  });
};

simply.on('singleClick', function(e) {
  if (e.button == 'select') {
    requestWeather();
  }
});

simply.begin();
