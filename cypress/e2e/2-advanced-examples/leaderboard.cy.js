describe('Ingresar a la sección de leaderboard', function() {
    beforeEach(function(){
        cy.visit('https://www.velocidrone.com/leaderboards');
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
          
    })

    it('ingresar a la sección Apartament', function() {
      let textos =[]
      cy.get('.scenery-card__title').each(($elemento) => {
        // Obtener el texto crudo del elemento y mostrarlo por consola
        const textoCrudo = $elemento.text().trim()
        textos.push(textoCrudo)


      }).then(()=>{
        cy.log(textos)
      })
      
    }) 
    
})