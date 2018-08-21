import * as React from 'react';
import { Component } from 'react';

import * as ReactMarkdown from 'react-markdown';

import './WebResume.css';

class WebResume extends Component<any, {content: string}> {
	public constructor(props: any) {
		super(props);
		this.state = {
			content: "Loading...\n",
		}
		fetch('/static/resume.md')
		.then((resp: Response) : Promise<string> => {
			if(resp.ok && resp.body) {
				return resp.text()
			} else {
				throw new Error("Response body empty!");
			}
		})
		.then((text: string) => {
			this.setState({ content: text });
		}, 
		(err: Error) => {
			console.log(err.message);
			this.setState({ content: "# Error fetching resume!\n\nA PDF version can probably be found [here](https://notgood.site/resume)" });
		});
	}
	public render(): React.ReactNode {
		return (
			<ReactMarkdown source={this.state.content}/>
		)
	}
}

export default WebResume;