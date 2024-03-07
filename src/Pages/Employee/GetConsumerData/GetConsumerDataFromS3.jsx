import React,{ useEffect, useState } from "react";
import axios from "axios";
import { backend_url } from "../../../Components/configurations";

const GetConsumerDataFromS3 = () => {
    const [consumerNumber, setConsumerNumber] = useState('');

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

            const response = await fetch(`${backend_url}user/retreive_pdf/?consumer_number=${consumerNumber}&user=${user}`, {
              method: 'GET',
              headers:{
                'Authorization': `Bearer ${accessToken}`,
              }
            });
        
            if (!response.ok) {
              // Handle non-successful responses
              console.log(response)
              if (response.status == 400){
                alert("Consumer number not present")
                setConsumerNumber('')
                return
              }
              const errorMessage = await response.text();
              throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
            }
        
            const responseData = await response.json();
            console.log(responseData);
            console.log(consumerNumber);
            const pdfUrl = responseData.url;
             // Open the PDF URL in a new tab with the consumer number as the tab name
             const link = document.createElement('a');
             link.style.display = 'none';
             link.href = pdfUrl;
             //link.download = `${consumerNumber}.pdf`;
             //document.body.appendChild(link);
             link.click();
             setConsumerNumber('');
          } catch (error) {
            // Handle errors
            console.error('Error retrieving PDF:', error);
            throw error; // Propagate the error to the caller
          }        
    };


    return (
        <div className='upload-box'>
            <h3 className='d-flex justify-content-center pb-5 fw-light'>Get Consumer's Details</h3>
            <div className="file-upload-form text-center">
                <div className="form-group d-flex justify-content-center align-items-center">
                    <label htmlFor="get-pdf-text-input" className='p-2 w-5'>Consumer No:</label>
                    <input type="text" id="get-pdf-text-input" className="form-control w-50" value={consumerNumber} onChange={handleTextChange} onKeyDown={handleKeyDown}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary mt-5" onClick={handleFetchPDF}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default GetConsumerDataFromS3;