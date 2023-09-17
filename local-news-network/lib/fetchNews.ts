import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    countries?: string,
    isDynamic?: boolean
) => {
    // Graph QL query
    const query = gql`
        query MyQuery(
            $access_key: String!
            $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                countries: "us"
                sort: "published_desc"
                keywords: $keywords
                ) {
                data {
                    author
                    category
                    image
                    description
                    country
                    language
                    published_at
                    source
                    title
                    url
                }
                pagination {
                    count
                    limit
                    offset
                    total
                }
            }
        }
    `;

    // Fetch function with caching 
    const res = await fetch('https://woudrichem.stepzen.net/api/lumpy-meerkat/__graphql', {
        method: 'POST',
        cache: isDynamic? "no-cache" : "default",
        next: isDynamic? { revalidate: 0 } : { revalidate: 30 },
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Apikey woudrichem::stepzen.net+1000::051a8463f3433174a98f39fd4be77616720dac8e3792d8a6af48fc6fd6560acb`
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: "a6834b6be413606cb992b2cf2af934f5",
                categories: category,
                keywords: keywords,
                countries: countries
            }
        })
    });
    
    console.log(
        "LOADING NEW DATA FROM API for category >>>> ",
        category,
        keywords,
        countries
    )

    const newsResponse = await res.json();
    // Sort Function by images present 
    
    const news = sortNewsByImage(newsResponse.data.myQuery)

    // return result 
    return news
}

export default fetchNews;
