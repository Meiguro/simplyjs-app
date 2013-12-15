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

var fruitList = [
  { title: 'apple' }, // 0
  { title: 'orange' subtitle: '!!' }, // 1
  { title: 'mango', body: 'this is really good' }, // 2
  { title: 'kiwi' }, // 3
];

var fruitIndex = 0;

var updateFruit = function() {
    simply.setText(fruitList[fruitIndex]);
};

simply.on('singleClick', function(e) {
  if (e.button === 'select') {
    // Do nothing
  } else if (e.button === 'up') {
    if (--fruitIndex < 0) { fruitIndex = fruitList.length - 1; }
    updateFruit();
  } else if (e.button === 'down') {
    if (++fruitIndex >= fruitList.length) { fruitIndex = 0; }
    updateFruit();
  }
});

simply.begin();
