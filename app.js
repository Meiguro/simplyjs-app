simply.setText({
  title: 'Hello World!',
  subtitle: 'Cruel',
});

var catText = 'Feline';

var fruitList = [
  'apple',
  'orange',
  'mango',
  'kiwi',
];

simply.on('singleClick', function(e) {
  if (e.button === 'select') {
    simply.setText({ body: fruitList[2] });
  } else if (e.button === 'up') {
    simply.setText({ subtitle: catText });
  } else {
    simply.setText({ title: 'Goodbye' });
  }
});

simply.begin();
