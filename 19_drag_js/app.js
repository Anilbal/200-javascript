document.addEventListener('DOMContentLoaded', (event) => {
    const draggable = document.getElementById('draggable');
    const dropzone = document.getElementById('dropzone');
  
    // Drag start event
    draggable.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
      setTimeout(() => {
        e.target.style.opacity = '0.5';
      }, 0);
    });
  
    // Drag end event
    draggable.addEventListener('dragend', (e) => {
      e.target.style.opacity = '1';
    });
  
    // Drag over event
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    });
  
    // Drop event
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData('text/plain');
      const draggableElement = document.getElementById(id);
      dropzone.appendChild(draggableElement);
      e.dataTransfer.clearData();
    });
  });
  