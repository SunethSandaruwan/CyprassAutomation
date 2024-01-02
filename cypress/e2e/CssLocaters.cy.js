describe('CssLocaters', () => {       // describe is the "discribe the Test Suite Name or discribe the Test Suite "  
   
    it ("CssLocaters" , () => {       // Write the Testcase Script in here

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // In this line we are usring the css selecters id and we can use the "#Name(Usernam)" in this's #Name is the Tag name.
        cy.get("[name='username']").type("Admin") 
        // In this line we are using the same method in above line.
        cy.get("[name='password']").type("admin123") 
        // here we are usring the attributes
        cy.get("[type='submit']").click(); 
        //This is bacicaly assertions in the page   
        cy.get("[text='Dashboard']").contains("Dashboard")
        //Click on Admin Main manu
        cy.get("[text='Admin']").click();        

    })
})