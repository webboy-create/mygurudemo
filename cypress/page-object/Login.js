export class Login {
    loginform(message23, message18) {
        cy.get(':nth-child(1) > :nth-child(2) > input').type(message23);
        cy.get(':nth-child(2) > :nth-child(2) > input').type(message18);
        cy.get('[type="submit"]').click();
    }
}