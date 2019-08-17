import React from "react"
import "../styles/video.component.css";
import backgroundVideo from '../../static/media/background.mp4';

export default () => (
<video className='videoTag' autoPlay loop muted>
    <source src={backgroundVideo} type='video/mp4' />
</video>
)

