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

export const ExperienceCardSmall = (props) => (
	<div className='card wide'>
		<div className='card-content'>
			<img
				src={props.image}
				alt={props.image}
				key={props.image}
				aria-label={props.image}
			/>
			<span className='card-title activator text-header'>
				{props.title}
			</span>
			<p>{props.company}</p>
			<p>{props.location}</p>
			<p>{props.period}</p>
			<button className='btn-floating halfway-fab waves-effect waves-light blue'>
				<Icon className='activator'>library_books</Icon>
			</button>
			<div className='card-link margin-top-3'>
				{props.links.map((link) => (
					<a
						key={link.name}
						href={link.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						{link.name}
					</a>
				))}
			</div>
		</div>
		<div className='card-reveal'>
			<span className='card-title grey-text text-darken-4'>
				Work<i className='material-icons right'>close</i>
			</span>
			<ul className='square'>
				{props.works.map((work, i) => (
					<li key={`work-${i}`}>{work}</li>
				))}
			</ul>
		</div>
	</div>
);
