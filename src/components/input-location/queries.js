import { gql } from "apollo-boost";

export const GET_USERS_OF_LOCATION = gql`
    query searchMostTop10Users($query: String!)
    {
        search(query: $query, type: USER, first: 10) {
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
#                        repositories {
#                            totalCount
#                        }
                        repositories(
                            privacy: PUBLIC
                            first: 100
                            isFork: false
                            ownerAffiliations: [COLLABORATOR, OWNER]
                            orderBy: {field: PUSHED_AT, direction: DESC}
                        )
                        {
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