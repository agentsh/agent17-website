import React from 'react';

export default ({sponsor, primary, className}) => (
    <div className={className} style={{ textAlign: 'center' }}>
        <a href={sponsor.link} target="_blank">
            <img className="img-responsive  img-sponsor" src={sponsor.image} alt={sponsor.title} width={sponsor.width}/>
        </a>
    </div>
);
