// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Custom ERP System with Blazor Server',
		category: 'Web Application',
		img: require('@/assets/images/erp-hero.png'),
	},
	{
		id: 2,
		title: 'Warehouse Management System Mobile & Flutter Web ',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'Returns / Repair Management System Flutter Web',
		category: 'Web Application',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'VW Asterix Integration',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'Porsche Asterix Integration',
		category: 'UI/UX Design',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 6,
		title: 'Vinfast Amazon Alexa Integration',
		category: 'UI/UX Design',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;
