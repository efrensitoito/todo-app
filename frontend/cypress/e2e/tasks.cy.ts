describe("Tasks flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");

    // Simula login guardando token
    window.localStorage.setItem("token", "test");
  });

  it("creates, toggles and deletes a task", () => {
    // Crear tarea
    cy.get('input[placeholder="Task title"]').type("E2E Task");
    cy.contains("Create").click();

    // Ver tarea
    cy.contains("button", "Create", { timeout: 10000 }).should("not.be.disabled");

    // Marcar como completada
    cy.contains("Done").click();
    cy.contains("Undo").should("exist");

    // Eliminar tarea
    cy.contains("❌").click();
    cy.on("window:confirm", () => true);

    cy.contains("E2E Task").should("not.exist");
  });
});
