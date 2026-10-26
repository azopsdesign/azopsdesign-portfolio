<template>
    <nav class="header-navigation">
        <ul class="header-navigation-list">
            <li class="header-navigation-list-item">
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="header-navigation-list-item">
                <NuxtLink to="/projects/work-about-work">
                    Work About Work
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style>
.header-navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
}

.header-navigation-list {
    /* background-color: orange; */
    z-index: 100;
    position: relative;
    display: flex;
    list-style: none;
    padding: 0;
}

.header-navigation-list-item {
    margin-left: 16px;
    &:first-child {
        margin-left: 0;
    }
}
</style>
