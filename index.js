let f = document.querySelector('.f')
let fag = document.querySelector('.fag')
let fsharpag = document.querySelector('.fsharpag')
let fsharp = document.querySelector('.fsharp')
let g = document.querySelector('.g')
let gsharp = document.querySelector('.gsharp')
let c = document.querySelector('.c')
let csharp = document.querySelector('.csharp')
let d = document.querySelector('.d')
let dsharp = document.querySelector('.dsharp')
let b = document.querySelector('.b')
let bsharp = document.querySelector('.bsharp')
let a = document.querySelector('.a')
let e = document.querySelector('.e')
let gsharpag = document.querySelector('.gsharpag')
let body = document.querySelector('.body')
let dsharphash = document.querySelector('.dsharphash')

let sound1 = new Audio('./Sound/1st_String_E_64kb.mp3')
let sound2 = new Audio('./Sound/2nd_String_B_64kb.mp3')
let sound3 = new Audio('./Sound/3rd_String_G_64kb.mp3')
let sound4 = new Audio('./Sound/4th_String_D_64kb.mp3')
let sound5 = new Audio('./Sound/5th_String_A_64kb.mp3')
let sound6 = new Audio('./Sound/6th_String_E_64kb.mp3')
let sound7 = new Audio('./Sound/C_64kb.mp3')
let sound8 = new Audio('./Sound/D_64kb.mp3')
let sound9 = new Audio('./Sound/Dm_64kb.mp3')
let sound10 = new Audio('./Sound/E_64kb.mp3')

body.addEventListener('keypress', function(event){
    sound1.pause()
    sound2.pause()
    sound3.pause()
    sound4.pause()
    sound5.pause()
    sound6.pause()
    sound7.pause()
    sound8.pause()
    sound9.pause()
    sound10.pause()

    if (event.key == 'a') {
      f.style.backgroundColor = 'orange'
      sound1.currentTime = 0.3
      sound1.play()
    }
    if (event.key == 's') {
      fsharp.style.backgroundColor = 'green'
      sound2.currentTime = 0.3
      sound2.play()
    }
    if (event.key == 'd') {
      g.style.backgroundColor = 'blue'
      sound3.currentTime = 0.3
      sound3.play()
    }
    if (event.key == 'f') {
      gsharp.style.backgroundColor = 'red'
      sound4.currentTime = 0.3
      sound4.play()
    }
    if (event.key == 'g') {
      c.style.backgroundColor = 'pink'
      sound5.currentTime = 0.3
      sound5.play()
    }
    if (event.key == 'h') {
      csharp.style.backgroundColor = 'purple'
      sound6.currentTime = 0.3
      sound6.play()
    }
    if (event.key == 'j') {
      d.style.backgroundColor = 'aqua'
      sound7.currentTime = 0.3
      sound7.play()
    }
    if (event.key == 'k') {
      dsharp.style.backgroundColor = 'skyblue'
      sound8.currentTime = 0.3
      sound8.play()
    }
    if (event.key == 'l') {
      b.style.backgroundColor = 'yellow'
      sound9.currentTime = 0.3
      sound9.play()
    }
    if (event.key == 'q') {
      bsharp.style.backgroundColor = 'aquamarine'
      sound10.currentTime = 0.3
      sound10.play()
    }
    if (event.key == 'w') {
      a.style.backgroundColor = 'silver'
      sound3.currentTime = 0.3
      sound3.play()
    }
    if (event.key == 'e') {
      gsharpag.style.backgroundColor = 'silver'
      sound2.currentTime = 0.3
      sound2.play()
    }
    if (event.key == 'r') {
      fag.style.backgroundColor = 'silver'
      sound1.currentTime = 0.3
      sound1.play()
    }
    if (event.key == 't') {
      fsharpag.style.backgroundColor = 'silver'
      sound4.currentTime = 0.3
      sound4.play()
    }
    if (event.key == 'y') {
      dsharphash.style.backgroundColor = 'silver'
      sound6.currentTime = 0.3
      sound6.play()
    }
    if (event.key == 'u') {
      e.style.backgroundColor = 'silver'
      sound9.currentTime = 0.3
      sound9.play()
    }
    


})

