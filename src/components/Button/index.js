import React from 'react';
import { TouchableOpacity } from 'react-native';

import Text from '../Text';

const Button = (props) => {
	return (
		<TouchableOpacity style={[styles.button, props.row ? { width: "45%", marginHorizontal: 15 } : null, props.buttonStyle ]} {...props}>
			<Text style={[styles.buttonText, props.textStyle]}>
				{props.title}
			</Text>
		</TouchableOpacity>
	)
};

const styles = {
	button: {
		backgroundColor: "#0074e4",
		borderColor: "#71828A",
		borderWidth: 1,
		height: 44,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		marginVertical: 10,
	},
	buttonText: {
		fontFamily: "Poppins-SemiBold",
		fontSize: 13,
		color: "#fff",
	}
}

export default Button;