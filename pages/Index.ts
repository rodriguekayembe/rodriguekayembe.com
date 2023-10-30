import { html } from '@presta/html'

import { createHeadObject } from '@/util/createHeadObject'

export const getStaticPaths = () => {
  return ["/"]
}

export async function handler(event) {
  return html({
    head: createHeadObject(),
    body: `
    <div class='p10'>
    </div>
  `,
  })
}
