let list = document.getElementById('list')
let inputBtn = document.getElementById('input-btn')
var close = document.getElementsByClassName("delete");
var edit = document.getElementsByClassName("edit");
let msg = document.getElementById('msg')
let msgAfter = window.getComputedStyle(msg, '::after')
let colorNum = 1
let taskNum = 1

inputBtn.addEventListener('click', () => {

    let inputTxt = document.getElementById('input-txt').value;

    if (inputTxt == "") {
        document.getElementById('input-txt').setAttribute('placeholder', 'Write someting first')
    } else {
        localStorage.setItem('Task' + taskNum, inputTxt)
        taskNum++
        document.getElementById('input-txt').value = ""

        msg.style.setProperty('--animate', "")
        msg.innerHTML = "Your Task has been added!"
        msg.style.opacity = "1"
        msg.style.setProperty('--animate', "msgWidth 3s")
        setTimeout(() => {
            msg.style.opacity = "0"
        }, 2200);
        setTimeout(() => {
            msg.innerHTML = ""
            msg.style.setProperty('--animate', "")
        }, 3000)

        if (colorNum == 1) {
            list.innerHTML += `<li>
                                <div class="red"></div>
                                <p class ="content" onfocusout = "remove()">${inputTxt}</p>
                                <button class="edit"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR4nN2UsUoDURBFVwu/RLBWok0+R9toYwKptpOdWcuAVbIzSWdn428Ya8FOOzFYi0dmk5U0QvJsTG71mIHDvTPvvSzbOuU5uyZcuPBoyjTOUUuHKUNXZqZcutB15aMqOU+HCe+jkuOm7kI3nCbBTPgy4XUiHDS9Sum58JDkrFLarty58hLQcOrKzJVOcszbnL2AhtOomzJcaSm/zWwRs13HXxUG7JhyU2+z4GS5NxGOXHhzZfS/YH7N4VqwkBX0Y2YutLIl1dtcZwGNTHkyYfBTmF/cVhJsfMW+K5jwacLZn2ChuJwmPI9LThfQQTIs5MJ9vICA1k4jfkE/+SfxAM6hnYifBNkIfQPGOTor+uSdmAAAAABJRU5ErkJggg=="></button>
                                <button class="delete"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nNVVu0oDQRTdD4gKgtj6+I1Uks6Ij8I/sBWsLBPQmLl3EdRONGTuChb5hyQfYRH7lHZqpcWRO7sL6ysmzoh64MDMXWbOnnsuTGQJZ5bxLAyEoE3vOomK0GKnhlIUCJ0aSkJ4elVU9VACn97pLBL2Q1I+EhGGCUy8E4kCQ35dRAzKrqcGZd1PlINJz3wtwqhkPa1k+0lyqIwlEgoy0gmh7qaNUM+/jU1Kz/wRJ+YfBW8JN6Ot/QTEI/goQxJjTQh9S3hUCqMnhGowJ8I4EsJAGOuXhCllQtiwjFtLOPQWSVIHg4tjzLabWCjUF1sNzKmQc+QjIoS+OrCMZUu4S2KsKHXdamJJDLYsofut90QYOypiGQ/anuzv3eW5mNauTjEtjHsdt71J34t2jN1xRM4NZpyID4TR05A1j7ftcrUY265dXiKEqoarIReD1/V1A/OWMWzHWPUSUeiYunFlbGoGSueAMRTGgbdADueI0NWMHAndooMXsZAfcNhcEUsAAAAASUVORK5CYII="></button>
                            </li>`
            colorNum = 2
        } else if (colorNum == 2) {
            list.innerHTML += `<li>
                                <div class="blue"></div>
                                <p class ="content" onfocusout = "remove()">${inputTxt}</p>
                                <button class="edit"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR4nN2UsUoDURBFVwu/RLBWok0+R9toYwKptpOdWcuAVbIzSWdn428Ya8FOOzFYi0dmk5U0QvJsTG71mIHDvTPvvSzbOuU5uyZcuPBoyjTOUUuHKUNXZqZcutB15aMqOU+HCe+jkuOm7kI3nCbBTPgy4XUiHDS9Sum58JDkrFLarty58hLQcOrKzJVOcszbnL2AhtOomzJcaSm/zWwRs13HXxUG7JhyU2+z4GS5NxGOXHhzZfS/YH7N4VqwkBX0Y2YutLIl1dtcZwGNTHkyYfBTmF/cVhJsfMW+K5jwacLZn2ChuJwmPI9LThfQQTIs5MJ9vICA1k4jfkE/+SfxAM6hnYifBNkIfQPGOTor+uSdmAAAAABJRU5ErkJggg=="></button>
                                <button class="delete"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nNVVu0oDQRTdD4gKgtj6+I1Uks6Ij8I/sBWsLBPQmLl3EdRONGTuChb5hyQfYRH7lHZqpcWRO7sL6ysmzoh64MDMXWbOnnsuTGQJZ5bxLAyEoE3vOomK0GKnhlIUCJ0aSkJ4elVU9VACn97pLBL2Q1I+EhGGCUy8E4kCQ35dRAzKrqcGZd1PlINJz3wtwqhkPa1k+0lyqIwlEgoy0gmh7qaNUM+/jU1Kz/wRJ+YfBW8JN6Ot/QTEI/goQxJjTQh9S3hUCqMnhGowJ8I4EsJAGOuXhCllQtiwjFtLOPQWSVIHg4tjzLabWCjUF1sNzKmQc+QjIoS+OrCMZUu4S2KsKHXdamJJDLYsofut90QYOypiGQ/anuzv3eW5mNauTjEtjHsdt71J34t2jN1xRM4NZpyID4TR05A1j7ftcrUY265dXiKEqoarIReD1/V1A/OWMWzHWPUSUeiYunFlbGoGSueAMRTGgbdADueI0NWMHAndooMXsZAfcNhcEUsAAAAASUVORK5CYII="></button>
                            </li>`
            colorNum = 3
        } else {
            list.innerHTML += `<li>
                                <div class="yellow"></div>
                                <p class ="content" onfocusout = "remove()">${inputTxt}</p>
                                <button class="edit" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR4nN2UsUoDURBFVwu/RLBWok0+R9toYwKptpOdWcuAVbIzSWdn428Ya8FOOzFYi0dmk5U0QvJsTG71mIHDvTPvvSzbOuU5uyZcuPBoyjTOUUuHKUNXZqZcutB15aMqOU+HCe+jkuOm7kI3nCbBTPgy4XUiHDS9Sum58JDkrFLarty58hLQcOrKzJVOcszbnL2AhtOomzJcaSm/zWwRs13HXxUG7JhyU2+z4GS5NxGOXHhzZfS/YH7N4VqwkBX0Y2YutLIl1dtcZwGNTHkyYfBTmF/cVhJsfMW+K5jwacLZn2ChuJwmPI9LThfQQTIs5MJ9vICA1k4jfkE/+SfxAM6hnYifBNkIfQPGOTor+uSdmAAAAABJRU5ErkJggg=="></button>
                                <button class="delete"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nNVVu0oDQRTdD4gKgtj6+I1Uks6Ij8I/sBWsLBPQmLl3EdRONGTuChb5hyQfYRH7lHZqpcWRO7sL6ysmzoh64MDMXWbOnnsuTGQJZ5bxLAyEoE3vOomK0GKnhlIUCJ0aSkJ4elVU9VACn97pLBL2Q1I+EhGGCUy8E4kCQ35dRAzKrqcGZd1PlINJz3wtwqhkPa1k+0lyqIwlEgoy0gmh7qaNUM+/jU1Kz/wRJ+YfBW8JN6Ot/QTEI/goQxJjTQh9S3hUCqMnhGowJ8I4EsJAGOuXhCllQtiwjFtLOPQWSVIHg4tjzLabWCjUF1sNzKmQc+QjIoS+OrCMZUu4S2KsKHXdamJJDLYsofut90QYOypiGQ/anuzv3eW5mNauTjEtjHsdt71J34t2jN1xRM4NZpyID4TR05A1j7ftcrUY265dXiKEqoarIReD1/V1A/OWMWzHWPUSUeiYunFlbGoGSueAMRTGgbdADueI0NWMHAndooMXsZAfcNhcEUsAAAAASUVORK5CYII="></button>
                            </li>`
            colorNum = 1;
        }

    }

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";3
            msg.style.setProperty('--animate', "")
            msg.innerHTML = "Your Task has been deleted!"
            msg.style.opacity = "1"
            msg.style.setProperty('--animate', "msgWidth 3s")
            setTimeout(() => {
                msg.style.opacity = "0"
            }, 2200);
            setTimeout(() => {
                msg.innerHTML = ""
                msg.style.setProperty('--animate', "")
            }, 3000)
        }
    }

    for (i = 0; i < edit.length; i++) {
        edit[i].onclick = function (e) {
            // console.log(e.target.parentElement.previousElementSibling)
            if (!e.target.parentElement.previousElementSibling.classList.contains("checked")) {
                e.target.parentElement.previousElementSibling.setAttribute('contentEditable', 'true')
                e.target.parentElement.previousElementSibling.focus()

                msg.style.setProperty('--animate', "")
                msg.innerHTML = "Your Task is ready to edit!"
                msg.style.opacity = "1"
                msg.style.setProperty('--animate', "msgWidth 3s")
                setTimeout(() => {
                    msg.style.opacity = "0"
                }, 2200);
                setTimeout(() => {
                    msg.innerHTML = ""
                    msg.style.setProperty('--animate', "")
                }, 3000)
            } else {
                msg.style.setProperty('--animate', "")
                msg.innerHTML = "Uncheck your task first to edit!"
                msg.style.opacity = "1"
                msg.style.setProperty('--animate', "msgWidth 3s")
                setTimeout(() => {
                    msg.style.opacity = "0"
                }, 2200);
                setTimeout(() => {
                    msg.innerHTML = ""
                    msg.style.setProperty('--animate', "")
                }, 3000)
            }
        }
    }

})

const remove = (e) => {
    let p = document.getElementsByTagName('P')
    for (let i = 0; i < p.length; i++) {
        p[i].removeAttribute('contentEditable')

        msg.style.setProperty('--animate', "")
        msg.innerHTML = "Your Task has been updated!"
        msg.style.opacity = "1"
        msg.style.setProperty('--animate', "msgWidth 3s")
        setTimeout(() => {
            msg.style.opacity = "0"
        }, 2200);
        setTimeout(() => {
            msg.innerHTML = ""
            msg.style.setProperty('--animate', "")
        }, 3000)
    }
}

var ul = document.querySelector('ul');
ul.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'P') {
        if (ev.target != document.activeElement) {
            ev.target.classList.toggle('checked');
        }

        if (ev.target.classList.contains('checked')) {
            msg.style.setProperty('--animate', "")
            msg.innerHTML = "Your Task has been checked!"
            msg.style.opacity = "1"
            msg.style.setProperty('--animate', "msgWidth 3s")
            setTimeout(() => {
                msg.style.opacity = "0"
            }, 2200);
            setTimeout(() => {
                msg.innerHTML = ""
                msg.style.setProperty('--animate', "")
            }, 3000)
        }  
        if(ev.target != document.activeElement &&!ev.target.classList.contains('checked')){
            msg.style.setProperty('--animate', "")
            msg.innerHTML = "Your Task has been unchecked!"
            msg.style.opacity = "1"
            msg.style.setProperty('--animate', "msgWidth 3s")
            setTimeout(() => {
                msg.style.opacity = "0"
            }, 2200);
            setTimeout(() => {
                msg.innerHTML = ""
                msg.style.setProperty('--animate', "")
            }, 3000)
        }
    }


}, false);
