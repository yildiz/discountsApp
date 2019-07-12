import React from 'react';
import { Text } from 'react-native';

const Typography = (props) => {
	const { size, h1, align, color, font, ph, pv, regular, medium, semibold, bold } = props;

	const textStyle = [
		styles.text,
		h1 && styles.h1,
		align && { textAlign: align },
		size && { fontSize: size },
		color && { color: color },
		ph && { paddingHorizontal: ph },
		pv && { paddingVertical: pv },
		regular && { fontFamily: `Poppins-Regular` },
		medium && { fontFamily: `Poppins-Medium` },
		semibold && { fontFamily: `Poppins-SemiBold` },
		bold && { fontFamily: `Poppins-Bold` },
		props.styles || {}
	];

	return (
		<Text {...props} style={textStyle}>
			{props.children}
		</Text>
	)
};

const styles = {
	text: {
		color: "#1D262C",
		fontSize: 12,
		//fontFamily: "Poppins-SemiBold"
		fontFamily: "Poppins-Regular"
	},
	h1: {
		fontSize: 20
	},
	center: {
		textAlign: "center"
	}
}

export default Typography;