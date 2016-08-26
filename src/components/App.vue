<template>
    <div id="app" class="container">
        <slot-machine :reels="reels" symbols-per-reel="4"></slot-machine>
    </div>
</template>

<script>
    import SlotMachine from "./SlotMachine.vue";
    import SlotSymbolModel from "../models/SlotSymbol";
    import SlotSymbolCategoryModel from "../models/SlotSymbolCategory";

    export default {
        components: { SlotMachine },
        data() {
            const coffeeCategory = new SlotSymbolCategoryModel("coffee", "coffee_prize.png", "a cup of coffee", 10);
            const teaCategory = new SlotSymbolCategoryModel("tea", "tea_prize.png", "a cup of tea", 10);
            const espressoCategory = new SlotSymbolCategoryModel("espresso", "espresso_prize.png", "a shot of espresso", 10);
            const thumbtackCategory = new SlotSymbolCategoryModel("thumbtack", "thumbtack_prize.png", "...a thumbtack?", 20);

            return {
                reels: [
                    [
                        new SlotSymbolModel("coffee_maker.png", coffeeCategory),
                        new SlotSymbolModel("tea_pot.png", teaCategory),
                        new SlotSymbolModel("espresso_machine.png", espressoCategory),
                        new SlotSymbolModel("thumbtack.png", thumbtackCategory)
                    ],
                    [
                        new SlotSymbolModel("coffee_filter.png", coffeeCategory),
                        new SlotSymbolModel("tea_bag.png", teaCategory),
                        new SlotSymbolModel("espresso_tamper.png", espressoCategory),
                        new SlotSymbolModel("thumbtack.png", thumbtackCategory)
                    ],
                    [
                        new SlotSymbolModel("coffee_bean.png", coffeeCategory),
                        new SlotSymbolModel("tea_leaves.png", teaCategory),
                        new SlotSymbolModel("espresso_filter.png", espressoCategory),
                        new SlotSymbolModel("thumbtack.png", thumbtackCategory)
                    ]
                ]
            };
        }
    };
</script>

<style lang="sass">
    $icon-font-path: "../../node_modules/bootstrap-sass/assets/fonts/bootstrap/";
    @import "../stylesheets/variables.scss";
    @import "../../node_modules/bootstrap/scss/bootstrap.scss";
    @import "../../node_modules/animate.css/animate.css";

    body {
        font-family: $bungee;
        font-size: 100%;
        background: url('/espresso-slots/static/img/background.png');
    }
</style>
