import styled from 'styled-components';

export const Container = styled.div`
	min-width: 210px;
	min-height: 28rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	position: relative;
	color: white;
`;

export const ReportFor = styled.div`
	width: 100%;
	height: 65%;
	background-color: hsl(235, 45%, 61%);
	position: absolute;
	top: 0;
	z-index: 9;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-evenly;
`;

export const Menu = styled.div`
	width: 100%;
	height: 40%;
	background-color: hsl(235, 46%, 20%);
	position: absolute;
	bottom: 0;
	border-radius: 0px 0px 20px 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	li {
		list-style: none;
		margin: 10px 0;
	}

	span {
		color: white;
		cursor: pointer;
	}
`;

export const UserAvatar = styled.img`
	width: 75px;
	height: 75px;
	border: 2px solid white;
	border-radius: 50%;
	margin: 0 25px;
`;

export const ReportTitle = styled.span`
	width: 100%;
	font-size: 0.7rem;
	margin-bottom: 5px;
`;

export const UserName = styled.h2`
	width: 100%;
	font-size: 2rem;
	font-weight: 300;
	margin: 0;
`;

export const UserInfo = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0 30px;
`;
