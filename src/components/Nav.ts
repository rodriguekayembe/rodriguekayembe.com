export function Nav({ currentPath }: { currentPath?: string }) {
  return `
    <div class='pb6 f fw aic'>
      ${[
        { href: '/', title: 'Home' },
        { href: '/about', title: 'About' }
      ]
        .map(
          (link) =>
            `<a href='${link.href}' class='mr4 mb2 ${currentPath === link.href ? 'active' : ''}'>${link.title}</a>`
        )
        .join('')}
    </div>
  `
}
