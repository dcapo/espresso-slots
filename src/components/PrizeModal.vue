<template>
    <modal class="thumbtack-modal--prize"
        :show.sync="show">
        <h3 slot="header">Winner Winner!</h3>
        <div slot="body">
            <img class="thumbtack-modal__icon" :src="resolveUrl(prizeCategory.icon)" />
            <div>
                You've earned yourself <span class="thumbtack-modal__emphasis">{{ prizeCategory.prize }}!</span> <br>
                Now go collect your prize!
            </div>
        </div>
    </modal>
</template>

<script>
    import Modal from "./Modal.vue";
    var icons = require.context('../assets/img/prizes', true, /\.(png|jpg|gif|svg)$/);

    export default {
        props: ['show', 'prizeCategory'],
        components: { Modal },
        methods: {
            resolveUrl(filename) {
                if (filename) {
                    return icons(`./${filename}`);
                }
                return '';
            }
        }
    }
</script>

<style>

</style>
