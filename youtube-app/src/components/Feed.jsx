import React from 'react'
import {useState, useEffect} from 'react'

import {Box, Stack} from '@mui/material'

import {SideBar,Videos} from './'
import {fetchFromAPI} from '../utils/fetchFromAPI'


const Feed = () =>  {

  const [selectedCategory, setSelectedCategory] = useState('Recent')
  const [videos, setVideos]= useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (

    <Stack  sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box  sx={{ height: { sx: "auto", md: "92vh" },  px: { sx: 0, md: 2 } }}>
        <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box px={5} py={1.3} sx={{overflowY:'auto', height:'90vh', flex:2}}>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )}



export default Feed
