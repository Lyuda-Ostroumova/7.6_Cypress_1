it("Should open the main page", () => {
    cy.contains("Books list");
})
it.skip("Should succesfully log in", () =>{
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
});

it.skip("Should not login with empty login", () => {
    cy.visit("/booksNode");
    cy.login(" ", "123");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get("#mail")
      .then(($el) => $el[0].validationMessage)
      .should("contain", "Заполните это поле.");
  });
  
  it.skip("Should not login with empty password", () => {
    cy.visit("/booksNode");
    cy.contains("Log in").click();
    cy.get('#mail').type("bropet@mail.ru");
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get("#pass")
      .then(($el) => $el[0].validationMessage)
      .should("contain", "Заполните это поле.");
  });

  it.skip("Should add a new book", () => {
      cy.login("bropet@mail.ru", "123");
      cy.contains('Books list').click();
      cy.contains('Add new').click();
      cy.contains('Book description').should("be.visible");
      cy.newBook("Гроздья гнева", "это гимн человеческой справедливости и правдоискательству во имя уважения к человеку.", "Джон Стейнбек");
      cy.contains("Гроздья гнева").should("be.visible");
  });

  it.skip("Should add a book to favourite", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains('Books list').click();
    cy.contains("Гроздья гнева").contains("Add to favorite").click();
    cy.contains('Favorites').click();
    cy.contains("Гроздья гнева").should("be.visible");
  });

  it.skip("Should remove a book from favourite", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains('Books list').click();
    cy.contains('Favorites').click();
    cy.contains("Гроздья гнева").contains("Delete from favorite").click();
    cy.contains("Гроздья гнева").should("not.exist");
  })

