import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import '../styles/global.css';

const IndexPage = () => (
	<Layout>
		<h2 className="font-bold text-xl">Created for study and to be reused/copied into new projects</h2>
		<div>
			<a
				className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
				href="https://react-table.tanstack.com/"
			>
				React Table Homepage
			</a>
		</div>
		<div>
			<a
				className="anchor" href="https://github.com/tannerlinsley/react-table"
			>
				React Table Repository
			</a>
		</div>
		<p className="my-4">
			The original React Table examples were created with "Create React App". I want to use the package with
			Gatsby. Differences should be minor, but to make something resuable, I want to have it in a copy and paste
			form for future Gatsby projects.
		</p>
		<p className="mb-2"> I'm creating this app with two purposes in mind:</p>
		<ul className="m-0 list-disc">
			<li className="m-0 ml-8">as a learning tool</li>
			<li className="m-0 mb-4 ml-8">as a resource for future projects</li>
		</ul>

		<h4 className="mb-0 text-lg font-bold">The examples</h4>
        Links to the original CRA examples can be found in the sidebar&nbsp;
        <a className="anchor" href="https://react-table.tanstack.com/docs/examples/basic">here</a>.
		<ul className="list-disc ml-8 mt-4">
			<li>
				<Link className="anchor" to="basic">
					Basic
				</Link>
			</li>
            <li>
				<Link className="anchor" to="full-width-resizable">
					Full Width Resizable
				</Link>
			</li>
		</ul>
	</Layout>
);

export default IndexPage;
