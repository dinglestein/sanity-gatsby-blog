export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d48ccdad5102962cdc78b71',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-px7bg45x',
                  apiId: '3e681c6b-ec8b-408b-bb10-30afb78816b5'
                },
                {
                  buildHookId: '5d48ccda7d91ab7fb82c5a5a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r97iqi49',
                  apiId: '6c86f976-ec1b-4057-a70e-8f9b71fc415a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dinglestein/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r97iqi49.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
