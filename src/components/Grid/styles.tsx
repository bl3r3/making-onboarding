import styled from 'styled-components';

// export const GridLayout = styled.div`
// 	width: 100%;
// 	height: 100vh;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// `;

// export const GridReport = styled.div`
// 	width: 15%;
// 	align-items: center;
// 	justify-content: center;
// `;

// export const GridActivities = styled.div`
// 	width: 50%;
// 	height: 50%;
// 	flex-wrap: wrap;
// 	flex-direction: rows;
// 	align-items: center;
// 	justify-content: center;
// 	display: flex;
// 	margin-top: -15px;
// `;

// export const CardContainer = styled.div`
// 	width: 33%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// `;

// export const Gap = styled.div`
// 	width: 15%;
// `;

export const Layout = styled.div`
	width: 70vw;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const MainContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: flex-start;
	width: 100%;
	height: 100%;

	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

export const MainContainerGrid = styled.div`
	display: grid;
	grid-template-columns: 210px repeat(auto-fit, minmax(210px, 1fr));
`;

export const GridContainerManual = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(6, 1fr);
	}
`;

export const GridContainerAuto = styled.div`
	width: 100%;
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
`;
