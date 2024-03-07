import React,{ useEffect, useState } from "react";
import axios from "axios";
import { backend_url } from "../../../Components/configurations";

const GetConsumerData = () => {
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
            const response = await axios.get(`${backend_url}user/get-pdf/${consumerNumber}/`, {
                responseType: 'arraybuffer',
            });
            // Create a Blob from the PDF data
            const blob = new Blob([response.data], { type: 'application/pdf' });

            // Create a link element and trigger a download
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `${consumerNumber}.pdf`;
            link.click();
            setConsumerNumber('');
        } catch (error) {
            if (error['response']['status'] === 404){
                alert('Consumer Number not found');
                setConsumerNumber('');
            } else {
            console.error('Error fetching PDF:', error);
            }
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

export default GetConsumerData;