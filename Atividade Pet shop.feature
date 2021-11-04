Funcionalidade: Cadastro dos usuários
  Com o objetivo de ter um cadastro dos usuários para o sistema
 
   Cenario: Cadastro.
    Dado o candidato esteja na tela de cadastro
    E preencha a tela com todas as informações necessárias
    Quando o usuário clica no botão para cadastrar
    Entao o usuário é cadastrado no sistema
    E tem acesso a tela de vendas do petshop
   Cenario: Email não informado
    Dado o candidato não informa o email no cadastro de usuários
    E não tenha informações salvas na conta suficientes para o cadastro
    Quando o usuário clica no botão para cadastrar
    Entao o usuário recebe um aviso que precisa completar as informações faltantes do cadastro
    E é redirecionado para o campo faltante do cadastro
   Cenario: Senha não informada
    Dado o candidato não informa a senha no cadastro de usuários
    E não tenha informações salvas na conta suficientes para o cadastro
    Quando o usuário clica no botão para cadastrar
    Entao o usuário recebe um aviso que precisa completar as informações faltantes do cadastro
    E é redirecionado para o campo faltante do cadastro
    Cenario: Senha divergente
    Dado o candidato informa a senha no cadastro de usuários
    E a senha é conflitante com outra no banco de dados
    Quando o usuário clica no botão para cadastrar
    Entao o usuário recebe um aviso que precisa escolher outra senha para cadastro por ser conflitante
    E é redirecionado para o campo conflitante do cadastro
    Cenario: Nenhum campo preenchido
    Dado o candidato não preencha nenhum campo do cadastro
    Quando o usuário clica no botão para cadastrar
    Entao usuário recebe um aviso que precisa preencher as informações do cadastro para ter acesso a plataforma 
    E é redirecionado para a tela de cadastro


