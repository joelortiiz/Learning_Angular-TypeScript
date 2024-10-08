interface AudioPlayer{
  audioVolume: number;
  songDuration: number;
  songName: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 30,
  songName: "Mes",
  details: {
    author: "Pepe",
    year: 2010
  }
}

const song = "New Song";

const {songName:anotherSong} = audioPlayer;
console.log(anotherSong);


const {details: {author:anotherAuthor}} = audioPlayer;
console.log(anotherAuthor);
export {};
