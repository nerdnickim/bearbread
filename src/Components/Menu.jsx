import React from "react";
import styled from "styled-components";
import BearLogo from "../Images/bear2.png";

const Wrapper = styled.div`
	height: 100%;
	background-color: ${(props) => props.theme.mainBeige};
	padding-top: 20px;

	.active {
		display: block;
	}
`;

const Contain = styled.div``;

const MenuHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 10px;
`;

const MenuBody = styled.div`
	padding: 0 10px;
`;

const MenuFooter = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
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
	}
	animation: all 0.45s linear;
`;

const SubMenuUl = styled.ul`
	display: none;
	padding: 0 0 0 12px;
`;

const SubMenuList = styled.li`
	margin: 8px 0;
`;

//MenuFooter

const KakaoLogin = styled.div`
	width: 100%;
	height: 40px;
	padding: 10px 0;
	background-color: yellow;
	text-align: center;
`;

const InstagramLogin = styled.div`
	width: 100%;
	height: 40px;
	padding: 10px 0;
	background-color: purple;
	text-align: center;
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
						<span style={{ margin: "20px 0 10px", fontWeight: "bolder" }}>
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
								<SubMenuList>DAQUOISE</SubMenuList>
								<SubMenuList>MADELEINE</SubMenuList>
								<SubMenuList>COOKIE</SubMenuList>
							</SubMenuUl>
						</Li>
						<Li>
							<span onClick={toggleMenuHandle}>BREAD</span>
							<SubMenuUl>
								<SubMenuList>SANDWICH</SubMenuList>
								<SubMenuList>MUFFIN</SubMenuList>
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
				</MenuBody>
				<MenuFooter>
					<KakaoLogin>
						<span>KAKAOTALK</span>
					</KakaoLogin>
					<InstagramLogin>
						<span>INSTAGRAM</span>
					</InstagramLogin>
				</MenuFooter>
			</Contain>
		</Wrapper>
	);
};
