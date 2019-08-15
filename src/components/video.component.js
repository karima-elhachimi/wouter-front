import React from "react"
import "../css/video.component.css";
import backgroundVideo from '../../static/background.mp4';

export default () => (
<video className='videoTag' autoPlay loop muted>
    <source src={backgroundVideo} type='video/mp4' />
</video>
)

