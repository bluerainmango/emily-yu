import React from 'react';

import { SectionHeading } from '../section-heading/section-heading.component';
import './about.style.css';

// Results shown as score gauges (percent = how much of the ring is filled)
const highlights = [
	{
		value: '96%',
		percent: 96,
		label: 'faster load time',
		where: 'Amazon',
		description: '96 percent faster load time',
	},
	{
		value: '74%',
		percent: 74,
		label: 'faster execution runs',
		where: 'Extron',
		description: '74 percent faster execution',
	},
	{
		value: '2M+',
		percent: 100,
		label: 'users with better accessibility',
		where: 'Amazon',
		description: '2 million plus users reached with accessibility improvements',
		tone: 'rain',
	},
];

// Excerpts from recommendations (see recommendation.data.js)
const strengths = [
	{
		eyebrow: 'DETAIL, PERFORMANCE, CUSTOMER FIRST',
		title: 'Details make the difference.',
		text: 'I look beyond the ticket. Shipping the feature is just the start. I also care about the details customers actually feel, like edge cases, load time, and accessibility. My background in UX design, HCI, and data analysis helps me spot them early.',
		metrics: highlights,
		quotes: [
			{
				text: 'She consistently met or exceeded deadlines, and her attention to detail ensured that the projects were always delivered to the highest standard.',
				author: 'Avinash Singh, SDE at Amazon',
			},
			{
				text: 'Her code has a commanding presence.',
				author: 'Joe Tanksley, VP of Software Engineering at J.P. Morgan Chase',
			},
		],
	},
	{
		eyebrow: 'EMPATHY & COLLABORATION',
		title: 'I listen first, then build together.',
		text: "Empathy is how I work with people. Before I build anything, I make sure I understand the customer, what the product manager and designer are aiming for, and what my teammates need. That's why teams trust me with complex work and want to work with me again.",
		quotes: [
			{
				text: 'Emily is dependable, collaborative, and proactive.',
				author: 'Sean Zeringue, Product Manager at Extron',
			},
			{
				text: 'She always takes the time to listen to others and offer thoughtful advice.',
				author: 'Rupal Radadia, Frontend Engineer at Apple',
			},
		],
	},
];

const Gauge = ({ value, percent, label, where, description, tone }) => (
	<li className={`about__gauge ${tone ? `about__gauge--${tone}` : ''}`}>
		<div
			className='about__gauge-ring'
			role='img'
			aria-label={description}
			style={{ '--percent': `${percent}%` }}
		>
			<span className='about__gauge-value'>{value}</span>
		</div>
		<p className='about__gauge-label' aria-hidden='true'>
			{label}
			<br />
			{where}
		</p>
	</li>
);

export const About = () => {
	return (
		<section id='about' className='section section--alt'>
			<div className='section__inner'>
				<SectionHeading eyebrow='01 / ABOUT'>
					Two things I'm known for
				</SectionHeading>

				<div className='about__strengths'>
					{strengths.map((strength) => (
						<article className='about__strength' key={strength.title}>
							<p className='about__strength-eyebrow'>{strength.eyebrow}</p>
							<h3 className='about__strength-title'>{strength.title}</h3>
							<p className='about__strength-text'>{strength.text}</p>

							{strength.metrics && (
								<ul className='about__gauges'>
									{strength.metrics.map((metric) => (
										<Gauge key={metric.value} {...metric} />
									))}
								</ul>
							)}

							<ul
								className={`about__quotes ${
									strength.metrics ? 'about__quotes--divided' : ''
								}`}
							>
								{strength.quotes.map((quote) => (
									<li key={quote.author}>
										<q className='about__quote'>{quote.text}</q>
										<span className='about__quote-author'>
											{quote.author}
										</span>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};
