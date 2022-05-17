var dragAndDrop = () => {
    const draggable = document.querySelector('.draggable')
    var dropZone = document.querySelectorAll('.dropzone')

    const dragStart = function(){
        setTimeout(() =>{
            this.classList.add('hide')
        },0)
    }
    const dragEnd = function(){
        this.classList.remove('hide')
    }
    const dragOver = function(evt){
        evt.preventDefault()
    }

    const dragLeave = function(){
        this.classList.remove('hovered')
    }

    const dragEnter = function(){
        this.classList.add('hovered')
    }

    const dragDrop = function(){
        this.append(draggable)
    }

    dropZone.forEach((zone) => {
        zone.addEventListener('dragover', dragOver)
        zone.addEventListener('dragenter', dragEnter)
        zone.addEventListener("dragleave", dragLeave)
        zone.addEventListener('drop', dragDrop)
    });

    draggable.addEventListener('dragstart', dragStart)
    draggable.addEventListener('dragend', dragEnd)
}

dragAndDrop()