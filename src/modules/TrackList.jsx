// import { useContext } from "react";
import useMusicPlayer from "../hook/useMusicPlayer";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
const TrackList = () => {
  // const { trackList, , playTrack, isPlaying } =
    // useMusicPlayer();
  const { trackList,playTrack,isPlaying,currentTrackName,currentTrackIndex} = useMusicPlayer();
  return (
    <Box
    sx={{
      bgcolor: '#cfe8fc',
      maxWidth: '100vw' ,
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      borderRadius:"20px",
      padding: "10px",
    }}>
      <List>
        {trackList.map((track, index) => (
          <>
            <ListItem 
            sx={index===currentTrackIndex?{bgcolor: "rgba(0,0,0,0.1)"}:""}
            key={index} onClick={()=>{if(index!==currentTrackIndex) playTrack(index)}}
            >
              <ListItemButton>
                <div >
                  <div className="song-title">{track.name}</div>
                </div>
              </ListItemButton>
            </ListItem>
            <Divider/>
          </>
        ))}
      </List>
      <Box
      sx={{
        color:"rgb(255,255,255)",
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor: 'primary.dark',
        padding: "5px",
      }}
      >
        <h3>{currentTrackName}</h3>
      </Box>
      <Stack direction="row" spacing={4} sx={{padding: 2 }}>
        <Button onClick={()=>playTrack(currentTrackIndex===null?(trackList.length-1):currentTrackIndex===0?trackList.length-1:currentTrackIndex-1)}><SkipPreviousIcon/></Button>
        <Button onClick={()=>playTrack(currentTrackIndex===null?0:currentTrackIndex)}>{isPlaying?<PauseIcon/> : <PlayArrowIcon/>}</Button>
        <Button onClick={()=>playTrack(currentTrackIndex===null?((trackList.length-1)>0?1:0):currentTrackIndex<(trackList.length-1)?(currentTrackIndex+1):0)}><SkipNextIcon/></Button>
      </Stack>
    </Box>
  );
};
    
    export default TrackList;