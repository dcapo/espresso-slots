<template>
    <div class="slot-symbol">
        <img class="slot-symbol__icon" :src="'/espresso-slots/static/img/reels/' + symbol.icon"/>
    </div>
</template>

<script>
    export default {
        props: ['symbol']
    }
</script>

<style lang="sass">
    @import '../stylesheets/variables.scss';

    .slot-symbol {
        display: flex;
        align-items: center;
        justify-content: center;
        height: $reel-viewport-size-md - 2 * $reel-viewport-border-width;

        @media (max-width: $screen-sm) {
            height: $reel-viewport-size-sm - 2 * $reel-viewport-border-width;
        }

        @media (max-width: $screen-xs) {
            height: $reel-viewport-size-xs - 2 * $reel-viewport-border-width;
        }
    }
    .slot-symbol__icon {
        max-height: 75%;
        max-width: 75%;
        flex: 0 0 auto;
        object-fit: scale-down;
    }
</style>
