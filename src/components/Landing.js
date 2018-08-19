import React from 'react';
import '../index.css';

const Landing = () => (
  <section className="landing">
 <h1 className="hero-title">Turn the music up!</h1>
 <section>
     <img src={'https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt="headphones" className="headphones" />
</section>
    
    <section className="selling-points">
      <div className="point">
        <h3 className="point-title">Choose your music</h3>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point">
        <h3 className="point-title">Unlimited, streaming, ad-free</h3>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point">
        <h3 className="point-title">Mobile enabled</h3>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>  
    </section>
);

export default Landing;
