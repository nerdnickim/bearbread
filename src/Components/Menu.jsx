import React from "react";
import styled from "styled-components";
import BearLogo from "../Images/bear2.png";
import { Insta, Triangle } from "./Icons";

const Wrapper = styled.div`
	height: 100%;
	background-color: ${(props) => props.theme.mainBeige};
	padding-top: 20px;

	.active {
		display: block;
	}
	font-family: "카페24 고운밤";
`;

const Contain = styled.div``;

const MenuHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 10px;
	span {
		color: ${(props) => props.theme.brown};
	}
`;

const MenuBody = styled.div`
	padding: 0 10px;
`;

const ImgContain = styled.div`
	background: white;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	margin: 10px 0;
	width: 100%;
	input {
		padding: 10px 6px;
		width: 100%;
	}
`;

//MenuBody

const Ul = styled.ul`
	margin: 10px 0;
	padding: 0 10px;
`;

const Li = styled.li`
	padding: 10px 0;

	span {
		font-size: 20px;
		font-weight: bolder;
	}
	letter-spacing: 1.2px;
	animation: all 0.45s linear;
	color: ${(props) => props.theme.brown};
`;

const SubMenuUl = styled.ul`
	display: none;
	padding: 0 0 0 12px;
`;

const SubMenuList = styled.li`
	margin: 8px 0;
	display: flex;
	align-items: center;
	svg {
		margin-right: 4px;
	}
`;

const InstaWrapper = styled.div`
	margin: 0 10px;
`;

export default ({ isLoggedIn }) => {
	const ACTIVE = "active";

	const toggleMenuHandle = (e) => {
		e.persist();

		const target = e.target.nextElementSibling;
		target.classList.toggle(ACTIVE);
	};

	return (
		<Wrapper>
			<Contain>
				<MenuHeader>
					<ImgContain>
						<img src={BearLogo} alt="bearLogo2" />
					</ImgContain>
					{isLoggedIn ? (
						<span>USER NAME</span>
					) : (
						<span
							style={{
								margin: "20px 0 10px",
								fontWeight: "bolder",
								letterSpacing: "2px",
							}}
						>
							LOGIN/JOIN
						</span>
					)}
					<Form>
						<input type="text" placeholder="SEARCH" />
					</Form>
				</MenuHeader>
				<MenuBody>
					<Ul>
						<Li>
							<span style={{ fontWeight: "bolder" }}>NEW</span>
						</Li>
						<Li>
							<span>BEST</span>
						</Li>
						<Li>
							<span onClick={toggleMenuHandle}>BAKE</span>
							<SubMenuUl>
								<SubMenuList>
									<Triangle />
									DAQUOISE
								</SubMenuList>
								<SubMenuList>
									<Triangle />
									MADELEINE
								</SubMenuList>
								<SubMenuList>
									<Triangle />
									COOKIE
								</SubMenuList>
							</SubMenuUl>
						</Li>
						<Li>
							<span onClick={toggleMenuHandle}>BREAD</span>
							<SubMenuUl>
								<SubMenuList>
									<Triangle />
									SANDWICH
								</SubMenuList>
								<SubMenuList>
									<Triangle />
									MUFFIN
								</SubMenuList>
							</SubMenuUl>
						</Li>
						<Li>
							<span>PRESENT</span>
						</Li>
						<Li>
							<span>SUBSCRIPTION</span>
						</Li>
						<Li>
							<span>GOODS</span>
						</Li>
					</Ul>
					<InstaWrapper>
						<a href="https://www.instagram.com/bearbread_official/">
							<Insta />
						</a>
					</InstaWrapper>
				</MenuBody>
			</Contain>
		</Wrapper>
	);
};
