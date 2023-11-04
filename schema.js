export const typeDefs = `#graphql

type Country {
        id: ID!
        name: String!
        code: String!
        continent_code: String
        language: Language
        continent: Continent
    }

    type Language {
        id: ID!
        name: String!
        code: String!
        continent_code: String
    }

    type Continent {
        id: ID!
        name: String!
        code: String!
    }

    type Query {
        countries: [Country!]
        country(code: String!): Country!

        languages: [Language!]
        language(code: String!): Language!

        continents: [Continent!]
        continent(code: String!): Continent!
    }
`;