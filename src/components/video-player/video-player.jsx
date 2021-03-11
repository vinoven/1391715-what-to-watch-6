import React, {useEffect, useRef} from 'react';
import {VIDEO_PLAYBACK_DELAY} from '../../utils/const';
import {filmPropTypes} from '../../utils/prop-types';

const VideoPlayer = (props) => {
  const {film} = props;
  const {previewImage, previewVideoLink} = film;
  const videoRef = useRef(``);
  let timerId;

  useEffect(() => {
    videoRef.current.onmouseenter = () => {
      timerId = setTimeout(handleMouseEnter, VIDEO_PLAYBACK_DELAY);
    };

    videoRef.current.onmouseout = () => {
      clearTimeout(timerId);
      handleMouseOut();
    };

    const handleMouseEnter = () => {
      videoRef.current.play();
    };

    const handleMouseOut = () => {
      videoRef.current.load();
    };
  }, []);


  return (
    <video width="280" height="175" src={previewVideoLink} poster={previewImage} muted ref={videoRef}></video>
  );
};

VideoPlayer.propTypes = filmPropTypes;
export default VideoPlayer;

