import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
	min-height: 100vh;
	font-family: "카페24 고운밤";
`;

const Contain = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 120px);
	grid-column-gap: 14px;
	grid-row-gap: 10px;
	justify-content: center;
`;

const Category = styled.h1`
	width: 100%;
	background: ${(props) => props.theme.mainBeige};
	padding: 6px 20px;
	margin-bottom: 20px;
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
			<Category>CATEGORY</Category>
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
