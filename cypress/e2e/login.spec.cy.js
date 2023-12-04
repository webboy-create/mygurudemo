import { Login } from "../page-object/Login";

describe('login module', () => {

  const login = new Login();                  // Create an instance of the Login class

  beforeEach(() => {                          // This will run before each test
    cy.visit('https://demo.guru99.com/V1/index.php')
  })


  it('valid user login access', () => {     // Both valid username and valid password
    login.loginform('mngr541871', 'unUhumy');
    cy.get('.orange > a').should('be.visible');

  });


  it('invalid user login access', () => {      // Either invalid password or invalid username
    login.loginform('mngr65781', 'abGnuiy');
    //NO ASSERTION HERE FOR NOW
  });

}

)