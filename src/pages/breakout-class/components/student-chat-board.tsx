import React, { useState } from 'react'
import {observer} from 'mobx-react'
import { useBreakoutRoomStore, useBoardStore, useRoomStore } from '@/hooks'
import { EduMediaStream } from '@/stores/app/room'
import { t } from '@/i18n'
import { ChatPanel } from '@/components/chat/panel'
import { StudentList } from '@/components/student-list'
import { EmojiObject } from 'react-twemoji-picker'

export const StudentChatBoard = observer(() => {
  const breakoutRoomStore = useBreakoutRoomStore()

  const [value, setValue] = useState<string>('')

  const sendMessage = async (message: any) => {
    await breakoutRoomStore.sendMessage(message)
    setValue('')
  }
  
  const handleSendGifMessage = async (gif: any, evt: any) => {
    evt?.preventDefault();
    const payload = `gifId:${gif.id}`;
    await breakoutRoomStore.sendMessage(payload);
  }
  
  const handleChange = (evt: any) => {
    setValue(evt.target.value)
  }

  const handleSelectEmoji = (emoji: EmojiObject, evt: KeyboardEvent) => {
    evt.preventDefault();
    const emPic = String.fromCodePoint(parseInt(emoji.unicode, 16))
    const chatWithEmoji = value + emPic;
    setValue(chatWithEmoji);
  }

  const {
    mutedChat,
    studentStreams
  } = breakoutRoomStore

  const handleMute = async () => {
    // if (mutedChat) {
    //   await breakoutRoomStore.unmuteChat()
    // } else {
    //   await breakoutRoomStore.muteChat()
    // }
  }

  const userRole = breakoutRoomStore.roomInfo.userRole

  const boardStore = useBoardStore()
  const { grantUsers } = boardStore

  const handleClick = async (evt: any, id: string, type: string) => {
    const isLocal = (userUuid: string) => breakoutRoomStore.roomInfo.userUuid === userUuid
    if (breakoutRoomStore.roomInfo.userRole === 'teacher' || isLocal(id)) {
      const target = studentStreams.find((it: EduMediaStream) => it.userUuid === id)
      switch (type) {
        case 'audio': {
          if (target) {
            if (target.audio) {
              await breakoutRoomStore.muteStudentAudio(id, isLocal(id))
            } else {
              await breakoutRoomStore.unmuteStudentAudio(id, isLocal(id))
            }
          }
          break
        }
        case 'video': {
          if (target) {
            if (target.video) {
              await breakoutRoomStore.muteStudentVideo(id, isLocal(id))
            } else {
              await breakoutRoomStore.unmuteStudentVideo(id, isLocal(id))
            }
          }
          break
        }
        // case 'chat': {
        //   if (target) {
        //     if (target.chat) {
        //       await breakoutRoomStore.muteStudentChat(id, isLocal(id))
        //     } else {
        //       await breakoutRoomStore.unmuteStudentChat(id, isLocal(id))
        //     }
        //   }
        // }
      }
    }
  }

  return (
    <>
      <div className="menu">
        <div
          className={`item ${breakoutRoomStore.activeTab === 'first' ? 'active' : ''}`}
          onClick={() => {
            breakoutRoomStore.switchTab('first')
          }}>
          {t('room.chat_room')}
          {breakoutRoomStore.activeTab !== 'first' && breakoutRoomStore.unreadMessageCount > 0 ? <span className={`message-count`}>{breakoutRoomStore.unreadMessageCount}</span> : null}
        </div>
        <div
          className={`item ${breakoutRoomStore.activeTab === 'second' ? 'active' : ''}`}
          onClick={() => {
            breakoutRoomStore.switchTab('second')
          }}
        >
          {t('room.student_list')}
        </div>
      </div>
      <div className={`chat-container ${breakoutRoomStore.activeTab === 'first' ? '' : 'hide'}`}>
        <ChatPanel
          canChat={false}
          muteControl={false}
          muteChat={breakoutRoomStore.mutedChat}
          handleMute={handleMute}
          messages={breakoutRoomStore.roomChatMessages}
          value={value}
          sendMessage={sendMessage}
          handleSendGifMessage={handleSendGifMessage}
          handleSelectEmoji={handleSelectEmoji}
          handleChange={handleChange} />
      </div>
      <div className={`student-container ${breakoutRoomStore.activeTab !== 'first' ? '' : 'hide'}`}>
        <StudentList
          userRole={userRole}
          studentStreams={studentStreams}
          grantUsers={grantUsers}
          handleClick={handleClick}
        />
      </div>
    </>
  )
})