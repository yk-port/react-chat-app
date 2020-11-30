import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const MessageField = ({ text, setText, name }) => {
  const [isComposed, setIsComposed] = useState(false);

  return (
    <div>
      <TextField
        fullWidth={true}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => {
          if (isComposed) return;

          const inputText = e.target.value;
          if (inputText === '') return;

          if (e.key === 'Enter') {
            console.log('push msg');
            setText('');
            e.preventDefault();
          }
        }}
        onCompositionStart={() => setIsComposed(true)}
        onCompositionEnd={() => setIsComposed(false)}
        value={text}
      />
    </div>
  )
}

export default MessageField;
