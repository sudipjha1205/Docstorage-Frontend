import React, { useState, useEffect } from "react";
import { backend_url } from "../../../Components/configurations";

import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';

import './History.css';
import Emp_Navbar from '../../../Components/Navbar/Emp_Navbar';

const History = () => {
    const [rowData, setRowData] = useState({});
    const [rowDataCount, setRowDataCount] = useState(0);
    const [start, setStart] = useState(0);
    const [end,setEnd] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [date, setDate] = useState('');

    const handleFetch = async () => {
        try {
            const accessToken = localStorage.getItem('access_token');
            const user = localStorage.getItem('user');

            const response = await fetch(`${backend_url}user/account_status/?user=${user}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                }
            });
            const data = await response.json();
            setRowData(data);
            setRowDataCount(data.all_rows.length)
            console.log(data); // Check fetched data
        } catch (error) {
            console.log('Error occurred', error);
        }
    };

    useEffect(() => {
        handleFetch(); // Call handleFetch when component mounts

    }, []); // Empty dependency array ensures this effect runs only once after initial render

    const filteredRows = rowData.all_rows && rowData.all_rows.filter(row => {
        return row.consumer_number.includes(searchTerm) && row.last_modified_time.includes(date);
      });
      
      const consumersTable = filteredRows && filteredRows
        .slice(start, end)
        .map((row, index) => (
          <tr key={index}>
            <td>{row.consumer_number}</td>
            <td>{row.action}</td>
            <td>{row.last_modified_time}</td>
          </tr>
        ));
      
    const totalFilteredRows = filteredRows && filteredRows.length;
      

    const increaseStart = (e) => {
        setStart(start + 10);
    }

    const decreaseStart = (e) => {
        setStart(start - 10);
    }

    const increaseEnd = (e) => {
        setEnd(end + 10);
    }

    const decreaseEnd = (e) => {
        setEnd(end - 10);
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        console.log(e.target.value)
    }

    const handleDate = e => {
        setDate(e.target.value)
    }

    return (
        <div>
            <Emp_Navbar />
            <div class="container container-style ">
                <div class="row align-items-center mt-5 mb-2">
                    <div>
                        <p class="fs-2">Total consumers: {rowData.total_count}</p>
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-group-item">
                        <label className='label-style mt-2 mb-2'>
                            Consumer Number:
                            <input
                                type="text"
                                name="consumerNumber"
                                value={searchTerm}
                                onChange={handleSearch}
                                className='input-style'
                                placeholder='Consumer Number'
                            />
                        </label>
                    </div>
                    <div className="input-group-item">
                        <label className='label-style mt-2 mb-2'>
                            Date:
                            <input
                                type="date"
                                name="date"
                                value={date}
                                onChange={handleDate}
                                className='input-style'
                            />
                        </label>
                    </div>
              </div>
                <div class="table-style">
                    <table class="table table-secondary border-bottom border-rounded border-0.5 border-light pt-3 table-hover fw-light">
                        <thead>
                            <tr>
                            <th scope="col">Consumer number</th>
                            <th scope="col">Action</th>
                            <th scope="col">Last Modified Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consumersTable}
                        </tbody>
                    </table>
                </div>
                <p class="text-50">*Sorted by last modified time</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    { (start > 0) ?
                        (<button onClick={() => {decreaseEnd();decreaseStart();}} className="button-hover" type='button' ><GrPrevious/></button>) :
                        (<button className="button-hover-disabled" disabled={true} type='button' ><GrPrevious/></button>)
                    }
                    { (end <= totalFilteredRows ) ?
                        (<button onClick={() => {increaseEnd();increaseStart();}} className="button-hover" type='button' ><GrNext/></button>) :
                        (<button className="button-hover-disabled" disabled={true} type='button' ><GrNext/></button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default History;
