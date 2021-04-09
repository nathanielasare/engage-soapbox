import * as ENV from '../../config/environment';

describe('Test access to API',()=>{
    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })
    
    it('Make request to API for first defult', () => {
        cy.request('https://api.giphy.com/v1/gifs/trending?api_key=N6S4XDQgCgftRJHKLRmtOm52jHcnt4Q8')
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.pagination.count).be.oneOf([25,50])
        })
    })
})