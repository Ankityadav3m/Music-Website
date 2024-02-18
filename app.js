const music = new Audio("audio/01.mp3");
// music.play();

const songs = [
  {
    id: 1,
    songName: `Cheques <br />
        <div class="subtitle">Shubh</div>`,
    poster: "img/1.png",
  },
  {
    id: 2,
    songName: `Khayal <br />
        <div class="subtitle">Talwiinder</div>`,
    poster: "img/2.png",
  },
  {
    id: 3,
    songName: `Admirin' You  <br />
        <div class="subtitle">Karan Aujla</div>`,
    poster: "img/3.png",
  },
  {
    id: 4,
    songName: `Attraction <br />
        <div class="subtitle">Sukha</div>`,
    poster: "img/4.png",
  },
  {
    id: 5,
    songName: `9:45<br />
        <div class="subtitle">Prabh Singh</div>`,
    poster: "img/5.png",
  },
  {
    id: 6,
    songName: `One Love <br />
        <div class="subtitle">Shubh</div>`,
    poster: "img/6.png",
  },
  {
    id: 7,
    songName: `Kamlee <br />
        <div class="subtitle">SARRB & Starboy X</div>`,
    poster: "img/7.png",
  },
  {
    id: 8,
    songName: `Zulfaan <br />
        <div class="subtitle">SARRB & Starboy X</div>`,
    poster: "img/8.png",
  },
  {
    id: 9,
    songName: `Peaches <br />
        <div class="subtitle">Diljit Dosanjh</div>`,
    poster: "img/9.png",
  },
  {
    id: 10,
    songName: `What..? <br />
        <div class="subtitle">Karan Aujla</div>`,
    poster: "img/10.png",
  },
  {
    id: 11,
    songName: `Obsessed <br />
        <div class="subtitle">Riar Saab</div>`,
    poster: "img/11.png",
  },
  {
    id: 12,
    songName: `Broken <br />
        <div class="subtitle">SARRB & Starboy X</div>`,
    poster: "img/12.png",
  },
  {
    id: 13,
    songName: `Shaamein <br />
        <div class="subtitle">King</div>`,
    poster: "img/13.png",
  },
  {
    id: 14,
    songName: `Her <br />
        <div class="subtitle">Shubh</div>`,
    poster: "img/14.png",
  },
  {
    id: 15,
    songName: `Chaleya <br />
        <div class="subtitle">Arijit Singh</div>`,
    poster: "img/15.png",
  },
  {
    id: 16,
    songName: `Sarkaare <br />
        <div class="subtitle">King</div>`,
    poster: "img/16.png",
  },
  {
    id: 17,
    songName: `Mi Amor <br />
        <div class="subtitle">Sharn & The Paul</div>`,
    poster: "img/17.png",
  },
  {
    id: 18,
    songName: `Downers At Dusk <br />
        <div class="subtitle">Talha Anjum</div>`,
    poster: "img/18.png",
  },
  {
    id: 19,
    songName: `Champagne <br />
        <div class="subtitle">Diljit Dosanjh</div>`,
    poster: "img/19.png",
  },
  {
    id: 20,
    songName: `Paris Ka Trip <br />
        <div class="subtitle">Millind Gaba & Honey Singh</div>`,
    poster: "img/20.png",
  },
  {
    id: 21,
    songName: `Away <br />
        <div class="subtitle">Noor chahal</div>`,
    poster: "img/21.png",
  },
  {
    id: 22,
    songName: `Dil Nu <br />
        <div class="subtitle">AP Dhillion</div>`,
    poster: "img/22.png",
  },
  {
    id: 23,
    songName: `52 Bars <br />
        <div class="subtitle">Karan Aujla</div>`,
    poster: "img/23.png",
  },
  {
    id: 24,
    songName: ` Balle Jatta <br />
        <div class="subtitle">Diljit Dosanjh</div>`,
    poster: "img/24.png",
  },
];

Array.from(document.getElementsByClassName('songitem')).forEach((e,i) => {
  e.getElementsByTagName('img')[0].src = songs[i].poster;
  e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
// search data start
let search_result = document.getElementsByClassName('search_result')[0];

songs.forEach(element => {

  const{id, songName, poster} = element;
  let card = document.createElement('a');
  card.classList.add('card');
  card.href = "#" + id;

  card.innerHTML = `
  <img src="${poster}" alt="">
  <div class="content">
       ${songName}
    
  </div>`;

search_result.appendChild(card);
});  

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
  let input_val = input.value.toUpperCase();
  let items = search_result.getElementsByTagName('a');

  for (let index = 0; index < items.length; index++) {
      
       let as = items[index].getElementsByClassName('content')[0];
       let txt = as.textContent || as.innerHTML;

       if (txt.toUpperCase().indexOf(input_val) > -1) {
         items[index].style.display = "flex";
       } else {
        items[index].style.display = "none";
       }
       if (input_val == 0) {
         search_result.style.display = "none";
       } else {
        search_result.style.display = "";
       }

  }
});

  


let masterplay = document.getElementById("masterplay");
let wave = document.getElementById("wave");

masterplay.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
});
const plays = () => {
  Array.from(document.getElementsByClassName('playlistplay')).forEach((el) => {
    el.classList.add('bi-play-circle-fill');
    el.classList.remove('bi-pause-circle-fill');
    
  });
}
const background = () => {
  Array.from(document.getElementsByClassName('songitem')).forEach((el) => {
    el.style.background = 'rgb(105,105,105, .0)';
  });
}


let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let download = document.getElementById("download");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("playlistplay")).forEach((e) => {
    e.addEventListener("click", (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.png`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        download.href = `audio/${index}.mp3`;

        let songtitles = songs.filter ((els) => {
          return els.id == index;

        });

        songtitles.forEach(elss => {
          let {songName} = elss;
          title.innerHTML = songName;
          download.setAttribute('download', songName);
          
        });
        
        background();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = 'rgb(105,105,105, .1)';
        plays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
        
    });
});

let currentstart = document.getElementById("currentstart");
let currentend = document.getElementById("currentend");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot");



music.addEventListener('timeupdate', () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);
   
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  } 
  currentend.innerHTML = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  } 

  currentstart.innerHTML = `${min2}:${sec2}`;


  let progress = parseInt((music_curr / music_dur) * 100);
  seek.value = progress;
  
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot[0].style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
  music.currentTime = (seek.value * music.duration) / 100;
});


// -----------------------------------------------volume button-----------------------------------------------

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot'); 

// Use getElementById instead of getElementsById for vol_dot

vol.addEventListener('change', () => {
  if (vol.value == 0) {
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-off-fill');
  }
  if (vol.value > 0) { 
    vol_icon.classList.add('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
  }
  if (vol.value > 50) {
    vol_icon.classList.add('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`; 
  music.volume = vol_a / 100;
});

// ------------------------------------ back and next button---------------------------------
let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songitem")).length;
  }

    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.png`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songtitles = songs.filter ((els) => {
          return els.id == index;

        });

        songtitles.forEach(elss => {
          let {songName} = elss;
          title.innerHTML = songName;
          
        });
        
        background();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = 'rgb(105,105,105, .1)';
        plays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
  
      });

next.addEventListener("click", () => {
  index ++;
  if (index > Array.from(document.getElementsByClassName("songitem")).length) {
    index = 1;
  }

  music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.png`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songtitles = songs.filter ((els) => {
          return els.id == index;

        });

        songtitles.forEach(elss => {
          let {songName} = elss;
          title.innerHTML = songName;
          
        });
        
        background();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = 'rgb(105,105,105, .1)';
        plays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});
   



// -------------------------------Scroll effect for the songs and artists section---------------------------------
let song_left = document.getElementById("song_left");
let song_right = document.getElementById("song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 360;
});

song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 360;
});

let art_left = document.getElementById("art_left");
let art_right = document.getElementById("art_right");
let item = document.getElementsByClassName("item")[0];

art_right.addEventListener("click", () => {
  item.scrollLeft += 350;
});

art_left.addEventListener("click", () => {
  item.scrollLeft -= 350;
});

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
  let a = shuffle.innerHTML;

  switch (a) {
     case "next":
      shuffle.classList.add('bi-arrow-repeat');
      shuffle.classList.remove('bi-music-note-beamed');
      shuffle.classList.remove('bi-shuffle');
      shuffle.innerHTML = 'repeat';
      break;

      case "repeat":
      shuffle.classList.remove('bi-arrow-repeat');
      shuffle.classList.remove('bi-music-note-beamed');
      shuffle.classList.add('bi-shuffle');
      shuffle.innerHTML = 'random';
      break;
      case "random":
      shuffle.classList.remove('bi-arrow-repeat');
      shuffle.classList.add('bi-music-note-beamed');
      shuffle.classList.remove('bi-shuffle');
      shuffle.innerHTML = 'next';
      break;
  }
});


const next_song = () => {

  if(index == songs.length){
    index = 1;      
  } else {
    index++;
  } 
 
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.png`;
  music.play();
  masterplay.classList.remove('bi-play-fill');
  masterplay.classList.add('bi-pause-fill');
  download.href = `audio/${index}.mp3`;

  let songtitles = songs.filter ((els) => {
    return els.id == index;

  });

  songtitles.forEach(elss => {
    let {songName} = elss;
    title.innerHTML = songName;
    download.setAttribute('download', songName);
    
  });
  
  background();
  Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = 'rgb(105,105,105, .1)';
  plays();
  el.target.classList.remove('bi-play-circle-fill');
  el.target.classList.add('bi-pause-circle-fill');
  wave.classList.add('active1');

}
const repeat_song = () => {
 index;
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.png`;
  music.play();
  masterplay.classList.remove('bi-play-fill');
  masterplay.classList.add('bi-pause-fill');
  download.href = `audio/${index}.mp3`;

  let songtitles = songs.filter ((els) => {
    return els.id == index;

  });

  songtitles.forEach(elss => {
    let {songName} = elss;
    title.innerHTML = songName;
    download.setAttribute('download', songName);
    
  });
  
  background();
  Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = 'rgb(105,105,105, .1)';
  plays();
  el.target.classList.remove('bi-play-circle-fill');
  el.target.classList.add('bi-pause-circle-fill');
  wave.classList.add('active1');

}
const random_song = () => {
   if(index == songs.length){
    index = 1;
  } else {
    index = Math.floor(Math.random() * songs.length) + 1;
  }


  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.png`;
  music.play();
  masterplay.classList.remove('bi-play-fill');
  masterplay.classList.add('bi-pause-fill');
  download.href = `audio/${index}.mp3`;

  let songtitles = songs.filter ((els) => {
    return els.id == index;

  });

  songtitles.forEach(elss => {
    let {songName} = elss;
    title.innerHTML = songName;
    download.setAttribute('download', songName);
    
  });
  
  background();
  Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = 'rgb(105,105,105, .1)';
  plays();
  el.target.classList.remove('bi-play-circle-fill');
  el.target.classList.add('bi-pause-circle-fill');
  wave.classList.add('active1');

}

music.addEventListener('ended', () => {
  let b  = shuffle.innerHTML;

  switch (b) {
    case 'repeat':
      repeat_song();
      break;
      case 'next':
        next_song();
        break;
      case 'random':
        random_song();
        break;
      
  }
     
});










