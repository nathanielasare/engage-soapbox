describe('Makes sure GitWidget Component is insert and containts images from API',()=>{
    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

    it('Get widget and check for gifs', () => {
        cy.get('.widget > .thumbnail-stripe > img')
        .then(($thumbnails) => {
            expect($thumbnails).to.have.length(24)
        })
    })
})