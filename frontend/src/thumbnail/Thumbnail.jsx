import './Thumbnail.css'

export default function Thumbnail({video_id, title, img}) {

    function redirectToVideo(id) {
        console.log('Redirecting to video ' + id)
    }

    return (
    <div className='thumbnail-container' onClick={() => redirectToVideo(video_id)}>
        <img className='thumbnail-image' src={img} alt={title} />
        <h2 className='thumbnail-title'>{title}</h2>
    </div>
    )
};