import React from "react";
import styled from "styled-components";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import { Swiper, SwiperSlide } from "swiper/react";

const Wrapper = styled.div`
	position: relative;
	height: 100%;
	.swiper-pagination-bullet-active {
		background: #223500;
	}
`;

const Contain = styled.div``;

const Banner = styled.div`
	.swiper-wrapper {
		height: 93vh;
	}
	.swiper-slide {
		background-color: grey;
	}
`;

const Category = styled.section`
	margin: 20px 0;
	padding: 0 10px;
	.swiper-container {
		min-height: 175px;
	}
	.swiper-pagination {
		bottom: -2px;
	}
`;

const CategoryTitle = styled.h1`
	margin-bottom: 10px;
	font-weight: bolder;
	color: ${(props) => props.theme.brown};
`;

const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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

const Social = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 110px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-content: center;
}
`;

export default () => {
	SwiperCore.use([Pagination]);
	return (
		<Wrapper>
			<Contain>
				<Banner>
					<Swiper
						spaceBetween={10}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						autoplay={1000}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}
					>
						<SwiperSlide>Slide1</SwiperSlide>
						<SwiperSlide>Slide2</SwiperSlide>
						<SwiperSlide>Slide3</SwiperSlide>
						<SwiperSlide>Slide4</SwiperSlide>
						<SwiperSlide>Slide5</SwiperSlide>
					</Swiper>
				</Banner>
				<Category>
					<CategoryTitle>NEW</CategoryTitle>
					<Swiper
						spaceBetween={10}
						slidesPerView={3}
						navigation
						pagination={{ clickable: true }}
						autoplay={1000}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}
					>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
					</Swiper>
				</Category>

				<Category>
					<CategoryTitle>BEST</CategoryTitle>
					<Swiper
						spaceBetween={10}
						slidesPerView={3}
						navigation
						pagination={{ clickable: true }}
						autoplay={1000}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}
					>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
					</Swiper>
				</Category>

				<Category>
					<CategoryTitle>PRODUCT</CategoryTitle>
					<Swiper
						spaceBetween={10}
						slidesPerView={3}
						navigation
						pagination={{ clickable: true }}
						autoplay={1000}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}
					>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
						<SwiperSlide>
							<ProductInfo>
								<Dummy />
								<ProductTitle>브라우니</ProductTitle>
								<Price>2,000</Price>
							</ProductInfo>
						</SwiperSlide>
					</Swiper>
				</Category>
				<Category>
					<CategoryTitle>INSTAGRAM</CategoryTitle>
					<Social>
						<Dummy />
						<Dummy />
						<Dummy />
						<Dummy />
						<Dummy />
						<Dummy />
						<Dummy />
						<Dummy />
						<Dummy />
						<Dummy />
						<Dummy />
						<Dummy />
					</Social>
				</Category>
			</Contain>
		</Wrapper>
	);
};
