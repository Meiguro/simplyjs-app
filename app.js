simply.setText({
  title: 'Hello World!',
  subtitle: 'Cruel',
});

simply.on('singleClick', function(e) {
  if (e.button === 'select') {
    simply.setText({ body: 'awesome' });
  } else if (e.button === 'up') {
    simply.setText({ subtitle: '(^_^)' });
  } else {
    simply.setText({ title: 'Goodbye' });
  }
});

simply.begin();
