let userNum = document.getElementById("getNumber")
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run()
    }
})

userNum.focus()

let counter = 0

function run() {
    
    ran()
    userNumber()
    compareNumbers()
}

function ran() {
    let ran = Math.floor(Math.random() * 10)
    return ran
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    return user
}

function compareNumbers() {
    let a = userNumber()
    let b = ran()
    let z = document.getElementById("compare")
    let c = document.getElementById("counter")

    if (a != b) {
        z.innerHTML = "You got " + a + ", and the computer got " + b + ", and they are not the same"
        z.style.padding = "20px"
        z.style.textAlign = "center"
        z.style.width = "700px"
        z.style.margin = "auto"
        counter++
        c.innerHTML = "You have tried " + counter + " times to get it right."
        c.style.padding = "20px"
        c.style.textAlign = "center"
        c.style.width = "500px"
        c.style.margin = "auto"
        c.style.marginTop = "20px"
    } else if (a == b) {
        z.innerHTML = "You got " + a + ", and the computer got " + b + ", and they are the same"
        z.style.padding = "20px"
        z.style.textAlign = "center"
        z.style.width = "700px"
        z.style.margin = "auto"
        c.innerHTML = "You have tried " + counter + " times to get it right."
        c.style.padding = "20px"
        c.style.textAlign = "center"
        c.style.width = "500px"
        c.style.margin = "auto"
        c.style.marginTop = "20px"
        counter = 0
    }

    resetInput()
}

function resetInput() {
    document.getElementById("getNumber").value = ""
}