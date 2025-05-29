<template>
    <teleport to=".modals-container">
        <div
            v-if="modelValue"
            class="modal-dark"
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
    
</script>

<style>
.modal-dark {
    background: #333;
    color: white;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>