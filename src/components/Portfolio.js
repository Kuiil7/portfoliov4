import {Link} from 'react-router-dom';


const Portfolio = () => {
  return (
    <>
      <section className="hero has-background-light is-fullheight">
        <div className="hero-body container has-text-centered">
          <div className="">
            <p className="title">Project Demos</p>
            <nav className="columns is-multiline">
              <div className="column is-one-quarter has-text-centered">
                <div>
                  <p className="heading">
                    <Link className="navbar-item4" to="/api">
                      <i className="fa-solid fa-arrow-right-arrow-left fa-5x mb-2 mr-1" aria-hidden="true"></i>
                      <p>API Projects</p>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="column is-one-quarter has-text-centered">
                <div>
                  <p className="heading">
                    <Link className="navbar-item4" to="/static">
                      <i className="fa-solid fa-display fa-5x mb-2 mr-2" aria-hidden="true"></i>
                      <p>Static Websites</p>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="column is-one-quarter has-text-centered">
                <div>
                  <p className="heading">
                    <Link className="navbar-item4" to="/inclusion">
                      <i className="fa-solid fa-hands-asl-interpreting fa-5x mb-2 mr-2" aria-hidden="true"></i>
                      <p>Inclusion</p>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="column is-one-quarter has-text-centered">
                <div>
                  <p className="heading">
                    <Link className="navbar-item4" to="/gallery">
                      <i className="fa-solid fa-paintbrush fa-5x mb-2 mr-2" aria-hidden="true"></i>
                      <p>Graphic Design</p>
                    </Link>
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
  