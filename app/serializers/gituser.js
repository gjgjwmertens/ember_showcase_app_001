import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend(
   {
      normalizeFindRecordResponse(store, type, payload) {
         return {
            data: {
               id: payload.login,
               type: type.modelName,
               attributes: {
                  name: payload.name,
                  publicRepos: payload.public_repos
               }
            },
            relationships: {
               repos: {
                  links: {
                     related: payload.repos_url
                  }
               }
            }
         };
      }
   });
