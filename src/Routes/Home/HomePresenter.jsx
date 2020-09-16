import React from "react";
import styled from "styled-components";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import { Swiper, SwiperSlide } from "swiper/react";

const Wrapper = styled.div`
	position: relative;
	height: 100%;
`;

const Contain = styled.div``;

const Banner = styled.div`
	.swiper-wrapper {
		height: 60vh;
	}
	.swiper-slide {
		background-color: grey;
	}
`;

const Div = styled.div`
	width: 100%;
	height: 15px;
	background-color: #d12c1a;
`;

const UnderLine = styled.div`
	width: 90%;
	height: 1px;
	background: black;
	margin: 0 auto;
	margin: ;
`;

const Category = styled.section`
	margin: 20px 0;
	padding: 0 10px;
	.swiper-container {
		min-height: 200px;
	}
`;

const CategoryTitle = styled.h1`
	margin-bottom: 10px;
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
`;

const Price = styled.span``;

const Social = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 100px);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
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
				<Div />
				<Category>
					<CategoryTitle>NEW</CategoryTitle>
					<Swiper
						spaceBetween={20}
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
				<UnderLine />
				<Category>
					<CategoryTitle>BEST</CategoryTitle>
					<Swiper
						spaceBetween={20}
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
				<UnderLine />
				<Category>
					<CategoryTitle>PRODUCT</CategoryTitle>
					<Swiper
						spaceBetween={20}
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
				<Div />
				<Category>
					<CategoryTitle>INSTAGRAM</CategoryTitle>
					<Social>
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
