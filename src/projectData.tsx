import {
	SiReact,
	SiRedux,
	SiExpress,
	SiPostgresql,
	SiPrisma,
	SiTypescript,
	SiJavascript,
	SiCss3,
	SiSqlite,
	SiMaterialui,
} from 'react-icons/si'
import { FaSass } from 'react-icons/fa'

export const projectData = [
	{
		id: 1,
		name: 'The Lost Crates',
		subtitle: 'Full stack e-commerce platform',
		link: 'https://www.thelostcrates.co.nz/',
		screenshot: '/project-images/TLC.webp',
		screenshotmobile: '/project-images/TLC-m.webp',
		repository: 'https://github.com/eosullivan92/lost-crates',
		stack: {
			Javascript: <SiJavascript />,
			React: <SiReact />,
			Redux: <SiRedux />,
			Sass: <FaSass />,
			Express: <SiExpress />,
			PostGres: <SiPostgresql />,
		},
		description:
			'A full stack e-commerce project where users can add/remove to cart and place orders. Orders are saved in a database, and can be fetched with an order ID. State on the front end is managed using Redux and will persist via local storage.',
		reflections: [
			'I started this project to sharpen my backend skills, utilising multiple database tables and storing order information. This gave me a lot of practice making joins across tables and manipulating data to get it ready for the frontend.',
			'I am enjoying getting familiar with Redux to handle more complicated application states',
			'In the future I would like to implement an admin portal to perform CRUD operations on the backend.',
		],
	},
	{
		id: 2,
		name: 'If You Like',
		subtitle: 'A Reddit-like music forum',
		link: 'https://if-you-like-production.up.railway.app/',
		screenshot: '/project-images/ifyoulike.webp',
		screenshotmobile: '/project-images/ifyoulike-m.webp',
		repository: 'https://github.com/eosullivan92/If-you-like-v2',

		stack: {
			React: <SiReact />,
			Typescript: <SiTypescript />,
			Sass: <FaSass />,
			Express: <SiExpress />,
			Prisma: <SiPrisma />,
			PostGres: <SiPostgresql />,
		},
		description:
			'A simple Reddit-like forum where users can discuss music and find suggestions based on their taste',
		reflections: [
			"My main purpose with this project was to learn and practice TypeScript on both the front and back end. There we're certainly some frustrating TS moments during the build, but happy to have overcome these.",
			'I used Prisma as my ORM library. I love how intuative the query builder is, and it works great with TypeScript.',
			'I also used this project as an opportunity to play around with React Context & React Hooks. This has helped clean up my React components by keeping the majority of the state and logic seperate.',
			'As my main focus for this project was to practice TypeScript, I have left the project fairly bare bones. Rather than implement an authentication system, I decided to create a mock one using Express middleware & cookies, and I have left the design very basic for now.',
		],
	},
	{
		id: 3,
		name: 'Colorful Life',
		subtitle: 'A color palette generator',
		link: 'https://colorful-life-production.up.railway.app/',
		screenshot: '/project-images/colorful.webp',
		screenshotmobile: '/project-images/colorful-m.webp',
		repository: 'https://github.com/eosullivan92/color-palette-generator',
		stack: {
			React: <SiReact />,
			JavaScript: <SiJavascript />,
			CSS: <SiCss3 />,
			Express: <SiExpress />,
			Sqlite3: <SiSqlite />,
		},
		description:
			'This was a personal project I started while at Dev Academy. I wanted to create a full stack application where I could apply the concepts I was learning at the course in my own context.',
		reflections: [
			'CSS can get tricky to manage as the project scales. This experience prompted me to move to SASS for future projects (including this portfolio) and I am loving the modular nature of it.',
			'This project gave me a lot of practice making API calls, and using state to make specific requests depending on user colors.',
			'The CRUD features are not currently working on iOS or Safari due to issues with the auth0 authentication tokens on their free-plan. I plan to look into alternatives very soon.',
		],
	},
	{
		id: 4,
		name: 'Plantasia',
		subtitle: 'Your houseplants favourite app',
		link: 'Not currently deployed, apologies for bad image quality',
		screenshot: '/project-images/plantasia-2.webp',
		screenshotmobile: null,
		stack: {
			React: <SiReact />,
			JavaScript: <SiJavascript />,
			CSS: <SiCss3 />,
			Redux: <SiRedux />,
			MaterialUI: <SiMaterialui />,
			Express: <SiExpress />,
			Sqlite3: <SiSqlite />,
		},
		repository: 'https://github.com/eosullivan92/Plantasia',
		description:
			'This was a group project that I was involved in at Dev Academy Aotearoa. It is a personal houseplant tracker with C.R.U.D. functionality. Give your plants the love they deserve.',
		reflections: [
			'The biggest takeaway from this project was the experience of working within a group. I was in charge of our gitflow, and I enjoyed the challenge of bringing each feature together.',
			'We applied agile work practices throughout this project, and it highlighted the benefits of breaking down the project into sprints to keep everyone focused on a common goal.',
			'One of my contributions was implementing the image upload feature. This was something I was new too, so it was quite rewarding to get that working. ',
		],
	},
]
