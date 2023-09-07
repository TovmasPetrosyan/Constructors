function PlayList(){
    this.songs = [];
    this.currentIndex = 0;
    
}
function Song(title,artist){
    this.title = title;
    this.artist = artist;
    this.isPlaying = false;

}

PlayList.prototype.add = function(song){
return this.songs.push(song);
}
PlayList.prototype.play = function(){
    if(this.songs.length === 0){
        console.log('No songs in the PlayList.');
    }else {
        this.currentSong = this.songs[this.currentIndex];
        this.currentSong.play();
        console.log(this.currentSong.title, 'started to play');
    }
   }

PlayList.prototype.stop = function(){
    if(this.songs.length === 0){
        console.log('No songs in the PlayList to stop');
    }else{
        this.currentSong = this.songs[this.currentIndex];
        this.currentSong.stop();
        console.log(this.currentSong.title,'stopped');
    }
}
PlayList.prototype.next = function(){
    this.prevSong = this.songs[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.songs.length; 
    this.currentSong = this.songs[this.currentIndex]; 
    console.log(this.prevSong.title,'stopped,',this.currentSong.title,'started');
}


Song.prototype.play = function(){
    this.isPlaying = true;
}
Song.prototype.stop = function(){
    this.isPlaying  = false;
}
