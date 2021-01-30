// Mock data to get the Gutenberg editor to work

export const media = {
  headers: {
    get: value => {
      if (value === 'allow') {
        return ['POST']
      }
    }
  }
}

export const page = {
  id: 1,
  content: {
    raw: '',
    rendered: ''
  },
  title: {
    raw: 'Preview page',
    rendered: 'Preview page'
  },
  excerpt: {
    raw: '',
    rendered: ''
  },
  status: 'pending',
  revisions: { count: 0, last_id: 0 },
  parent: 0,
  theme_style: true,
  type: 'page',
  link: `${window.location.origin}/preview`,
  categories: [],
  featured_media: 0,
  permalink_template: `${window.location.origin}/preview`,
  preview_link: `${window.location.origin}/preview`,
  _links: {
    'wp:action-assign-categories': [],
    'wp:action-create-categories': []
  },
  // functions
  setContent: (content) => {
    page.content = {
      raw: content
    }
  }
}

export const themes = [{
  theme_supports: {
    formats: [
      'standard',
      'aside',
      'image',
      'video',
      'quote',
      'link',
      'gallery',
      'audio'
    ],
    'post-thumbnails': true,
    'responsive-embeds': true
  }
}]

export const types = {
  page: {
    id: 1,
    labels: {
      singular_name: 'Page'
    },
    name: 'Page',
    rest_base: 'pages',
    slug: 'page',
    supports: {
      author: false,
      comments: false, // hide discussion-panel
      'custom-fields': true,
      editor: true,
      excerpt: false,
      discussion: false,
      'page-attributes': false, // hide page-attributes panel
      revisions: false,
      thumbnail: false, // featured-image panel
      title: false // show title on editor
    },
    taxonomies: [],
    viewable: false,
    saveable: false,
    publishable: false,
    autosaveable: false
  },
  block: {
    capabilities: {},
    labels: {
      singular_name: 'Block'
    },
    name: 'Blocks',
    rest_base: 'blocks',
    slug: 'wp_block',
    description: '',
    hierarchical: false,
    supports: {
      title: true,
      editor: true
    },
    viewable: true
  }
}

export const user = {
  id: 1,
  name: 'Laraberg',
  url: '',
  description: '',
  link: 'https://demo.wp-api.org/author/laraberg/',
  slug: 'laraberg',
  avatar_urls: {
    24: 'http://2.gravatar.com/avatar/83888eb8aea456e4322577f96b4dbaab?s=24&d=mm&r=g',
    48: 'http://2.gravatar.com/avatar/83888eb8aea456e4322577f96b4dbaab?s=48&d=mm&r=g',
    96: 'http://2.gravatar.com/avatar/83888eb8aea456e4322577f96b4dbaab?s=96&d=mm&r=g'
  },
  meta: [],
  _links: {
    self: [],
    collection: []
  }
}

export const context = {
  name: 'My Blog 2',
  description: 'My WordPress Blog',
  url: 'http:\/\/testwp2.cristinabizoi.ro',
  home: 'http:\/\/testwp2.cristinabizoi.ro',
  gmt_offset: '0',
  timezone_string: '',
  namespaces: ['oembed\/1.0', 'wp\/v2', 'wp-site-health\/v1'],
  authentication: [],
  routes: {
    '\/': {
      namespace: '',
      methods: ['GET'],
      endpoints: [{ methods: ['GET'], args: { context: { default: 'view', required: false } } }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/' }] }
    },
    '\/batch\/v1': {
      namespace: '',
      methods: ['POST'],
      endpoints: [{
        methods: ['POST'],
        args: {
          validation: {
            type: 'string',
            enum: ['require-all-validate', 'normal'],
            default: 'normal',
            required: false
          },
          requests: {
            type: 'array',
            maxItems: 25,
            items: {
              type: 'object',
              properties: {
                method: {
                  type: 'string',
                  enum: ['POST', 'PUT', 'PATCH', 'DELETE'],
                  default: 'POST'
                },
                path: { type: 'string', required: true },
                body: { type: 'object', properties: [], additionalProperties: true },
                headers: {
                  type: 'object',
                  properties: [],
                  additionalProperties: { type: ['string', 'array'], items: { type: 'string' } }
                }
              }
            },
            required: true
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/batch\/v1' }] }
    },
    '\/oembed\/1.0': {
      namespace: 'oembed\/1.0',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          namespace: { default: 'oembed\/1.0', required: false },
          context: { default: 'view', required: false }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/oembed\/1.0' }] }
    },
    '\/oembed\/1.0\/embed': {
      namespace: 'oembed\/1.0',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          url: {
            description: 'The URL of the resource for which to fetch oEmbed data.',
            type: 'string',
            format: 'uri',
            required: true
          },
          format: { default: 'json', required: false },
          maxwidth: { default: 600, required: false }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/oembed\/1.0\/embed' }] }
    },
    '\/oembed\/1.0\/proxy': {
      namespace: 'oembed\/1.0',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          url: {
            description: 'The URL of the resource for which to fetch oEmbed data.',
            type: 'string',
            format: 'uri',
            required: true
          },
          format: {
            description: 'The oEmbed format to use.',
            type: 'string',
            default: 'json',
            enum: ['json', 'xml'],
            required: false
          },
          maxwidth: {
            description: 'The maximum width of the embed frame in pixels.',
            type: 'integer',
            default: 600,
            required: false
          },
          maxheight: {
            description: 'The maximum height of the embed frame in pixels.',
            type: 'integer',
            required: false
          },
          discover: {
            description: 'Whether to perform an oEmbed discovery request for unsanctioned providers.',
            type: 'boolean',
            default: true,
            required: false
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/oembed\/1.0\/proxy' }] }
    },
    '\/wp\/v2': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          namespace: { default: 'wp\/v2', required: false },
          context: { default: 'view', required: false }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2' }] }
    },
    '\/wp\/v2\/posts': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            default: 10,
            minimum: 1,
            maximum: 100,
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          after: {
            description: 'Limit response to posts published after a given ISO8601 compliant date.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          author: {
            description: 'Limit result set to posts assigned to specific authors.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          author_exclude: {
            description: 'Ensure result set excludes posts assigned to specific authors.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          before: {
            description: 'Limit response to posts published before a given ISO8601 compliant date.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          exclude: {
            description: 'Ensure result set excludes specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          include: {
            description: 'Limit result set to specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          offset: {
            description: 'Offset the result set by a specific number of items.',
            type: 'integer',
            required: false
          },
          order: {
            description: 'Order sort attribute ascending or descending.',
            type: 'string',
            default: 'desc',
            enum: ['asc', 'desc'],
            required: false
          },
          orderby: {
            description: 'Sort collection by object attribute.',
            type: 'string',
            default: 'date',
            enum: ['author', 'date', 'id', 'include', 'modified', 'parent', 'relevance', 'slug', 'include_slugs', 'title'],
            required: false
          },
          slug: {
            description: 'Limit result set to posts with one or more specific slugs.',
            type: 'array',
            items: { type: 'string' },
            required: false
          },
          status: {
            default: 'publish',
            description: 'Limit result set to posts assigned one or more statuses.',
            type: 'array',
            items: {
              enum: ['publish', 'future', 'draft', 'pending', 'private', 'trash', 'auto-draft', 'inherit', 'request-pending', 'request-confirmed', 'request-failed', 'request-completed', 'any'],
              type: 'string'
            },
            required: false
          },
          tax_relation: {
            description: 'Limit result set based on relationship between multiple taxonomies.',
            type: 'string',
            enum: ['AND', 'OR'],
            required: false
          },
          categories: {
            description: 'Limit result set to all items that have the specified term assigned in the categories taxonomy.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          categories_exclude: {
            description: 'Limit result set to all items except those that have the specified term assigned in the categories taxonomy.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          tags: {
            description: 'Limit result set to all items that have the specified term assigned in the tags taxonomy.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          tags_exclude: {
            description: 'Limit result set to all items except those that have the specified term assigned in the tags taxonomy.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          sticky: {
            description: 'Limit result set to items that are sticky.',
            type: 'boolean',
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          slug: {
            description: 'An alphanumeric identifier for the object unique to its type.',
            type: 'string',
            required: false
          },
          status: {
            description: 'A named status for the object.',
            type: 'string',
            enum: ['publish', 'future', 'draft', 'pending', 'private'],
            required: false
          },
          password: {
            description: 'A password to protect access to the content and excerpt.',
            type: 'string',
            required: false
          },
          title: {
            description: 'The title for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Title for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML title for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          content: {
            description: 'The content for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Content for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML content for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit'],
                readonly: true
              },
              block_version: {
                description: 'Version of the content block format used by the object.',
                type: 'integer',
                context: ['edit'],
                readonly: true
              },
              protected: {
                description: 'Whether the content is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          author: { description: 'The ID for the author of the object.', type: 'integer', required: false },
          excerpt: {
            description: 'The excerpt for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Excerpt for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML excerpt for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              },
              protected: {
                description: 'Whether the excerpt is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          featured_media: {
            description: 'The ID of the featured media for the object.',
            type: 'integer',
            required: false
          },
          comment_status: {
            description: 'Whether or not comments are open on the object.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          ping_status: {
            description: 'Whether or not the object can be pinged.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          format: {
            description: 'The format for the object.',
            type: 'string',
            enum: ['standard', 'aside', 'chat', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio'],
            required: false
          },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false },
          sticky: {
            description: 'Whether or not the object should be treated as sticky.',
            type: 'boolean',
            required: false
          },
          template: {
            description: 'The theme file to use to display the object.',
            type: 'string',
            required: false
          },
          categories: {
            description: 'The terms assigned to the object in the category taxonomy.',
            type: 'array',
            items: { type: 'integer' },
            required: false
          },
          tags: {
            description: 'The terms assigned to the object in the post_tag taxonomy.',
            type: 'array',
            items: { type: 'integer' },
            required: false
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/posts' }] }
    },
    '\/wp\/v2\/posts\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          password: {
            description: 'The password for the post if it is password protected.',
            type: 'string',
            required: false
          }
        }
      }, {
        methods: ['POST', 'PUT', 'PATCH'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          slug: {
            description: 'An alphanumeric identifier for the object unique to its type.',
            type: 'string',
            required: false
          },
          status: {
            description: 'A named status for the object.',
            type: 'string',
            enum: ['publish', 'future', 'draft', 'pending', 'private'],
            required: false
          },
          password: {
            description: 'A password to protect access to the content and excerpt.',
            type: 'string',
            required: false
          },
          title: {
            description: 'The title for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Title for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML title for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          content: {
            description: 'The content for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Content for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML content for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit'],
                readonly: true
              },
              block_version: {
                description: 'Version of the content block format used by the object.',
                type: 'integer',
                context: ['edit'],
                readonly: true
              },
              protected: {
                description: 'Whether the content is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          author: { description: 'The ID for the author of the object.', type: 'integer', required: false },
          excerpt: {
            description: 'The excerpt for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Excerpt for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML excerpt for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              },
              protected: {
                description: 'Whether the excerpt is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          featured_media: {
            description: 'The ID of the featured media for the object.',
            type: 'integer',
            required: false
          },
          comment_status: {
            description: 'Whether or not comments are open on the object.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          ping_status: {
            description: 'Whether or not the object can be pinged.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          format: {
            description: 'The format for the object.',
            type: 'string',
            enum: ['standard', 'aside', 'chat', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio'],
            required: false
          },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false },
          sticky: {
            description: 'Whether or not the object should be treated as sticky.',
            type: 'boolean',
            required: false
          },
          template: {
            description: 'The theme file to use to display the object.',
            type: 'string',
            required: false
          },
          categories: {
            description: 'The terms assigned to the object in the category taxonomy.',
            type: 'array',
            items: { type: 'integer' },
            required: false
          },
          tags: {
            description: 'The terms assigned to the object in the post_tag taxonomy.',
            type: 'array',
            items: { type: 'integer' },
            required: false
          }
        }
      }, {
        methods: ['DELETE'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          force: {
            type: 'boolean',
            default: false,
            description: 'Whether to bypass Trash and force deletion.',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/revisions': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          parent: { description: 'The ID for the parent of the object.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            minimum: 1,
            maximum: 100,
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          exclude: {
            description: 'Ensure result set excludes specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          include: {
            description: 'Limit result set to specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          offset: {
            description: 'Offset the result set by a specific number of items.',
            type: 'integer',
            required: false
          },
          order: {
            description: 'Order sort attribute ascending or descending.',
            type: 'string',
            default: 'desc',
            enum: ['asc', 'desc'],
            required: false
          },
          orderby: {
            description: 'Sort collection by object attribute.',
            type: 'string',
            default: 'date',
            enum: ['date', 'id', 'include', 'relevance', 'slug', 'include_slugs', 'title'],
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/revisions\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          parent: {
            description: 'The ID for the parent of the object.',
            type: 'integer',
            required: false
          },
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }, {
        methods: ['DELETE'],
        args: {
          parent: {
            description: 'The ID for the parent of the object.',
            type: 'integer',
            required: false
          },
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          force: {
            type: 'boolean',
            default: false,
            description: 'Required to be true, as revisions do not support trashing.',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/posts\/(?P<id>[\\d]+)\/autosaves': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET'],
        args: {
          parent: {
            description: 'The ID for the parent of the object.',
            type: 'integer',
            required: false
          },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          parent: { description: 'The ID for the parent of the object.', type: 'integer', required: false },
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          slug: {
            description: 'An alphanumeric identifier for the object unique to its type.',
            type: 'string',
            required: false
          },
          status: {
            description: 'A named status for the object.',
            type: 'string',
            enum: ['publish', 'future', 'draft', 'pending', 'private'],
            required: false
          },
          password: {
            description: 'A password to protect access to the content and excerpt.',
            type: 'string',
            required: false
          },
          title: {
            description: 'The title for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Title for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML title for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          content: {
            description: 'The content for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Content for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML content for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit'],
                readonly: true
              },
              block_version: {
                description: 'Version of the content block format used by the object.',
                type: 'integer',
                context: ['edit'],
                readonly: true
              },
              protected: {
                description: 'Whether the content is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          author: { description: 'The ID for the author of the object.', type: 'integer', required: false },
          excerpt: {
            description: 'The excerpt for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Excerpt for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML excerpt for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              },
              protected: {
                description: 'Whether the excerpt is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          featured_media: {
            description: 'The ID of the featured media for the object.',
            type: 'integer',
            required: false
          },
          comment_status: {
            description: 'Whether or not comments are open on the object.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          ping_status: {
            description: 'Whether or not the object can be pinged.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          format: {
            description: 'The format for the object.',
            type: 'string',
            enum: ['standard', 'aside', 'chat', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio'],
            required: false
          },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false },
          sticky: {
            description: 'Whether or not the object should be treated as sticky.',
            type: 'boolean',
            required: false
          },
          template: {
            description: 'The theme file to use to display the object.',
            type: 'string',
            required: false
          },
          categories: {
            description: 'The terms assigned to the object in the category taxonomy.',
            type: 'array',
            items: { type: 'integer' },
            required: false
          },
          tags: {
            description: 'The terms assigned to the object in the post_tag taxonomy.',
            type: 'array',
            items: { type: 'integer' },
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/autosaves\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          parent: {
            description: 'The ID for the parent of the object.',
            type: 'integer',
            required: false
          },
          id: { description: 'The ID for the object.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/pages': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            default: 10,
            minimum: 1,
            maximum: 100,
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          after: {
            description: 'Limit response to posts published after a given ISO8601 compliant date.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          author: {
            description: 'Limit result set to posts assigned to specific authors.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          author_exclude: {
            description: 'Ensure result set excludes posts assigned to specific authors.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          before: {
            description: 'Limit response to posts published before a given ISO8601 compliant date.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          exclude: {
            description: 'Ensure result set excludes specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          include: {
            description: 'Limit result set to specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          menu_order: {
            description: 'Limit result set to posts with a specific menu_order value.',
            type: 'integer',
            required: false
          },
          offset: {
            description: 'Offset the result set by a specific number of items.',
            type: 'integer',
            required: false
          },
          order: {
            description: 'Order sort attribute ascending or descending.',
            type: 'string',
            default: 'desc',
            enum: ['asc', 'desc'],
            required: false
          },
          orderby: {
            description: 'Sort collection by object attribute.',
            type: 'string',
            default: 'date',
            enum: ['author', 'date', 'id', 'include', 'modified', 'parent', 'relevance', 'slug', 'include_slugs', 'title', 'menu_order'],
            required: false
          },
          parent: {
            description: 'Limit result set to items with particular parent IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          parent_exclude: {
            description: 'Limit result set to all items except those of a particular parent ID.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          slug: {
            description: 'Limit result set to posts with one or more specific slugs.',
            type: 'array',
            items: { type: 'string' },
            required: false
          },
          status: {
            default: 'publish',
            description: 'Limit result set to posts assigned one or more statuses.',
            type: 'array',
            items: {
              enum: ['publish', 'future', 'draft', 'pending', 'private', 'trash', 'auto-draft', 'inherit', 'request-pending', 'request-confirmed', 'request-failed', 'request-completed', 'any'],
              type: 'string'
            },
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          slug: {
            description: 'An alphanumeric identifier for the object unique to its type.',
            type: 'string',
            required: false
          },
          status: {
            description: 'A named status for the object.',
            type: 'string',
            enum: ['publish', 'future', 'draft', 'pending', 'private'],
            required: false
          },
          password: {
            description: 'A password to protect access to the content and excerpt.',
            type: 'string',
            required: false
          },
          parent: { description: 'The ID for the parent of the object.', type: 'integer', required: false },
          title: {
            description: 'The title for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Title for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML title for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          content: {
            description: 'The content for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Content for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML content for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit'],
                readonly: true
              },
              block_version: {
                description: 'Version of the content block format used by the object.',
                type: 'integer',
                context: ['edit'],
                readonly: true
              },
              protected: {
                description: 'Whether the content is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          author: { description: 'The ID for the author of the object.', type: 'integer', required: false },
          excerpt: {
            description: 'The excerpt for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Excerpt for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML excerpt for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              },
              protected: {
                description: 'Whether the excerpt is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          featured_media: {
            description: 'The ID of the featured media for the object.',
            type: 'integer',
            required: false
          },
          comment_status: {
            description: 'Whether or not comments are open on the object.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          ping_status: {
            description: 'Whether or not the object can be pinged.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          menu_order: {
            description: 'The order of the object in relation to other object of its type.',
            type: 'integer',
            required: false
          },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false },
          template: {
            description: 'The theme file to use to display the object.',
            type: 'string',
            required: false
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/pages' }] }
    },
    '\/wp\/v2\/pages\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          password: {
            description: 'The password for the post if it is password protected.',
            type: 'string',
            required: false
          }
        }
      }, {
        methods: ['POST', 'PUT', 'PATCH'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          slug: {
            description: 'An alphanumeric identifier for the object unique to its type.',
            type: 'string',
            required: false
          },
          status: {
            description: 'A named status for the object.',
            type: 'string',
            enum: ['publish', 'future', 'draft', 'pending', 'private'],
            required: false
          },
          password: {
            description: 'A password to protect access to the content and excerpt.',
            type: 'string',
            required: false
          },
          parent: { description: 'The ID for the parent of the object.', type: 'integer', required: false },
          title: {
            description: 'The title for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Title for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML title for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          content: {
            description: 'The content for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Content for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML content for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit'],
                readonly: true
              },
              block_version: {
                description: 'Version of the content block format used by the object.',
                type: 'integer',
                context: ['edit'],
                readonly: true
              },
              protected: {
                description: 'Whether the content is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          author: { description: 'The ID for the author of the object.', type: 'integer', required: false },
          excerpt: {
            description: 'The excerpt for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Excerpt for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML excerpt for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              },
              protected: {
                description: 'Whether the excerpt is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          featured_media: {
            description: 'The ID of the featured media for the object.',
            type: 'integer',
            required: false
          },
          comment_status: {
            description: 'Whether or not comments are open on the object.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          ping_status: {
            description: 'Whether or not the object can be pinged.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          menu_order: {
            description: 'The order of the object in relation to other object of its type.',
            type: 'integer',
            required: false
          },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false },
          template: {
            description: 'The theme file to use to display the object.',
            type: 'string',
            required: false
          }
        }
      }, {
        methods: ['DELETE'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          force: {
            type: 'boolean',
            default: false,
            description: 'Whether to bypass Trash and force deletion.',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/revisions': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          parent: { description: 'The ID for the parent of the object.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            minimum: 1,
            maximum: 100,
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          exclude: {
            description: 'Ensure result set excludes specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          include: {
            description: 'Limit result set to specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          offset: {
            description: 'Offset the result set by a specific number of items.',
            type: 'integer',
            required: false
          },
          order: {
            description: 'Order sort attribute ascending or descending.',
            type: 'string',
            default: 'desc',
            enum: ['asc', 'desc'],
            required: false
          },
          orderby: {
            description: 'Sort collection by object attribute.',
            type: 'string',
            default: 'date',
            enum: ['date', 'id', 'include', 'relevance', 'slug', 'include_slugs', 'title'],
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/revisions\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          parent: {
            description: 'The ID for the parent of the object.',
            type: 'integer',
            required: false
          },
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }, {
        methods: ['DELETE'],
        args: {
          parent: {
            description: 'The ID for the parent of the object.',
            type: 'integer',
            required: false
          },
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          force: {
            type: 'boolean',
            default: false,
            description: 'Required to be true, as revisions do not support trashing.',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/pages\/(?P<id>[\\d]+)\/autosaves': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET'],
        args: {
          parent: {
            description: 'The ID for the parent of the object.',
            type: 'integer',
            required: false
          },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          parent: { description: 'The ID for the parent of the object.', type: 'integer', required: false },
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          slug: {
            description: 'An alphanumeric identifier for the object unique to its type.',
            type: 'string',
            required: false
          },
          status: {
            description: 'A named status for the object.',
            type: 'string',
            enum: ['publish', 'future', 'draft', 'pending', 'private'],
            required: false
          },
          password: {
            description: 'A password to protect access to the content and excerpt.',
            type: 'string',
            required: false
          },
          title: {
            description: 'The title for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Title for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML title for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          content: {
            description: 'The content for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Content for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML content for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit'],
                readonly: true
              },
              block_version: {
                description: 'Version of the content block format used by the object.',
                type: 'integer',
                context: ['edit'],
                readonly: true
              },
              protected: {
                description: 'Whether the content is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          author: { description: 'The ID for the author of the object.', type: 'integer', required: false },
          excerpt: {
            description: 'The excerpt for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Excerpt for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML excerpt for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              },
              protected: {
                description: 'Whether the excerpt is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          featured_media: {
            description: 'The ID of the featured media for the object.',
            type: 'integer',
            required: false
          },
          comment_status: {
            description: 'Whether or not comments are open on the object.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          ping_status: {
            description: 'Whether or not the object can be pinged.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          menu_order: {
            description: 'The order of the object in relation to other object of its type.',
            type: 'integer',
            required: false
          },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false },
          template: {
            description: 'The theme file to use to display the object.',
            type: 'string',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/autosaves\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          parent: {
            description: 'The ID for the parent of the object.',
            type: 'integer',
            required: false
          },
          id: { description: 'The ID for the object.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/media': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            default: 10,
            minimum: 1,
            maximum: 100,
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          after: {
            description: 'Limit response to posts published after a given ISO8601 compliant date.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          author: {
            description: 'Limit result set to posts assigned to specific authors.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          author_exclude: {
            description: 'Ensure result set excludes posts assigned to specific authors.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          before: {
            description: 'Limit response to posts published before a given ISO8601 compliant date.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          exclude: {
            description: 'Ensure result set excludes specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          include: {
            description: 'Limit result set to specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          offset: {
            description: 'Offset the result set by a specific number of items.',
            type: 'integer',
            required: false
          },
          order: {
            description: 'Order sort attribute ascending or descending.',
            type: 'string',
            default: 'desc',
            enum: ['asc', 'desc'],
            required: false
          },
          orderby: {
            description: 'Sort collection by object attribute.',
            type: 'string',
            default: 'date',
            enum: ['author', 'date', 'id', 'include', 'modified', 'parent', 'relevance', 'slug', 'include_slugs', 'title'],
            required: false
          },
          parent: {
            description: 'Limit result set to items with particular parent IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          parent_exclude: {
            description: 'Limit result set to all items except those of a particular parent ID.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          slug: {
            description: 'Limit result set to posts with one or more specific slugs.',
            type: 'array',
            items: { type: 'string' },
            required: false
          },
          status: {
            default: 'inherit',
            description: 'Limit result set to posts assigned one or more statuses.',
            type: 'array',
            items: { enum: ['inherit', 'private', 'trash'], type: 'string' },
            required: false
          },
          media_type: {
            default: null,
            description: 'Limit result set to attachments of a particular media type.',
            type: 'string',
            enum: ['image', 'video', 'text', 'application', 'audio'],
            required: false
          },
          mime_type: {
            default: null,
            description: 'Limit result set to attachments of a particular MIME type.',
            type: 'string',
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          slug: {
            description: 'An alphanumeric identifier for the object unique to its type.',
            type: 'string',
            required: false
          },
          status: {
            description: 'A named status for the object.',
            type: 'string',
            enum: ['publish', 'future', 'draft', 'pending', 'private'],
            required: false
          },
          title: {
            description: 'The title for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Title for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML title for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          author: { description: 'The ID for the author of the object.', type: 'integer', required: false },
          comment_status: {
            description: 'Whether or not comments are open on the object.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          ping_status: {
            description: 'Whether or not the object can be pinged.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false },
          template: {
            description: 'The theme file to use to display the object.',
            type: 'string',
            required: false
          },
          alt_text: {
            description: 'Alternative text to display when attachment is not displayed.',
            type: 'string',
            required: false
          },
          caption: {
            description: 'The attachment caption.',
            type: 'object',
            properties: {
              raw: {
                description: 'Caption for the attachment, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML caption for the attachment, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          description: {
            description: 'The attachment description.',
            type: 'object',
            properties: {
              raw: {
                description: 'Description for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML description for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit'],
                readonly: true
              }
            },
            required: false
          },
          post: {
            description: 'The ID for the associated post of the attachment.',
            type: 'integer',
            required: false
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/media' }] }
    },
    '\/wp\/v2\/media\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }, {
        methods: ['POST', 'PUT', 'PATCH'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          slug: {
            description: 'An alphanumeric identifier for the object unique to its type.',
            type: 'string',
            required: false
          },
          status: {
            description: 'A named status for the object.',
            type: 'string',
            enum: ['publish', 'future', 'draft', 'pending', 'private'],
            required: false
          },
          title: {
            description: 'The title for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Title for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML title for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          author: { description: 'The ID for the author of the object.', type: 'integer', required: false },
          comment_status: {
            description: 'Whether or not comments are open on the object.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          ping_status: {
            description: 'Whether or not the object can be pinged.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false },
          template: {
            description: 'The theme file to use to display the object.',
            type: 'string',
            required: false
          },
          alt_text: {
            description: 'Alternative text to display when attachment is not displayed.',
            type: 'string',
            required: false
          },
          caption: {
            description: 'The attachment caption.',
            type: 'object',
            properties: {
              raw: {
                description: 'Caption for the attachment, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML caption for the attachment, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          description: {
            description: 'The attachment description.',
            type: 'object',
            properties: {
              raw: {
                description: 'Description for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML description for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit'],
                readonly: true
              }
            },
            required: false
          },
          post: {
            description: 'The ID for the associated post of the attachment.',
            type: 'integer',
            required: false
          }
        }
      }, {
        methods: ['DELETE'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          force: {
            type: 'boolean',
            default: false,
            description: 'Whether to bypass Trash and force deletion.',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/media\/(?P<id>[\\d]+)\/post-process': {
      namespace: 'wp\/v2',
      methods: ['POST'],
      endpoints: [{
        methods: ['POST'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          action: { type: 'string', enum: ['create-image-subsizes'], required: true }
        }
      }]
    },
    '\/wp\/v2\/media\/(?P<id>[\\d]+)\/edit': {
      namespace: 'wp\/v2',
      methods: ['POST'],
      endpoints: [{
        methods: ['POST'],
        args: {
          rotation: {
            description: 'The amount to rotate the image clockwise in degrees.',
            type: 'integer',
            minimum: 0,
            exclusiveMinimum: true,
            maximum: 360,
            exclusiveMaximum: true,
            required: false
          },
          x: {
            description: 'As a percentage of the image, the x position to start the crop from.',
            type: 'number',
            minimum: 0,
            maximum: 100,
            required: false
          },
          y: {
            description: 'As a percentage of the image, the y position to start the crop from.',
            type: 'number',
            minimum: 0,
            maximum: 100,
            required: false
          },
          width: {
            description: 'As a percentage of the image, the width to crop the image to.',
            type: 'number',
            minimum: 0,
            maximum: 100,
            required: false
          },
          height: {
            description: 'As a percentage of the image, the height to crop the image to.',
            type: 'number',
            minimum: 0,
            maximum: 100,
            required: false
          },
          src: { description: 'URL to the edited image file.', type: 'string', format: 'uri', required: true }
        }
      }]
    },
    '\/wp\/v2\/blocks': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            default: 10,
            minimum: 1,
            maximum: 100,
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          after: {
            description: 'Limit response to posts published after a given ISO8601 compliant date.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          before: {
            description: 'Limit response to posts published before a given ISO8601 compliant date.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          exclude: {
            description: 'Ensure result set excludes specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          include: {
            description: 'Limit result set to specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          offset: {
            description: 'Offset the result set by a specific number of items.',
            type: 'integer',
            required: false
          },
          order: {
            description: 'Order sort attribute ascending or descending.',
            type: 'string',
            default: 'desc',
            enum: ['asc', 'desc'],
            required: false
          },
          orderby: {
            description: 'Sort collection by object attribute.',
            type: 'string',
            default: 'date',
            enum: ['author', 'date', 'id', 'include', 'modified', 'parent', 'relevance', 'slug', 'include_slugs', 'title'],
            required: false
          },
          slug: {
            description: 'Limit result set to posts with one or more specific slugs.',
            type: 'array',
            items: { type: 'string' },
            required: false
          },
          status: {
            default: 'publish',
            description: 'Limit result set to posts assigned one or more statuses.',
            type: 'array',
            items: {
              enum: ['publish', 'future', 'draft', 'pending', 'private', 'trash', 'auto-draft', 'inherit', 'request-pending', 'request-confirmed', 'request-failed', 'request-completed', 'any'],
              type: 'string'
            },
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          slug: {
            description: 'An alphanumeric identifier for the object unique to its type.',
            type: 'string',
            required: false
          },
          status: {
            description: 'A named status for the object.',
            type: 'string',
            enum: ['publish', 'future', 'draft', 'pending', 'private'],
            required: false
          },
          password: {
            description: 'A password to protect access to the content and excerpt.',
            type: 'string',
            required: false
          },
          title: {
            description: 'The title for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Title for the object, as it exists in the database.',
                type: 'string',
                context: ['view', 'edit']
              }
            },
            required: false
          },
          content: {
            description: 'The content for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Content for the object, as it exists in the database.',
                type: 'string',
                context: ['view', 'edit']
              },
              block_version: {
                description: 'Version of the content block format used by the object.',
                type: 'integer',
                context: ['edit'],
                readonly: true
              },
              protected: {
                description: 'Whether the content is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          template: {
            description: 'The theme file to use to display the object.',
            type: 'string',
            required: false
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/blocks' }] }
    },
    '\/wp\/v2\/blocks\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          password: {
            description: 'The password for the post if it is password protected.',
            type: 'string',
            required: false
          }
        }
      }, {
        methods: ['POST', 'PUT', 'PATCH'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          slug: {
            description: 'An alphanumeric identifier for the object unique to its type.',
            type: 'string',
            required: false
          },
          status: {
            description: 'A named status for the object.',
            type: 'string',
            enum: ['publish', 'future', 'draft', 'pending', 'private'],
            required: false
          },
          password: {
            description: 'A password to protect access to the content and excerpt.',
            type: 'string',
            required: false
          },
          title: {
            description: 'The title for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Title for the object, as it exists in the database.',
                type: 'string',
                context: ['view', 'edit']
              }
            },
            required: false
          },
          content: {
            description: 'The content for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Content for the object, as it exists in the database.',
                type: 'string',
                context: ['view', 'edit']
              },
              block_version: {
                description: 'Version of the content block format used by the object.',
                type: 'integer',
                context: ['edit'],
                readonly: true
              },
              protected: {
                description: 'Whether the content is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          template: {
            description: 'The theme file to use to display the object.',
            type: 'string',
            required: false
          }
        }
      }, {
        methods: ['DELETE'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          force: {
            type: 'boolean',
            default: false,
            description: 'Whether to bypass Trash and force deletion.',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/blocks\/(?P<id>[\\d]+)\/autosaves': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET'],
        args: {
          parent: {
            description: 'The ID for the parent of the object.',
            type: 'integer',
            required: false
          },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          parent: { description: 'The ID for the parent of the object.', type: 'integer', required: false },
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: ['string', 'null'],
            format: 'date-time',
            required: false
          },
          slug: {
            description: 'An alphanumeric identifier for the object unique to its type.',
            type: 'string',
            required: false
          },
          status: {
            description: 'A named status for the object.',
            type: 'string',
            enum: ['publish', 'future', 'draft', 'pending', 'private'],
            required: false
          },
          password: {
            description: 'A password to protect access to the content and excerpt.',
            type: 'string',
            required: false
          },
          title: {
            description: 'The title for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Title for the object, as it exists in the database.',
                type: 'string',
                context: ['view', 'edit']
              }
            },
            required: false
          },
          content: {
            description: 'The content for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Content for the object, as it exists in the database.',
                type: 'string',
                context: ['view', 'edit']
              },
              block_version: {
                description: 'Version of the content block format used by the object.',
                type: 'integer',
                context: ['edit'],
                readonly: true
              },
              protected: {
                description: 'Whether the content is protected with a password.',
                type: 'boolean',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          template: {
            description: 'The theme file to use to display the object.',
            type: 'string',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/blocks\/(?P<parent>[\\d]+)\/autosaves\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          parent: {
            description: 'The ID for the parent of the object.',
            type: 'integer',
            required: false
          },
          id: { description: 'The ID for the object.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/types': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/types' }] }
    },
    '\/wp\/v2\/types\/(?P<type>[\\w-]+)': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          type: {
            description: 'An alphanumeric identifier for the post type.',
            type: 'string',
            required: false
          },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/statuses': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/statuses' }] }
    },
    '\/wp\/v2\/statuses\/(?P<status>[\\w-]+)': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          status: {
            description: 'An alphanumeric identifier for the status.',
            type: 'string',
            required: false
          },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/taxonomies': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          type: {
            description: 'Limit results to taxonomies associated with a specific post type.',
            type: 'string',
            required: false
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/taxonomies' }] }
    },
    '\/wp\/v2\/taxonomies\/(?P<taxonomy>[\\w-]+)': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          taxonomy: {
            description: 'An alphanumeric identifier for the taxonomy.',
            type: 'string',
            required: false
          },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/categories': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            default: 10,
            minimum: 1,
            maximum: 100,
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          exclude: {
            description: 'Ensure result set excludes specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          include: {
            description: 'Limit result set to specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          order: {
            description: 'Order sort attribute ascending or descending.',
            type: 'string',
            default: 'asc',
            enum: ['asc', 'desc'],
            required: false
          },
          orderby: {
            description: 'Sort collection by term attribute.',
            type: 'string',
            default: 'name',
            enum: ['id', 'include', 'name', 'slug', 'include_slugs', 'term_group', 'description', 'count'],
            required: false
          },
          hide_empty: {
            description: 'Whether to hide terms not assigned to any posts.',
            type: 'boolean',
            default: false,
            required: false
          },
          parent: {
            description: 'Limit result set to terms assigned to a specific parent.',
            type: 'integer',
            required: false
          },
          post: {
            description: 'Limit result set to terms assigned to a specific post.',
            type: 'integer',
            default: null,
            required: false
          },
          slug: {
            description: 'Limit result set to terms with one or more specific slugs.',
            type: 'array',
            items: { type: 'string' },
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          description: {
            description: 'HTML description of the term.',
            type: 'string',
            required: false
          },
          name: { description: 'HTML title for the term.', type: 'string', required: true },
          slug: {
            description: 'An alphanumeric identifier for the term unique to its type.',
            type: 'string',
            required: false
          },
          parent: { description: 'The parent term ID.', type: 'integer', required: false },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/categories' }] }
    },
    '\/wp\/v2\/categories\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          id: { description: 'Unique identifier for the term.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }, {
        methods: ['POST', 'PUT', 'PATCH'],
        args: {
          id: { description: 'Unique identifier for the term.', type: 'integer', required: false },
          description: { description: 'HTML description of the term.', type: 'string', required: false },
          name: { description: 'HTML title for the term.', type: 'string', required: false },
          slug: {
            description: 'An alphanumeric identifier for the term unique to its type.',
            type: 'string',
            required: false
          },
          parent: { description: 'The parent term ID.', type: 'integer', required: false },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false }
        }
      }, {
        methods: ['DELETE'],
        args: {
          id: { description: 'Unique identifier for the term.', type: 'integer', required: false },
          force: {
            type: 'boolean',
            default: false,
            description: 'Required to be true, as terms do not support trashing.',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/tags': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            default: 10,
            minimum: 1,
            maximum: 100,
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          exclude: {
            description: 'Ensure result set excludes specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          include: {
            description: 'Limit result set to specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          offset: {
            description: 'Offset the result set by a specific number of items.',
            type: 'integer',
            required: false
          },
          order: {
            description: 'Order sort attribute ascending or descending.',
            type: 'string',
            default: 'asc',
            enum: ['asc', 'desc'],
            required: false
          },
          orderby: {
            description: 'Sort collection by term attribute.',
            type: 'string',
            default: 'name',
            enum: ['id', 'include', 'name', 'slug', 'include_slugs', 'term_group', 'description', 'count'],
            required: false
          },
          hide_empty: {
            description: 'Whether to hide terms not assigned to any posts.',
            type: 'boolean',
            default: false,
            required: false
          },
          post: {
            description: 'Limit result set to terms assigned to a specific post.',
            type: 'integer',
            default: null,
            required: false
          },
          slug: {
            description: 'Limit result set to terms with one or more specific slugs.',
            type: 'array',
            items: { type: 'string' },
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          description: {
            description: 'HTML description of the term.',
            type: 'string',
            required: false
          },
          name: { description: 'HTML title for the term.', type: 'string', required: true },
          slug: {
            description: 'An alphanumeric identifier for the term unique to its type.',
            type: 'string',
            required: false
          },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/tags' }] }
    },
    '\/wp\/v2\/tags\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          id: { description: 'Unique identifier for the term.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }, {
        methods: ['POST', 'PUT', 'PATCH'],
        args: {
          id: { description: 'Unique identifier for the term.', type: 'integer', required: false },
          description: { description: 'HTML description of the term.', type: 'string', required: false },
          name: { description: 'HTML title for the term.', type: 'string', required: false },
          slug: {
            description: 'An alphanumeric identifier for the term unique to its type.',
            type: 'string',
            required: false
          },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false }
        }
      }, {
        methods: ['DELETE'],
        args: {
          id: { description: 'Unique identifier for the term.', type: 'integer', required: false },
          force: {
            type: 'boolean',
            default: false,
            description: 'Required to be true, as terms do not support trashing.',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/users': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            default: 10,
            minimum: 1,
            maximum: 100,
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          exclude: {
            description: 'Ensure result set excludes specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          include: {
            description: 'Limit result set to specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          offset: {
            description: 'Offset the result set by a specific number of items.',
            type: 'integer',
            required: false
          },
          order: {
            default: 'asc',
            description: 'Order sort attribute ascending or descending.',
            enum: ['asc', 'desc'],
            type: 'string',
            required: false
          },
          orderby: {
            default: 'name',
            description: 'Sort collection by object attribute.',
            enum: ['id', 'include', 'name', 'registered_date', 'slug', 'include_slugs', 'email', 'url'],
            type: 'string',
            required: false
          },
          slug: {
            description: 'Limit result set to users with one or more specific slugs.',
            type: 'array',
            items: { type: 'string' },
            required: false
          },
          roles: {
            description: 'Limit result set to users matching at least one specific role provided. Accepts csv list or single role.',
            type: 'array',
            items: { type: 'string' },
            required: false
          },
          who: {
            description: 'Limit result set to users who are considered authors.',
            type: 'string',
            enum: ['authors'],
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          username: { description: 'Login name for the user.', type: 'string', required: true },
          name: { description: 'Display name for the user.', type: 'string', required: false },
          first_name: { description: 'First name for the user.', type: 'string', required: false },
          last_name: { description: 'Last name for the user.', type: 'string', required: false },
          email: {
            description: 'The email address for the user.',
            type: 'string',
            format: 'email',
            required: true
          },
          url: { description: 'URL of the user.', type: 'string', format: 'uri', required: false },
          description: { description: 'Description of the user.', type: 'string', required: false },
          locale: {
            description: 'Locale for the user.',
            type: 'string',
            enum: ['', 'en_US'],
            required: false
          },
          nickname: { description: 'The nickname for the user.', type: 'string', required: false },
          slug: { description: 'An alphanumeric identifier for the user.', type: 'string', required: false },
          roles: {
            description: 'Roles assigned to the user.',
            type: 'array',
            items: { type: 'string' },
            required: false
          },
          password: { description: 'Password for the user (never included).', type: 'string', required: true },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/users' }] }
    },
    '\/wp\/v2\/users\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          id: { description: 'Unique identifier for the user.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }, {
        methods: ['POST', 'PUT', 'PATCH'],
        args: {
          id: { description: 'Unique identifier for the user.', type: 'integer', required: false },
          username: { description: 'Login name for the user.', type: 'string', required: false },
          name: { description: 'Display name for the user.', type: 'string', required: false },
          first_name: { description: 'First name for the user.', type: 'string', required: false },
          last_name: { description: 'Last name for the user.', type: 'string', required: false },
          email: {
            description: 'The email address for the user.',
            type: 'string',
            format: 'email',
            required: false
          },
          url: { description: 'URL of the user.', type: 'string', format: 'uri', required: false },
          description: { description: 'Description of the user.', type: 'string', required: false },
          locale: {
            description: 'Locale for the user.',
            type: 'string',
            enum: ['', 'en_US'],
            required: false
          },
          nickname: { description: 'The nickname for the user.', type: 'string', required: false },
          slug: { description: 'An alphanumeric identifier for the user.', type: 'string', required: false },
          roles: {
            description: 'Roles assigned to the user.',
            type: 'array',
            items: { type: 'string' },
            required: false
          },
          password: { description: 'Password for the user (never included).', type: 'string', required: false },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false }
        }
      }, {
        methods: ['DELETE'],
        args: {
          id: { description: 'Unique identifier for the user.', type: 'integer', required: false },
          force: {
            type: 'boolean',
            default: false,
            description: 'Required to be true, as users do not support trashing.',
            required: false
          },
          reassign: {
            type: 'integer',
            description: 'Reassign the deleted user\'s posts and links to this user ID.',
            required: true
          }
        }
      }]
    },
    '\/wp\/v2\/users\/me': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }, {
        methods: ['POST', 'PUT', 'PATCH'],
        args: {
          username: { description: 'Login name for the user.', type: 'string', required: false },
          name: { description: 'Display name for the user.', type: 'string', required: false },
          first_name: { description: 'First name for the user.', type: 'string', required: false },
          last_name: { description: 'Last name for the user.', type: 'string', required: false },
          email: {
            description: 'The email address for the user.',
            type: 'string',
            format: 'email',
            required: false
          },
          url: { description: 'URL of the user.', type: 'string', format: 'uri', required: false },
          description: { description: 'Description of the user.', type: 'string', required: false },
          locale: {
            description: 'Locale for the user.',
            type: 'string',
            enum: ['', 'en_US'],
            required: false
          },
          nickname: { description: 'The nickname for the user.', type: 'string', required: false },
          slug: { description: 'An alphanumeric identifier for the user.', type: 'string', required: false },
          roles: {
            description: 'Roles assigned to the user.',
            type: 'array',
            items: { type: 'string' },
            required: false
          },
          password: { description: 'Password for the user (never included).', type: 'string', required: false },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false }
        }
      }, {
        methods: ['DELETE'],
        args: {
          force: {
            type: 'boolean',
            default: false,
            description: 'Required to be true, as users do not support trashing.',
            required: false
          },
          reassign: {
            type: 'integer',
            description: 'Reassign the deleted user\'s posts and links to this user ID.',
            required: true
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/users\/me' }] }
    },
    '\/wp\/v2\/users\/(?P<user_id>(?:[\\d]+|me))\/application-passwords': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          app_id: {
            description: 'A uuid provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.',
            type: 'string',
            format: 'uuid',
            required: false
          },
          name: { description: 'The name of the application password.', type: 'string', required: true }
        }
      }, { methods: ['DELETE'], args: [] }]
    },
    '\/wp\/v2\/users\/(?P<user_id>(?:[\\d]+|me))\/application-passwords\/(?P<uuid>[\\w\\-]+)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }, {
        methods: ['POST', 'PUT', 'PATCH'],
        args: {
          app_id: {
            description: 'A uuid provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.',
            type: 'string',
            format: 'uuid',
            required: false
          },
          name: { description: 'The name of the application password.', type: 'string', required: false }
        }
      }, { methods: ['DELETE'], args: [] }]
    },
    '\/wp\/v2\/comments': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            default: 10,
            minimum: 1,
            maximum: 100,
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          after: {
            description: 'Limit response to comments published after a given ISO8601 compliant date.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          author: {
            description: 'Limit result set to comments assigned to specific user IDs. Requires authorization.',
            type: 'array',
            items: { type: 'integer' },
            required: false
          },
          author_exclude: {
            description: 'Ensure result set excludes comments assigned to specific user IDs. Requires authorization.',
            type: 'array',
            items: { type: 'integer' },
            required: false
          },
          author_email: {
            default: null,
            description: 'Limit result set to that from a specific author email. Requires authorization.',
            format: 'email',
            type: 'string',
            required: false
          },
          before: {
            description: 'Limit response to comments published before a given ISO8601 compliant date.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          exclude: {
            description: 'Ensure result set excludes specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          include: {
            description: 'Limit result set to specific IDs.',
            type: 'array',
            items: { type: 'integer' },
            default: [],
            required: false
          },
          offset: {
            description: 'Offset the result set by a specific number of items.',
            type: 'integer',
            required: false
          },
          order: {
            description: 'Order sort attribute ascending or descending.',
            type: 'string',
            default: 'desc',
            enum: ['asc', 'desc'],
            required: false
          },
          orderby: {
            description: 'Sort collection by object attribute.',
            type: 'string',
            default: 'date_gmt',
            enum: ['date', 'date_gmt', 'id', 'include', 'post', 'parent', 'type'],
            required: false
          },
          parent: {
            default: [],
            description: 'Limit result set to comments of specific parent IDs.',
            type: 'array',
            items: { type: 'integer' },
            required: false
          },
          parent_exclude: {
            default: [],
            description: 'Ensure result set excludes specific parent IDs.',
            type: 'array',
            items: { type: 'integer' },
            required: false
          },
          post: {
            default: [],
            description: 'Limit result set to comments assigned to specific post IDs.',
            type: 'array',
            items: { type: 'integer' },
            required: false
          },
          status: {
            default: 'approve',
            description: 'Limit result set to comments assigned a specific status. Requires authorization.',
            type: 'string',
            required: false
          },
          type: {
            default: 'comment',
            description: 'Limit result set to comments assigned a specific type. Requires authorization.',
            type: 'string',
            required: false
          },
          password: {
            description: 'The password for the post if it is password protected.',
            type: 'string',
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          author: {
            description: 'The ID of the user object, if author was a user.',
            type: 'integer',
            required: false
          },
          author_email: {
            description: 'Email address for the object author.',
            type: 'string',
            format: 'email',
            required: false
          },
          author_ip: {
            description: 'IP address for the object author.',
            type: 'string',
            format: 'ip',
            required: false
          },
          author_name: { description: 'Display name for the object author.', type: 'string', required: false },
          author_url: {
            description: 'URL for the object author.',
            type: 'string',
            format: 'uri',
            required: false
          },
          author_user_agent: {
            description: 'User agent for the object author.',
            type: 'string',
            required: false
          },
          content: {
            description: 'The content for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Content for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML content for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          parent: {
            default: 0,
            description: 'The ID for the parent of the object.',
            type: 'integer',
            required: false
          },
          post: {
            default: 0,
            description: 'The ID of the associated post object.',
            type: 'integer',
            required: false
          },
          status: { description: 'State of the object.', type: 'string', required: false },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/comments' }] }
    },
    '\/wp\/v2\/comments\/(?P<id>[\\d]+)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          password: {
            description: 'The password for the parent post of the comment (if the post is password protected).',
            type: 'string',
            required: false
          }
        }
      }, {
        methods: ['POST', 'PUT', 'PATCH'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          author: {
            description: 'The ID of the user object, if author was a user.',
            type: 'integer',
            required: false
          },
          author_email: {
            description: 'Email address for the object author.',
            type: 'string',
            format: 'email',
            required: false
          },
          author_ip: {
            description: 'IP address for the object author.',
            type: 'string',
            format: 'ip',
            required: false
          },
          author_name: { description: 'Display name for the object author.', type: 'string', required: false },
          author_url: {
            description: 'URL for the object author.',
            type: 'string',
            format: 'uri',
            required: false
          },
          author_user_agent: {
            description: 'User agent for the object author.',
            type: 'string',
            required: false
          },
          content: {
            description: 'The content for the object.',
            type: 'object',
            properties: {
              raw: {
                description: 'Content for the object, as it exists in the database.',
                type: 'string',
                context: ['edit']
              },
              rendered: {
                description: 'HTML content for the object, transformed for display.',
                type: 'string',
                context: ['view', 'edit', 'embed'],
                readonly: true
              }
            },
            required: false
          },
          date: {
            description: 'The date the object was published, in the site\'s timezone.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          date_gmt: {
            description: 'The date the object was published, as GMT.',
            type: 'string',
            format: 'date-time',
            required: false
          },
          parent: { description: 'The ID for the parent of the object.', type: 'integer', required: false },
          post: { description: 'The ID of the associated post object.', type: 'integer', required: false },
          status: { description: 'State of the object.', type: 'string', required: false },
          meta: { description: 'Meta fields.', type: 'object', properties: [], required: false }
        }
      }, {
        methods: ['DELETE'],
        args: {
          id: { description: 'Unique identifier for the object.', type: 'integer', required: false },
          force: {
            type: 'boolean',
            default: false,
            description: 'Whether to bypass Trash and force deletion.',
            required: false
          },
          password: {
            description: 'The password for the parent post of the comment (if the post is password protected).',
            type: 'string',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/search': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed'],
            default: 'view',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            default: 10,
            minimum: 1,
            maximum: 100,
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          type: {
            default: 'post',
            description: 'Limit results to items of an object type.',
            type: 'string',
            enum: ['post', 'term', 'post-format'],
            required: false
          },
          subtype: {
            default: 'any',
            description: 'Limit results to items of one or more object subtypes.',
            type: 'array',
            items: { enum: ['post', 'page', 'category', 'post_tag', 'any'], type: 'string' },
            required: false
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/search' }] }
    },
    '\/wp\/v2\/block-renderer\/(?P<name>[a-z0-9-]+\/[a-z0-9-]+)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET', 'POST'],
        args: {
          name: {
            description: 'Unique registered name for the block.',
            type: 'string',
            required: false
          },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['edit'],
            default: 'view',
            required: false
          },
          attributes: {
            description: 'Attributes for the block.',
            type: 'object',
            default: [],
            required: false
          },
          post_id: { description: 'ID of the post context.', type: 'integer', required: false }
        }
      }]
    },
    '\/wp\/v2\/block-types': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          namespace: { description: 'Block namespace.', type: 'string', required: false }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/block-types' }] }
    },
    '\/wp\/v2\/block-types\/(?P<namespace>[a-zA-Z0-9_-]+)': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          namespace: { description: 'Block namespace.', type: 'string', required: false }
        }
      }]
    },
    '\/wp\/v2\/block-types\/(?P<namespace>[a-zA-Z0-9_-]+)\/(?P<name>[a-zA-Z0-9_-]+)': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          name: { description: 'Block name.', type: 'string', required: false },
          namespace: { description: 'Block namespace.', type: 'string', required: false },
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          }
        }
      }]
    },
    '\/wp\/v2\/settings': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH'],
      endpoints: [{ methods: ['GET'], args: [] }, {
        methods: ['POST', 'PUT', 'PATCH'],
        args: {
          title: { description: 'Site title.', type: 'string', required: false },
          description: { description: 'Site tagline.', type: 'string', required: false },
          url: { description: 'Site URL.', type: 'string', format: 'uri', required: false },
          email: {
            description: 'This address is used for admin purposes, like new user notification.',
            type: 'string',
            format: 'email',
            required: false
          },
          timezone: { description: 'A city in the same timezone as you.', type: 'string', required: false },
          date_format: { description: 'A date format for all date strings.', type: 'string', required: false },
          time_format: { description: 'A time format for all time strings.', type: 'string', required: false },
          start_of_week: {
            description: 'A day number of the week that the week should start on.',
            type: 'integer',
            required: false
          },
          language: { description: 'WordPress locale code.', type: 'string', required: false },
          use_smilies: {
            description: 'Convert emoticons like :-) and :-P to graphics on display.',
            type: 'boolean',
            required: false
          },
          default_category: { description: 'Default post category.', type: 'integer', required: false },
          default_post_format: { description: 'Default post format.', type: 'string', required: false },
          posts_per_page: { description: 'Blog pages show at most.', type: 'integer', required: false },
          default_ping_status: {
            description: 'Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          },
          default_comment_status: {
            description: 'Allow people to submit comments on new posts.',
            type: 'string',
            enum: ['open', 'closed'],
            required: false
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/settings' }] }
    },
    '\/wp\/v2\/themes': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            default: 10,
            minimum: 1,
            maximum: 100,
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          status: {
            description: 'Limit result set to themes assigned one or more statuses.',
            type: 'array',
            items: { enum: ['active'], type: 'string' },
            required: true
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/themes' }] }
    },
    '\/wp\/v2\/plugins': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          search: { description: 'Limit results to those matching a string.', type: 'string', required: false },
          status: {
            description: 'Limits results to plugins with the given status.',
            type: 'array',
            items: { type: 'string', enum: ['inactive', 'active'] },
            required: false
          }
        }
      }, {
        methods: ['POST'],
        args: {
          slug: {
            type: 'string',
            description: 'WordPress.org plugin directory slug.',
            pattern: '[\\w\\-]+',
            required: true
          },
          status: {
            description: 'The plugin activation status.',
            type: 'string',
            enum: ['inactive', 'active'],
            default: 'inactive',
            required: false
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/plugins' }] }
    },
    '\/wp\/v2\/plugins\/(?P<plugin>[^.\\\/]+(?:\\\/[^.\\\/]+)?)': {
      namespace: 'wp\/v2',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          plugin: { type: 'string', pattern: '[^.\\\/]+(?:\\\/[^.\\\/]+)?', required: false }
        }
      }, {
        methods: ['POST', 'PUT', 'PATCH'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          plugin: { type: 'string', pattern: '[^.\\\/]+(?:\\\/[^.\\\/]+)?', required: false },
          status: {
            description: 'The plugin activation status.',
            type: 'string',
            enum: ['inactive', 'active'],
            required: false
          }
        }
      }, {
        methods: ['DELETE'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view', 'embed', 'edit'],
            default: 'view',
            required: false
          },
          plugin: { type: 'string', pattern: '[^.\\\/]+(?:\\\/[^.\\\/]+)?', required: false }
        }
      }]
    },
    '\/wp\/v2\/block-directory\/search': {
      namespace: 'wp\/v2',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          context: {
            description: 'Scope under which the request is made; determines fields present in response.',
            type: 'string',
            enum: ['view'],
            default: 'view',
            required: false
          },
          page: {
            description: 'Current page of the collection.',
            type: 'integer',
            default: 1,
            minimum: 1,
            required: false
          },
          per_page: {
            description: 'Maximum number of items to be returned in result set.',
            type: 'integer',
            default: 10,
            minimum: 1,
            maximum: 100,
            required: false
          },
          term: {
            description: 'Limit result set to blocks matching the search term.',
            type: 'string',
            minLength: 1,
            required: true
          }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp\/v2\/block-directory\/search' }] }
    },
    '\/wp-site-health\/v1': {
      namespace: 'wp-site-health\/v1',
      methods: ['GET'],
      endpoints: [{
        methods: ['GET'],
        args: {
          namespace: { default: 'wp-site-health\/v1', required: false },
          context: { default: 'view', required: false }
        }
      }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp-site-health\/v1' }] }
    },
    '\/wp-site-health\/v1\/tests\/background-updates': {
      namespace: 'wp-site-health\/v1',
      methods: ['GET'],
      endpoints: [{ methods: ['GET'], args: [] }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp-site-health\/v1\/tests\/background-updates' }] }
    },
    '\/wp-site-health\/v1\/tests\/loopback-requests': {
      namespace: 'wp-site-health\/v1',
      methods: ['GET'],
      endpoints: [{ methods: ['GET'], args: [] }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp-site-health\/v1\/tests\/loopback-requests' }] }
    },
    '\/wp-site-health\/v1\/tests\/dotorg-communication': {
      namespace: 'wp-site-health\/v1',
      methods: ['GET'],
      endpoints: [{ methods: ['GET'], args: [] }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp-site-health\/v1\/tests\/dotorg-communication' }] }
    },
    '\/wp-site-health\/v1\/tests\/authorization-header': {
      namespace: 'wp-site-health\/v1',
      methods: ['GET'],
      endpoints: [{ methods: ['GET'], args: [] }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp-site-health\/v1\/tests\/authorization-header' }] }
    },
    '\/wp-site-health\/v1\/directory-sizes': {
      namespace: 'wp-site-health\/v1',
      methods: ['GET'],
      endpoints: [{ methods: ['GET'], args: [] }],
      _links: { self: [{ href: 'http:\/\/testwp2.cristinabizoi.ro\/wp-json\/wp-site-health\/v1\/directory-sizes' }] }
    }
  },
  _links: { help: [{ href: 'http:\/\/v2.wp-api.org\/' }] }
}
