import styled from 'styled-components';

interface backgroundColorProps {
	readonly typeColor: string;
}

const setColorHeader = (type: string) => {
	switch (type) {
		case 'work':
			if (type === 'work') {
				return 'hsl(15, 100%, 70%)';
			}
			break;
		case 'play':
			if (type === 'play') {
				return 'hsl(195, 74%, 62%)';
			}
			break;
		case 'study':
			if (type === 'study') {
				return 'hsl(348, 100%, 68%)';
			}
			break;
		case 'exercise':
			if (type === 'exercise') {
				return 'hsl(145, 58%, 55%)';
			}
			break;
		case 'social':
			if (type === 'social') {
				return 'hsl(264, 64%, 52%)';
			}
			break;
		case 'self-care':
			if (type === 'self-care') {
				return 'hsl(43, 84%, 65%)';
			}
			break;
		default:
			return 'hsl(15, 100%, 70%)';
	}
};

export const Card = styled.div`
	width: 210px;
	height: 220px;
	/* width: 100%;
	height: 100%; */
	display: flex;
	flex-direction: column;
	position: relative;
	color: white;
`;

export const CardTitle = styled.div`
	width: 100%;
	height: 30px;
	display: inherit;
	align-items: center;
	justify-content: space-around;
`;

export const CardInfo = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: -20px;
	flex-wrap: wrap;

	h2 {
		width: 100%;
		margin-left: 35px;
		font-size: 3rem;
		font-weight: 300;
		margin-top: -20px;
		margin-bottom: 0;
	}

	span {
		width: 100%;
		font-size: 0.8rem;
		margin-left: 35px;
		font-weight: 300;
	}
`;

export const CardHeader = styled.div<backgroundColorProps>`
	width: 100%;
	height: 30%;
	background-color: ${props => setColorHeader(props.typeColor)};
	display: flex;
	align-items: center;
	justify-content: flex-end;
	overflow: hidden;
	position: absolute;
	border-radius: 20px 20px 0px 0px;
`;

export const CardContent = styled.div`
	width: 100%;
	height: 80%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	background-color: hsl(235, 46%, 20%);
	border-radius: 20px;
	position: absolute;
	z-index: 9;
	top: 40px;
`;

export const CardHeaderImage = styled.img`
	width: 65px;
	padding-right: 15px;
	margin-top: -10px;
`;

export const CardInfoOptions = styled.img`
	cursor: pointer;

	svg:hover {
		transform: scale(0.8);
	}
`;
