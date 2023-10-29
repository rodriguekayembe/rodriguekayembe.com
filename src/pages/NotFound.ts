import { html } from "@presta/html";


import { createHeadObject } from '../util/createHeadObject'

export const route = '*'

export async function handler() {
  return {
    statusCode: 404,
    html: html({
      head: createHeadObject(),
      body: `
      <div class='p10'>
      </div>
    `,
    }),
  };
}