export default function () {
    this.transition(
        this.hasClass('gif-trans'), 
        this.use('toRight', 600),
        this.reverse('toLeft', 600)
    );
}