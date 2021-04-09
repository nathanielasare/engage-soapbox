import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
    normalizeResponse (store, primaryModelClass, payload, id, requestType){
      // debugger;
      return {
        data: payload.data.map((gif)=> {
          return {
            id: gif.id,
            type: 'trending',
            attributes: gif
          }
        }),
        meta: {
          total_pages: payload.pagination.total_count/payload.pagination.count
        }
      };
	  }
}
