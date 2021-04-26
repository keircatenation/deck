var showLaserTrail = false;
addEventListener('mousedown', () => showLaserTrail = true)
addEventListener('mouseup', () => showLaserTrail = false)
addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'ArrowUp':
    case 'ArrowDown':
    case 'ArrowRight':
    case 'ArrowLeft':
      Array.from(document.getElementsByClassName('trail')).forEach(n => n.remove())
    default:
      return;
  }
})
addEventListener('mousemove', function(event){
  
  if(showLaserTrail) {
    var dir = Math.abs(event.movementX) / Math.abs(event.movementY)
    var dif = Math.abs(event.movementX) - Math.abs(event.movementY)
    var trail = document.createElement('div');
    trail.className = 'trail';
    if(dir >= 1.25 && dif > 4) trail.classList.add('horiz')
    if(dir <= 0.75 && dif > 4) trail.classList.add('vert')
    trail.style.left = (event.pageX - 3) + 'px';
    trail.style.top = (event.pageY - 3) + 'px';
    document.body.appendChild(trail);

    //delete the node after 2 1/2  second
    if(!event.shiftKey) {
      setTimeout(function(){
        document.body.removeChild(trail);
      }, 4500); //adjust time here to delete. The number is in milliseconds
    }
  }
    
  });