import React from 'react';

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placekitten.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img alt="animal to adopt" src={photos[active]} />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <button
              className={index === active ? 'active' : ''}
              data-index={index}
              key={photo}
              onClick={this.handleIndexClick}>
              <img alt="animal thumbnail" src={photo} />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
