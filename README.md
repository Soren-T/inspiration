# Airtable CMS Gatsby BLlog

Live site is available at: https://friendly-blackwell-c2f315.netlify.app/

## About

My brother is a content writer for a large ad agency and has forever wanted to start a blog to write about a passion of his: DnD. I created this blog with Gatsby and Airtable as the CMS to help him achieve this goal. This gatsby site pulls data from two tables in Airtable, 'CMS' and 'Tags'. The CMS table holds all data for the articles themselves and the Tags table holds additional info for tagging and categorising the articles.

### CMS Table

| title | slug                        | author | image     | tags                   | postMarkdown                     | date      | status             |
|-------|-----------------------------|--------|-----------|------------------------|----------------------------------|-----------|--------------------|
|       | unique slug for website url |        | image url | pulled from Tags table | blog content written in markdown | timestamp | published or draft |


### Tags Table

| tag | description |
|-----|-------------|
|     |             |

### Running Locally

To run locally you need Gatsby and Gatsby CLI installed locally. You can get started on that here: https://www.gatsbyjs.com/docs/quick-start/

Once you have to repo cloned and Gatsby installed run the below commands to get started

Note: you will not be able to fetch data with the .env file containing the Airtable API keys.

#### `gatsby develop`

Run in the project locally.

#### `gatsby build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.
