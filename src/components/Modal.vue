<template>
    <transition name="modal">
        <div class="modal_wrapper" @click="$emit('close')">
            <div class="modal_content" @click.stop>
                <div class="modal_header">
                    <span class="modal_title">{{ title }}</span>
                    <span class="button_close" @click="$emit('close')">x</span>
                </div>

                <div class="modal_body">
                    <slot name="body">Default body</slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            title: {
                type: String
            }
        }
    }
</script>

<style scoped>
    .modal-enter, .modal-leave-active {
        opacity: 0;
    }
    .modal-enter .modal_content, .modal-leave-active .modal_content {
        transform: scale(1.2);
    }

    .modal_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        transition: opacity .3s ease;
        z-index: 998;
        background-color: rgba(00, 00, 00, .48);
    }
    .modal_content {
        position: relative;
        max-width: 600px;
        padding: 20px 18px;
        background-color: #fff;
        border: 1px solid #dcdfe6;
        transition: all .3s ease;
        border-radius: 8px;
        z-index: 999;
        overflow: hidden;
    }
    .modal_header {
        display: flex;
        align-self: center;
        justify-content: space-between;
        padding-bottom: 20px;
    }
    .modal_header span {
        font-size: 24px;
    }
    .button_close {
        cursor: pointer;
    }
    .modal_body {
        text-align: center;
    }

</style>