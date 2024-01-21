describe("PetStore API User Testing", () => {
  const payLoad = {
    id: 0,
    username: Cypress.env("username"),
    firstName: "string",
    lastName: "string",
    email: "string",
    password: Cypress.env("password"),
    phone: "string",
    userStatus: 0,
  };
  it("User Create - POST", () => {
    cy.request("POST", "/user", payLoad).as("userCreate");
    cy.get("@userCreate").then((userCreate) => {
      expect(userCreate.status).to.equal(200);
    });
  });

  const bodyLogin = {
    method: "GET",
    url: "/user/login",
    qs: {
      username: Cypress.env("username"),
      password: Cypress.env("password"),
    },
  };
  it("User Login - GET", () => {
    cy.request(bodyLogin).as("userLogin");
    cy.get("@userLogin").then((userLogin) => {
      cy.expect(userLogin.status).to.equal(200);
    });
  });
});
