import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';

export default class App extends React.Component {
	state = {
		initial: '',
		next: '',
	};

	componentDidMount = () => {
		// this triggers when app is starting (not running)
		Linking.getInitialURL().then(initial =>
			this.setState({ initial })
		);

		// this triggers when app is already running
		Linking.addEventListener('url', next =>
			this.setState({ next: next.url })
		);
	};

	render() {
		const makeUrl = Expo.Linking.makeUrl('yourPath');

		return (
			<View style={styles.container}>
				<Text style={{ padding: 20, textAlign: 'center' }}>{`Run this: \n adb shell am start -a android.intent.action.VIEW -d "${makeUrl}"`}</Text>
				<Text style={{ padding: 20, textAlign: 'center' }}>x: {this.state.initial}</Text>
				<Text style={{ padding: 20, textAlign: 'center' }}>y: {this.state.next}</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
