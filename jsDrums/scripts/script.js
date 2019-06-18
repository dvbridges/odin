var btns = document.querySelectorAll('button');
var btnList = Array.from(btns)
var sounds = ['resources/sounds/boom.wav',
			'resources/sounds/kick.wav',
			'resources/sounds/snare.wav',
			'resources/sounds/tom.wav',
			'resources/sounds/clap.wav']

const sound = new Audio();

var playSound = (file) => 
	{sound.src=file;
	 sound.play();} 

for (let i=0; i<btnList.length; i++)
{
  btnList[i].addEventListener('mousedown', (e) => {
	  e.target.style.backgroundColor = 'limegreen';
	  e.target.style.borderColor = 'rebeccapurple';
	  e.target.style.borderWidth = '4px';
	  e.target.style.width = '110px';
	  e.target.style.height = '110px';
	  e.target.style.fontSize = '15px';
	  e.target.style.margin = '5px';
	  playSound(sounds[i]);
	})

  btnList[i].addEventListener('mouseup', (e) => {
	  e.target.style.backgroundColor='rebeccapurple';
	  e.target.style.borderColor = 'limegreen';
	  e.target.style.borderWidth = '2px';
	  e.target.style.width = '100px';
	  e.target.style.height = '100px';
	  e.target.style.fontSize = '10px';
	  e.target.style.margin = '10px';
	})
}
