import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "react-sidebar";
import bearLogo from "../Images/bear3.png";
import { ShoppingCard, MenuIcon } from "./Icons";
import Menu from "./Menu";

const Wrapper = styled.div`
	width: 100%;
	height: 20%;
`;

const MunuButton = styled.div`
	cursor: pointer;
	fill: ${(props) => props.theme.brown};
`;

const HeaderInfo = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	align-items: center;
	svg {
		fill: ${(props) => props.theme.brown};
	}
`;

const HeaderTitle = styled.div`
	display: flex;
	align-items: center;
	font-weight: bolder;
	font-size: 28px;
	span {
		color: ${(props) => props.theme.brown};
	}
`;

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
				sidebar={<Menu />}
				open={state.isMenuOpen}
				onSetOpen={toggleMenu}
				styles={{
					sidebar: {
						backgroundColor: "white",
						width: "80%",
						zIndex: "4",
					},
				}}
			>
				<HeaderInfo>
					<MunuButton onClick={toggleMenu}>
						<MenuIcon />
					</MunuButton>
					<HeaderTitle>
						<span style={{ fontFamily: "oskarRegular" }}>BEAR BREAD</span>
					</HeaderTitle>
					<ShoppingCard />
				</HeaderInfo>
			</Sidebar>
		</Wrapper>
	);
};

export default Header;
