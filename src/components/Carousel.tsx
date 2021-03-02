import React, { Component, MouseEvent } from "react";
import { Photo } from "@frontendmasters/pet";

interface IProps {
  media: Photo[];
}

interface IState {
  active: number;
  photos: string[];
}

class Carousel extends Component<IProps, IState> {
  public state = {
    photos: [],
    active: 0,
  };

  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ["http://placekitten.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  public handleIndexClick = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    if (event.currentTarget.dataset.index) {
      this.setState({
        active: +event.currentTarget.dataset.index,
      });
    }
  };

  public render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img
          alt="animal to adopt"
          className="image-large"
          src={photos[active]}
        />
        <div className="buttons">
          {photos.map((photo, index) => (
            <button
              className={index === active ? "active" : ""}
              data-index={index}
              key={photo}
              onClick={this.handleIndexClick}>
              <img alt="animal thumbnail" className="image-small" src={photo} />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
