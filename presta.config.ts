import { createConfig } from 'presta'
import netlify from '@presta/adapter-netlify'


export default createConfig({
  files: ['pages/*'],
  plugins: [netlify()],
})
