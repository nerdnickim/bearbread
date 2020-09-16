import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Contain = styled.div``;

const Category = styled.h1`
	width: 100%;
	background: ${(props) => props.theme.mainBeige};
	padding: 14px 20px;
`;

const Dummy = styled.div`
	width: 100%;
	height: 60vh;
	background: grey;
`;

const Info = styled.div`
	padding: 20px 10px;
`;

const Title = styled.h2`
	font-size: 30px;
`;

const Buttons = styled.div`
	position: fixed;
	bottom: 0;
	display: flex;
	width: 100%;
	button {
		width: 100%;
		outline: none;
		border: none;
		padding: 10px 0;
		font-size: 20px;
	}
	button:first-child {
		background: ${(props) => props.theme.mainBeige};
	}
	button:nth-child(2) {
		background: #4e2d05;
	}
`;

const Div = styled.div`
	width: 100%;
	height: 15px;
	background-color: #d12c1a;
`;

const DetailInfos = styled.div`
	display: flex;
	width: 100%;
	button {
		width: 100%;
		outline: none;
		border: none;
		padding: 10px 0;
		font-size: 20px;
	}
	button:first-child {
		background: #4e2d05;
	}

	button:nth-child(2),
	button:nth-child(3) {
		background: ${(props) => props.theme.mainBeige};
	}
`;

export default () => {
	return (
		<Wrapper>
			<Contain>
				<Category>CATEGORY</Category>
				<Dummy />
				<Info>
					<div
						style={{
							display: "flex",
							margin: "10px 0",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Title>초코 브라우니</Title>
						<span>2,500원</span>
					</div>
					<span>배송비: 3000원.....</span>
				</Info>
				<Div />
				<DetailInfos>
					<button>DETAIL</button>
					<button>REVIEW</button>
					<button>Q&amp;A</button>
				</DetailInfos>
				<Dummy />
				<Dummy />
				<Dummy />
				<Buttons>
					<button>장바구니</button>
					<button>구매하기</button>
				</Buttons>
			</Contain>
		</Wrapper>
	);
};
