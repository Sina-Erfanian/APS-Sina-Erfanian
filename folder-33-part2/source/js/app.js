let iElement = document.querySelectorAll("i")
let audioElement = document.querySelectorAll("audio")

iElement.forEach(ele => {
    ele.addEventListener("click",(e)=> {
        let data = e.target.dataset.name
        audioElement.forEach(elem => {
            if(elem.dataset.name === data) {
                elem.currentTime = 0
                elem.play()
            } else {
                elem.pause()
            }
        })
    })
})