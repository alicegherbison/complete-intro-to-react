import React, { lazy } from "react";
import { navigate } from "@reach/router";
import pet from "@frontendmasters/pet";

import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./useThemeContext";

const Modal = lazy(() => import("./Modal"));

class Details extends React.Component {
  state = { loading: true, modal: false };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        url: animal.url,
        loading: false,
      });
    }, console.error);
  }

  adopt = () => navigate(this.state.url);

  toggleModal = () => this.setState({ modal: !this.state.modal });

  render() {
    const { breed, description, location, media, modal, name } = this.state;

    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <section className="details">
        <Carousel media={media} />
        <div>
          <div className="overview">
            <h2 className="name">{name}</h2>
            <p>{breed}</p>
            <p>{location}</p>
          </div>
          <div className="adopt">
            <ThemeContext.Consumer>
              {([theme]) => (
                <button
                  className="text-button"
                  onClick={this.toggleModal}
                  style={{ backgroundColor: theme }}>
                  Adopt {name}
                </button>
              )}
            </ThemeContext.Consumer>
          </div>
          <hr />
          <p>{description}</p>
        </div>
        {modal && (
          <Modal>
            <h2 className="adopt-heading">Adopt {name}?</h2>
            <div className="buttons">
              <ThemeContext.Consumer>
                {([theme]) => (
                  <button
                    className="text-button"
                    onClick={this.adopt}
                    style={{ backgroundColor: theme }}>
                    Yes!
                  </button>
                )}
              </ThemeContext.Consumer>
              <button
                className="text-button text-button-transparent"
                onClick={this.toggleModal}>
                Cancel
              </button>
            </div>
          </Modal>
        )}
      </section>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
