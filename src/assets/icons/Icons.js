
const Icons = () => {
    const data = [
        {
            id: 1,
          logo: "https://i.imgrz.com/Yjwf.png",
          alt: "HTML logo"
       },
        {
          id: 2,
          logo: "https://i.imgrz.com/YAlk.png",
          alt: "CSS logo"
       },
        {
          id: 3,
          logo: "http://i.imgrz.com/YLb5.png",
          alt: "Javascript logo"
      },
      {
          id: 4,
          logo: " https://i.imgrz.com/YrnT.png",
          alt: "JQuery logo"
      },
      {
          id: 5,
          logo: "https://i.imgrz.com/Y88z.png",
          alt: "MongoDB logo"
          },

          {
          id: 6,
          logo: "https://i.imgrz.com/YQud.png",
          alt: "ExpressJS logo"
      },
      {
          id: 7,
          logo: "https://i.imgrz.com/YajO.png",
          alt: "HTML5 logo"
      },
      {
          id: 8,
          logo: "https://i.imgrz.com/YgIw.png",
          alt: "NPM logo"
      },
      {
          id: 9 ,
          logo: "https://i.imgrz.com/YldS.png",
          alt: "ReactJs logo"
      },
      {
          id: 10,
          logo: "https://i.imgrz.com/YpbV.png",
          alt: "Adobe Illustrator logo"
      },
      {
          id: 11,
          logo: "https://i.imgrz.com/Y27P.jpg",
          alt: "Photoshop logo"
      },
      {
          id: 12,
          logo: "https://i.imgrz.com/RMw0.png",
          alt: "Final Cut Pro logo"
      }
      ];


return (
    <div>
<div className="columns p-2 is-mobile is-flex-wrap-wrap">
{data.slice(0,6).map((data) => (
<div className="column slide-text" key={data.id}>
<figure className="image is-64x64" >
<img src={data.logo} alt={data.alt} />
</figure>
</div>
))}
</div>
<div className="columns slide-text2 p-2 is-mobile is-flex-wrap-wrap">
{data.slice(6,12).map((data) => (
<div className="column " key={data.id}>
<figure className="image is-64x64" >
<img src={data.logo} alt={data.alt} />
</figure>
</div>
))}
</div>
    </div>

);};

export default Icons;