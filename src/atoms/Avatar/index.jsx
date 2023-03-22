import React from 'react';
import './Avatar.scss'

const defaultImg = "https://cdn.digitbin.com/wp-content/uploads/Why-I-am-Seeing-Blank-Facebook-Profile-and-How-to-Fix-it.jpg";

const Avatar = ({ imgSrc=defaultImg, isActive=false, clickable=false }) => {
  const handleClick = () => {
    if (clickable) {
      // do something on click
    }
  };

  return (
    <div className='avatar__wrapper' onClick={handleClick}>
      <img src={imgSrc} draggable={false} className={`avatar__img ${clickable && 'avatar__img__clickable'}`} alt="Profile" />
      {isActive && <div className='avatar__activeBadge'></div>}
    </div>
  );
};

export default Avatar;