simply.setText({
  title: 'Hello World!',
  subtitle: 'Cruel',
});

simply.on('singleClick', function(e) {
  if (e.button == 'select') {
    simply.setText({ body: 'awesome' });
  }
});
