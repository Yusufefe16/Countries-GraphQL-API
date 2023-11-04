import {countries,languages,continents} from "./data.js";

export const resolvers = {
    Query: {
        countries: () => countries,
        country: (parent, args) => countries.find(country => country.code === args.code),

        languages: () => languages,
        language: (parent, args) => languages.find(language => language.code === args.code),

        continents: () => continents,
        continent: (parent, args) => continents.find(continent => continent.code === args.code),
    },
    Country:{
        language(parent){
            return languages.find((l)=>l.code === parent.code)
        },
        continent(parent){
            return continents.find((c)=>c.code === parent.continent_code)
        },
    }
};
