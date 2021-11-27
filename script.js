function iniciarContainer(containerID) {
    const container = document.getElementById(containerID)
    if(container) {
        container.classList.add('mostrar')
        container.addEventListener('click', (e) => {
        if(e.target.id == container || e.target.className == 'fechar') {
            container.classList.remove('mostrar')
        }
    })
    }
}


