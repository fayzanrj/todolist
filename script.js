let list = document.getElementById('list')
let inputBtn = document.getElementById('input-btn')
var close = document.getElementsByClassName("delete");
let colorNum = 1

inputBtn.addEventListener('click', () => {

    let inputTxt = document.getElementById('input-txt').value;

    if (inputTxt == "") {
        document.getElementById('input-txt').setAttribute('placeholder', 'Write someting first')
    } else {
        document.getElementById('input-txt').value = ""

        if (colorNum == 1) {
            list.innerHTML += `<li>
                                <div class="red"></div>
                                <p class ="content">${inputTxt}</p>
                                <button class="delete"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nNVVu0oDQRTdD4gKgtj6+I1Uks6Ij8I/sBWsLBPQmLl3EdRONGTuChb5hyQfYRH7lHZqpcWRO7sL6ysmzoh64MDMXWbOnnsuTGQJZ5bxLAyEoE3vOomK0GKnhlIUCJ0aSkJ4elVU9VACn97pLBL2Q1I+EhGGCUy8E4kCQ35dRAzKrqcGZd1PlINJz3wtwqhkPa1k+0lyqIwlEgoy0gmh7qaNUM+/jU1Kz/wRJ+YfBW8JN6Ot/QTEI/goQxJjTQh9S3hUCqMnhGowJ8I4EsJAGOuXhCllQtiwjFtLOPQWSVIHg4tjzLabWCjUF1sNzKmQc+QjIoS+OrCMZUu4S2KsKHXdamJJDLYsofut90QYOypiGQ/anuzv3eW5mNauTjEtjHsdt71J34t2jN1xRM4NZpyID4TR05A1j7ftcrUY265dXiKEqoarIReD1/V1A/OWMWzHWPUSUeiYunFlbGoGSueAMRTGgbdADueI0NWMHAndooMXsZAfcNhcEUsAAAAASUVORK5CYII="></button>
                            </li>`
            colorNum = 2
        } else if (colorNum == 2) {
            list.innerHTML += `<li>
                                <div class="blue"></div>
                                <p class ="content">${inputTxt}</p>
                                <button class="delete"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nNVVu0oDQRTdD4gKgtj6+I1Uks6Ij8I/sBWsLBPQmLl3EdRONGTuChb5hyQfYRH7lHZqpcWRO7sL6ysmzoh64MDMXWbOnnsuTGQJZ5bxLAyEoE3vOomK0GKnhlIUCJ0aSkJ4elVU9VACn97pLBL2Q1I+EhGGCUy8E4kCQ35dRAzKrqcGZd1PlINJz3wtwqhkPa1k+0lyqIwlEgoy0gmh7qaNUM+/jU1Kz/wRJ+YfBW8JN6Ot/QTEI/goQxJjTQh9S3hUCqMnhGowJ8I4EsJAGOuXhCllQtiwjFtLOPQWSVIHg4tjzLabWCjUF1sNzKmQc+QjIoS+OrCMZUu4S2KsKHXdamJJDLYsofut90QYOypiGQ/anuzv3eW5mNauTjEtjHsdt71J34t2jN1xRM4NZpyID4TR05A1j7ftcrUY265dXiKEqoarIReD1/V1A/OWMWzHWPUSUeiYunFlbGoGSueAMRTGgbdADueI0NWMHAndooMXsZAfcNhcEUsAAAAASUVORK5CYII="></button>
                            </li>`
            colorNum = 3
        } else {
            list.innerHTML += `<li>
                                <div class="yellow"></div>
                                <p class ="content">${inputTxt}</p>
                                <button class="delete"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nNVVu0oDQRTdD4gKgtj6+I1Uks6Ij8I/sBWsLBPQmLl3EdRONGTuChb5hyQfYRH7lHZqpcWRO7sL6ysmzoh64MDMXWbOnnsuTGQJZ5bxLAyEoE3vOomK0GKnhlIUCJ0aSkJ4elVU9VACn97pLBL2Q1I+EhGGCUy8E4kCQ35dRAzKrqcGZd1PlINJz3wtwqhkPa1k+0lyqIwlEgoy0gmh7qaNUM+/jU1Kz/wRJ+YfBW8JN6Ot/QTEI/goQxJjTQh9S3hUCqMnhGowJ8I4EsJAGOuXhCllQtiwjFtLOPQWSVIHg4tjzLabWCjUF1sNzKmQc+QjIoS+OrCMZUu4S2KsKHXdamJJDLYsofut90QYOypiGQ/anuzv3eW5mNauTjEtjHsdt71J34t2jN1xRM4NZpyID4TR05A1j7ftcrUY265dXiKEqoarIReD1/V1A/OWMWzHWPUSUeiYunFlbGoGSueAMRTGgbdADueI0NWMHAndooMXsZAfcNhcEUsAAAAASUVORK5CYII="></button>
                            </li>`
            colorNum = 1;
        }
    }

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

})

 var ul = document.querySelector('ul');
    ul.addEventListener('click', function (ev) {
        console.log(ev.target.tagName)
        if (ev.target.tagName === 'P') {
            ev.target.classList.toggle('checked');
        }
    }, false);
