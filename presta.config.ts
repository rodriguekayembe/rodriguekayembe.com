import sourceFs from '@presta/source-filesystem'
import netlify from '@presta/adapter-netlify'


export const files = ["src/pages/*.ts"];
export const plugins = [sourceFs(), netlify()]
