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
            <div>
                Username is {{  userData.userName }}
            </div>
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
        },
        userData: {
            type: Object,
        }
    });

    // define emits
    const emit = defineEmits(['update:modelValue','hideModal']);
    
</script>

<style>
.modal {
    background: beige;
    color: black;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>