//  {/* //title, company, location, period, links(url,name),works(description) */}
import aws from '../../assets/img/aws-logo.jpeg';
import spigen from '../../assets/img/spigen.jpg';
import samsung from '../../assets/img/samsung.png';
import extron from '../../assets/img/extron.png';

export const experienceData = [
	{
		title: 'Software Development Engineer (Full Stack)',
		company: 'Extron',
		location: 'Anaheim, USA',
		period: 'Sept. 2023 - Present',
		image: extron,
		links: [
			{
				url: 'https://www.extron.com/',
				name: 'Extron',
			},
		],
		works: [
			'Improved execution speed by 74% (75s to 20s) by redesigning device file-system validation into one-click web automation on an AWS-based backend, replacing manual device testing.',
			'Built RESTful APIs from the ground up (domain, certificate, business logic) and developed the UI on top of them.',
			'Implemented a real-time analytics dashboard using a DynamoDB Stream and OpenSearch ETL pipeline.',
			'Created a monitoring system that detects hardware abnormalities and sends email notifications.',
			'Built desktop and web apps for hardware control using a microservices architecture (Angular, Electron, TypeScript, Node.js, Nest.js, AWS IoT, Step Functions, Lambda, SNS).',
		],
	},
	{
		title: 'Software Development Engineer (Front End)',
		company: 'Amazon (AWS WorkDocs)',
		location: 'Irvine, USA',
		period: 'Aug. 2022 - Jun. 2023',
		image: aws,
		links: [
			{
				url: 'https://aws.amazon.com/workdocs/',
				name: 'Amazon AWS WorkDocs',
			},
		],
		works: [
			'Cut load time by 96% (60s to 2s) by redesigning asynchronous API usage and component efficiency.',
			'Converted AngularJS legacy code into a new React-based app (Redux, Saga), improving UX, performance, and accessibility.',
			'Improved scalability and accessibility of a document editing tool serving 2M+ users by working with visually impaired agents.',
			'Owned core product functionality: document view and user interaction (comments and annotations).',
			'Evaluated as a high performer at my level (L4) on the team.',
		],
	},
	{
		title: 'Frontend Developer',
		company: 'Spigen',
		location: 'Irvine, USA',
		period: 'Oct. 2021 - May 2022',
		image: spigen,
		links: [
			{
				url: 'https://www.spigen.com',
				name: 'Spigen',
			},
		],
		works: [
			'Developed Tquens, a web app that automates Amazon seller workflows.',
			'Prototyped interactive components for the design system with product managers and designers.',
			'Created branding web apps with pixel-perfect, highly responsive, mobile-friendly UI.',
		],
	},
	{
		title: 'Data Analyst',
		company: 'Samsung Electronics America',
		location: 'Compton, USA',
		period: 'Jul. 2020 - Jan. 2021',
		image: samsung,
		links: [
			{
				url: 'https://www.samsung.com/us/about-us/our-business/',
				name: 'Samsung Electronics America',
			},
		],
		works: [
			'Analyzed data and surfaced insights for reverse logistics operations with Power BI, Excel, and SAP.',
			'Managed and led agents for operations and data.',
		],
	},
];
