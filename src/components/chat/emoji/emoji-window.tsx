import React from 'react';
import { EmojiPicker } from 'react-twemoji-picker';
import EmojiData from 'react-twemoji-picker/data/twemoji.json';
import 'react-twemoji-picker/dist/EmojiPicker.css';
import './emoji-window.scss';

const emojiData = Object.freeze(EmojiData);

export const EmojiWindow = (params: any) => {
  return  (
    <div className='emoji-picker-window'>
      <EmojiPicker emojiData={emojiData} 
        showNavbar={true} 
        onEmojiSelect={(emoji, e) => {
          e.preventDefault();
          params.handleSelectEmoji(emoji, e);
          //params.setShowEmojiWindow(false); // hide show emoji window
        }} 
        emojiSize={36} />
    </div>
  )
}