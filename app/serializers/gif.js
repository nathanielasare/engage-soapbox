import JSONAPISerializer from '@ember-data/serializer/json-api';
import JSONSerializer from '@ember-data/serializer/json-api';
import RESTSerializer from '@ember-data/serializer/rest';

export default class GifSerializer extends JSONAPISerializer {
  normalizeResponse (store, primaryModelClass, payload, id, requestType){
      return {
        data: payload.data.map((gif)=> {
          return {
            id: gif.id,
            type: 'trending',
            attributes: gif
          }
        })
      };
	  }
}
