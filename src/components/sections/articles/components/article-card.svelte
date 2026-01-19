<script lang="ts">
    export let title: string = "";
    export let description: string = "";
    export let date: string = "";
    export let image: string = "";
    export let author: string = "";
</script>

<div
    class="articles relative h-fit w-full border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 rounded-xl p-1.5"
>
    <img class="w-full h-full object-cover rounded-lg" src={image} alt="" />
    <div class="p-4 flex flex-col gap-3">
        <div class="flex flex-col gap-1">
            <div
                class="bg-wri-gray-200 w-fit rounded-md px-1 py-0.5 text-wri-gray-600 text-base"
            >
                {date}
            </div>
            <div class="text-bold text-2xl">
                {title}
            </div>
        </div>
        <div class=" text-wri-gray-600 text-xl">
            {description}
        </div>
        <div class=" text-wri-gray-500 text-sm">
            by {author}
        </div>
    </div>
</div>
