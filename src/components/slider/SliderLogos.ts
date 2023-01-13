import Html from '../../img/skills-icons/html-icon.svg';
import Css from '../../img/skills-icons/css-icon.svg';
import Js from '../../img/skills-icons/js-icon.svg';
import React from '../../img/skills-icons/react-icon.svg';
import Redux from '../../img/skills-icons/redux-icon.svg';
import Tailwind from '../../img/skills-icons/tailwind-css-icon.svg';
import Bulma from '../../img/skills-icons/bulma-icon.svg';
import Typescript from '../../img/skills-icons/typescript-icon.svg';
import Git from '../../img/skills-icons/git-icon.svg';
import VScode from '../../img/skills-icons/VScode-icon.svg';
import GitHub from '../../img/skills-icons/github-icon.png';
import npm from '../../img/skills-icons/npm-logo.png';
import ReactQuery from '../../img/skills-icons/react-query-icon.svg';
import ReactRouter from '../../img/skills-icons/react-router-icon.svg';
import Formik from '../../img/skills-icons/formik-icon.png';
import Webpack from '../../img/skills-icons/webpack-icon.svg';
import StyledComponents from '../../img/skills-icons/styled-components.png';

interface SkillIcon {
	url: string;
	title: string;
}

const skillLogos: SkillIcon[] = [
	{ title: 'HTML', url: Html },
	{ title: 'CSS', url: Css },
	{ title: 'JavaScript', url: Js },
	{ title: 'React', url: React },
	{ title: 'React Query', url: ReactQuery },
	{ title: 'React Router', url: ReactRouter },
	{ title: 'Redux', url: Redux },
	{ title: 'TypeScript', url: Typescript },
	{ title: 'Webpack', url: Webpack },
	{ title: 'styled components', url: StyledComponents },
	{ title: 'Tailwind CSS', url: Tailwind },
	{ title: 'BULMA', url: Bulma },
	{ title: 'Git', url: Git },
	{ title: 'VScode', url: VScode },
	{ title: 'GitHub', url: GitHub },
	{ title: 'npm', url: npm },
	{ title: 'Formik', url: Formik },
];
export default skillLogos;
