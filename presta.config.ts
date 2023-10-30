import sourceFs from '@presta/source-filesystem'
import netlify from '@presta/adapter-netlify'


export const files = ["pages/*.ts"];
export const plugins = [sourceFs(), netlify()]
