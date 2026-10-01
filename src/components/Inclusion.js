import { Link } from "react-router-dom";

const Inclusion = () => {
  return (
    <>
      <section className="hero is-fullheight has-background-white-ter is-flex is-align-items-center">
        <div className="container">
          <p className="has-text-centered is-size-3 mb-5">Inclusion</p>

          <div className="columns is-centered is-multiline">
            <div className="column is-two-thirds">
              <div
                className="card p-5"
                style={{ color: "#363636", height: "100%", borderTop: "4px solid #00d1b2" }}
              >
                <div className="has-text-centered">
                  <i
                    className="fa-solid fa-hands-asl-interpreting fa-4x mb-3"
                    aria-hidden="true"
                    style={{ color: "#00d1b2" }}
                  ></i>
                </div>
                <p className="title is-5 has-text-centered" style={{ color: "#363636" }}>
                  SL2T is on your Gboard. It's just switched off.
                </p>
                <p className="subtitle is-6 has-text-centered" style={{ color: "#363636" }}>
                  A technical and accessibility write-up on patching Gboard's SL2T feature gate to
                  run on non-Pixel Android devices — and why that gate shouldn't exist in the
                  first place.
                </p>
                <div className="has-text-centered">
                  <Link className="button is-primary is-outlined" style={{ color: "#00d1b2", borderColor: "#00d1b2" }} to="/sl2t">
                    Read the write-up
                  </Link>
                </div>
              </div>
            </div>

            <div className="column is-two-thirds">
              <div
                className="card p-5"
                style={{ color: "#363636", height: "100%", borderTop: "4px solid #00d1b2" }}
              >
                <div className="has-text-centered">
                  <i
                    className="fa-solid fa-newspaper fa-4x mb-3"
                    aria-hidden="true"
                    style={{ color: "#00d1b2" }}
                  ></i>
                </div>
                <p className="title is-5 has-text-centered" style={{ color: "#363636" }}>
                  Gallaudet Graduate School Newsletters
                </p>
                <p className="subtitle is-6 has-text-centered" style={{ color: "#363636" }}>
                  Graphic design, video production, and ePublication work for Gallaudet
                  University's Graduate School — five issues, cover to cover.
                </p>
                <div className="has-text-centered">
                  <Link className="button is-primary is-outlined" style={{ color: "#00d1b2", borderColor: "#00d1b2" }} to="/graduateschool">
                    View the newsletters
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inclusion;
