describe("API Delete User", () => {
  //   const bodyDel = {
  //     method: "DELETE",
  //     url: "/user/Cypress.env('username')",
  //   };
  const bodyUrl = "/user/";
  const envBody = "string";
  it("User Remove - DELETE", () => {
    cy.request("DELETE", bodyUrl + envBody).as("deleteUser");
    cy.get("@deleteUser").then((deleteUser) => {
      expect(deleteUser.status).to.equal(200);
    });
  });
});
