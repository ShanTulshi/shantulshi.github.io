import * as React from 'react';

import './RotateText.css';

interface IRotateTextState {
	readonly text: string;
}

class RotateText extends React.Component<{}, IRotateTextState> {
	public texts: string[] = [];
	public readonly state: IRotateTextState = {
		text: "AKA Shan Tulshi",
	}

	public constructor(props: Readonly<{}>) {
		super(props);
		fetch('/static/subs.txt')
		.then((value: Response): string | Promise<string>  => {
			if(value.body) {
				return value.text();
			}
			return "AKA Shan Tulshi";
		})
		.then((value: string) => {
			this.texts = value.split('\n').slice(0, -1);
		})
		.then(() => {
			setInterval((() => {
				let i = 0;
				return () => {
					this.setState({
						text: this.texts[i++ % this.texts.length],
					})
				}
			})(), 5000);
		});
		
	}

	public render(): React.ReactNode {
		return (
			<p className="RotateText">{this.state.text}</p>
		);
	}
}

export default RotateText;