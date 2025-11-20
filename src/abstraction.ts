// interface MediaPlayer{
//     play():void;
//     pause():void;
//     stop():void;
// }

// class MusicPlayer implements MediaPlayer{
//     play(){
//         console.log('Music is playing .....');
//     }
//     pause(): void {
//         console.log("Music is paused");
//     }
//     stop(): void {
//         console.log("Music is stopped");
//     }
// }

// const music=new MusicPlayer()

// music.play()

//! abstraction

abstract class MediaPlayer{
   abstract play():void;
   abstract pause():void;
   abstract stop():void;
}

class MusicPlayer extends MediaPlayer{
    play(): void {
        console.log('plaiing music ...');
    }
    pause(): void {
        console.log('Music is Paused!');
    }
    stop(): void {
        console.log("Music is stopped!");
    }
}

const song=new MusicPlayer()
song.play()