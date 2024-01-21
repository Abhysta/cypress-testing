describe("PetStore API Inventory Testing", () => {
  it("Inventory Test - GET", () => {
    cy.request("/store/inventory").as("getInventory");
    cy.get("@getInventory").then((getInventory) => {
      expect(getInventory.status).to.equal(200);
    });
  });
});
