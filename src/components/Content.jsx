import React from 'react';
import '../scss/Content.scss';
import PropTypes from 'prop-types';
import notfound from '../../public/notfound.png';


function Content({ body }) {
  return (
    <section className="section">
      <h1 className='section__h1'>{body.title}</h1>
      <div className="section__list">
        {Object.values(body.posts).map((post, index) => (
          <article className="article" key={index}>
            <img className="article__img" src={post.image || notfound} alt="Image-article" />
            <div
              className={`article__type ${
                post.type === 'Type A' ? 'type--pink' : post.type === 'Type B' ? 'type--green' : 'type--grey'
              }`}
            >
              {post.type === 'Type A' || post.type === 'Type B' ? post.type : 'No type'}
            </div>
            <p className="article__date">{post.date}</p>
            <p className="article__title">{post.title}</p>
          </article>
        ))}
      </div>
      <a href={`https://${body.button_link}`} className='section__btn' target='blank'>{body.button_label}</a>
    </section>
  );
}

Content.propTypes = {
  body: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posts: PropTypes.objectOf(PropTypes.shape({
      image: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    button_link: PropTypes.string.isRequired,
    button_label: PropTypes.string.isRequired,
  }).isRequired,
}

export default Content;
