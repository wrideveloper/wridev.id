<script lang="ts">
    import { searchQuery } from "~/components/sections/articles/stores/filter";
    import Card from "~/components/sections/articles/components/article-card.svelte";
    import SearchIcon from "~icons/ph/magnifying-glass";
    import BoldSearchIcon from "~icons/ph/magnifying-glass-bold";
    import Container from "~/components/sections/container.svelte";
    import PageButton from "~/components/sections/articles/components/page-button.svelte";
    import FirstIcon from "~icons/ph/caret-double-left";
    import PreviousIcon from "~icons/ph/caret-left";
    import NextIcon from "~icons/ph/caret-right";
    import LastIcon from "~icons/ph/caret-double-right";

    export let articles = [];

    articles = articles.map((article) => ({
        ...article,
        date: new Date(article.date).toLocaleDateString("en-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
    }));

    let filteredArticles = articles;

    const limit = 9;

    let page = 1;

    console.log(filteredArticles);

    // Scroll to the top of the page
    function scrollToTop() {
        if (typeof window !== "undefined") {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
        }
    }

    // Calculate the total number of pages
    $: totalPages = Math.ceil(filteredArticles.length / limit);

    // Slice the filtered articles to display only the current page
    $: paginatedArticles = filteredArticles.slice((page - 1) * limit, page * limit);

    // Go to the first page
    function goToFirstPage() {
        page = 1;
        scrollToTop();
    }

    // Go to the previous page
    function goToPreviousPage() {
        if (page > 1) {
            page--;
            scrollToTop();
        }
    }

    // Go to the next page
    function goToNextPage() {
        if (page < totalPages) {
            page++;
            scrollToTop();
        }
    }

    // Go to the last page
    function goToLastPage() {
        page = totalPages;
        scrollToTop();
    }

    // Go to a specific page
    function goToPage(pageNumber: number) {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            page = pageNumber;
            scrollToTop();
        }
    }

    if (typeof window !== "undefined") {
        const hash = window.location.hash;
        if (hash.startsWith("#query=")) {
            const queryFromHash = hash.substring(7);
            searchQuery.set(queryFromHash);
            filteredArticles = articles.filter((article) => {
                const query = queryFromHash.toLowerCase();
                return (
                    article.title.toLowerCase().includes(query) ||
                    article.description.toLowerCase().includes(query)
                );
            });
        }
    }

    function handleSearch() {
        filteredArticles = articles.filter((article) => {
            const query = $searchQuery.toLowerCase();
            return (
                article.title.toLowerCase().includes(query) ||
                article.description.toLowerCase().includes(query)
            );
        });
        window.location.hash = `query=${$searchQuery}`;
        scrollToTop();
    }
</script>

<div>
    <div class="w-full flex justify-center gap-2 items-center">
        <div class="relative w-[30%] flex h-fit">
            <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
                <svelte:component this={SearchIcon} class="w-4 h-4" />
            </div>
            <input
                type="text"
                placeholder="Search news"
                bind:value={$searchQuery}
                class="block w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                on:keydown={(e) => e.key === "Enter" && handleSearch()}
            />
        </div>
        <div class="relative">
            <div
                class="flex justify-center items-center bg-wri-lighterblue text-wri-white p-1 rounded-xl"
            >
                <button
                    class="flex justify-center items-center bg-linear-to-b from-wri-blue to-wri-blue/56 px-4 py-1.5 rounded-lg border border-wri-darkerblue text-center cursor-pointer"
                    on:click={handleSearch}
                >
                    <svelte:component
                        this={BoldSearchIcon}
                        class="w-4 h-4 text-wri-white mr-2"
                    />
                    Search
                </button>
            </div>
        </div>
    </div>
    <Container className="mt-8 grid grid-cols-3 gap-4">
        {#each paginatedArticles as article}
            <Card
                title={article.title}
                description={article.description}
                date={article.date}
                image={article.image}
                author={article.author}
                slug={article.slug}
            />
        {/each}
    </Container>
    <div class="flex justify-center gap-2 mt-8">
        <PageButton disabled={page === 1} on:click={goToFirstPage}>
            <svelte:component this={FirstIcon} class="w-5 h-5" />
        </PageButton>
        <PageButton disabled={page === 1} on:click={goToPreviousPage}>
            <svelte:component this={PreviousIcon} class="w-5 h-5" />
        </PageButton>
        {#each Array.from({ length: totalPages }, (_, i) => i + 1) as pageNumber}
            <PageButton
                active={pageNumber === page}
                on:click={() => goToPage(pageNumber)}
            >
                {pageNumber}
            </PageButton>
        {/each}
        <PageButton disabled={page === totalPages} on:click={goToNextPage}>
            <svelte:component this={NextIcon} class="w-5 h-5" />
        </PageButton>
        <PageButton disabled={page === totalPages} on:click={goToLastPage}>
            <svelte:component this={LastIcon} class="w-5 h-5" />
        </PageButton>
    </div>
</div>
