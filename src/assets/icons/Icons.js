
const Icons = () => {
    const data = [
        {
            id: 1,
          logo: "https://i.imgur.com/HzmD7rB.png",
          alt: "HTML logo"
       },
        {
          id: 2,
          logo: "https://i.imgur.com/2OVWaVk.png",
          alt: "CSS logo"
       },
        {
          id: 3,
          logo: "https://i.imgur.com/sIw8hi4.png",
          alt: "Javascript logo"
      },
      {
          id: 4,
          logo: " https://i.imgur.com/LBUfMWa.png",
          alt: "JQuery logo"
      },
      {
          id: 5,
          logo: "https://i.imgur.com/w3Gw1X2.png",
          alt: "MongoDB logo"
          },

          {
          id: 6,
          logo: "https://i.imgur.com/qA8ziY9.png",
          alt: "ExpressJS logo"
      },
      {
          id: 7,
          logo: "https://i.imgur.com/trCQOje.png",
          alt: "Adobe Premiere Pro "
      },
      {
          id: 8,
          logo: "https://i.imgur.com/9kInFil.png",
          alt: "NPM logo"
      },
      {
          id: 9 ,
          logo: "https://i.imgur.com/TkRYiWj.png",
          alt: "ReactJs logo"
      },
      {
          id: 10,
          logo: "https://i.imgur.com/G5pIReK.png",
          alt: "Adobe Illustrator logo"
      },
      {
          id: 11,
          logo: "https://i.imgur.com/3l8TXaD.png",
          alt: "Photoshop logo"
      },
      {
          id: 12,
          logo: "https://i.imgur.com/w6dwOBI.png",
          alt: "Final Cut Pro logo"
      }
      ];


return (
    <div>
<div className="columns p-2 is-mobile is-flex-wrap-wrap">
{data.slice(0,6).map((data) => (
<div className="column slide-text" key={data.id}>
<figure className="image " >
<img src={data.logo} alt={data.alt} />
</figure>
</div>
))}
</div>
<div className="columns slide-text2 p-2 is-mobile is-flex-wrap-wrap">
{data.slice(6,12).map((data) => (
<div className="column " key={data.id}>
<figure className="image  " >
<img src={data.logo} alt={data.alt} />
</figure>
</div>
))}
</div>
    </div>

);};

export default Icons;