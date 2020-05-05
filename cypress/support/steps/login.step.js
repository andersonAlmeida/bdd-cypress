/* global Given, Then, When, And */

import LoginPage from "../pageobjects/login.page";
const loginPage = new LoginPage();

/**
 * Cenário Login inválido
 */
Given("o usuário acessa a página de login", () => {
  loginPage.acessarPaginaLogin();
});

When("o usuário insere os dados de login errados", () => {
  loginPage.insereDadosLogin("630701690", "3254135435");
});

And("aperta o botão para entrar no portal", () => {
  loginPage.clicaLogar();
});

Then("deve visualizar o aviso de Usuário inválido ou senha incorreta.", () => {
  loginPage.visualizarMsgErro();
});

/**
 * Cenário Recuperar senha
 */
Given("o usuário acessa a página de login", () => {
  loginPage.acessarPaginaLogin();
});

When("apertar o link Esqueceu a senha?", () => {
  loginPage.clicaRecuperarSenha();
});

Then("deve visualizar o formulário de recuperação de senha", () => {
  loginPage.visualizarFormRecuperarSenha();
});

/**
 * Cenário Login válido
 */
Given("o usuário insere os dados de válidos", () => {
  loginPage.acessarPaginaLogin();
});

When(
  "o usuário insere os dados de login válidos",
  () => {
    loginPage.insereDadosLogin(Cypress.env("login"), Cypress.env("password"));
  }
);

And("aperta o botão para entrar no portal", () => {
  loginPage.clicaLogar();
})

Then("o usuário é redirecionado para a página principal", () => {
  loginPage.verificaPaginaLogado();
});
