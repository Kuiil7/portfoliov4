
const Icons = () => {
    const data = [
        {
            id: 1,
          logo: "https://i.imgur.com/Q42urN5.png",
          alt: "HTML logo"
       },
        {
          id: 2,
          logo: "https://i.imgur.com/Q9jOnFI.png",
          alt: "CSS logo"
       },
        {
          id: 3,
          logo: "https://i.imgur.com/jyAUwXc.png",
          alt: "Javascript logo"
      },
      {
          id: 4,
          logo: " https://i.imgrz.com/YrnT.png",
          alt: "JQuery logo"
      },
      {
          id: 5,
          logo: "https://i.imgur.com/TJrR4iB.png",
          alt: "MongoDB logo"
          },

          {
          id: 6,
          logo: "https://i.imgur.com/Qau212o.png",
          alt: "ExpressJS logo"
      },
      {
          id: 7,
          logo: "https://i.imgrz.com/YajO.png",
          alt: "HTML5 logo"
      },
      {
          id: 8,
          logo: "https://i.imgur.com/CfCkpES.png",
          alt: "NPM logo"
      },
      {
          id: 9 ,
          logo: "https://i.imgur.com/RO1tU02.png",
          alt: "ReactJs logo"
      },
      {
          id: 10,
          logo: "https://i.imgur.com/TjzofKf.png",
          alt: "Adobe Illustrator logo"
      },
      {
          id: 11,
          logo: "https://i.imgur.com/Ctc81jK.png",
          alt: "Photoshop logo"
      },
      {
          id: 12,
          logo: "https://i.imgur.com/zLPKdPl.png",
          alt: "Final Cut Pro logo"
      }
      ];


return (
    <div>
<div className="columns p-2 is-mobile is-flex-wrap-wrap">
{data.slice(0,6).map((data) => (
<div className="column slide-text" key={data.id}>
<figure className="image is-64x64" >
<img  src={process.env.PUBLIC_URL + data.logo}alt={data.alt} />
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