const { describe } = require("mocha");

const credentials = {
    UserType1: {
      login: 'OrangeAdmin',
      password: 'admin@123',
    },
    UserType2: {
      login: 'UserType2Login',
      password: 'UserType2Password'
    }
  };
  
  const logInTheUser = (credential) => {
    cy.get('[data-cy=login]').type(credential.login);
    cy.get('[data-cy=password]').type(credential.password);
    cy.get('[data-cy=loginSubmit]').click();
  }
  
  describe('Checks login', () => {
  
    beforeEach('Log in the user', () => {
      cy.visit('/');
      cy.get('[data-cy=loginModalOpen]').click();
    });
  
    it('prints error and does not redirect if user is blocked', () => {
      logInUser(credentials.blocked);
      cy.get('[data-cy=passwordError]').should('contain', 'User blocked');
      cy.url().should('not.include', '/orders/published');
    });
  
    it('redirects user of type 2 to stores page', () => {
      logInUser(credentials.UserType2);
      cy.url().should('include', '/stores');
    });
  
    it('prints error and does not redirect if user does not exist', () => {
      loginUser(credentials.nonExisting);
      cy.get('[data-cy=passwordError]').should('contain', 'No user with such login');
      cy.url().should('not.include', '/orders/published');
    });
  
    it('redirects user of type 1 to published orders page', () => {
      loginUser(credentials.UserType1);
      cy.url().should('include', 'orders_all/published');
    });
  
    // ...other tests
  });

  describe('Checks login', () => {
    
  }
  
  
  )
