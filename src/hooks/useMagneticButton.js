import { useRef } from 'react'

export function useMagneticButton(strength = 0.18) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const btn = ref.current
    if (!btn) return
    const r = btn.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return { ref, onMouseMove, onMouseLeave }
}
