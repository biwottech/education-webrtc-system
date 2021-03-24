import React from 'react';
import EmojiPicker from 'emoji-picker-react';

export const EmojiWindow = (props: any) => {

  const { handleEmojiClick } = props;

  return <EmojiPicker onEmojiClick={handleEmojiClick} />   
  
}