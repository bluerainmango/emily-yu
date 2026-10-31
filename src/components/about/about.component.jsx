import React from 'react';
import 'materialize-css';
// import { H2 } from "react-materialize";
import './about.style.css';

const highlights = [
	{ value: '96%', label: 'faster load time', where: 'Amazon' },
	{ value: '74%', label: 'faster execution', where: 'Extron' },
	{ value: '2M+', label: 'users reached with accessibility work', where: 'Amazon' },
];

// Excerpts from recommendations (see recommendation.data.js)
const quotes = [
	{
		text: 'Emily is dependable, collaborative, and proactive.',
		name: 'Sean Zeringue',
		role: 'Product Manager, Extron',
	},
	{
		text: 'Emily is an excellent collaborator and team player. Her positive attitude and enthusiasm helped to create a great working environment.',
		name: 'Avinash Singh',
		role: 'SDE, Amazon',
	},
	{
		text: 'She always takes the time to listen to others and offer thoughtful advice.',
		name: 'Rupal Radadia',
		role: 'Frontend Engineer, Apple',
	},
];

export const About = (props) => {
	return (
		<section id='about' className='scrollFollower'>
			<span className='anchor'></span>
			{/* <span className="anchor" id="anchor-about"></span> */}
			<h2 className='section__header'>ABOUT</h2>

			<div className='section__container'>
				<h3>
					<blockquote>
						Performance-driven, customer-first, and a great collaborator
					</blockquote>
				</h3>

				<div className='section__description'>
					<p>
						A Full-stack and Frontend Engineer with 4+ years of
						experience building enterprise applications at Amazon
						(AWS WorkDocs) and Extron with React, Angular,
						TypeScript, Node.js, and AWS.
					</p>
				</div>

				<div className='about__strengths'>
					<div className='about__strength'>
						<i className='material-icons about__strength-icon'>speed</i>
						<h4 className='about__strength-title'>
							Performance &amp; Customer First
						</h4>
						<p>
							Strong in performance optimization and always
							thinking about the customer first, driven by a
							background in UX design, HCI (Human-Computer
							Interaction), and data analysis.
						</p>
						<ul className='about__metrics'>
							{highlights.map((h) => (
								<li key={h.value}>
									<span className='about__metric-value'>{h.value}</span>
									<span className='about__metric-label'>
										{h.label} <em>({h.where})</em>
									</span>
								</li>
							))}
						</ul>
					</div>

					<div className='about__strength'>
						<i className='material-icons about__strength-icon'>groups</i>
						<h4 className='about__strength-title'>Great Collaborator</h4>
						<p>
							A reliable teammate who collaborates closely with
							design, product management, and customers to ship
							the right thing together.
						</p>
						<ul className='about__quotes'>
							{quotes.map((q) => (
								<li key={q.name}>
									<q>{q.text}</q>
									<span className='about__quote-author'>
										— {q.name}, {q.role}
									</span>
								</li>
							))}
						</ul>
						<a
							className='about__strength-link'
							href='#anchor-recommendation'
							onClick={props.onClick}
						>
							Hear it from my teammates
							<i className='material-icons'>arrow_downward</i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
