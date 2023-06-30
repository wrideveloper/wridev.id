export function navbar() {
	return {
		scrolled: false,
		height: 60,
		mobileOpen: false,
		scroll() {
			let scrollValue = window.scrollY;
			this.scrolled = scrollValue >= this.height;
		},
		activeFilterTab: "tab-1",
		openFilters() {
			this.isFiltersOpen = true;
		},
		closeFilters() {
			this.isFiltersOpen = false;
		},
	};
}
