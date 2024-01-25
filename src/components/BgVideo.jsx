import Background from '../assets/bgVideo.mp4'

function BgVideo() {
    const myStyle ={
        position: 'relative',
        // zIndex: -1,
        width: '100%',
        height:'auto',
        objectFit: 'cover',
    }
  return (
    <div>
        <video src={Background} style={myStyle} autoPlay muted loop>
            {/* <source src={Background} type='video/mp4'/> */}
        </video>
    </div>
  )
}

export default BgVideo;