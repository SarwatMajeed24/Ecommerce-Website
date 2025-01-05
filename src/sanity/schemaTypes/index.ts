import { type SchemaTypeDefinition } from 'sanity'
import product from "./product"
import category from './category'
import heroImage from './heroImages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, heroImage],
}

