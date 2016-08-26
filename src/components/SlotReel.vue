<template>
    <div class="viewport">
        <div class="slot-reel">
            <slot-symbol v-for="symbol in reel" 
                track-by="$index"
                :symbol="symbol">
            </slot-symbol>
        </div>
    </div>
</template>

<script>
    import SlotSymbol from './SlotSymbol.vue';
    import dynamics from 'dynamics.js';

    let getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    export default {
        components: { SlotSymbol },
        props: ['reelIndex', 'symbols'],
        data() {
            return {
                reel: [],
                symbolCount: 0
            };
        },
        methods: {
            animateSpin() {
                let $reel = this.$el.querySelector(".slot-reel");
                let $symbol = $reel.querySelector(".slot-symbol");
                let base = 2500;
                let interval = base / 2;
                let duration = getRandomInt(base + this.reelIndex * interval,
                                            base + (this.reelIndex + 1) * interval);
                let that = this;
                dynamics.animate($reel, {
                    translateY: $symbol.offsetHeight - $reel.offsetHeight
                }, {
                    type: dynamics.bezier,
                    duration: duration,
                    points: [{"x":0,"y":0,"cp":[{"x":0.1,"y":0}]},{"x":0.896,"y":1.014,"cp":[{"x":0.796,"y":1.014},{"x":0.902,"y":1.023}]},{"x":1,"y":1,"cp":[{"x":0.908,"y":0.971}]}],
                    complete() {
                        that.$dispatch('on-reel-spin-complete', that.reelIndex);
                    }
                });
            }
        },
        events: {
            'on-spin': function() {
                this.animateSpin();
            },
            'on-next-spin-load': function(result) {
                // Reset the transform
                let $reel = this.$el.querySelector(".slot-reel");
                dynamics.css($reel, { transform: '' });
                
                this.reel = []; // Clean up the reel
                if (this.symbolCount) this.symbolCount--;
                
                let extraLoops = 2;
                let reelLength = extraLoops * this.symbols.length +
                    this.symbols.length - (this.symbolCount % this.symbols.length) +
                    this.symbols.indexOf(result[this.reelIndex]) + 1;

                for (let i = 0; i < reelLength; i++) {
                    let symbol = this.symbols[(this.symbolCount + i) % this.symbols.length];
                    this.reel.push(symbol);
                }
                this.symbolCount += reelLength;
                console.log(this.symbols.length);
            }
        }
    }
</script>

<style lang="sass">
    @import '../stylesheets/variables.scss';

    .viewport {
        margin: 10px;
        background: white;
        overflow: hidden;
        border-radius: 10px;
        border: $reel-viewport-border-width solid black;
        box-shadow: inset 0px -10px 10px 0px rgba(0,0,0,0.3),
                    inset 0px 10px 10px 0px rgba(0,0,0,0.3);
        height: $reel-viewport-size-md;
        width: $reel-viewport-size-md;

        @media (max-width: $screen-sm) {
            height: $reel-viewport-size-sm;
            width: $reel-viewport-size-sm;
        }

        @media (max-width: $screen-xs) {
            height: $reel-viewport-size-xs;
            width: $reel-viewport-size-xs;
        }
    }
</style>