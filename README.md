# Developer documentation

This documentation is built using [11ty](https://www.11ty.dev/), a static site generator. Additionally it leverages [Nunjucks](https://www.11ty.dev/docs/languages/nunjucks/) for templating.

## Prerequisites

To run this project locally, you need:

- **Node.js** (version 16.x or later recommended)
- **npm** (comes with Node.js)

You can check your versions with:

```bash
node --version
npm --version
```

Download Node.js from [nodejs.org](https://nodejs.org/).

## Configuration

If you are deploying to GitHub Pages, you should set the `pathPrefix` in your Eleventy config to match your repository name. This ensures all site URLs are correct when hosted at `https://USERNAME|ORGANISATION.github.io/PATH-PREFIX/`.

In `eleventy.config.js`, add or update:

```js
export default function(eleventyConfig) {
  // ...existing config...
  return {
    // ...over values omitted
    pathPrefix: "/repo-name", // Replace `repo-name` with your GitHub repository name
  };
}
```

For example, if your repo is `eleventy-gh-pages-site`, use:

```js
pathPrefix: "/eleventy-gh-pages-site/"
```

This setting is only needed for GitHub Pages or similar subdirectory hosting.

## Building the site

To build the static site, run:

```bash
npm run build
```

The output will be generated in the `_site` directory.

## Running locally with hot reloading

To start a local development server with hot reloading, run:

```bash
npm run serve
```

This will watch for changes and automatically reload the site at [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal).

## Updating the menu and meta information

Menu and meta data are managed using Eleventy's [global data files](https://www.11ty.dev/docs/data-global/), located in the `src/_data` directory. To update navigation menus or site metadata:

1. Edit the relevant file in `src/_data` (e.g., `menu.json`, `meta.json`).
2. Save your changes and the site will automatically reload if running in serve mode.

## Formatting code

### Automatic formatting on save

Prettier is configured to automatically format JavaScript, JSON, HTML, and Markdown files on save in VS Code. Make sure you have the **Prettier** extension installed and enabled.

### Manual formatting for Nunjucks files

Due to VS Code limitations, some Nunjucks (`.njk`) files may not be formatted automatically. To manually format all `.njk` files, run:

```bash
npm run format:njk
```

This uses Prettier with the Jinja template plugin to format Nunjucks templates.

If you want to prevent Prettier from formatting a specific block, you can use the `<!-- prettier-ignore-start -->` and `<!-- prettier-ignore-end -->` comments in Markdown files.

## Adding a new page

To add a new page to the documentation site:

1. **Create the page file:**
   - Place your new page in the `src/` directory. For example, to add a page called "Contact", create `src/contact.md` (for Markdown) or `src/contact.njk` (for Nunjucks).

2. **Specify the template and title:**
   - At the top of your new file, set the layout and title. Example for Markdown:

     ```markdown
     ---
     layout: default
     title: Contact
     ---

     Your page content goes here.
     ```
   - For Nunjucks, you can follow the same approach.

3. **Add the page to the menu:**
   - Open `src/_data/menu.json`.
   - Add a new entry for your page to the relevant section, for example:

```json
    [
      ...existing menu items...,
      {
        "label": "Section 1",
        "items": [
          { "label": "Item 1", "path": "/section-1/item-1" },
          { "label": "Item 2", "path": "/section-1/item-2" }
          { "label": "YOUR NEW ITEM", "path": "/section-1/your-new-item" }
        ]
      },
     ]
```
   - Save the file. The menu will update automatically when the site reloads.

### Page routing

#### Kebab-case page
If you create a file called `about-us.md` in the `src` directory:

```
src/about-us.md
```
The generated route will be:
```
/about-us/
```
This means the page will be available at `https://YOUR_DOMAIN/about-us/`.

#### Nested page
If you create a nested page like `section-1/index.md`:

```
src/section-1/index.md
src/section-1/some-menu-item.md
```
The generated routes will be:
```
/section-1/
/section-1/some-menu-item
```
This means the pages will be available at `https://YOUR_DOMAIN/section-1/` & `https://YOUR_DOMAIN/section-1/some-menu-item` respectively.


**Explanation:**
- Eleventy automatically converts file and folder names to kebab-case routes.
- `index.md` or `index.njk` in a folder becomes the route for that folder.
- Other files in the folder become sub-routes.

You can link to these pages in your menu by using the generated route (e.g., `/about-us/`, `/section-1/`).

## Adding a new section to the menu

To organize your navigation, you can add a new section to `src/_data/menu.json`.

The menu is structured as an array of sections, each with a `label` and `items`, add a new object like this:

```json
[
  ...existing sections...,
  {
    "label": "Resources",
    "items": [
      { "label": "API Reference", "path": "/api" },
      { "label": "Guides", "path": "/guides" }
    ]
  }
]
```

After editing and saving `menu.json`, the navigation will update automatically when the site reloads.

> Presentation of the menu is implemented in `/src/_includes/sidebar.njk` and `/src/_includes/mobile-menu.njk`

## Editing page content
Page content management follows standard markdown conventions.

### Adding pre-formatted content to your page
For easy to read pre-formatted code snippets you can use the installed Eleventy syntaxhighlight plugin as follows:

```js
<!-- prettier-ignore-start -->
{% highlight "js" %}
function myFunction() {
  return true;
}
{% endhighlight %}
<!-- prettier-ignore-end -->
```

### Adding an image popout

To add an image to the page in a standardised way with a popout into a separate window, you can use the syntax below:

```
{% from "image-pop-out.njk" import imagePopOut %}

{{ imagePopOut('/assets/images/diagram1.png' | url, 'First diagram') }}
{{ imagePopOut('/assets/images/diagram2.png' | url, 'Second diagram') }}
```

### Adding sequence diagrams

Mermaid sequence diagrams are supported out-the-box. You just need to wrap them in appropriate pre tags as per below


\```mermaid

// Your diagram content here

\```


Diagrams are pan-able (js for this in `/src/assets/scripts`).

**Re-building diagrams:** Diagrams are generated at build time. Therefore, any changes to the diagram code will require a build (`npm run build`) before it will render. An update to the diagram code will result in it reverting to plain text until that build has been executed.


---

For more details, see the [Eleventy documentation](https://www.11ty.dev/docs/).
