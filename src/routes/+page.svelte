<script lang="ts">
    import { mockFiles, mockFolders } from "$lib/mock-data";
    import EntityCard from "$lib/components/EntityCard.svelte";

    let currentFolder = $state("root");

    const getCurrentFiles = () => {
        return mockFiles.filter((file) => file.parentId === currentFolder);
    };
    const getCurrentFolders = () => {
        return mockFolders.filter((folder) => folder.parentId === currentFolder);
    };
</script>

<div class="min-h-screen bg-background px-4 text-foreground">
    <h1 class="py-3 text-3xl font-bold">
        {currentFolder}
    </h1>
    <div class="grid h-full grid-cols-4 gap-2">
        {#each getCurrentFolders() as folder}
            <EntityCard name={folder.name} />
        {/each}
        {#each getCurrentFiles() as file}
            <EntityCard name={file.name} />
        {/each}
    </div>
</div>
