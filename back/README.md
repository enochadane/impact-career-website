# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

                            BACKEND:

In Strapi:
npx create-strapi-app@latest my-project.

Choose an installation type:
Quickstart (recommended), which uses the default database (SQLite)
Custom (manual settings), which allows to choose your preferred database.

To start the Strapi application, run the following command in the project folder:
npm run develop or yarn develop.
Now the backend will open in UI it's open in the url of http://loccalhost:1337/admin
We have to Register and login and will the UI will be setup.

Project structure:

├──── .cache # files used to build the admin panel
├──── .tmp
├──── build # build of the admin panel
├──── config # API configurations
│ ├ api.js
│ ├ admin.js
│ ├ cron-tasks.js
│ ├ database.js
│ ├ middlewares.js
│ ├ plugins.js
│ └ server.js
├──── database
│ └──── migrations
├──── node_modules # npm packages used by the project
├──── public # files accessible to the outside world
│ └──── uploads
├──── src
│ ├──── admin # admin customization files
│ ├──── extensions # files to extend the admin panel
│ │ ├ app.js
│ │ └ webpack.config.js
│ ├──── api # business logic of the project split into subfolders per API
│ │ └──── (api-name)
│ │ ├──── content-types
│ │ │ └──── (content-type-name)
│ │ │ └ lifecycles.js
│ │ │ └ schema.json
│ │ ├──── controllers
│ │ ├──── middlewares
│ │ ├──── policies
│ │ ├──── routes
│ │ ├──── services
│ │ └ index.js
│ ├──── components
│ │ └──── (category-name)
│ │ ├ (componentA).json
│ │ └ (componentB).json
│ ├──── extensions # files to extend installed plugins
│ │ └──── (plugin-to-be-extended)
│ │ ├──── content-types
│ │ │ └──── (content-type-name)
│ │ │ └ schema.json
│ │ └ strapi-server.js
│ ├──── middlewares
│ │ └──── (middleware-name).js
│ ├──── plugins # local plugins files
│ │ └──── (plugin-name)
│ │ ├──── admin
│ │ │ └──── src
│ │ │ └ index.js
│ │ ├──── server
│ │ │ ├──── content-types
│ │ │ ├──── controllers
│ │ │ └──── policies
│ │ ├ package.json
│ │ ├ strapi-admin.js
│ │ └ strapi-server.js
│ ├─── policies
│ └ index.js # include register(), bootstrap() and destroy() functions
├ .env
└ package.json

.env file we have to add.
Installation Packages:

Strapi graphql : npm run strapi install graphql
See the query in http://localhost:1337/graphql.

Example query:
query Restaurants {
restaurants {
id
name
description
categories {
name
}
}
}

Example Response for above:
{
"data": {
"restaurants": [
{
"id": "1",
"name": "Biscotte Restaurant",
"description": "Welcome to Biscotte restaurant! Restaurant Biscotte offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers.",
"categories": [
{
"name": "French Food"
}
]
}
]
}
}

Apollo Client package: npm i @apollo/client.
