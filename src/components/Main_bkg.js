import jigsaw3 from "../assets/videos/jigsaw3.mp4"
import Main from "./Main";


const Main_bkg = () => {
    return (
      <div className="main-bkg">
        <video autoPlay muted loop >
          <source src={jigsaw3} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
<Main/>
      </div>
    );
  };
  
  export default Main_bkg;