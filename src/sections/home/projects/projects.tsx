import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { PROJECT_ITEMS } from "~/sections/home/projects/project-data";
import { ProjectCard } from "~/sections/home/projects/components/project-card";
import NavigateLeftIcon from "~/icons/ic_nav-left.svg";
import NavigationRightIcon from "~/icons/ic_nav-right.svg";

export function ProjectsSection() {
	return (
		<section
			className="bg-amber-400 py-14"
			style={{
				backgroundImage: "url(/assets/projects-pattern.png)",
				backgroundRepeat: "repeat",
				backgroundPosition: "center",
			}}
		>
			<span className="text-3xl text-white font-bold block text-center mb-2">
				Lihat produk yang berhasil kami kembangkan.
			</span>
			<p className="text-2xl font-medium text-white text-center">
				Dalam proyek-proyek berikut, WRI Crew menunjukkan hard skill serta soft skill yang dimilikinya.
			</p>
			<div className="flex gap-4 py-20 max-w-[1100px] mx-auto">
				<div className="nav-left flex items-center cursor-pointer hover:brightness-95">
					<NavigateLeftIcon />
				</div>
				<Swiper
					className="flex-1"
					modules={[Navigation]}
					navigation={{
						prevEl: ".nav-left",
						nextEl: ".nav-right",
					}}
					spaceBetween={64}
					slidesPerView={1}
					loop
					centeredSlides
				>
					{PROJECT_ITEMS.map((project) => (
						<SwiperSlide key={project.title} style={{ width: "fit-content" }}>
							<ProjectCard {...project} />
						</SwiperSlide>
					))}
				</Swiper>
				<div className="nav-right flex items-center cursor-pointer hover:brightness-95">
					<NavigationRightIcon />
				</div>
			</div>
		</section>
	);
}
