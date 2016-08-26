<template>
    <modal class="thumbtack-modal--prize"
        :show.sync="show">
        <h3 slot="header">Winner Winner!</h3>
        <div slot="body">
            <img class="thumbtack-modal__icon" :src="'/espresso-slots/static/img/prizes/' + prizeCategory.icon" />
            <div>
                You've earned yourself <span class="thumbtack-modal__emphasis">{{ prizeCategory.prize }}!</span> <br>
                Now go collect your prize!
            </div>
        </div>
    </modal>
</template>

<script>
    import Modal from "./Modal.vue";

    export default {
        props: ['show', 'prizeCategory'],
        components: { Modal }
    }
</script>

<style>

</style>
