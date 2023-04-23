import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TECHNOLOGY_SLIDES } from "~/sections/home/miniclass/components/technology-slider-data";
import "swiper/css";
import "swiper/css/autoplay";

export function TechnologySlider() {
	return (
		<div className="my-16 w-full">
			<Swiper
				modules={[Autoplay]}
				spaceBetween={40}
				slidesPerView="auto"
				loop
				autoplay={{
					delay: 1,
					disableOnInteraction: false,
				}}
				speed={2000}
				grabCursor
			>
				{/* TODO: this is just a placeholder */}
				{[
					...TECHNOLOGY_SLIDES,
					...TECHNOLOGY_SLIDES,
					...TECHNOLOGY_SLIDES,
					...TECHNOLOGY_SLIDES,
					...TECHNOLOGY_SLIDES,
				].map((slide, index) => (
					// TODO: use proper index when the TODO above has been resolved
					<SwiperSlide key={`slide.url-${index}`} style={{ width: "fit-content" }}>
						<img src={slide.icon} alt={slide.name} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
