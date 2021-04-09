import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class GifWidgetComponent extends Component {
  @tracked
  activeGif

  constructor(owner, args) {
    super(owner, args)
    console.log(
      'this.args.model',
      this.args.model,
    )
    this.activeGif = this.args.model.firstObject.id
  }

  @action
  setActiveGif(id) {
    this.activeGif = id
  }
}
