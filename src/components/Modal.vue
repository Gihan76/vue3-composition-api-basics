<template>
    <teleport to=".modals-container">
        <div
            v-if="modelValue"
            class="modal"
        >
            <h1>
                {{  title }} <!-- or {{ props.title }} if using options api -->
            </h1>
            <!-- specify slot outlet from parent -->
            <slot /> <!-- or <slot></slot> -->
            <button @click="$emit('update:modelValue',false)">Hide modal</button>
        </div>
    </teleport>
</template>

<!-- composition api -->
<script setup>
    // define props 
    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: 'No Title Specified'
        }
    });

    // define emits
    const emit = defineEmits(['update:modelValue','hideModal']);
    
    // handle hide modal
    // const handleHideModal = () => {
    //     emit('update:modelValue', false); // update modelValue to false
    // }
</script>

<!-- options api -->
<!-- <script>
    export default {
        emits: ['hideModeal'],
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