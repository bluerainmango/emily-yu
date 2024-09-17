import React from 'react';
import 'materialize-css';
// import { H2 } from "react-materialize";
import './about.style.css';

export const About = (props) => {
	return (
		<section id='about' className='scrollFollower'>
			<span className='anchor'></span>
			{/* <span className="anchor" id="anchor-about"></span> */}
			<h2 className='section__header'>ABOUT</h2>

			<div className='section__container'>
				<h3>
					<blockquote>
						Fast learner who truly enjoys solving problems
					</blockquote>
				</h3>

				<div className='section__description'>
					<p>
						A highly motivated Frontend Engineer having a solid
						understanding of React / Angular / Javascript / Node.js with 5 years of
						experience in customer facing web applications,
						e-commerce, micro-frontends, and reusable module.
					</p>

					<p>
						A passionate problem solver having strong organizational
						skills and acute attention to detail driven by a
						well-balanced background of UX design, data analysis,
						and full-stack engineer career.
					</p>

					<p>
						An action bias performer pleasantly addicted to coding
						who never misses delivery under pressure. Significantly
						responsible for achieving goals and meeting deadlines.
					</p>
					<p>
						Always persistently ready to improve performance at the
						highest level, constantly learning, and showing
						innovation. Fast learner, stays
						positive, and dependably honest even in stressful
						challenging circumstances.
					</p>
					<p>
						Works effectively as a team and balances personal
						achievement with group goals. 
					</p>
				</div>
			</div>
		</section>
	);
};
