import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	height: 30%;
	background-color: ${(props) => props.theme.mainBeige};
`;

const Contain = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 30px 0;
	margin-left: 40px;
	line-height: 8px;
`;

const BusinessInfo = styled.h1`
	font-weight: bolder;
	font-size: 1rem;
`;

const Contact = styled.div`
	div {
		margin: 6px 0;
		padding: 4px 0;
	}
`;

const Info = styled.div``;

const Div = styled.div``;

const Span = styled.span`
	font-size: 0.5rem;
`;

const Footer = () => {
	return (
		<Wrapper>
			<Contain>
				<BusinessInfo>BUSINESS INFO</BusinessInfo>
				<Contact>
					<Div>
						<Span>(주)엘에프컴퍼니 이승우</Span>
					</Div>
					<Div>
						<Span>서울특별시 강북구 노해로17길 12(수유동)</Span>
					</Div>
					<Div>
						<Span>070 7514 6114</Span>
					</Div>
					<Div>
						<Span>contact@lfcompany.co.kr</Span>
					</Div>
					<Div>
						<Span>제2020-서울강북-1043호</Span>
					</Div>
				</Contact>
				<Info>
					<Div>
						<Span>이용약관</Span> | <Span>개인정보처리방침</Span> | <Span>이용안내</Span>
					</Div>
				</Info>
			</Contain>
		</Wrapper>
	);
};

export default Footer;
