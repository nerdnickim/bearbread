import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
	min-height: 100vh;
`;

const Contain = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 110px);
	grid-column-gap: 14px;
	grid-row-gap: 10px;
	justify-content: center;
`;

const Category = styled.h1`
	width: 100%;
	background: ${(props) => props.theme.mainBeige};
	padding: 6px 20px;
	margin-bottom: 20px;
	color: ${(props) => props.theme.brown};
	letter-spacing: 2.3px;
	font-family: "kbiz";
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
	font-weight: bolder;
	font-size: 1.1rem;
	color: ${(props) => props.theme.brown};
	font-family: "카페24 고운밤";
`;

const Price = styled.span`
	color: #9f7443;
`;

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
