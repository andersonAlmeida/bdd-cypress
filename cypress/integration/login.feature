Feature: Efetuar login no portal do aluno

  Scenario: Login inválido
    Given o usuário insere os dados de login errados
    When apertar o botão para entrar no portal
    Then devo visualizar o aviso de Usuário inválido ou senha incorreta.

  Scenario: Recuperar senha
    Given o usuário acessa a página de login
    When apertar o link Esqueceu a senha?
    Then devo visualizar o formulário de recuperação de senha

  Scenario: Login válido
    Given o usuário acessa a página de login
    When o usuário insere os dados de login válidos e aperta o botão para entrar no portal
    Then o usuário é redirecionado para a página principal