import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import {Paper, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };
  return (
    <Paper 
        component='form'
        onSubmit={onhandleSubmit} 
        sx={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center', 
          justifyContent:'center' , 
          borderRadius:20, 
          border: '1px solid #e3e3e3', 
          pl:3, 
          boxShadow:'none', 
          mr:{sm:5},
          width:{xs:'280px', md:'450px'},
          }}>
        <input 
            className='search-bar' 
            value={searchTerm} 
            placeholder='Search' 
            style={{fontSize:'1.1rem'}}
            onChange={(e)=>setSearchTerm(e.target.value)} />
        <IconButton type='submit' sx={{p:'16px'}}><SearchIcon/></IconButton>
    </Paper>
  )
}

export default SearchBar
