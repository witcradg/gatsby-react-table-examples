import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.ico';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Header = ({ siteTitle }) => (
	<header className="bg-blue-200 mb-6">
		<Helmet>
			<link rel="icon" href={favicon} />
		</Helmet>
		<div className="flex mt-0 mb-0 mx-auto max-w-5xl p-5 pt-6 pl-4 align-text-bottom">
			<Link to="/">
				<FontAwesomeIcon 
                    className="fill-current text-gray-800 pr-4 " 
                    style={{marginTop: '-.3rem'}}
                    icon={faHome} size="3x" />
			</Link>
			<h1 className="m-0 text-4xl">
				<Link to="/" className="text-black no-underline">
					{siteTitle}
				</Link>
			</h1>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
