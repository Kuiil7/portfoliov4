import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

const GraduateSchool = () => {
  const images = [
    {
      original: "https://i.imgur.com/tSSf90i.png",
      thumbnail: "https://i.imgur.com/tSSf90i.png",
      originalAltL: "front cover of newsletter",
      thumbnailAlt: "front cover of newsletter",
      note: "newsletter #1",
    },
    {
      original: "https://i.imgur.com/lh9x8SZ.png",
      thumbnail: "https://i.imgur.com/lh9x8SZ.png",
      originalAltL: "front cover of newsletter",
      thumbnailAlt: "front cover of newsletter",
      note: "newsletter #2",
    },
    {
      original: "https://i.imgur.com/SgJosOC.png",
      thumbnail: "https://i.imgur.com/SgJosOC.png",
      originalAltL: "front cover of newsletter",
      thumbnailAlt: "front cover of newsletter",
      note: "newsletter #3",
    },
    {
      original: "https://i.imgur.com/oq3fGtv.png",
      thumbnail: "https://i.imgur.com/oq3fGtv.png",
      originalAltL: "front cover of newsletter",
      thumbnailAlt: "front cover of newsletter",
      note: "newsletter #4",
    },
    {
      original: "https://i.imgur.com/Vn2aaJ1.png",
      thumbnail: "https://i.imgur.com/Vn2aaJ1.png",
      originalAltL: "front cover of newsletter",
      note: "newsletter #5",
    },
  ];

  return (
    <>
      <section className="hero is-fullheight has-background-white-ter is-flex is-align-items-center">
        <div style={{ width: "100%" }}>
          <nav className="breadcrumb pl-5 pt-5" aria-label="breadcrumbs" style={{ color: "#363636" }}>
            <ul>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/inclusion">Inclusion</Link>
              </li>
              <li className="is-active">
                <Link to="/graduateschool" aria-current="page" style={{ color: "#00d1b2" }}>
                  Graduate School Newsletters
                </Link>
              </li>
            </ul>
          </nav>

          <p className="has-text-centered is-size-3">Gallaudet Graduate School Newsletters</p>
          <div className="hero-body">
            <div className="card" style={{ color: "#363636" }}>
              <ImageGallery items={images} />
              <div className="columns is-multiline is-flex p-5">
                <div className="column is-one-fifth">
                  <p>
                    Demo:{" "}
                    <a href="https://pub.lucidpress.com/520a802b-e3ae-4e0b-bf8b-0d56fe0b3aff">
                      Newsletter #1
                    </a>
                  </p>
                </div>
                <div className="column is-one-fifth">
                  <p className="has-text-centered">
                    Demo: <a href="https://pub.lucidpress.com/Issue2">Newsletter #2</a>
                  </p>
                </div>
                <div className="column is-one-fifth">
                  <p className="has-text-centered">
                    Demo: <a href="https://pub.lucidpress.com/ThirdIssue/">Newsletter #3</a>
                  </p>
                </div>
                <div className="column is-one-fifth">
                  <p className="has-text-centered">
                    Demo: <a href="https://pub.lucidpress.com/FourthIssue/">Newsletter #4</a>
                  </p>
                </div>
                <div className="column is-one-fifth">
                  <p className="has-text-centered">
                    Demo: <a href="https://pub.lucidpress.com/Issue5/">Newsletter #5</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GraduateSchool;
