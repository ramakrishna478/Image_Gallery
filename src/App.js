import React, { useState } from 'react';
import { Media } from './media';

const App = () => {
  const [file, setFile] = useState(null);

  const handleClose = () => {
    setFile(null);
  };
  return (
    <div className='container'>
      <h1>Image Gallery</h1>

      <div className="media-container">
        {
          Media.map((file, index) => (
            <div className="media" key={index} onClick={() => setFile(file)}>
              {
                file.type === 'image'
                ? <img src={file.url} alt="" />
                : <img src={file.url} alt="" />
              }
            </div>
          ))
        }
      </div>

      <div className="popup-media" style={{display: file ? 'block' : 'none' }}>
        <span className="close-button" onClick={handleClose}>&times;</span>

        {
          file?.type === 'image'
          ? <img src={file?.url} alt=''/>
          : <img src={file?.url} alt=''/>
        }
      </div>

    </div>
  )
}

export default App