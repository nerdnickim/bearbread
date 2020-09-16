import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
	min-height: 100vh;
`;

const Contain = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 100px);
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	justify-content: center;
`;

const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 3;
`;

const Dummy = styled.div`
	width: 100%;
	height: 100px;
	background-color: grey;
`;

const ProductTitle = styled.h3`
	padding: 10px 0;
`;

const Price = styled.span``;

export default () => {
	const history = useHistory();
	const handle = (e) => {
		e.persist();
		e.preventDefault();

		history.push("/prdDetail");
	};
	return (
		<Wrapper>
			<Contain>
				<ProductInfo onClick={handle}>
					<Dummy />
					<ProductTitle>브라우니</ProductTitle>
					<Price>2,000</Price>
				</ProductInfo>
				<ProductInfo onClick={handle}>
					<Dummy />
					<ProductTitle>브라우니</ProductTitle>
					<Price>2,000</Price>
				</ProductInfo>
				<ProductInfo onClick={handle}>
					<Dummy />
					<ProductTitle>브라우니</ProductTitle>
					<Price>2,000</Price>
				</ProductInfo>
				<ProductInfo onClick={handle}>
					<Dummy />
					<ProductTitle>브라우니</ProductTitle>
					<Price>2,000</Price>
				</ProductInfo>
				<ProductInfo onClick={handle}>
					<Dummy />
					<ProductTitle>브라우니</ProductTitle>
					<Price>2,000</Price>
				</ProductInfo>
				<ProductInfo onClick={handle}>
					<Dummy />
					<ProductTitle>브라우니</ProductTitle>
					<Price>2,000</Price>
				</ProductInfo>
			</Contain>
		</Wrapper>
	);
};
