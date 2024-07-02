import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { getData } from '../redux/action';
import styled from 'styled-components';

const SearchNav = () => {
    const dispatch = useDispatch()
    const [searchedText, setSearchedText] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if(searchedText){
            dispatch(getData(searchedText));
        }
    }

  return (
    <form style={{margin: '7px'}} className='input-container' onSubmit={handleSearch}>
        <input className='input-field' type="text" placeholder='Search Here' onChange={(e)=> setSearchedText(e.target.value)} />
        <button type='submit' className='submit-button'>Submit</button>
    </form>
  )
}

const Wrapper = styled.div`
    margin: 7px;
`
const Button = styled.button`
    cursor: pointer;
`

export default SearchNav;