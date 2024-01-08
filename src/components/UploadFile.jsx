import React, { useState } from 'react';
import '../styles/UploadFile.css';
import { useNavigate } from 'react-router-dom';

import { ref, ref as storageRef, uploadBytes } from 'firebase/storage';
import { ref as  databaseRef, set } from 'firebase/database';

import { storage, database, auth } from '../firebase';


const UploadFile = () => {

  const [year, setYear] = useState('');
  const [variant, setVariant] = useState('');
  const [session, setSession] = useState('');

    const [file, setFile] = useState(null);
    const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      alert("Please Upload Your Paper First.");
    }
    
    const fileID = Math.floor(1000000000 + Math.random() * 9000000000);

    const storageRef = ref(storage, '/PastPapersStorage/' + fileID);
   
    uploadBytes(storageRef, file).then(() => {
      set(databaseRef(database, 'uploadedPapers/' + fileID), {
        paperYear : year,
        paperVariant : variant,
        paperSession : session,
        student : auth.currentUser.uid
      }).then(() => {
        alert("File Uploaded.");
        navigate('/home');
      }).catch((err) => console.log(err));
    }).catch((err) => console.log(err));

}


  return (
  <div class="upload-body">
    <div class="card-form">
  <form class="signup">
    <div class="form-title">Upload Your Solved Past Papers Now!</div>
    <div class="form-body">
      <div class="row">
      <input
          type="text"
          placeholder="Year*"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Variant*"
          value={variant}
          onChange={(e) => setVariant(e.target.value)}
        />
      </div>
      <div className="row">
        <input
          type="text"
          placeholder="Session (May/June --> M/J, Oct/Nov --> O/N, Feb/March --> F/M"
          value={session}
          onChange={(e) => setSession(e.target.value)}
        />
        </div>
      <div class="row">

        <input type="file" onChange={handleFileChange} />

        
       {file ? <div style={{ color: 'teal', marginTop: 20 }}>{`${file.name} - ${file.type}` }</div> : ''}

      </div>
    </div>
    <div class="rule"></div>
    <div class="form-footer">
      <a onClick={handleUploadClick}>Upload my paper! 📁<span class="fa fa-thumbs-o-up"></span></a>
      <a onClick={() => navigate('/home')} style={{ fontSize: 15}}>Back ⬅️<span class="fa fa-ban"></span></a>
    </div>
  </form>
</div>
</div>
  )

}

export default UploadFile