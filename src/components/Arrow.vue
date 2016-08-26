<template>
    <button class="arrow">
        <svg v-if="direction === 'up'" width="61px" height="39px" viewBox="0 0 61 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M26.7718368,2.70322132 C28.8308445,0.105703911 32.1676157,0.103761349 34.2281632,2.70322132 L59.2718368,34.2967787 C61.3308445,36.8942961 60.3102989,39 57.0014648,39 L3.99853516,39 C0.685635668,39 -0.332384297,36.8962387 1.72816324,34.2967787 L26.7718368,2.70322132 Z"></path>
            </g>
        </svg>
        <svg v-if="direction === 'down'" width="61px" height="39px" viewBox="0 0 61 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M26.7718368,4.70322132 C28.8308445,2.10570391 32.1676157,2.10376135 34.2281632,4.70322132 L59.2718368,36.2967787 C61.3308445,38.8942961 60.3102989,41 57.0014648,41 L3.99853516,41 C0.685635668,41 -0.332384297,38.8962387 1.72816324,36.2967787 L26.7718368,4.70322132 Z" id="Triangle" fill="#3ABDAF" transform="translate(30.500000, 20.500000) scale(1, -1) translate(-30.500000, -20.500000) "></path>
            </g>
        </svg>
    </button>
</template>

<script>
    export default {
        props: ['direction']
    }
</script>

<style lang="sass">
    @import '../stylesheets/variables.scss';

    .arrow {
        border: none;
        padding: 0;
        background: none;
        width: 61px;
        height: 39px;
        &:focus {
            outline: 0;
        }
    }
    .arrow path {
        fill: $green;
    }
    .arrow:active path {
        fill: darken($green, 10%);
    }
</style>
