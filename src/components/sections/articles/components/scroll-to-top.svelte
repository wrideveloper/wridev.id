<script lang="ts">
    import { onMount } from "svelte";
    import ArrowUpIcon from "~icons/ph/arrow-up-bold";

    import gsap from "gsap";
    import { ScrollToPlugin } from "gsap/ScrollToPlugin";

    gsap.registerPlugin(ScrollToPlugin);

    let showButton = false;

    function handleScroll() {
        if (window.scrollY > 500) {
            showButton = true;
        } else {
            showButton = false;
        }
    }

    function scrollToTop() {
        gsap.to(window, {
            duration: 0.8,
            scrollTo: { y: 0 },
            ease: "power4.out"
        });
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<button
    on:click={scrollToTop}
    class="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-wri-white/80 backdrop-blur-md border border-wri-gray-200 shadow-lg text-wri-blue hover:bg-wri-blue hover:text-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
    class:opacity-0={!showButton}
    class:invisible={!showButton}
    class:opacity-100={showButton}
    class:visible={showButton}
    aria-label="Scroll to top"
>
    <ArrowUpIcon class="w-6 h-6" />
</button>
