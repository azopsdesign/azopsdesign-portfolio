<template>
    <nav class="project-nav" aria-label="Projects">
        <div class="wrap project-nav-inner">
            <span class="project-nav-label">Projects</span>
            <NuxtLink
                v-for="link in links"
                :key="link.to"
                :to="link.to"
                class="project-nav-link"
            >
                {{ link.label }}
                <span aria-hidden="true">&rarr;</span>
            </NuxtLink>
        </div>
    </nav>
</template>

<script setup lang="ts">
const links = [{ label: 'Work About Work', to: '/projects/work-about-work' }]
</script>

<style scoped>
.project-nav {
    padding: var(--space-3) 0;
    border-bottom: 1px solid var(--color-greige);
}

.project-nav-inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-2);
}

.project-nav-label {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: var(--color-taupe);
}

.project-nav-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    font-weight: 500;
    padding: 6px 14px;
    border: 1px solid var(--color-magenta);
    border-radius: var(--radius-sm);
}

.project-nav-link:hover {
    background: var(--color-magenta);
    color: var(--color-offwhite);
    text-decoration: none;
}
</style>
