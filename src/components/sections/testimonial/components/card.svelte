<script lang="ts">
    const colorClass = {
      "wri-yellow": {
        div: "bg-[#FEF4DC]",
        text: "inline-block text-transparent bg-gradient-to-b from-[#FFB12B] to-[#FFB12B]/56 bg-clip-text"
      },
      "wri-blue": {
        div: "bg-[#D7EFFF]",
        text: "text-[#0B79FF]"
      },
    }

    type colorType = keyof typeof colorClass;

    export let name: string;
    export let title: string;
    export let description: string;
    export let color: colorType = "wri-yellow";

    let divClass = colorClass[color].div;
    let textClass = colorClass[color].text;
</script>

<div class={`w-100 h-50 px-6 py-3 rounded-2xl flex flex-col border-4 border-white/24 text ${divClass}`}>
    <div>
        <p class={`text-3xl font-semibold ${textClass}`}>{title}</p>
        <p class={`${textClass}`}>{description}</p>
    </div>
    <p class={`mt-auto ${textClass}`}>- {name}</p>
</div>
