import Thumbnail from './../thumbnail/Thumbnail'

import {videos} from './../video_data'

import './Home.css'

export default function Home() {
    return (
    <>
      <div className='video-row'>
        {videos.map(video => <Thumbnail key={video.id} {...video} />)}
      </div>

      <div className='video-row'>
      {videos.map(video => <Thumbnail key={video.id} {...video} />)}
      </div>

      <div className='video-row'>
        {videos.map(video => <Thumbnail key={video.id} {...video} />)}
      </div>
    </>
    )
}