import ApplicationAdapter from './application';
import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from '../config/environment';

export default class GifAdapter extends JSONAPIAdapter {
    host = 'https://api.giphy.com';
    namespace = 'v1';
    pathForType(type) {
        return `${type}?api_key=${ENV.APP.API_KEY}`;
    }
}
