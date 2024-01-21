describe("PetStore API User Testing", () => {
  const payLoad = {
    id: 0,
    username: "string",
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
    phone: "string",
    userStatus: 0,
  };
  it("User Create - POST", () => {
    cy.request("POST", "/user", payLoad).as("userCreate");
    cy.get("@userCreate").then((userCreate) => {
      expect(userCreate.status).to.equal(200);
    });
  });
});
