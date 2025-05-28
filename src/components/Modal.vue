<template>
    <teleport to=".modals-container">
        <div class="modal">
            <h1>
                {{  title }} <!-- or {{ props.title }} if using options api -->
            </h1>
            <!-- specify slot outlet from parent -->
            <slot /> <!-- or <slot></slot> -->
            <button>Hide modal</button>
        </div>
    </teleport>
</template>

<!-- composition api -->
<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: 'No Title Specified'
        }
    })

    console.log('props:',props.title);
</script>

<!-- options api -->
<!-- <script>
    export default {
        props: {
            title: {
                type: String,
                default: 'No Title Specified'
            }
        }
    }
</script> -->

<style>
.modal {
    background: red;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>