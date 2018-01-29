import Layout from './components/Layout';

export default (props) => (
    <Layout>
       <h1>{props.url.query.title}</h1>
       <p>This is the blog post content.</p>
    </Layout>
);

//https://github.com/zeit/next.js#fetching-data-and-component-lifecycle

// import fetch from 'isomorphic-unfetch'
// Next.js decides whether to do SSR (if landing page) or CSR

// const Post = (props) => (
//     <Layout>
//        <h1>{props.show.name}</h1>
//        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//        <img src={props.show.image.medium}/>
//     </Layout>
// )

// LIKE A CONTAINER + ComponentWillMount (only for pages... makes sense)

// Post.getInitialProps = async function (req) {
//   const { id } = req.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
     // OR, `api/shows/${id}` to fetch from your own db
//   const show = await res.json()
//
//   return { show }
// }

// export default Post

/*
getInitialProps receives a context object with the following properties:
    pathname - path section of URL
    query - query string section of URL parsed as an object
    asPath - String of the actual path (including the query) shows in the browser
    req - HTTP request object (server only)
    res - HTTP response object (server only)
    jsonPageRes - Fetch Response object (client only)
    err - Error object if any error is encountered during the rendering
*/
