<script lang="ts">
    import Accordion from "~/components/sections/faq/components/accordion.svelte";

    interface Faq {
        question: string;
        answer: string;
    }

    export let faqs: Faq[] = [];

    let openIndex: number | null = null;

    function handleToggle(index: number) {
        openIndex = openIndex === index ? null : index;
    }
</script>

<div>
    {#each faqs as { question, answer }, index}
        <Accordion
            question={question}
            answer={answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
        />
    {/each}
</div>
