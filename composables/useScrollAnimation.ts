export function useScrollAnimation() {
  const observeElements = (selector: string) => {
    if (!import.meta.client) return

    const elements = document.querySelectorAll<HTMLElement>(selector)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
  }

  return { observeElements }
}
