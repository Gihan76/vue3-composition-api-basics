<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label>
                Show dark modals?
                <input 
                    type="checkbox"
                    v-model="showDarkModals"
                />
            </label>
        </div>
        <!-- <pre>{{ showDarkModals }}</pre> -->
        <button @click="showModal = true">Show modal</button>

        <!-- render child component based on condition -->
        <component 
            v-model="showModal" 
            :is="showDarkModals ? ModalDark : Modal"
            title="My Modal Title (via prop)"
        >
            <!-- <template v-slot:title>My new title</template> or <template #title>My new title</template> -->
            <!-- provide slot content -->
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores vel facere laborum, quia
                quibusdam. Voluptatibus, eaque! Pariatur, esse neque nulla suscipit, reprehenderit cupiditate nisi unde
                ad dolore expedita magnam!
            </p>
        </component>

    </div>
</template>

<!-- composition api -->
<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue'; // import child component
import ModalDark from '@/components/ModalDark.vue';

const showDarkModals = ref(false); // state for dark modals
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