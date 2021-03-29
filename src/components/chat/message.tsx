import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { t } from '@/i18n';
import { IGif } from '@giphy/js-types';
import { Gif } from '@giphy/react-components';
import { MessageGif } from './giphy/message-gif';
interface MessageProps {
  nickname: string
  content: string
  link?: string
  gif?: IGif,
  sender?: boolean
  children?: any
  ref?: any
  className?: string
  role?: number
}

const roles = [
  'unknown',
  'teacher_role',
  'student_role',
  'assistant_role',
]

export const Message: React.FC<MessageProps> = ({
  nickname,
  content,
  link,
  gif,
  sender,
  children,
  ref,
  role,
  className
}) => {

  const gifId = content?.split(':')[1];

  return (
  <div ref={ref} className={`message ${sender ? 'sent': 'receive'} ${className ? className : ''}`}>
    <div className="nickname">
    {!sender && role? t(roles[role as number]) : ''}{nickname}
    </div>
    <div className="content">
      {link ?
        <Link to={`/replay/record/${link}`} target="_blank">{t('course_recording')}</Link>
        : content?.indexOf('gifId:') === 0 ? MessageGif(gifId)  : content
      }
    </div>
    {children ? children : null}
  </div>
  )
}

interface RoomMessageProps extends MessageProps {
  roomName?: string
}

export const RoomMessage: React.FC<RoomMessageProps> = ({
  nickname,
  roomName,
  content,
  link,
  gif,
  sender,
  children,
  ref,
  role,
  className
}) => {

  return (
  <div ref={ref} className={`message ${sender ? 'sent': 'receive'} ${className ? className : ''}`}>
    {!sender && roomName && (<div className="roomname">{t('from_room')}{roomName}</div>)}
    <div className="nickname">
      {!sender && role ? t(roles[role as number]) : ''}{nickname}
    </div>
    <div className="content">
      {link ? <Link to={`/replay/record/${link}`} target="_blank">{t('course_recording')}</Link> :
        Object.keys(JSON.parse(content)).includes('url') ? 
        <Gif gif={JSON.parse(content)} width={100}></Gif> : content
      }
    </div>
    {children ? children : null}
  </div>
  )
}