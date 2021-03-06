import React, {useRef, useState} from 'react';
import {VideoPlayer} from '@/components/video-player';
import { ControlItem } from '@/components/control-item';
import './big-class.scss';
import {ChatBoard} from '@/components/chat/board';
import { NetlessBoard } from '@/components/netless-board';
import { ScreenSharing } from '@/components/screen-sharing';
import { observer } from 'mobx-react';
import { useRoomStore } from '@/hooks';
import { EmojiObject } from 'react-twemoji-picker';

export const BigClass = observer(() => {

  const roomStore = useRoomStore()

  const {
    mutedChat,
    muteControl,
    teacherStream: teacher,
    studentStreams,
    roomInfo,
  } = roomStore

  const [chat, setChat] = useState<string>('')

  const sendMessage = async () => {
    await roomStore.sendMessage(chat)
    setChat('')
  }

  const handleMute = async () => {
    if (mutedChat) {
      await roomStore.unmuteChat()
    } else {
      await roomStore.muteChat()
    }
  }

  const handleSelectEmoji = (emoji: EmojiObject, evt: KeyboardEvent) => {
    evt.preventDefault();
    const emPic = String.fromCodePoint(parseInt(emoji.unicode, 16))
    const chatWithEmoji = chat + emPic;
    console.log('chat with emoji ', chatWithEmoji);
    setChat(chatWithEmoji);
  }

  const handleSendGifMessage = async (gif: any, evt: any) => {
    evt?.preventDefault();
    const payload = `gifId:${gif.id}`;
    await roomStore.sendMessage(payload);
  }

  const handleNotice = () => {
    // roomStore.showDialog()
  }

  const handleHandClick = async (type: string) => {
    if (type === 'hands_up') {
      await roomStore.callApply()
    }
  
    if (type === 'hands_up_end') {
      await roomStore.callEnded()
    }
  }
  
  return (
    <div className="room-container">
      <div className="live-container">
        <div className="biz-container">
          <NetlessBoard />
          <ScreenSharing />
          <div className={`interactive ${roomStore.roomInfo.userRole}`}>
            {roomStore.roomInfo.userRole === 'teacher' && roomStore.notice ?
              <ControlItem name={roomStore.notice.reason}
                onClick={handleNotice}
                active={roomStore.notice.reason ? true : false} />
            : null}
            {roomStore.roomInfo.userRole !== 'teacher'?
              <ControlItem
                name={roomStore.cameraEduStream ? 'hands_up_end' : 'hands_up'}
                onClick={handleHandClick}
                active={false}
                text={''}
              />
            : null}
          </div>
        </div>
        <div className="video-container">
          {studentStreams.map((studentStream: any, key: number) => (
            <VideoPlayer
              key={key}
              showClose={roomInfo.userRole === 'teacher' || roomInfo.userUuid === studentStream.userUuid}
              role="student"
              {...studentStream}
            />
          ))}
        </div>
      </div>
      <div className="live-board">
        <div className="video-board">
          <VideoPlayer
            role="teacher"
            showClose={false}
            {...teacher}
          />
        </div>
        <ChatBoard
          name={roomStore.roomInfo.roomName}
          canChat={roomStore.roomInfo.userRole === 'teacher'}
          messages={roomStore.roomChatMessages}
          mute={roomStore.mutedChat}
          value={chat}
          messageCount={roomStore.userList.length}
          sendMessage={sendMessage}
          handleSendGifMessage={handleSendGifMessage}
          handleSelectEmoji={handleSelectEmoji}
          muteControl={muteControl}
          muteChat={mutedChat}
          handleMute={handleMute}
          handleChange={(evt: any) => {
            setChat(evt.target.value)
          }} 
        />
      </div>
    </div>
  )
})