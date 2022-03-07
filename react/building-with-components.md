# Building with Components

## Building with Components

### TABLE OF CONTENTS

* [Why React components?](https://www.gatsbyjs.com/docs/conceptual/building-with-components/#why-react-components)
* [How does Gatsby use React Components?](https://www.gatsbyjs.com/docs/conceptual/building-with-components/#how-does-gatsby-use-react-components)
  * [Page components](https://www.gatsbyjs.com/docs/conceptual/building-with-components/#page-components)
  * [Page template components](https://www.gatsbyjs.com/docs/conceptual/building-with-components/#page-template-components)
  * [HTML component](https://www.gatsbyjs.com/docs/conceptual/building-with-components/#html-component)
  * [Non-page components](https://www.gatsbyjs.com/docs/conceptual/building-with-components/#non-page-components)

To use Gatsby, you will need a basic understanding of React components.

The [official tutorial](https://reactjs.org/tutorial/tutorial.html) is a good place to start.

### Why React components? <a href="#why-react-components" id="why-react-components"></a>

React’s component architecture simplifies building large websites by encouraging modularity, reusability, and clear abstractions. React has a large ecosystem of open source components, tutorials, and tooling that can be used seamlessly for building sites with Gatsby. Gatsby is built to behave almost exactly like a normal React application.

The following model shows how data from a source can be queried by GraphQL for use inside components in the process of building a Gatsby site:ContentBuildDataViewAppsrc/pages/homepage.js

```
export ({ data }) => (
  <div>
    <h1>{data.site.title}</h1>
    {data.site.description}
  </div>
)
```

React powers components in Gatsby sites that are [rehydrated](https://www.gatsbyjs.com/docs/glossary#hydration), whatever you can do in React you can do with Gatsby.

Your components can pull in whatever data they need from any source in the data layer.

[Thinking in React](https://reactjs.org/docs/thinking-in-react.html) is a good resource for learning how to structure applications with React.

### How does Gatsby use React Components? <a href="#how-does-gatsby-use-react-components" id="how-does-gatsby-use-react-components"></a>

Everything in Gatsby is built using components.

A basic directory structure of a project might look like this:

```
Copycopy code to clipboard.├── gatsby-config.js├── package.json└── src    ├── html.js    ├── pages    │   ├── index.js    │   └── posts    │       ├── 01-01-2017    │       │   └── index.md    │       ├── 01-02-2017    │       │   └── index.md    │       └── 01-03-2017    │           └── index.md    ├── templates        └── post.js
```

#### Page components <a href="#page-components" id="page-components"></a>

Components under `src/pages` become pages automatically with paths based on their file name. For example `src/pages/index.js` is mapped to `yoursite.com` and `src/pages/about.js` becomes `yoursite.com/about/`. Every `.js` or `.jsx` file in the pages directory must resolve to either a string or react component, otherwise your build will fail.

Example:src/pages/about.js

```
Copysrc/pages/about.js: copy code to clipboardimport React from "react"function AboutPage(props) {  return (    <div className="about-container">      <p>About me.</p>    </div>  )}export default AboutPage
```

#### Page template components <a href="#page-template-components" id="page-template-components"></a>

You can programmatically create pages using “page template components”. All pages are React components but very often these components are just wrappers around data from files or other sources.

`src/templates/post.js` is an example of a page component. It queries GraphQL for markdown data and then renders the page using this data.

See [part seven](https://www.gatsbyjs.com/docs/tutorial/part-seven/) of the tutorial for a detailed introduction to programmatically creating pages.

Example:src/templates/post.js

```
Copysrc/templates/post.js: copy code to clipboardimport React from "react"import { graphql } from "gatsby"function BlogPostTemplate(props) {  const post = props.data.markdownRemark  return (    <div>      <h1>{post.frontmatter.title}</h1>      <div dangerouslySetInnerHTML={{ __html: post.html }} />    </div>  )}export default BlogPostTemplateexport const pageQuery = graphql`  query($slug: String!) {    markdownRemark(fields: { slug: { eq: $slug } }) {      html      frontmatter {        title      }    }  }`
```

#### HTML component <a href="#html-component" id="html-component"></a>

`src/html.js` is responsible for everything other than where Gatsby lives in the `<body />`.

In this file, you can modify the `<head>` metadata and general structure of the document and add external links.

Typically you should omit this from your site as the default `html.js` file will suffice. If you need more control over server rendering, then it’s valuable to have an `html.js`.

Example:src/html.js

```
Copysrc/html.js: copy code to clipboardimport React from "react"import favicon from "./favicon.png"let inlinedStyles = ""if (process.env.NODE_ENV === "production") {  try {    inlinedStyles = require("!raw-loader!../public/styles.css")  } catch (e) {    console.log(e)  }}function HTML(props) {  let css  if (process.env.NODE_ENV === "production") {    css = (      <style        id="gatsby-inlined-css"        dangerouslySetInnerHTML={{ __html: inlinedStyles }}      />    )  }  return (    <html lang="en">      <head>        <meta charSet="utf-8" />        <meta name="viewport" content="width=device-width, initial-scale=1.0" />        {props.headComponents}        <link rel="icon" href={favicon} />        {css}      </head>      <body>        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />        {props.postBodyComponents}      </body>    </html>  )}
```

These are examples of the different ways React components are used in Gatsby sites. To see full working examples, check out the [examples directory](https://github.com/gatsbyjs/gatsby/tree/master/examples) in the Gatsby repo.

#### Non-page components <a href="#non-page-components" id="non-page-components"></a>

A Non-page component is one that’s embedded inside some other component, forming a component hierarchy. An example would be a Header component that’s included in multiple page components. Gatsby uses GraphQL to enable components to declare the data they need. Using the [StaticQuery](https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/) component or [useStaticQuery hook](https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/), you can colocate a non-page component with its data.\\
