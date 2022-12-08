import eventListener from './eventListener.js'
import { ref } from 'vue'
export function useMouse() {
    const x = ref(0)
    const y = ref(0)
    function update(event) {
        x.value = event.pageX
        y.value = event.pageY
    }
    eventListener(window, 'mousemove', update)
    // onMounted(() => window.addEventListener('mousemove', update))
    // onUnmounted(() => window.removeEventListener('mousemove', update))
    return { x, y }
}