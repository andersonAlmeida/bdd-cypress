/* global Given, Then, When */

import LoginPage from '../pageobjects/login.page'
const loginPage = new LoginPage

/**
 * Cenário Login inválido
 */
Given("o usuário insere os dados de login errados", () => {
    loginPage.acessarPaginaLogin();
})

When("apertar o botão para entrar no portal", () => {
    loginPage.efetuaLogin('630701690', '3254135435');
})

Then("devo visualizar o aviso de Usuário inválido ou senha incorreta.", () => {
    loginPage.visualizarMsgErro();
})

/**
 * Cenário Recuperar senha
 */
Given("o usuário acessa a página de login", () => {
    loginPage.acessarPaginaLogin();
})

When("apertar o link Esqueceu a senha?", () => {
    loginPage.clicaRecuperarSenha();
})

Then("devo visualizar o formulário de recuperação de senha", () => {
    loginPage.visualizarFormRecuperarSenha();
})

/**
 * Cenário Login válido
 */
Given("o usuário insere os dados de válidos", () => {
  loginPage.acessarPaginaLogin();
})

When("o usuário insere os dados de login válidos e aperta o botão para entrar no portal", () => {
  loginPage.efetuaLogin(Cypress.env('login'), Cypress.env('password'));
})

Then("o usuário é redirecionado para a página principal", () => {
  loginPage.verificaPaginaLogado();
})