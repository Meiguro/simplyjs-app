simply.setText({
  title: 'Hello World!',
  subtitle: 'Cruel',
});

var map = [
  ['x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'e', 'v', 'c', 'x', 'x'],
  ['x', 'a', 'o', 'f', 'x', 'x'],
  ['x', 'n', 'b', 'x', 'h', 'x'],
  ['s', 'x', 'd', 'd', 'f', 'x'],
  ['x', 'x', 'x', 'x', 'r', 'g'],
];

// map[y][x] 

var pos = { x: 2, y: 2 };

var dirs = [
  { x: 0, y: 1, name: 'North' }, // N
  { x: 1, y: 0, name: 'East' }, // E
  { x: 0, y: -1, name: 'South' }, // S
  { x: -1, y: 0, name: 'West' }, // W
];

var dirIndex = 0;

var step = function() {
  var dir = dirs[dirIndex];
  pos.x += dir.x;
  pos.y += dir.y;
};

var changeDir = function(delta) {
  dirIndex += delta;
  if (dirIndex >= dirs.length) {
    dirIndex = 0;
  } else if (dirIndex < 0) {
    dirIndex = dirs.length - 1;
  }
  simply.setText({ subtitle: dirs[dirIndex].name });
}

simply.on('singleClick', function(e) {
  switch (e.button) {
    case 'select':
      step();
      simply.setText({
        title: map[pos.y][pos.x],
        body: pos.x + ' ' pos.y,
      });
      break;
    case 'up':
      changeDir(-1);
      break;
    case 'down':
      changeDir(1);
      break;
  }
});

simply.on('longClick', function(e) {
  simply.setText({ title: catText }, true);
});

simply.begin();

requestWeather();
