import React, { useState,useRef } from 'react';
import axios from 'axios';
import { backend_url } from '../../../Components/configurations';

import './upload.css';

const FileUploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [textValue, setTextValue] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const fileInputRef = useRef(null);

    const handleKeyDown = (event) => {
        // Check if the pressed key is space
        if (event.key === ' ') {
          event.preventDefault(); // Prevent entering space in the input
          alert("You can't press space in consumer number");
        }
      };

    const handleTextChange = (event) => {
        const inputValue = event.target.value;
        if (!isNaN(inputValue)) {
            setTextValue(inputValue);
        } else{
            alert("Please enter a number");
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        if (file === undefined){
            setSelectedFile(null)
        } else{
            setSelectedFile(file);
        }
    };

    const clearInputs = () => {
        setSelectedFile(null);
        setTextValue('');
        setUploadProgress(0);
        fileInputRef.current.value = null;
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (selectedFile === null){
            alert("Please upload the file");
            return;
        }
        if (textValue === '') {
            alert("Please enter a consumer id");
            return;
        }

        if (selectedFile) {
            const formData = new FormData();
            formData.append('pdfFile', selectedFile);
            formData.append('consumerNo', textValue);

            try {
                const response = await axios.post(`${backend_url}user/upload-pdf/`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress: (progressEvent) => {
                        const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                        setUploadProgress(progress);
                    },
                });
                console.log(response)

                if (response.status === 200) {
                    alert("PDF Uploaded successfully");
                    clearInputs();
                    console.log('PDF uploaded successfully');
                } else if(response.status === 403){
                    alert("Consumer Number is already present");
                    clearInputs();
                } else {
                    console.error('Failed to upload PDF');
                    clearInputs();
                }
            } catch (error) {
                const status_code = error['response']['status'];
                if (status_code === 403){
                    alert("Consumer is already present");
                    clearInputs();
                } else{
                    alert("failed to upload PDF");
                    clearInputs();
                }
                
            }
        }
    };

    return (
        <div className='upload-box'>
            <h3 className='d-flex justify-content-center pb-5 fw-light'>Upload Consumer's Documents</h3>
            <div className="file-upload-form text-center">
                <div className="form-group d-flex justify-content-center align-items-center">
                    <label htmlFor="upload-pdf-text-input" className='p-2 w-5'>Consumer No:</label>
                    <input type="text" id="upload-pdf-text-input" className="form-control w-50" value={textValue} onChange={handleTextChange} onKeyDown={handleKeyDown}/>
                </div>
                <div className="form-group d-flex justify-content-center align-items-center p-4">
                    <label htmlFor="file-input" className='p-2 w-5 d-flex justify-content-start'>Upload File:</label>
                    <input ref={fileInputRef} type="file" id="file-input" className="form-control fileUploadButton" onChange={handleFileChange} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary pt-2" onClick={handleFormSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default FileUploadForm;
