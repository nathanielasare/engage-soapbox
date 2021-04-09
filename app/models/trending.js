import Model, { attr } from '@ember-data/model';

export default class TrendingModel extends Model {
    @attr title;
    @attr url;
    @attr images;
}
