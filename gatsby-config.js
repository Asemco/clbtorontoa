module.exports = {
  siteMetadata: {
    title: `CLB Toronto - My Smart Future`,
    description: `Find out if your child is eligible to receive the Canada Learning Bond, a grant of $500 to $2,000 from the Government of Canada that is deposited directly into the Registered Education Savings Plan (RESP) of an eligible child to help with the costs of education after high school.`,
    author: `SmartSAVER.org <info@smartsaver.org>`,
  },
  pathPrefix: `/clbtoronto`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        icon: `${__dirname}/src/images/msf-logo.jpg`,
        start_url: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-DMEF4GG56V`,
        ],
      },
    },
  ],
};
