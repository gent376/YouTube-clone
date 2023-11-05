import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utils/constants'

const VideoCard = ({video:{id:{videoId},snippet}}, justifyContent) => {

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0,  }}>
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <CardMedia 
        className='pic'
        image={snippet?.thumbnails?.high?.url||demoThumbnailUrl}
        title={snippet?.title}
        sx={{ width: { xs: '100%', sm: '100%'}, height: 180, borderRadius: 4, }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "fff", height: '80px' }}>
        <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontSize='1.1rem' fontWeight="medium" color="#000">{snippet?.title.slice(0,50)||demoVideoTitle.slice(0,60)}...</Typography>
        </Link>
        <Link to={snippet?.channelId ? `channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle1" fontSize='0.95rem' fontWeight="regular"sx={{color:'grey', display:'flex', alignItems:'center'}}>
            {snippet?.channelTitle||demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "16px", color: "gray", ml: "5px" }}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard