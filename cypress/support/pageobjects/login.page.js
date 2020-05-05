/// <reference types="Cypress" />

import LoginElements from "../elements/login.elements";
const {
  botaoLogin,
  inputUsuario,
  inputSenha,
  msgErro,
  linkRecuperarSenha,
  formRecuperarSenha,
  inputAlunoId,
} = new LoginElements();
const url = Cypress.config("baseUrl");

class LoginPage {
  // Acessa o link que será testado
  acessarPaginaLogin() {
    cy.visit(url);
  }

  // preenche os campos de login
  insereDadosLogin(user, password) {
    cy.get(inputUsuario()).then(($input) => {
      cy.get($input).type(user);
    });
    cy.get(inputSenha()).then(($input) => {
      cy.get($input).type(password);
    });
  }

  // submete o formulário de login
  clicaLogar() {
    cy.get(botaoLogin()).click();
  }

  // Verifica se abriu exibiu mensagem de login inválido"
  visualizarMsgErro() {
    cy.get(msgErro()).should("contain", "Usuário inválido ou senha incorreta.");
  }

  clicaRecuperarSenha() {
    cy.get(linkRecuperarSenha()).click();
  }

  visualizarFormRecuperarSenha() {
    cy.get(formRecuperarSenha()).should("be.visible");
  }

  verificaPaginaLogado() {
    cy.get(inputAlunoId()).should("have.value", Cypress.env("id"));
  }
}

export default LoginPage;
