<template>
     <label class="checkbox">
            <input type="checkbox" 
            :checked="value"
            @click="toggle">
            <span class="checkmark"></span>
        </label>
</template>
<script>
    export default {
        name: 'Checkbox',
        props: ['value'],
        methods: {
            toggle () {
                this.$emit('input', !this.value)
            }
        }
    }
</script>
<style scoped lang="scss">
 .checkbox {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 24px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .checkbox input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        border-radius: 3px;
        background-color: #fff;
    }

    .checkbox:hover input ~ .checkmark {
        background-color: #fff;
    }

    .checkbox input:checked ~ .checkmark {
        background-color: #2196F3;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .checkbox input:checked ~ .checkmark:after {
        display: block;
    }

    .checkbox .checkmark:after {
        left: 9px;
        top: 5px;
        width: 7px;
        height: 13px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        }
</style>
