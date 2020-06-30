import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
export default () => (
	<Layout>
		<SimpleHero>
			<Banner
				title="the agency for what comes next"
				info="We develop digital products that are properly balanced for feeling and function"
			>
				<Link to="/tours" className="btn-white">
					Learn More
				</Link>
			</Banner>
		</SimpleHero>
		<About />
		<Services />
	</Layout>
);
