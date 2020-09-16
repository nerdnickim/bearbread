import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "react-sidebar";
import bearLogo from "../Images/bear3.png";
import { ShoppingCard, MenuIcon } from "./Icons";

const Wrapper = styled.div`
	width: 100%;
	height: 20%;
`;

const MunuButton = styled.div`
	cursor: pointer;
	fill: #a05c0e;
`;

const HeaderInfo = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
`;

const ImgContain = styled.div``;

const HeaderTitle = styled.div`
	display: flex;
	align-items: center;
	font-weight: bolder;
	font-size: 24px;
`;

const Div = styled.div``;

const Header = () => {
	const [state, setState] = useState({
		isMenuOpen: false,
	});

	const toggleMenu = () => {
		setState({ ...state, isMenuOpen: !state.isMenuOpen });
	};
	return (
		<Wrapper>
			<Sidebar
				sidebar={<Div />}
				open={state.isMenuOpen}
				onSetOpen={toggleMenu}
				styles={{
					sidebar: {
						backgroundColor: "white",
						width: "80%",
						zIndex: "10",
					},
				}}
			>
				<HeaderInfo>
					<MunuButton onClick={toggleMenu}>
						<MenuIcon />
					</MunuButton>
					<HeaderTitle>
						<ImgContain>
							<img
								src={bearLogo}
								style={{ width: "28px", height: "28px" }}
								alt="bearLogo"
							/>
						</ImgContain>
						<span>BEAR BREAD</span>
					</HeaderTitle>
					<ShoppingCard />
				</HeaderInfo>
			</Sidebar>
		</Wrapper>
	);
};

export default Header;
