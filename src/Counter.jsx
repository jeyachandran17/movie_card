import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useEffect } from 'react';

export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);

  // useEffect(() => {
  //   console.log("like values is updated",like)
  // },[like])

  return (
    <div>
      <IconButton aria-label="like" color='primary' onClick={() => setlike(like + 1)}><Badge badgeContent={like} color="primary"><ThumbUpIcon/></Badge></IconButton>
      <IconButton aria-label="dislike" color='error' onClick={() => setdislike(dislike + 1)}><Badge badgeContent={dislike} color="error"><ThumbDownIcon/></Badge></IconButton >
    </div>
  );
}
