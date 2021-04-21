import React, { useState } from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
  Select,
  MenuItem
} from "@material-ui/core";
import { useBoardStore, useRoomStore, useBreakoutRoomStore } from "@/hooks";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 200
  }
});

export const AudioMixing = observer(() => {
  const roomStore = useRoomStore();
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState("mix");
  const [activeEffect, setActiveEffect] = useState("");
  const [play, setPlay] = useState(true);
  const [audioMixingState, setAudioMixingState] = useState("IDLE");

  const handlePlayAudioMix = async () => {
    console.log("play audio mix");
    await roomStore.playAudioMixing();
    console.log("started audio mixing");
  };

  const handlePlayAudioEffect = (
    evt: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    setActiveEffect(evt.target.value as string);
    roomStore.playAudioEffect(evt.target.value as string);
  };

  const handleTogglePlayEffect = async () => {
    console.log("stop audio mix/effect");
    setPlay((play) => {
      roomStore.toggleAudioEffect(!play);
      return !play;
    });
  };

  const handleStopEffect = async () => {
    console.log("pause audio mix");
    setActiveEffect("");
    roomStore.stopAudioEffect();
  };

  const startAudioMixing = (file: any) => {};

  const stopAudioMixing = (file: any) => {};

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Audio Mixing & Audio Effects
          </Typography>
          {activeTab === "effect" && (
            <div>
              <Typography component="p">
                Please select effect to play
              </Typography>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={activeEffect}
                onChange={handlePlayAudioEffect}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="https://web-demos-static.agora.io/agora/smlt.flac">
                  Demo Effect 1
                </MenuItem>
              </Select>
              <div style={{ display: "block" }}>
                <Button
                  className={"btn"}
                  name={"Pause/Resume Effect"}
                  onClick={handleTogglePlayEffect}
                >
                  Pause/Resume Effect
                </Button>
                <Button
                  className={"btn"}
                  name={"Stop Effect"}
                  onClick={handleStopEffect}
                >
                  Stop Effect
                </Button>
              </div>
            </div>
          )}
          {activeTab === "mix" && (
            <FormControl>
              <InputLabel htmlFor="my-input">Audio mix file</InputLabel>
              <Input
                id="my-input"
                type="file"
                aria-describedby="upload audio mix file"
              />
              <FormHelperText id="my-helper-text">
                Choose the audio file to share
              </FormHelperText>
            </FormControl>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          color={activeTab === "mix" ? "primary" : "default"}
          name={"Audio mix"}
          onClick={() => setActiveTab("mix")}
        >
          Mix
        </Button>
        <Button
          className={"btn"}
          name={"Audio effect"}
          color={activeTab === "effect" ? "primary" : "default"}
          onClick={() => setActiveTab("effect")}
        >
          Effect
        </Button>
      </CardActions>
    </Card>
  );
});
