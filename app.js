simply.setText({
  title: 'Hello World!',
  subtitle: 'Cruel',
});

// a-z 0-9 _

var cat_text = 'Feline';

simply.on('singleClick', function(e) {
  if (e.button === 'select') {
    simply.setText({ body: 'awesome' });
  } else if (e.button === 'up') {
    simply.setText({ subtitle: cat_text });
  } else {
    simply.setText({ title: 'Goodbye' });
  }
});

simply.begin();
