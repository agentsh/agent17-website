import React from 'react';

export default ({speaker}) => (
    <div className={speaker.class}>
    <article className="block block--feature-rounded">
        <div className="block__container  block--feature-rounded__container">
            <div className='grid  grid--middle'>
                {speaker.image  &&
                <div className='grid__item  one-third'>
                    <div className="block__image  block--feature-rounded__image">
                        <img className="" src={speaker.image} alt="{speaker.name}"/>
                    </div>
                </div>
                }

                <div className='grid__item  two-thirds'>
                    <div className="block__content  block--feature-rounded__content">
                        <header className="  block__header  block--feature-rounded__header  ">
                            <div>
                                {speaker.time}
                            </div>
                            <h2 className="speaker-company  bold  block--feature-rounded__title">
                                {speaker.name}
                            </h2>
                        </header>

                        <div className="speaker-company  block--feature-rounded__description">
                            <p>
                                {speaker.company}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </article>
    </div>
);
