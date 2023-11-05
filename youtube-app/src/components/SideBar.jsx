import React from 'react'
import {Stack} from '@mui/material'

import { categories } from '../utils/constants'




const SideBar = ({selectedCategory, setSelectedCategory}) => {  
    return (
    <Stack 
    direction="row"
    sx={{
      overflowY: "auto",
      height: {sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}>
      {categories.map(categories=>(
        <button onClick={()=>setSelectedCategory(categories.name)} className='category-btn' style={{background: categories.name===selectedCategory?'#000':'#fff', display:'flex', gap:'2rem'}}>
            <span style={{color: categories.name===selectedCategory?'#fff':'#000'}}>{categories.icon}</span>
            <span style={{color: categories.name===selectedCategory?'#fff':'#000'}}>{categories.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar
