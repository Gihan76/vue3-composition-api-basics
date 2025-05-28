<template>
    <teleport to=".modals-container">
        <div class="modal">
            <h1>
                <slot name="title"/>
            </h1>
            <!-- specify slot outlet from parent -->
            <slot /> <!-- or <slot></slot> -->
            <button>Hide modal</button>
        </div>
    </teleport>
</template>

<script setup>
    import { useSlots } from 'vue';

    const slots = useSlots();
    console.log("slot title ->", slots.title()); // accessing slot properties 
</script>

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