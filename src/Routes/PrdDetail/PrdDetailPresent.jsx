import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	font-family: "카페24 고운밤";
`;

const Contain = styled.div``;

const Category = styled.h1`
	width: 100%;
	background: ${(props) => props.theme.mainBeige};
	padding: 8px 20px;
	color: ${(props) => props.theme.brown};
	letter-spacing: 2.3px;
	font-family: "kbiz";
`;

const Dummy = styled.div`
	width: 100%;
	height: 50vh;
	background: grey;
`;

const Info = styled.div`
	padding: 20px 10px;
	span {
		color: ${(props) => props.theme.brown};
	}
`;

const Title = styled.h2`
	font-size: 30px;
	font-weight: bolder;
	color: ${(props) => props.theme.brown};
	margin-bottom: 10px;
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
		font-family: "카페24 고운밤";
	}
	button:first-child {
		background: ${(props) => props.theme.mainBeige};
		color: #4e2d05;
	}
	button:nth-child(2) {
		background: #4e2d05;
		color: ${(props) => props.theme.mainBeige};
	}
`;

const DetailInfos = styled.div`
	display: flex;
	width: 100%;
	button {
		width: 100%;
		outline: none;
		border: none;
		padding: 10px 0;
		font-size: 17px;
		font-family: "카페24 고운밤";
		letter-spacing: 2.3px;
	}
	button:not(:last-child) {
		margin-right: 10px;
	}
	button:first-child {
		background: ${(props) => props.theme.brown};
		color: ${(props) => props.theme.mainBeige};
	}

	button:nth-child(2),
	button:nth-child(3) {
		background: ${(props) => props.theme.mainBeige};
		color: #4e2d05;
	}
`;

const Div = styled.div`
	width: 100%;
	height: 5px;
	background: #4e2d05;
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
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Title>초코 브라우니</Title>
						<span style={{ fontSize: "1.3rem" }}>2,500원</span>
					</div>
					<span>배송비: 3000원.....</span>
				</Info>
				<DetailInfos>
					<button>DETAIL</button>
					<button>REVIEW</button>
					<button>Q&amp;A</button>
				</DetailInfos>
				<Div />
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
