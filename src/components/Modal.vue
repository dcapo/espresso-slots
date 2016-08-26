<template>
    <div class="thumbtack-modal-mask" v-show="show" transition="modal">
        <div class="thumbtack-modal-wrapper">
            <div class="thumbtack-modal">

                <div class="thumbtack-modal__header">
                    <slot name="header">
                    </slot>
                </div>

                <div class="thumbtack-modal__body">
                    <slot name="body">
                    </slot>
                </div>

                <div class="thumbtack-modal__footer">
                    <slot name="footer">
                        <button class="thumbtack-modal__default-button"
                            @click="show = false">
                            OK
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['show']
    }
</script>

<style lang="sass">
    @import "../stylesheets/utilities.scss";
    @import "../stylesheets/variables.scss";

    .thumbtack-modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.87);
        transition: opacity 0.5s ease;
    }

    .thumbtack-modal-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .thumbtack-modal {
        margin: 0px auto;
        padding: 20px 30px;
        transition: all .3s ease;
        text-align: center;
    }

    .thumbtack-modal__header h3 {
        margin: 0 auto;
        color: #42b983;
        font-size: 60px;
    }

    .thumbtack-modal__body {
        margin: 20px 0;
        color: white;
        font-family: 'Open Sans', 'Helvetica ';
        font-size: 24px; 
    }

    .thumbtack-modal__footer {
        display: flex;
        justify-content: center;
    }

    .thumbtack-modal__default-button {
        border: none;
        border-radius: 5px;
        color: white;
        padding: 10px 30px;
        font-size: 26px;
        @include button-styles($purple);
    }

    .thumbtack-modal__emphasis {
        font-weight: bold;
        font-size: 150%;
    }

    .thumbtack-modal__icon {
        margin-bottom: 10px;
        width: 100px;
    }
    .modal-enter, .modal-leave {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave .modal-container {
        transform: scale(1.1);
    }
</style>
