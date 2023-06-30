//Alpine JS and plugins import
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";
import collapse from "@alpinejs/collapse";

window.Alpine = Alpine;

Alpine.plugin(collapse);
Alpine.plugin(intersect);
Alpine.plugin(persist);
Alpine.store("app", {
	init() {
		// TODO(elianiva): handle this later, for now let's only deal with light theme
		// this.isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		this.isDark = false;
	},
	isDark: Alpine.$persist(false),
	isLoggedIn: Alpine.$persist(false),
});
Alpine.start();

import "./components";
import "./pages";

document.onreadystatechange = function () {
	if (document.readyState === "complete") {
		document.querySelectorAll('a[href^="#"]').forEach((trigger) => {
			trigger.onclick = function (e) {
				e.preventDefault();
				const hash = this.getAttribute("href");
				const target = document.querySelector(hash);
				const headerOffset = 100;
				const elementPosition = target.offsetTop;
				const offsetPosition = elementPosition - headerOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			};
		});
	}
};
