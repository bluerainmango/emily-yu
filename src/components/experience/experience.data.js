//  {/* //title, company, location, period, links(url,name),works(description) */}
import aws from '../../assets/img/aws-logo.jpeg';
import spigen from '../../assets/img/spigen.jpg';
import wordpress from '../../assets/img/wordpress.png';
import samsung from '../../assets/img/samsung.png';
import cailyn from '../../assets/img/cailyn.jpeg';
import hackers from '../../assets/img/hackers.jpeg';
import extron from '../../assets/img/extron.png';

export const experienceData = [
	{
		title: 'Software Development Engineer(Full stack)',
		company: 'Extron',
		location: 'Anaheim, USA',
		period: 'Sept. 2023 - present',
		image: extron,
		links: [
			{
				url: 'https://aws.amazon.com/workdocs/',
				name: 'Amazon AWS WorkDocs',
			},
		],
		works: [
			'Developed Cloud based AV hardware control system(Web app, Desktop app) using Electron, Angular, Node.js, Nest.js, AWS, and micro services.',
			'Converted manual tests between devices and software and .NET based legacy products into one-click automation on the web.',
			'Developed the features of the product with various AWS services(IoT, Lambda, DynamoDB, SQS, SNS, Step functions, etc.) and migration works.',
		],
	},
	{
		title: 'Software Development Engineer(Front End)',
		company: 'Amazon AWS WorkDocs',
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
			'Got evaluated as a high performer at my level in my team.',
			'Owned and developed the core functionality of the product(document preview and commenting).',
			'Tackled scalability and accessibility as a document editing tool targeting massive users including all Amazon employees.',
			'Improved the performance of product including loading speed by redesigning asynchronous APIs and component efficiency.',
			'Proactively approached accessibility issue with visually impaired agent to improve the product for real customer’s voice.',
			'Re-designed AngularJS legacy codes into React based new app using related technologies(Redux, Saga).',
			'Laid off and AWS decided to end support for the product of our organization.',
		],
	},
	{
		title: 'Frontend Developer',
		company: 'Spigen',
		location: 'Irvine, USA',
		period: 'Oct. 2021 - May. 2022',
		image: spigen,
		links: [
			{
				url: 'https://tquens.com/',
				name: 'Tquens project',
			},
			{
				url: 'https://www.spigen.com/pages/enzo',
				name: 'Spigen',
			},
		],
		works: [
			'Developed Amazon automating assistant web application, Tquens.',
			'Coded various web apps requiring pixel-perfect, highly responsive, and reusable web UI.',
			'Developed React components with PMs and UX designers for Design System.',
		],
	},
	// {
	// 	title: 'Frontend Freelancer',
	// company: "Spigen",
	// 	location: 'Riverside, USA',
	// 	period: 'Feb. 2021 - Aug. 2021',
	// 	image: wordpress,
	// 	links: [],
	// 	works: [
	// 		'Developed WordPress website and digitalized menu for local merchant. ',
	// 	],
	// },
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
			'Analyzed data and found insights for reverse logistics operations with Power BI, Excel and SAP.',
			'Managed and lead agents for operations and data.',
		],
	},
];
