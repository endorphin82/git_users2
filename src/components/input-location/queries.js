import { gql } from "apollo-boost";

export const GET_USERS_OF_LOCATION = gql`
#    query searchMostTop10Users($queryString: String!)
    {
        search(query: "location:Kharkov", type: USER, first: 10) {
            edges {
                node {
                    ... on User {
                        name
                        id
                        email
                        bio
                        avatarUrl
                        login
                        location
                        starredRepositories {
                            totalCount
                        }
                        repositories {
                            totalCount
                        }
                        repositories {
                            edges {
                                node {
                                    ... on Repository {
                                        name
                                        stargazers {
                                            totalCount
                                        }
                                    }
                                    stargazers {
                                        totalCount
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;