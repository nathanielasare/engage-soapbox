import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    @service infinity;
    model(){
        return this.infinity.model('trending',{ 
            perPage: 24, 
            startingPage: 1,
            perPageParam: 'limit'
        })
    }
}
