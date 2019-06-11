import * as React from 'react';

export interface HelloProps {
	compiler: string;
	framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
	render() {
		let value = 1;

		let obj = {
			value: 100,
			foo: function() {
				let that = this; // Workaround : this === obj

				console.log("foo's this: ", this); // obj
				console.log("foo's this.value: ", this.value); // 100
				function bar() {
					console.log("bar's this: ", this); // window
					console.log("bar's this.value: ", this.value); // 1
					// console.log("bar's that: ", that); // obj
					// console.log("bar's that.value: ", that.value); // 100
				}
				bar();
			}
		};

		obj.foo();

		return (
			<h1>
				Hello from {this.props.compiler} and {this.props.framework}!
			</h1>
		);
	}
}

// export const Hello = (props: HelloProps) => (
// 	<h1>
// 		Hello from {props.compiler} and {props.framework}!
// 	</h1>
// );
