import React from 'react';
import '../style/Photo.css'; // Make sure to create and link the corresponding CSS file

const photos = [
  { id: 1, imageUrl: 'https://via.placeholder.com/150', text: 'Photo 1 Description' },
  { id: 2, imageUrl: 'https://via.placeholder.com/150', text: 'Photo 2 Description' },
  { id: 3, imageUrl: 'https://via.placeholder.com/150', text: 'Photo 3 Description' },
  { id: 4, imageUrl: 'https://via.placeholder.com/150', text: 'Photo 4 Description' },
  { id: 5, imageUrl: 'https://via.placeholder.com/150', text: 'Photo 5 Description' },
  { id: 6, imageUrl: 'https://via.placeholder.com/150', text: 'Photo 6 Description' },
  { id: 7, imageUrl: 'https://via.placeholder.com/150', text: 'Photo 7 Description' },
  { id: 8, imageUrl: 'https://via.placeholder.com/150', text: 'Photo 8 Description' },
  { id: 9, imageUrl: 'https://via.placeholder.com/150', text: 'Photo 9 Description' },
];

const Photo = () => {
  return (
    <>
        <div>
            <h1 className="photo-header">Some of my favorite moments:</h1>
        </div>
        <div className="photo-gallery">
            {photos.map(photo => (
                <div className="photo-card" key={photo.id}>
                <div className="photo-inner">
                    <div className="photo-front">
                    <img src={photo.imageUrl} alt="lmao" />
                    </div>
                    <div className="photo-back">
                    <p>{photo.text}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </>
  );
};

export default Photo;
