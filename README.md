Grupo ElekSell

João Pedro Oliveira Chambrone (RM97857) - 1ESPH
Felipe de Campos Mello Arnus (RM550923) - 1ESPH
João Pedro de Souza Vieira (RM99805) - 1ESPH
Vitor Hugo Gonçalves Rodrigues (RM97758) - 1ESPH

Observações do Projeto:

- Excluimos a pasta Node Modules como pedido, para diminuir o peso do projeto, sendo necessário digitar "npm i" e depois "npm run dev" para rodar o projeto;

- O projeto foi feito para ter resposividade a todas as telas de smartphones sejam eles da Apple, Samsung e etc;

- Incluímos sessionStorage, localStorage e hooks na seção login do projeto. Ao digitar "usuario" no input de username e "senha" no input de password, a página exibe um alert de login feito com sucesso, e o valor usuario fica guardado na key "username" em sessionStorage, em Application. Fizemos uma estrutura que muda a cor de fundo da tela de login, onde o usuario digita a cor em inglês, clica para salvar, e a cor fica salva como valor da chave "backgroundColor" em localStorage, também no menu Application. Para ambas as estruturas, utilizamos hooks, como useState e useEffect;