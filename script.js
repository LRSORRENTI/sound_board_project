const sounds = ['applause', 'boo', 'gasp', 
'tada', 'victory', 'wrong'];


function stopSongs(){
    sounds.forEach(soundName =>{
        const sound = document.getElementById(soundName).play()
    })
}


sounds.forEach(soundName => {
    const btn = document.createElement('button')
    btn.classList.add('btn');
   btn.innerText = soundName;

   btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(soundName).play()
   });

   document.getElementById('button-container').
   appendChild(btn);
})

