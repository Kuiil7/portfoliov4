import ImageGallery from "react-image-gallery";

const Inclusion = () => {

    const images = [
        {
          original: "https://i.imgur.com/tSSf90i.png",
          thumbnail: "https://i.imgur.com/tSSf90i.png",
          originalAltL:"front cover of newsletter",
          thumbnailAlt:"front cover of newsletter",
          note:"newsletter #1",
          
        },
        {
          original: "https://i.imgur.com/lh9x8SZ.png",
          thumbnail: "https://i.imgur.com/lh9x8SZ.png",
          originalAltL:"front cover of newsletter",
          thumbnailAlt:"front cover of newsletter",
          note:"newsletter #2",
        },
        {
          original: "https://i.imgur.com/SgJosOC.png",
          thumbnail: "https://i.imgur.com/SgJosOC.png",
          originalAltL:"front cover of newsletter",
          thumbnailAlt:"front cover of newsletter",
          note:"newsletter #3",
        },
        {
            original: "https://i.imgur.com/oq3fGtv.png",
            thumbnail: "https://i.imgur.com/oq3fGtv.png",
            originalAltL:"front cover of newsletter",
            thumbnailAlt:"front cover of newsletter",
            note:"newsletter #4",
          },
          {
            original: "https://i.imgur.com/Vn2aaJ1.png",
            thumbnail: "https://i.imgur.com/Vn2aaJ1.png",
            originalAltL:"front cover of newsletter",
            note:"newsletter #5",
          },
     
          
      ];

    return (
<>
<section className="hero  is-fullheight has-background-white-ter">
<p className="has-text-centered is-size-3">Inclusion</p>
  <div className="hero-body">
    <div className="card"><ImageGallery items={images} />
    <div class="columns is-flex p-5">
    <div class="column">  <p >Demo: <a href="https://pub.lucidpress.com/520a802b-e3ae-4e0b-bf8b-0d56fe0b3aff" style={{color:"primary"}} >Newsletter #1</a></p></div>
  <div class="column">  <p className="has-text-centered">Demo: <a href="https://pub.lucidpress.com/Issue2">Newsletter #2</a></p></div>
  <div class="column"> <p className="has-text-centered">Demo: <a href="https://pub.lucidpress.com/ThirdIssue/">Newsletter #3</a></p></div>
  <div class="column"> <p className="has-text-centered">Demo: <a href="https://pub.lucidpress.com/FourthIssue/">Newsletter #4</a></p></div>
  <div class="column"> <p className="has-text-centered">Demo: <a href="https://pub.lucidpress.com/Issue5/">Newsletter #5</a></p></div>
</div>
    
    </div>
    
  </div>


</section>
</>
    
    );
  }
  
  export default Inclusion;
  