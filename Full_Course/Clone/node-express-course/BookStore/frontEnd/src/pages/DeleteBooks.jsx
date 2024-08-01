import React, { useState } from 'react'
import BackButtons from '../components/BackButtons'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const  DeleteBooks  = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } =  useParams();
  const { enqueueSnackbar } = useSnackbar()
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Was Edited Successfully", {variant: "success"});
        navigate('/');
      })
      .catch((error) => {
        // alert("An Error Happend, Please Check The Cosole")
        enqueueSnackbar('Error', {variant: 'error'})
      })
  }
  return (
    <div className='p-4'>
      <BackButtons/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/>: ''}
      <div className='flex flex-col items-center border2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You Want To Delete This Book</h3>
      <button
        className='p-4 bg-red-600 text-white m-8 w-full'
        onClick={handleDeleteBook}
        >Yes, Delete It</button>
      </div>
    </div>
  )
}

export default DeleteBooks
