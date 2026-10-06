import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: 'main',
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
    basePath: 'fiscont-preview',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Articole',
        path: 'src/content/blog',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Titlu',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Descriere',
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Data publicării',
            required: true,
          },
          {
            type: 'string',
            name: 'category',
            label: 'Categorie',
            required: true,
            options: [
              { value: 'fiscal', label: 'Fiscal' },
              { value: 'hr', label: 'Resurse umane' },
              { value: 'legislatie', label: 'Legislație' },
              { value: 'alerte', label: 'Alerte fiscale' },
              { value: 'talks', label: 'FISCONT Talks' },
              { value: 'leadership', label: 'Leadership' },
            ],
          },
          {
            type: 'string',
            name: 'author',
            label: 'Autor',
          },
          {
            type: 'string',
            name: 'authorRole',
            label: 'Rol autor',
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Ciornă',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Conținut',
            isBody: true,
          },
        ],
      },
    ],
  },
});
