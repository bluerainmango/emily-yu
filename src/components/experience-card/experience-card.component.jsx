import React from 'react';
import { Icon } from 'react-materialize';

import './experience-card.style.css';

export const ExperienceCardLarge = () => (
	<div className='card wide gradient-border'>
		<div className='bar top'></div>
		<div className='bar right delay'></div>
		<div className='bar bottom delay'></div>
		<div className='bar left'></div>
		<div className='card-content card-highlight'>
			<span className='card-title'>New opportunity?</span>
			<p>
				This slot is exclusively available for all employers. Interested
				in me for your team? Contact and take this slot!
			</p>
			<div className='card-link margin-top-3'>
				<a
					href='https://linkedin.com/in/bluerainmango'
					target='_blank'
					rel='noopener noreferrer'
          className='play-btn'
				>
					Contact via Linkedin
				</a>
				<a href='mailto:emily.jiyeon.yu@gmail.com'>
					{/* <p className="valign-wrapper">Send Email</p> */}
					Send Email
				</a>
			</div>
		</div>
	</div>
);

// Emphasize metrics in a work description (e.g. 96%, 2M+, L4)
const METRIC = /(\d+%|\d+M\+|\bL\d\b)/;

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

export const ExperienceItem = (props) => (
	<article className='experience__item'>
		<span className='experience__dot' aria-hidden='true'></span>
		<div className='experience__card'>
			<header className='experience__header'>
				<img className='experience__logo' src={props.image} alt='' />
				<div className='experience__heading'>
					<h4 className='experience__title'>{props.title}</h4>
					<p className='experience__company'>
						{props.company}
						<span className='experience__location'>
							{' '}
							· {props.location}
						</span>
					</p>
				</div>
				<p className='experience__period'>
					{props.period}
				</p>
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
							<Icon tiny>open_in_new</Icon>
						</a>
					))}
				</div>
			)}
		</div>
	</article>
);
