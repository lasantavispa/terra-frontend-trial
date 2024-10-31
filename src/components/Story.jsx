import React from 'react';
import '../scss/Story.scss';

function Story() {
  return (
    <div className='background'>
      <section className="story-section">
        <img src="storyimg.png" alt="Story-img" className="story-section__img" />
        <div className="story-section__text">
          <h1 className="story-section__h1">Lorem ipsum dolor sit amet</h1>
          <p className="story-section__p">
            Lorem ipsum dolor sit amet omus calm onsectetur adipiscing elit
            stibulum vehicula maurisrci vel.
          </p>
          <p className="story-section__p">
            Lorem ipsum dolor sit amet omus calm onsectetur adipiscing elit
            stibulum vehicula mauris.
          </p>
          <button className="story-section__btn">Our Story</button>
        </div>
      </section>
    </div>
  );
}

export default Story;
