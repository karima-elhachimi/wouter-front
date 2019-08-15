import React from "react"
import './index.css';
import Title from "./title"
import backgroundVideo from '../../static/background.mp4';

export default () => (
    
<div className="background">
<video className='videoTag' autoPlay loop muted>
    <source src={backgroundVideo} type='video/mp4' />
</video>
    <Title/>
</div>
)
