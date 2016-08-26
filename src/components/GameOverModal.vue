<template>
    <modal class="thumbtack-modal--game-over"
        :show.sync="show">
        <h3 slot="header">Wah Wah!</h3>
        <div slot="body">
            <img class="thumbtack-modal__icon" src="/static/img/game_over.png" />
            <div>
                You lost all your <span class="thumbtack-modal__emphasis">imaginary points!</span> <br>
                Now go make yourself a cup of coffee.
            </div>
        </div>
    </modal>
</template>

<script>
    import Modal from "./Modal.vue";

    export default {
        props: ['show'],
        components: { Modal }
    }
</script>
