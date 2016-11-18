import React from 'react';

export default ({speaker}) => (
	<article className="block block--flip">
		<div className="block__container  block--flip__container">
			<div className="block__front  block--flip__front">
				<div className="  block__image  block--flip__image">
					<img className="" src={speaker.image} alt="img.landscape_16x9.alt"/>
				</div>

				<header className="  block__header  block--flip__header  ">
					<h2 className="h5  block__title  block--flip__title">
						{speaker.name}
					</h2>
					<h3 className="h7 font-family-2  block__subtitle  block--flip__subtitle">
						{speaker.company}
					</h3>
				</header>
			</div>

			<div className="block__content    block--flip__content">
				<div className="  block__description  block--flip__description">
					<p>
						{speaker.title}
					</p>
				</div>

                { speaker.github ? (<div className="block__social  block--flip__social">
					<a target="_blank" href={speaker.github}>
						<i className="fa fa-github" aria-hidden="true"></i>
					</a>
				</div>) : ''}
			</div>
		</div>
	</article>
);
