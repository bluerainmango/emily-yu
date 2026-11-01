import React from 'react';

export const ExperienceCardLarge = () => (
	<div className='experience__cta-border'>
		<div className='experience__cta'>
			<h3 className='experience__cta-title'>New opportunity?</h3>
			<p className='experience__cta-text'>
				This spot is open to every employer. Want me on your team? Reach out
				and it's yours.
			</p>
			<div className='experience__cta-links'>
				<a
					href='https://linkedin.com/in/bluerainmango'
					target='_blank'
					rel='noopener noreferrer'
					className='experience__cta-button'
				>
					Contact via LinkedIn
				</a>
				<a className='experience__cta-email' href='mailto:emily.jiyeon.yu@gmail.com'>
					Send email
				</a>
			</div>
		</div>
	</div>
);

// Emphasize metrics in a work description (e.g. 96%, 2M+)
const METRIC = /(\d+%|\d+M\+)/;

const highlightMetrics = (text) =>
	text.split(METRIC).map((part, i) =>
		i % 2 === 1 ? (
			<strong className='experience__metric' key={i}>
				{part}
			</strong>
		) : (
			part
		)
	);

const ExternalIcon = () => (
	<svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
		<path d='M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5' />
	</svg>
);

export const ExperienceItem = (props) => (
	<article
		className={`experience__item ${props.current ? 'experience__item--current' : ''}`}
	>
		<span className='experience__dot' aria-hidden='true'></span>
		<div className='experience__card'>
			<header className='experience__header'>
				<span className='experience__logo'>
					<img src={props.image} alt='' />
				</span>
				<div className='experience__heading'>
					<h3 className='experience__title'>{props.title}</h3>
					<p className='experience__company'>
						{props.company}
						<span className='experience__location'>, {props.location}</span>
					</p>
				</div>
				<p className='experience__period'>{props.period}</p>
			</header>

			<ul className='experience__works'>
				{props.works.map((work, i) => (
					<li key={`work-${i}`}>{highlightMetrics(work)}</li>
				))}
			</ul>

			{props.links.length > 0 && (
				<div className='experience__links'>
					{props.links.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							{link.name}
							<ExternalIcon />
						</a>
					))}
				</div>
			)}
		</div>
	</article>
);
