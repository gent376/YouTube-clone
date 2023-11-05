import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState()
  const [videos, setVideos] = useState([])

  const {id}= useParams()

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])


  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{ width: "100%", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
            <Typography sx={{fontSize:'1.3rem', fontWeight:'500'}}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color:'#000'}} py={1} px={2}>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="gray">
                {videoDetail?.snippet?.channelTitle}
                <CheckCircleIcon sx={{ fontSize: "16px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1">
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} <span style={{color:'gray', fontSize:'1rem'}}>views</span>
                </Typography>
                <Typography variant="body1">
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} <span style={{color:'gray', fontSize:'1rem'}}>likes</span>
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Box px={17} py={{ md: 9, xs: 5 }} justifyContent="center" alignItems="center">
            <Videos videos={videos} direction="column" />
          </Box>
    </Box>
  )
}

export default VideoDetail
