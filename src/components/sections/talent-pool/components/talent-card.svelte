<script lang="ts">
    export let name: string;
    export let image: string;
    export let tags: string[];
    export let description: string;
    export let isVerified: boolean;

    import verifiedIcon from "../../../../assets/verified.svg?url";

    export let loading: "lazy" | "eager" = "lazy";

    $: displayTags = (() => {
        let processed = [...tags];
        const isWebDev =
            processed.includes("frontend") || processed.includes("backend");
        if (isWebDev) processed.push("Web Dev");

        return processed.map((tag) => {
            if (tag === "cyber-security") return "Cyber Security";
            if (tag === "ui/ux") return "UI/UX";
            if (tag === "Web Dev") return "Web Dev";
            return tag.charAt(0).toUpperCase() + tag.slice(1);
        });
    })();

    $: shortDescription = description.includes(".")
        ? description.slice(0, description.indexOf(".") + 1)
        : description;
</script>

<div class="relative w-full group">
    {#if isVerified}
        <div
            class="absolute top-5 right-5 md:top-[2.5vh] md:right-[2.5vh] z-1 flex flex-col items-end group/badge"
        >
            <div
                class="absolute -top-15 right-[-10%] mb-2 opacity-0 transition-opacity delay-750 duration-450 ease-in-out group-hover/badge:opacity-100 pointer-events-none"
            >
                <div
                    class="absolute -right-15 px-4 py-3 bg-linear-to-b from-wri-blue to-wri-litblue text-wri-white rounded-xl text-[1vw] font-bold whitespace-nowrap"
                >
                    WRI Verified
                    <div
                        class="absolute bottom-[-15%] right-[60%] size-0 border-l-8 border-r-8 border-r-transparent border-l-transparent border-t-8 border-t-wri-litblue"
                    ></div>
                </div>
            </div>

            <img
                src={verifiedIcon}
                alt="Verified"
                class="size-8 md:size-[2.35vw] object-contain cursor-pointer"
            />
        </div>
    {/if}

    <div
        class="block relative w-full aspect-282/332 overflow-hidden rounded-xl bg-gray-200"
    >
        <img
            src={image}
            alt={name}
            {loading}
            decoding="async"
            class="
      absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-in-out
      group-hover:scale-105 group-hover:grayscale-0

      grayscale-0 lg:grayscale"
        />

        <div
            class="
      absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300
      group-hover:opacity-100

      opacity-100 lg:opacity-0"
        ></div>

        <div
            class="absolute bottom-0 left-0 w-full p-2 md:p-4 mb-2 flex flex-col justify-end"
        >
            <div
                class="
      flex flex-wrap gap-1.5 md:gap-2.5 transition-transform duration-300
      group-hover:translate-y-0

      translate-y-0 lg:translate-y-4"
            >
                {#each displayTags as tag}
                    <span
                        class="rounded-md bg-white px-1.5 py-0.5 md:px-2 md:py-1 text-[0.6rem] md:text-[.9vw] font-bold text-gray-900 shadow-sm"
                    >
                        {tag}
                    </span>
                {/each}
            </div>

            <div
                class="
      mt-2 overflow-hidden transition-all duration-300
      group-hover:h-auto group-hover:opacity-100

      h-auto opacity-100 lg:h-0 lg:opacity-0"
            >
                <p
                    class="text-xs md:text-[1vw] font-medium leading-snug text-white"
                >
                    {shortDescription}
                </p>
            </div>
        </div>
    </div>
</div>
