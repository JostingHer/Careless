import {table} from '@sanity/table'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {markdownSchema} from 'sanity-plugin-markdown'

import {schemaTypes} from './schemas'

export default defineConfig({
    name: 'default',
    title: 'Careless',

    projectId: 'pwcsr382',
    dataset: 'production',

    plugins: [structureTool(), visionTool(), table(), markdownSchema()],

    schema: {
        types: [...schemaTypes],
    },
})
