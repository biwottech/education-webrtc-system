import React, { useState } from 'react';
import { Tooltip } from '@material-ui/core';
import { t } from '@/i18n';
import { ControlItem } from '../control-item';
import { useBoardStore, useRoomStore, useBreakoutRoomStore } from '@/hooks';
import {observer} from 'mobx-react';
import ScaleController from './scale-controller';
import { useLocation } from 'react-router-dom';
import { AudioMixing } from '../audio-mixing';

export const FooterMenu = () => {

  const location = useLocation()

  const isBreakoutClass = location.pathname.match('breakout-class')

  return (
    isBreakoutClass ? <BreakoutClassSceneFooterMenu /> : <BasicSceneFooterMenu />
  )
}

const BasicSceneFooterMenu = observer(() => {
  const boardStore = useBoardStore()
  const roomStore = useRoomStore()
  const [showAudioMix, setShowAudioMix] = useState(false);

  const current = boardStore.activeFooterItem

  const onClick = (key: string) => boardStore.changeFooterMenu(key)

  const handleRecording = async () => {
    await roomStore.startOrStopRecording()
  } 
  const handleSharing = async () => {
    await roomStore.startOrStopSharing()
  }
  const toggleAudioMixing = async (e: any) => {
    await console.log('Audio mixing event ');
    setShowAudioMix(!showAudioMix);
  }

  return (
    roomStore.roomInfo.userRole === 'teacher' ?
    <>
    <div className="pagination">
    {!roomStore.sharing ?
      <>
      <Tooltip title={t(`control_items.first_page`)} placement="top">
        <span>
          <ControlItem name={`first_page`}
            active={'first_page' === current}
            onClick={onClick} />
        </span>
      </Tooltip>
      <Tooltip title={t(`control_items.prev_page`)} placement="top">
        <span>
          <ControlItem name={`prev_page`}
            active={'prev_page' === current}
            onClick={onClick} />
        </span>
      </Tooltip>
      <div className="current_page">
        <span>{boardStore.currentPage}/{boardStore.totalPage}</span>
      </div>
      <Tooltip title={t(`control_items.next_page`)} placement="top">
        <span>
          <ControlItem name={`next_page`}
            active={'next_page' === current}
            onClick={onClick} />
        </span>
      </Tooltip>
      <Tooltip title={t(`control_items.last_page`)} placement="top">
        <span>
          <ControlItem name={`last_page`}
            active={'last_page' === current}
            onClick={onClick} />
        </span>
      </Tooltip>
      <div className="menu-split" style={{ marginLeft: '7px', marginRight: '7px' }}></div>
      </> : null }
      <Tooltip title={t(roomStore.recordId ? 'control_items.stop_recording' : 'control_items.recording')} placement="top">
        <span>
          <ControlItem
            loading={roomStore.recording}
            name={roomStore.recording ? 'icon-loading ' : (roomStore.recordId ? 'stop_recording' : 'recording')}
            onClick={handleRecording}
            active={false}
          />
        </span>
      </Tooltip>
      <Tooltip title={showAudioMix ? 'play audio mix/effect' : 'stop audio mix /effect'} placement="top">
        <span>
          <ControlItem
            // loading={roomStore.recording}
            name={showAudioMix ? 'stop_playing' : 'start_playing'}
            onClick={toggleAudioMixing}
            active={false}
          />
        </span>
      </Tooltip>
      {showAudioMix ? <AudioMixing /> : ''}
      <Tooltip title={t(roomStore.sharing ? 'control_items.quit_screen_sharing' : 'control_items.screen_sharing')} placement="top">
        <span>
          <ControlItem
            name={roomStore.sharing ? 'quit_screen_sharing' : 'screen_sharing'}
            onClick={handleSharing}
            active={false}
            text={roomStore.sharing ? 'stop sharing' : ''}
          />
        </span>
      </Tooltip>
    </div>
    <ScaleController
      lockBoard={boardStore.lock}
      zoomScale={boardStore.scale}
      onClick={() => {
        boardStore.openFolder()
      }}
      onClickBoardLock={() => {
        boardStore.toggleLockBoard()
      }}
      zoomChange={(scale: number) => {
        boardStore.updateScale(scale)
      }}
    />
    </>
    : null
  )
})

const BreakoutClassSceneFooterMenu = observer(() => {
  const boardStore = useBoardStore()
  const roomStore = useBreakoutRoomStore()
  const [showAudioMix, setShowAudioMix] = useState(false);

  const current = boardStore.activeFooterItem

  const onClick = (key: string) => boardStore.changeFooterMenu(key)

  const handleRecording = async () => {
    await roomStore.startOrStopRecording()
  } 
  const handleSharing = async () => {
    await roomStore.startOrStopSharing()
  }
  const toggleAudioMixing = async (e: any) => {
    await console.log('Audio mixing event ');
    setShowAudioMix(!showAudioMix);
  }
  
  return (
    roomStore.roomInfo.userRole === 'teacher' ?
    <>
    <div className="pagination">
    {!roomStore.sharing ?
      <>
      <Tooltip title={t(`control_items.first_page`)} placement="top">
        <span>
          <ControlItem name={`first_page`}
            active={'first_page' === current}
            onClick={onClick} />
        </span>
      </Tooltip>
      <Tooltip title={t(`control_items.prev_page`)} placement="top">
        <span>
          <ControlItem name={`prev_page`}
            active={'prev_page' === current}
            onClick={onClick} />
        </span>
      </Tooltip>
      <div className="current_page">
        <span>{boardStore.currentPage}/{boardStore.totalPage}</span>
      </div>
      <Tooltip title={t(`control_items.next_page`)} placement="top">
        <span>
          <ControlItem name={`next_page`}
            active={'next_page' === current}
            onClick={onClick} />
        </span>
      </Tooltip>
      <Tooltip title={t(`control_items.last_page`)} placement="top">
        <span>
          <ControlItem name={`last_page`}
            active={'last_page' === current}
            onClick={onClick} />
        </span>
      </Tooltip>
      <div className="menu-split" style={{ marginLeft: '7px', marginRight: '7px' }}></div>
      </> : null }
      <Tooltip title={t(roomStore.recordId ? 'control_items.stop_recording' : 'control_items.recording')} placement="top">
        <span>
          <ControlItem
            loading={roomStore.recording}
            name={roomStore.recording ? 'icon-loading ' : (roomStore.recordId ? 'stop_recording' : 'recording')}
            onClick={handleRecording}
            active={false}
          />
        </span>
      </Tooltip>
      <Tooltip title={showAudioMix ? 'play audio mix/effect' : 'stop audio mix /effect'} placement="top">
        <span>
          <ControlItem
            // loading={roomStore.recording}
            name={showAudioMix ? 'stop_playing' : 'start_playing'}
            onClick={toggleAudioMixing}
            active={false}
          />
        </span>
      </Tooltip>
      <Tooltip title={t(roomStore.sharing ? 'control_items.quit_screen_sharing' : 'control_items.screen_sharing')} placement="top">
        <span>
          <ControlItem
            name={roomStore.sharing ? 'quit_screen_sharing' : 'screen_sharing'}
            onClick={handleSharing}
            active={false}
            text={roomStore.sharing ? 'stop sharing' : ''}
          />
        </span>
      </Tooltip>
    </div>
    <ScaleController
      lockBoard={boardStore.lock}
      zoomScale={boardStore.scale}
      onClick={() => {
        boardStore.openFolder()
      }}
      onClickBoardLock={() => {
        boardStore.toggleLockBoard()
      }}
      zoomChange={(scale: number) => {
        boardStore.updateScale(scale)
      }}
    />
    </>
    : null
  )
})
