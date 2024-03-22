import React,{ useEffect, useState } from "react";
import { backend_url } from "../../../Components/configurations";

import './Delete.css';

const Delete = () => {
    const [consumerNumber, setConsumerNumber] = useState('');
    const [responseMessage, setResponseMessage] = useState('')

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
            setConsumerNumber(inputValue);
        } else{
            alert("Please enter a number");
        }
    };

    const handleFetchPDF = async () => {
        try {
            const accessToken = localStorage.getItem('access_token')
            const user = localStorage.getItem('user')

            const response = await fetch(`${backend_url}user/delete_pdf/?consumer_number=${consumerNumber}&user=${user}`, {
              method: 'GET',
              headers:{
                'Authorization': `Bearer ${accessToken}`,
              }
            })
            .then(response => response.json())
            .then(data => setResponseMessage(data.message))
            

            if (responseMessage === 'Object deleted Successfully'){
                console.log(responseMessage);
                alert('Consumer deleted successfully')
            } else if(responseMessage === 'consumer number is not present'){
                console.log(responseMessage);
                alert('Consumer does not exist')
            } else if(responseMessage === ''){
                console.log(responseMessage);
                alert('Consumer does not exist')
            } else{
                console.log(responseMessage);
                alert('Error in deleting the consumer')
            }
            
            setConsumerNumber('');
          } catch (error) {
            // Handle errors
            console.error('Error deleting PDF:', error);
            throw error; // Propagate the error to the caller
          }        
    };


    return (
        <div className='upload-box'>
            <h3 className='d-flex justify-content-center pb-5 fw-light'>Delete Consumer's Details</h3>
            <div className="file-upload-form text-center">
                <div className="form-group d-flex justify-content-center align-items-center">
                    <label htmlFor="get-pdf-text-input" className='p-2 w-5'>Consumer No:</label>
                    <input type="text" id="get-pdf-text-input" className="form-control w-50" value={consumerNumber} onChange={handleTextChange} onKeyDown={handleKeyDown}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary mt-5" onClick={handleFetchPDF}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Delete;