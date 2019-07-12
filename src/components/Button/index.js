import React from 'react';
import { TouchableOpacity } from 'react-native';

import Text from '../Text';

const Button = (props) => {
	//TODO: style ekle style={props.textStyle}
	return (
		<TouchableOpacity style={[styles.button, props.row ? { width: "45%", marginHorizontal: 15 } : null, props.buttonStyle ]} {...props}>
			{
				props.title ? <Text size={13} col1or="#fff" {...props.textStyle}>{props.title}</Text> : 
				props.children
			}
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
}

export default Button;