import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { table } from '@sanity/table'
import { markdownSchema } from 'sanity-plugin-markdown'

export default defineConfig({
  name: 'default',
  title: 'Careless',

  projectId: 'pwcsr382',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), table(), markdownSchema() ],

  schema: {
    types: [...schemaTypes],
  },
})
