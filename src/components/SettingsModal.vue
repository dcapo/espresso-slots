<template>
    <div class="settings-modal">
        <modal :show.sync="show">
            <h3 slot="header">Settings</h3>
            <div slot="body">
                <div class="form-group form-group--checkbox">
                    <label for="toggleSoundsCheckbox">Sounds</label>
                    <input type="checkbox"
                        id="toggleSoundsCheckbox" 
                        v-model="enableSound"
                    /> 
                </div>
                <div class="form-group form-group--checkbox">
                    <label for="toggleMusicCheckbox">Music</label>
                    <input type="checkbox"
                        id="toggleMusicCheckbox"
                        v-model="enableMusic"
                    /> 
                </div>
                <label for="symbolsPerReelSelect">Symbols Per Reel</label>
                <select v-model="symbolsPerReel" id="symbolsPerReelSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
        </modal>
    </div>
</template>

<script>
    import Modal from "./Modal.vue";

    export default {
        props: ['show', 'enableMusic', 'enableSound', 'symbolsPerReel'],
        components: { Modal }
    }
</script>

<style lang="sass">
    label {
        margin-bottom: 0;
    }
    .form-group {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .settings-modal input, .settings-modal select {
        margin-left: 10px;
    }
    #symbolsPerReelSelect {
        padding: 100px;
    }
</style>
