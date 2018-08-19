import * as React from 'react';
import { Component } from 'react';

import "../styles/fontello.css"
import '../styles/Links.css';

class Links extends Component<{}, {}> {
	public render(): React.ReactNode {
		return (
			<ul className="icons">
				<li><a target="_blank" href="https://github.com/ShanTulshi" className="icon-github-circled"/></li>
				<li><a target="_blank" href="https://instagram.com/shantulshi" className="icon-instagram"/></li>
				<li><a target="_blank" href="https://linkedin.com/in/shantulshi" className="icon-linkedin"/></li>
				<li><a target="_blank" href="resume.pdf" className="icon-doc-text"/></li>
				<li><a target="_blank" href="mailto:shan@notgood.site?body=%0A%0A-Sent%20from%20website." className="icon-mail"/></li>
			</ul>
		)
	}
}

export default Links;