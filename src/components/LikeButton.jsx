import React from 'react';

/**
 * LikeButton - Modern like button with heart animation
 */
function LikeButton({ liked, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="like-button"
      aria-label={liked ? 'Remove from saved' : 'Save to favorites'}
      aria-pressed={liked}
    >
      {liked ? 'Saved' : 'Save'}
    </button>
  );
}

export default LikeButton;
