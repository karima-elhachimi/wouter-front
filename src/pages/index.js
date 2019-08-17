import React from "react"
import { Helmet } from "react-helmet"
import '../styles/index.css';
import Title from "../components/title.component"
import Video from "../components/video.component";


export default () => (
    
<div className="background">
    <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway:200&effect=anaglyph&display=swap" rel="stylesheet"></link>
    </Helmet>
    <Title/>
    <Video/>
</div>
)
