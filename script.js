let done = false
setInterval(() => {
    if (done) {
        return
    }
    document.getElementsByClassName("target")[0].style.left = Math.random() * 700 + "px"
    document.getElementsByClassName("target")[0].style.top = Math.random() * 500 + "px"
}, 1000)


let score = 1
document.getElementsByClassName("target")[0].onclick = () => {
    if (done) {
        return
    }
    score += 1
    document.getElementsByClassName("score")[0].innerHTML = score
    document.getElementsByClassName("target")[0].style.left = Math.random() * 700 + "px"
    document.getElementsByClassName("target")[0].style.top = Math.random() * 500 + "px"
}


let finish = Date.now() + 10000

setInterval(() => {
    if (Date.now() > finish) {
        done = true
        return
    }
    document.getElementsByClassName("timer")[0].innerHTML = (finish - Date.now()) / 1000.0
}, 10)
