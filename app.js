var localStorage = window.localStorage;

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

var saveState = function() {
  localStorage.setItem('pos', pos);
  localStorage.setItem('dirIndex', dirIndex);
};

var loadState = function() {
  var savedPos = localStorage.getItem('pos');
  if (savedPos !== null) {
    pos = savedPos;
  }
  var savedDirIndex = localStorage.getItem('dirIndex');
  if (savedDirIndex !== null) {
    dirIndex = savedDirIndex;
  }
};

var step = function() {
  var dir = dirs[dirIndex];
  pos.x += dir.x;
  pos.y += dir.y;
  saveState();
  
  if (pos.x == 3 && pos.y == 4) {
    Pebble.showSimpleNotificationOnPebble('Event', 'There are dragons before you.');
  }
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

var showPos = function() {
  simply.setText({
    title: map[pos.y][pos.x],
    body: pos.x + ' ' + pos.y,
  });
}

simply.on('singleClick', function(e) {
  switch (e.button) {
    case 'select':
      step();
      showPos();
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

loadState();

showPos();
changeDir(1);
