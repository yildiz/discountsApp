import React from 'react';
import { Text } from 'react-native';

const Typography = (props) => {
	const { size, h1, align, color, font, ph, pv } = props;

	const textStyle = [
		styles.text,
		h1 && styles.h1,
		align && { textAlign: align },
		size && { fontSize: size },
		color && { color: color },
		ph && { paddingHorizontal: ph },
		pv && { paddingVertical: pv },
		font && { fontFamily: `Poppins-${font}` }
	];

	return (
		<Text style={textStyle} {...props}>
			{props.children}
		</Text>
	)
};

const styles = {
	text: {
		color: "#1D262C",
		fontSize: 12,
		fontFamily: "Poppins-SemiBold"
	},
	h1: {
		fontSize: 20
	},
	center: {
		textAlign: "center"
	}
}

export default Typography;