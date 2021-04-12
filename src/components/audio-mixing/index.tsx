import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Input, InputLabel, FormControl, FormHelperText } from '@material-ui/core';
import { useBoardStore, useRoomStore, useBreakoutRoomStore } from '@/hooks';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 200
  },
});

export const AudioMixing = observer(() => {
  const roomStore = useRoomStore();
  const classes = useStyles();
  const [audioMixingState, setAudioMixingState] = useState('IDLE');

  const handlePlayAudioMix = async () => {
    console.log('play audio mix');
  };
  const handlePlayAudioEffect = async () => {
    console.log('play audio effect');
  }
  const handleStopCurrentAudio = async () => {
    console.log('stop audio mix/effect');
  }
  const handlePauseCurrentAudio = async () => {
    console.log('pause audio mix');
  }

  const startAudioMixing = (file: any) => {

  }

  const stopAudioMixing = (file: any) => {
    
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Audio Mixing & Audio Effects
          </Typography>
          <FormControl>
            <InputLabel htmlFor="my-input">Audio mix file</InputLabel>
            <Input id="my-input" type="file" aria-describedby="upload audio mix file" />
            <FormHelperText id="my-helper-text">Choose the audio file to share</FormHelperText>
          </FormControl>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" 
                size="small" 
                color="primary" 
                name={'Audio mix'} 
                onClick={handlePlayAudioMix}
        >
           Mix
        </Button>
        <Button className={'btn'} 
                name={'Audio effect'} 
                onClick={handlePlayAudioEffect}
        >
          Effect
        </Button>
        <Button className={'btn'} 
                name={'Pause mix'} 
                onClick={handlePauseCurrentAudio}  
        >
          Pause
        </Button>
        <Button className={'btn'} 
                name={'Stop mix'} 
                onClick={handleStopCurrentAudio}  
        >
        Stop
        </Button>
      </CardActions>
    </Card>
  );
})