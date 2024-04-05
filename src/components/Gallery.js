import ImageGallery from "react-image-gallery";

const Gallery = () => {

    const images = [
        {
          original: "https://i.imgur.com/roNIOwl.png",
          thumbnail: "https://i.imgur.com/roNIOwl.png",
          originalAltL:"poster with capturing deaf heritage day caption and 6 different photos of people in panel, in space, and presenting. color is blue and green with white font",
          thumbnailAlt:"poster with capturing deaf heritage day caption and 6 different photos of people in panel, in space, and presenting. color is blue and green with white font",
          note:"att_2.1.png",
          
        },
        {
          original: "https://i.imgur.com/hK9LezR.png",
          thumbnail: "https://i.imgur.com/hK9LezR.png",
          originalAltL:"full size pull-up display banner with att relay 7-1-1 on it",
          thumbnailAlt:"full size pull-up display banner with att relay 7-1-1 on it",
          note:"att_3.1.png",
        },
        {
          original: "https://i.imgur.com/PezqkNo.png",
          thumbnail: "https://i.imgur.com/PezqkNo.png",
          originalAltL:"ad with 4 people re short stories seminar",
          thumbnailAlt:"ad with 4 people re short stories seminar",
          note:"att_4.1.png",
        },
        {
            original: "https://i.imgur.com/WYNhMiV.png",
            thumbnail: "https://i.imgur.com/WYNhMiV.png",
            originalAltL:"",
            thumbnailAlt:"",
            note:"cbtl_3.png",
          },
          {
            original: "https://i.imgur.com/f2mJ8u0.png",
            thumbnail: "https://i.imgur.com/f2mJ8u0.png",
            originalAltL:"ASL Gatherings Spring calendar schedule with people sitting in a circular table",
            thumbnailAlt:"ASL Gatherings Spring calendar schedule with people sitting in a circular table",
            note:"cbtl_9.png",
          },
          {
            original: "https://i.imgur.com/a6DpRow.jpg",
            thumbnail: "https://i.imgur.com/a6DpRow.jpg",
            originalAltL:"CBTL's ASL Gatherings Calendar Spring 2018.",
            thumbnailAlt:"CBTL's ASL Gatherings Calendar Spring 2018.",
            note:"cbtl_5.png",
          },
          {
            original: "https://i.imgur.com/Dy16JKr.jpg",
            thumbnail: "https://i.imgur.com/Dy16JKr.jpg",
            originalAltL:"ASL Gatherings Spring calendar schedule with people sitting in a circular table.",
            thumbnailAlt:"ASL Gatherings Spring calendar schedule with people sitting in a circular table.",
            note:"cbtl_2.jpg",
          },
          {
            original: "https://i.imgur.com/zbRqQzO.png",
            thumbnail: "https://i.imgur.com/zbRqQzO.png",
            originalAltL:"ASL Immersion Day 2017.",
            thumbnailAlt:"ASL Immersion Day 2017.",
            note:"cbtl_6.png",
          },
          {
            original: "https://i.imgur.com/qUXOE83.png",
            thumbnail: "https://i.imgur.com/qUXOE83.png",
                                        alt: "woman standing with hands locked in front of Gallaudet University.",
            originalAltL:"Woman standing with hands locked in front of Gallaudet University",
            thumbnailAlt:"Woman standing with hands locked in front of Gallaudet University",
            note:"cbtl_10.png",
          },

          {
            original: "https://i.imgur.com/XptwJLq.jpg",
            thumbnail: "https://i.imgur.com/XptwJLq.jpg",
            originalAltL:"A letter for Schuchman Center's hosted event.",
            thumbnailAlt:"A letter for Schuchman Center's hosted event.",
            note:"sc_7.png",
          },
          {
            original: "https://i.imgur.com/5ZGftWv.png",
            thumbnail: "https://i.imgur.com/5ZGftWv.png",
            originalAltL:"Postcard with Schuchman Center documentary pictures of random deaf individuals,back says - teach. do. share.",
            thumbnailAlt:"Postcard with Schuchman Center documentary pictures of random deaf individuals,back says - teach. do. share.",
            note:"sc_2.png",
          },
     
          {
            original: "https://i.imgur.com/j5qlAbd.png",
            thumbnail: "https://i.imgur.com/j5qlAbd.png",
            originalAltL:"",
            thumbnailAlt:"",
            note:"sc_4.png",
          },
          {
            original: "https://i.imgur.com/NAT0mf3.png",
            thumbnail: "https://i.imgur.com/NAT0mf3.png",
            originalAltL:"schuchman center banner",
            thumbnailAlt:"schuchman center banner",
            note:"sc_5.png",
          },
          {
            original: "https://i.imgur.com/0uRHVQF.png",
            thumbnail: "https://i.imgur.com/0uRHVQF.png",
            originalAltL:"Schuchman Center's pull-up display banner.",
            thumbnailAlt:"Schuchman Center's pull-up display banner.",
            note:"sc_8.png",
          },
          {
            original: "https://i.imgur.com/wveo3i9.png",
            thumbnail: "https://i.imgur.com/wveo3i9.png",
            originalAltL:"Poster for Schuchman Center event.",
            thumbnailAlt:"Poster for Schuchman Center event.",
            note:"sc_3.png",
          },
          {
            original: "https://i.imgur.com/DMtllXK.png",
            thumbnail: "https://i.imgur.com/DMtllXK.png",
            originalAltL:"Mural depicting a video production in process in blue and green in front of Schuchman Center.",
            thumbnailAlt:"Mural depicting a video production in process in blue and green in front of Schuchman Center.",
            note:"sc_1.png",
          },
          {
            original: "https://i.imgur.com/Tz0Rlux.png",
            thumbnail: "https://i.imgur.com/Tz0Rlux.png",
            originalAltL:"Youth Programs landing page medium sized header.",
            thumbnailAlt:"Youth Programs landing page medium sized header.",
            note:"yp_1.png",
          },
          {
            original: "https://i.imgur.com/Hx9zLWk.jpg",
            thumbnail: "https://i.imgur.com/Hx9zLWk.jpg",
            originalAltL:"video production flyer",
            thumbnailAlt:"video production flyer",
            note:"cbtl_4.png",
          },
          {
            original: "https://i.imgur.com/GFdtz4l.png",
            thumbnail: "https://i.imgur.com/GFdtz4l.png",
            originalAltL:"physical education major flyer",
            thumbnailAlt:"physical education major flyer",
            note:"pe_1.png",
          },
          {
            original: "https://i.imgur.com/E8zZbyH.jpg",
            thumbnail: "https://i.imgur.com/E8zZbyH.jpg",
            originalAltL:"graduate student orientation schedule",
            thumbnailAlt:"graduate student orientation schedule",
            note:"cbtl_11.png",
          },
        
     
      ];



    return (
   
<>



<section className="hero  is-fullheight has-background-white-ter">
<p className="has-text-centered is-size-3">Graphic Design Demos</p>

  <div className="hero-body">
    
    <div className="card">
    <ImageGallery 
    items={images} 

    />
    </div>
  </div>
</section>
</>
    
    );
  }
  
  export default Gallery;
  