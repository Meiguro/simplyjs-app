simply.setText({
  title: 'Hello World!',
  subtitle: 'Cruel',
});

var catText = 'Feline';

var fruitList = [
  'apple', // 0
  'orange', // 1
  'mango', // 2
  'kiwi', // 3
];

// Math.random() -> 0.5
// Math.random() * fruitList.length -> 2
// Math.floor(2.232) = 2

var fruitIndex = 0;

var getRandomIndex = function() {
  return Math.floor(Math.random() * fruitList.length);
};

var updateFruit = function() {
    simply.setText({ body: fruitList[fruitIndex] });
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
