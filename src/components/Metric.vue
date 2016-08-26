<template>
    <div class="metric">
        <div class="metric__label">{{ label }}</div>
        <div class="metric__value">{{ value }}</div>
    </div>
</template>

<script>
    export default {
        props: ['label', 'value']
    }
</script>

<style>
    .metric {
        display: flex;
        font-size: 28px;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .metric__label {
        color: white;
        margin-right: 20px;
    }
    .metric__value {
        background-color: white;
        padding: 0 20px;
        min-width: 110px;
        text-align: center;
        border-radius: 10px;
    }
</style>
