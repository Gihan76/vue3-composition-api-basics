<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show modal</button>
        <Modal v-if="showModal"></Modal>

    </div>
</template>

<!-- composition api -->
<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const showModal = ref(false);
</script>

<!-- options api -->
<!-- <script>
    import Modal from '@/components/Modal.vue';

    export default {
        components: {
            Modal
        }
    }
</script> -->