
describe(' Test01 Verify the Title - Possitue Test', () => {
    it('Does not do much!', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.title().should('eq','OrangeHRM')
      const credentials = [
        {userType: 'UserType1', login: 'UserType1Login', password: 'UserType1Password'},
        {userType: 'UserType2', login: 'UserType2Login', password: 'UserType2Password'}
        //6 user types and credentials for NonExistingUser and blocked
        ];
        
        describe('Checks login', () => {
        
        beforeEach('Go to Login Modal', () => {
            cy.visit('/');
            cy.get('[data-cy=loginModalOpen]').click();
          });
        
        // dynamically create a single test for each credential obj in the list
          credentials.forEach(credential => {
        
          it(`Checks Authorization by ${credential.userType} user`, () => {
              cy.get('[data-cy=login]').type(credential.login);
              cy.get('[data-cy=password]').type(credential.password);
              cy.get('[data-cy=loginSubmit]').click();
        
              if (credential.userType.includes('blocked')) {
                cy.get('[data-cy=passwordError]').should('contain', 'User blocked');
                cy.url().should('not.include', '/orders/published');
        
              } else if (credential.userType.startsWith('UserType2')) {
                cy.url().should('include', '/stores');
        
              } else if (credential.userType.includes('nonExisting')) {
                cy.get('[data-cy=passwordError]').should('contain', 'No user with such login');
                cy.url().should('not.include', '/orders/published');
        
              } else if (credential.userType.includes('UserType1')) {
                cy.url().should('include', 'orders_all/published');
        
              } else {
        //all other cases. 
                cy.url().should('include', '/orders/published');
              }
        // i have some more "it" cases for error messages, but i THINK they are ok. 
         }): 
        });
        });
        
    })
  }) 



  
  

