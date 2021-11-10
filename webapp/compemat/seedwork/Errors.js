export const TIMEOUT_ERROR_HTML = () => `
    Seu código executou por tempo demais. <br/><br/> 
    O seu código deve conter algum tipo de laço de repetição (while ou for) sem uma condição de parada adequada (loop infinito).
    É possível também que seu código esteja executando uma tarefa muito complexa (mais do que o necessário) com valores muito grades e que isto esteja
    dando origem a um problema de desempenho. É provável que seu código esteja incorreto e que esteja fazendo muito mais que o necessário para resolver
    o problema.
`;

export const TYPE_ERROR_HTML = (line, error) => `
    Seu código está tentando executar uma operação sobre um tipo inválido na linha ${line}. <br/><br/> 
    É possível que você esteja usando uma string em uma operação numérica ou vice-versa.
    Também é possível que você esteja tentando acessar um elemento de uma variável que não é uma lista, 
    ou uma referência a um objeto como se fosse uma função.
    Verifique se os valores guardados em cada variável da linha indicada estão de acordo com o esperado. <br/>
    <br/><br/>
    Mensagem de Erro: ${error.message}
`;

export const SYNTAX_ERROR_HTML = (line, error) => `
    Seu código tem um erro de sintaxe na linha ${line}. <br/><br/> 
    Isso quer dizer que seu código nem consegue ser executado pois está escrito de forma incorreta,
    violando algumas regras de linguagem JavaScript. <br/><br/>
    Algumas coisas que você pode verificar:<br/>
    <ul>
    <li> Se tiver um comando de atribuição, veja se a expressão à direita do operador está correta e se você não está 
    usando algum operador inexistente ou de forma inválida.</li>
    <li>Verifique se não existem parênteses faltando ou sobrando.</li>
    <li>Verifique se não existem chaves sobrando ou faltando.</li>
    <li>Verifique se os delimitadores de cadeira de caracteres \" ou \' estão corretos.</li>
    <li>Tente dividir a linha, separando a lógica do que você está fazendo nesta linha em mais de uma, de maneira a isolar o erro.</li>
    <li>Compare seu código com um código similar, que você saiba que está funcionando, para tentar identificar as diferenças significativas 
    onde podem estar os erros. </li></ul><br/>
    <br/><br/>
    Mensagem de Erro: ${error.message}
`;

export const REFERENCE_ERROR_HTML = (line, error) => `
    Um erro de referência ocorreu no seu código na linha ${line}. <br/><br/> 
    Você deve estar utilizando uma variável ou função antes de tê-la declarado.
    Verifique todas as variáveis e funções que estão sendo usadas na linha e veja se as declarou corretamente em uma linha anterior.<br/>
    <br/><br/>
    Mensagem de Erro: ${error.message}
`;

export const RANGE_ERROR_HTML = (line, error) => `
    Um erro incomum ocorreu no seu código na linha ${line}. <br/><br/> 
    Verifique se você não está fazendo uma desses coisas:
    <ul> <li> Chamando alguma função de conversão numérica do javascript com valores inválidos. Como por exemplo, toExponential(), toPrecision() ou toFixed(). </li>
    <li> Tentando criar uma lista (ou array) muito grande. </li>
    <li> Tentando chamar o método normalize em uma string (cadeia de caracteres). </li> <ul>
    <br/><br/>
    Mensagem de Erro: ${error.message}
`;

export const ERROR_HTML = (line, error) => `
    Um erro incomum ocorreu no seu código na linha ${line}. <br/><br/> 

    Esse erro é tão estranho que temos até dificuldade em te ajudar a resolver. 
    Será que você está copiando e colando código de algum lugar? Está testando alguma característica diferente da linguagem JavaScript?
    Está em algum navegador web pouco convencional? Talvez seja uma boa ideia começar a resolver a questão do zero com um código
    mais simples.<br/>
    <br/><br/>
    Mensagem de Erro: ${error.message}
`;

export const ERROR_INPUT = (line, error) => `
    Existe um erro no sua descrição de entrada. <br/><br/> 

    Esse erro indica que a sua descrição de entrada contém algum erro. Verifique se 
    a entrada informada é um JSON válido. Procure por chaves ou colchetes faltando, ou mesmo por vírgulas fora do lugar.
    <br/><br/>
    Mensagem de Erro: ${error.message}
`;

export class TimeOutError extends Error {
  constructor(message) {
    super(message);
  }
}
