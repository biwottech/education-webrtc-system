import React, {useState} from 'react';
import {VideoPlayer} from '@/components/video-player';
import {ChatBoard} from '@/components/chat/board';
import { NetlessBoard } from '@/components/netless-board';
import { ScreenSharing } from '@/components/screen-sharing';
import { useRoomStore } from '@/hooks';
import { observer } from 'mobx-react';

export const OneToOne = observer(() => {

  const roomStore = useRoomStore()

  const {
    teacherStream,
    studentStreams,
    roomInfo,
    mutedChat,
    muteControl,
  } = roomStore

  const handleMute = async () => {
    if (mutedChat) {
      await roomStore.unmuteChat()
    } else {
      await roomStore.muteChat()
    }
  }

  const [chat, setChat] = useState<string>('')

  const sendMessage = async () => {
    await roomStore.sendMessage(chat)
    setChat('')
  }

  const handleSendGifMessage = async (gif: any, evt: any) => {
    evt?.preventDefault();
    console.log('gif ', gif);
    const payload = `gifId:${gif.id}`;
    console.log('gif payload', payload);
    await roomStore.sendMessage(payload);
  }
  
  return (
    <div className="room-container">
      <div className="biz-container">
        <NetlessBoard />
        <ScreenSharing />
      </div>
      <div className="live-board">
        <div className="video-board">
            <VideoPlayer
              showClose={false}
              role="teacher"
              {...teacherStream}
            />
            {studentStreams[0]?
              <VideoPlayer
                showClose={false}
                role="student"
                {...studentStreams[0]}
              /> : 
              <VideoPlayer
                userUuid={''}
                streamUuid={''}
                showClose={false}
                account={'student'}
                renderer={{}}
                local={false}
                role="student"
                video={false}
                audio={false}
                showControls={false}
              />
            }
        </div>
        <ChatBoard
          canChat={roomStore.roomInfo.userRole === 'teacher'}
          messages={roomStore.roomChatMessages}
          value={chat}
          sendMessage={sendMessage}
          handleChange={(evt: any) => {
            setChat(evt.target.value)
          }}
          handleSendGifMessage={handleSendGifMessage}
          messageCount={roomStore.unreadMessageCount}
          muteControl={muteControl}
          muteChat={mutedChat}
          handleMute={handleMute}
        />
      </div>
    </div>
  )
})