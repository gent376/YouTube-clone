import {Stack} from '@mui/material'


import {logo} from '../utils/constants'
import  SearchBar from './SearchBar'

const Navbar = () => (

  <Stack 
    className='nav'
    direction='row' 
    alignItems='center' 
    p={2} 
    sx={{position:'sticky', background:'#fff', top:0, display:'flex', justifyContent:{xs:'center',md:'flex-start'}, gap:{xs:'2rem', md:"15rem"}, flexDirection:{xs:'column', md:'row'}}}>
    <a href='/' style={{display:'flex', alignItems:'center', marginLeft:'15px'}}>
      <img src={logo} alt="logo" width='130' className='logo' />
    </a>
    <SearchBar/>
  </Stack>
  )


export default Navbar
