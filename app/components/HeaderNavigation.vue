<template>
    <nav class="header-navigation">
        <NuxtLink to="/">
            <svg
                class="hero-logo"
                viewBox="0 0 500 200"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="AZ · OpsDesign logo"
            >
                <rect x="0" y="0" width="500" height="200" fill="transparent" />

                <rect
                    x="124"
                    y="60"
                    width="80"
                    height="80"
                    rx="16"
                    fill="#3C3C3B"
                />
                <line
                    x1="206"
                    y1="100"
                    x2="214"
                    y2="100"
                    stroke="#B7AA9B"
                    stroke-width="2.2"
                />
                <line
                    x1="216"
                    y1="100"
                    x2="224"
                    y2="100"
                    stroke="#B7AA9B"
                    stroke-width="2.2"
                />
                <line
                    x1="226"
                    y1="100"
                    x2="234"
                    y2="100"
                    stroke="#B7AA9B"
                    stroke-width="2.2"
                />
                <circle
                    cx="250"
                    cy="100"
                    r="14"
                    fill="#F5F3F1"
                    stroke="#3C3C3B"
                    stroke-width="2.2"
                />
                <circle cx="250" cy="100" r="9" fill="#C4006A" />
                <line
                    x1="266"
                    y1="100"
                    x2="274"
                    y2="100"
                    stroke="#B7AA9B"
                    stroke-width="2.2"
                />
                <line
                    x1="276"
                    y1="100"
                    x2="284"
                    y2="100"
                    stroke="#B7AA9B"
                    stroke-width="2.2"
                />
                <line
                    x1="286"
                    y1="100"
                    x2="294"
                    y2="100"
                    stroke="#B7AA9B"
                    stroke-width="2.2"
                />
                <rect
                    x="296"
                    y="60"
                    width="80"
                    height="80"
                    rx="16"
                    fill="#C4006A"
                />
            </svg>
        </NuxtLink>
    </nav>
</template>

<style>
.header-navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-bottom: var(--space-5); */
    padding: 16px;
}

.hero-logo {
    width: 130px;
    animation: fadeUpIn 0.7s ease both;
    background-color: transparent;
}

@media (min-width: 768px) {
    .hero-logo {
        width: 190px;
    }
}
</style>
