//  {/* //title, company, location, period, links(url,name),works(description) */}
import aws from '../../assets/img/aws-logo.jpeg';
import spigen from '../../assets/img/spigen.jpg';
import wordpress from '../../assets/img/wordpress.png';
import samsung from '../../assets/img/samsung.png';
import cailyn from '../../assets/img/cailyn.jpeg';
import hackers from '../../assets/img/hackers.jpeg';

export const experienceData = [
	{
		title: 'Software Development Engineer(Frontend)',
		company: 'Amazon AWS WorkDocs',
		location: 'Irvine, USA',
		period: 'Aug.2022 - present',
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
		],
	},
	{
		title: 'Frontend Developer',
		company: 'Spigen',
		location: 'Irvine, USA',
		period: 'Oct.2021 - May.2022',
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
			'Developed React components with PMs and UX designers for Design System',
		],
	},
	{
		title: 'Frontend Freelancer',
		// company: "Spigen",
		location: 'Riverside, USA',
		period: 'Feb.2021 - Aug.2021',
		image: wordpress,
		links: [],
		works: [
			'Developed WordPress website and digitalized menu for local merchant. ',
		],
	},
	{
		title: 'Data Analyst',
		company: 'Samsung Electronics America',
		location: 'Compton, USA',
		period: 'Jul.2020 - Jan.2021',
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
	{
		title: 'E-commerce & Web Marketing Manager',
		company: 'CAILYN Cosmetics & Double Dare',
		location: 'Santa Fe Springs, USA',
		period: 'Aug.2015 - Mar.2019',
    image: cailyn,
		links: [
			{
				url: 'https://www.cailyncosmetics.com',
				name: 'CAILYN Cosmetics',
			},
			{ url: 'https://doubledarespa.com/', name: 'Double Dare' },
		],
		works: [
			'Launched a new brand’s website called double dare, and raised the revenue to 19 times for first month within 6 months.',
			'Created and operated SEO optimized websites through Shopify, Cafe24 and open cart web(Retail, Wholesale, Microsite).',
			'Analyzed web data and gathered insights for sales with Google Analytics, campaign tags and etc.',
			'Setup KPIs and built up strategies for online & eCommerce. Managed social media advertisements.',
			'Setup and handled online platforms such as EDI, social commerce and online markets(Amazon Luxury & seller, Groupon, Ulta.com, Dillard’s, Bloomingdale’s)',
		],
	},
	{
		title: 'Online Marketer & PR Coordinator',
		company: 'Hackers Education Group, Korea',
		location: 'Seoul, South Korea',
		period: 'Dec.2013 - Mar.2015',
    image: hackers,
		links: [{ url: 'https://www.hackers.co.kr/', name: 'Hackers English' }],
		works: [
			'Planned and developed online content and e-learning systems.',
			'Operated website (www.hackers.co.kr) and mobile apps.',
			'In charge of PR and managed online media and press.',
		],
	},
];
