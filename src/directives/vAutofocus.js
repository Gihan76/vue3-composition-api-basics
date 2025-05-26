export const vAutofocus = { // will turn into "v-autofocus" in the template
    mounted: (el) => {
        el.focus();
    }
}