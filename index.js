const inventory = newInventory();
move(inventory).to(0, 0);

// Define the character image and move it with arrow keys
const character = newImage('assets/green-character/static.gif');

function handleDirectionChange() {
    if (direction === null) {
      character.src = 'assets/green-character/static.gif';
    }
    if (direction === 'west') {
      character.src = 'assets/green-character/west.gif';
    }
    if (direction === 'north') {
      character.src = 'assets/green-character/north.gif';
    }
    if (direction === 'east') {
      character.src = 'assets/green-character/east.gif';
    }
    if (direction === 'south') {
      character.src = 'assets/green-character/south.gif';
    }
  }
  
  move(character).withArrowKeys(100, 250, handleDirectionChange);

// Move other items
move(newImage('assets/tree.png')).to(200, 450);
move(newImage('assets/pillar.png')).to(350, 250);
move(newImage('assets/pine-tree.png')).to(450, 350);
move(newImage('assets/crate.png')).to(150, 350);
move(newImage('assets/well.png')).to(500, 575);
move(newItem('assets/sword.png')).to(500, 555);
move(newItem('assets/shield.png')).to(165, 335);
move(newItem('assets/staff.png')).to(600, 250);


// Event listener for character movement
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    direction = 'north';
  } else if (event.key === 'ArrowRight') {
    direction = 'east';
  } else if (event.key === 'ArrowDown') {
    direction = 'south';
  } else if (event.key === 'ArrowLeft') {
    direction = 'west';
  }
});

// Set interval function for character movement
setInterval(function () {
  if (direction === 'west') {
    x = x - 1;
  } else if (direction === 'north') {
    y = y + 1;
  } else if (direction === 'east') {
    x = x + 1;
  } else if (direction === 'south') {
    y = y - 1;
  }

  move(character).to(x, y);
}, 1);


document.addEventListener('keydown', function (e) {
    if (e.repeat) return;
  
    if (e.key === 'ArrowLeft') {
      direction = 'west';
    }
    if (e.key === 'ArrowUp') {
      direction = 'north';
    }
    if (e.key === 'ArrowRight') {
      direction = 'east';
    }
    if (e.key === 'ArrowDown') {
      direction = 'south';
    }
  });
  
  document.addEventListener('keyup', function (e) {
    direction = null;
  });

  function move(element) {
    element.style.position = 'fixed';
  
    function moveToCoordinates(left, bottom) {
      element.style.left = left + 'px';
      element.style.bottom = bottom + 'px';
    }
  
    function moveWithArrowKeys(left, bottom, callback) {
      let direction = null;
      let x = left;
      let y = bottom;
  
      element.style.left = x + 'px';
      element.style.bottom = y + 'px';
  
      function moveCharacter() {
        if (direction === 'west') {
          x -= 1;
        }
        if (direction === 'north') {
          y += 1;
        }
        if (direction === 'east') {
          x += 1;
        }
        if (direction === 'south') {
          y -= 1;
        }
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';
      }
  
  
      setInterval(moveCharacter, 1);

      document.addEventListener('keydown', function (e) {
        if (e.repeat) return;
  
        if (e.key === 'ArrowLeft') {
          direction = 'west';
        }
        if (e.key === 'ArrowUp') {
          direction = 'north';
        }
        if (e.key === 'ArrowRight') {
          direction = 'east';
        }
        if (e.key === 'ArrowDown') {
          direction = 'south';
        }
  
        // Call the callback function when direction changes
        callback();
      });
  
      document.addEventListener('keyup', function (e) {
        direction = null;
        // Call the callback function when direction changes
        callback();
      });
    }
  
    return {
      to: moveToCoordinates,
      withArrowKeys: moveWithArrowKeys,
    };
  }
  
  
  // Example usage with another image (tree)
  const tree = newImage('assets/tree.png');
  move(tree).to(200, 450);
  
  function moveWithArrowKeys(left, bottom, callback) {
  
    document.addEventListener('keydown', function (e) {
      if (e.repeat) return;
  
      if (e.key === 'ArrowLeft') {
        direction = 'west';
      }
      if (e.key === 'ArrowUp') {
        direction = 'north';
      }
      if (e.key === 'ArrowRight') {
        direction = 'east';
      }
      if (e.key === 'ArrowDown') {
        direction = 'south';
      }
  
      // Check if a callback function has been provided before calling it
      if (typeof callback === 'function') {
        callback();
      }
    });
  
    document.addEventListener('keyup', function (e) {
      direction = null;
      
      // Check if a callback function has been provided before calling it
      if (typeof callback === 'function') {
        callback();
      }
    });
  }