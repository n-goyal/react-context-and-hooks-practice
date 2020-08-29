import React, { useState, useEffect } from 'react';
import { v1 } from 'uuid';
import NewSongForm from './SongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
                {title: 'one song', id: 1},
                {title: 'two song', id: 2},
                {title: 'three song', id: 3}
              ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: v1() }]);
  }

  useEffect(() => {
    console.log('useEffect songs Hook run');
  }, [songs])

  useEffect(() => {
    console.log('useEffect age Hook run');
  }, [age])

  return (
    <div className="song-list">
      <ul>
        {
          songs.map((song) => {
          return (<li key={song.id}>{song.title}</li>
        )})}
      </ul>
      <NewSongForm addSong={addSong}/>
      <button onClick={() => setAge(age+1)}>Add 1 to age: {age}</button>
    </div>
  )
}

export default SongList;
