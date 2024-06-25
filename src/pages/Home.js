import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import AddEditTransaction from '../components/AddEditTransaction';
import '../resources/transactions.css';
import { Form, Input, Modal, Select, Table, message, DatePicker } from 'antd'; // Added DatePicker here
import Spinner from "../components/Spinner";
import axios from 'axios';
import dayjs from 'dayjs';


const {RangePicker}=DatePicker;

function Home() {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] = useState(false);

  const toggleModal = () => {
    setShowAddEditTransactionModal(!showAddEditTransactionModal);
  };
  const [loading,setLoading]=useState(false)
  const [transactionsData,setTransactionsData]=useState([])
  const [frequency,setFrequency]=useState('7');
  const [selectedRange,setSelectedRange]=useState([])
  const getTransactions=async()=>{
    try{
      const user=JSON.parse(localStorage.getItem('expense-app'))
      setLoading(true)
      const response=await axios.post("/api/transactions/get-all-transactions",{userid:user._id,frequency, ...(frequency==='custom' && {selectedRange})})
      console.log(response.data)
      setTransactionsData(response.data);
      setLoading(false);
     }
     catch(error){
      setLoading(false);
      message.error('something went wrong')
  
     }

  }
  useEffect(()=>{
    getTransactions()
  },[frequency,selectedRange])

  const columns=[
    {
      title:"Date",
      dataIndex:"date",
    },
    {
      title:"Amount",
      dataIndex:"amount",
    },
    {
      title:"Category",
      dataIndex:"category",
    },
    {
      title:"Reference",
      dataIndex:"reference",
    }
  ]
  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <div className='filter d-flex justify-content-between align-items-center'>
        <div>
            <div className='d-flex flex-column'>
              <h6>Select Frequency</h6>
              <Select value={frequency} onChange={(value)=>setFrequency(value)}>
                <Select.Option value='7'>Last 1 week</Select.Option>
                <Select.Option value='30'>Last 1 month</Select.Option>
                <Select.Option value='365'>Last 1 year</Select.Option>
                <Select.Option value='custom'>Custom</Select.Option>
              </Select>
              {frequency==='custom' && (
                <div className='mt-2'>
                <RangePicker value={selectedRange} onChange={(values)=>setSelectedRange(values)} />
                </div>
              )}
            </div>

        </div>
        <div>
            {/* Adding an onClick event handler to the button */}
            <button className='primary' onClick={toggleModal}>ADD NEW</button>
        </div>
      </div>
      <div className='table-analytics'>
          <Table columns={columns} dataSource={transactionsData}/>
      </div>
      {showAddEditTransactionModal && (<AddEditTransaction showAddEditTransactionModal={showAddEditTransactionModal}
      setShowAddEditTransactionModal={setShowAddEditTransactionModal}
      getTransactions={getTransactions}
      />
      )}
    </DefaultLayout>
  );
}

export default Home;
