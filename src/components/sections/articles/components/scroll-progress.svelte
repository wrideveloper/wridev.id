<script lang="ts">
    import { onMount } from "svelte";

    let progress = 0;

    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        if (docHeight > 0) {
            progress = (scrollTop / docHeight) * 100;
        } else {
            progress = 0;
        }
    }

    onMount(() => {
        window.addEventListener("scroll", updateProgress);
        updateProgress(); // Initial check

        return () => {
            window.removeEventListener("scroll", updateProgress);
        };
    });
</script>

<div class="fixed top-0 left-0 w-full h-1.5 z-[100] bg-transparent pointer-events-none">
    <div 
        class="h-full bg-linear-to-r from-wri-blue to-wri-lighterblue transition-all duration-150 ease-out"
        style="width: {progress}%"
    ></div>
</div>
