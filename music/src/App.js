import React, { useState, useEffect } from 'react';
import Card from './Card';

const App = () => {
  const [albumList, setAlbumList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate a REST API fetch
  useEffect(() => {
    console.log("Fetching album data..."); // 👈 Console log added here
    setTimeout(() => {
      setAlbumList([
        {
          artistId: 0,
          albumTitle: 'Abbey Road',
          albumDescription:
            'Abbey Road is one of the most iconic albums by The Beatles, released in 1969.',
          imgURL:
            'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
          linkURL: 'https://en.wikipedia.org/wiki/Abbey_Road',
          buttonText: 'Listen Now',
        },
        {
          artistId: 1,
          albumTitle: 'Rumours',
          albumDescription:
            'Rumours is the eleventh studio album by Fleetwood Mac, released in 1977.',
          imgURL:
            'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG',
          linkURL: 'https://en.wikipedia.org/wiki/Rumours_(album)',
          buttonText: 'Play',
        },
        {
          artistId: 2,
          albumTitle: 'Yellow Submarine',
          albumDescription:
            'Yellow Submarine is a soundtrack album by The Beatles, released in 1969.',
          imgURL:
            'https://upload.wikimedia.org/wikipedia/en/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg',
          linkURL: 'https://en.wikipedia.org/wiki/Yellow_Submarine_(album)',
          buttonText: 'Explore',
        },
      ]);
      setLoading(false);
    }, 1500); // Simulate 1.5 second delay
  }, []);

  const renderedList = () =>
    albumList.map((album) => (
      <Card
        key={album.artistId}
        albumTitle={album.albumTitle}
        albumDescription={album.albumDescription}
        imgURL={album.imgURL}
        linkURL={album.linkURL}
        buttonText={album.buttonText}
      />
    ));

  return (
    <div className="container mt-4">
      <h1 className="w-100 mb-4">React Music App</h1>
      {loading ? (
        <p>Loading album data...</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-start">{renderedList()}</div>
      )}
    </div>
  );
};

export default App;
