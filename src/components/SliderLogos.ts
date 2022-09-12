import { ReactComponent as Html} from './../img/skills-icons/html-icon.svg';
import { ReactComponent as Css} from './../img/skills-icons/css-icon.svg';
import { ReactComponent as Js} from './../img/skills-icons/js-icon.svg';
import { ReactComponent as React} from './../img/skills-icons/react-icon.svg';
import { ReactComponent as Redux} from './../img/skills-icons/redux-icon.svg';
import { ReactComponent as Tailwind} from './../img/skills-icons/tailwind-css-icon.svg';
import { ReactComponent as Typescript} from './../img/skills-icons/typescript-icon.svg';
import { ReactComponent as Git} from './../img/skills-icons/git-icon.svg';
import { ReactComponent as VScode} from './../img/skills-icons/VScode-icon.svg';

interface skillLogosType {
    Html: typeof Html,
    Css: typeof Css,
    Js: typeof Js,
    React: typeof React,
    Redux: typeof Redux,
    Tailwind: typeof Tailwind,
    Typescript: typeof Typescript,
    Git: typeof Git,
    VScode: typeof VScode
}

const skillLogos: skillLogosType = {
    Html,
    Css,
    Js,
    React,
    Redux,
    Tailwind,
    Typescript,
    Git,
    VScode
}

export default skillLogos