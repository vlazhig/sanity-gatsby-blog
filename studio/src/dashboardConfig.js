export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ec554d0e82e3b5eba66eb2a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-n5iqc9t3',
                  apiId: 'ec662733-f10d-46f6-bde5-4b27102c78a8'
                },
                {
                  buildHookId: '5ec554d04ef74485bbdf12b2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-11d154da',
                  apiId: 'c2232ac2-ed18-43d5-99c9-e476d2f17449'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vlazhig/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-11d154da.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
