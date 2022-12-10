const sounds = ['applause', 'boo', 'gasp', 
'tada', 'victory', 'wrong' ];

sounds.forEach(soundName=> {
    const btn = document.createElement('button')
    btn.classList.add('btn')
   btn.innerText = soundName

   document.getElementById('button-container').
   appendChild(btn)
})
