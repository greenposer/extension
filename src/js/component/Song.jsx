function Song(song) {
  return (
  	<a href="#" className="list-group-item">{song.value.name}<span className="duration">{song.value.duration}</span> </a>
  );
}

export default Song;