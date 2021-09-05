export const TIMEOUT_ERROR_HTML = () => `
    Seu código executou por tempo demais. <br/> 
    O seu código deve conter algum tipo de laço de repetição (while ou for) sem uma condição de parada adequada (loop infinito). <br/>
    É possível também que seu código esteja executando uma tarefa muito complexa (mais do que o necessário) com valores muito grades e que isto esteja
    dando origem a um problema de desempenho. É provável que seu código esteja incorreto e que esteja fazendo muito mais que o necessário para resolver
    o problema.
`;

export const TYPE_ERROR_HTML = (line, error) => `
    Seu código está tentando executar uma operação sobre um tipo inválido na linha ${line}. <br/> 
    É possível que você esteja usando uma string em uma operação numérica ou vice-versa. <br/>
    Também é possível que você esteja tentando utilizar uma variável contendo dados ou uma referência a um objeto como se fosse uma função. <br/>
    Verifique se os valores guardados em cada variável da linha indicada estão de acordo com o esperado. <br/>
    <br/>
    Mensagem de Erro: ${error.message}
`;

export const SYNTAX_ERROR_HTML = (line, error) => `
    Seu código tem um erro de sintaxe na linha ${line}. <br/>
    Isso quer dizer que seu código nem consegue ser executado pois está escrito de forma incorreta,
    violando algumas regras de linguagem JavaScript. <br/>
    <br/>
    Algumas coisas que você pode verificar:<br/>
    - Se tiver um comando de atribuição, veja se a expressão à direita do operador está correta e se você não está 
    usando algum operador inexistente ou de forma inválida.<br/>
    - Verifique se não existem parênteses faltando ou sobrando.<br/>
    - Verifique se não existem chaves sobrando ou faltando.<br/>
    - Verifique se os delimitadores de cadeira de caracteres \" ou \' estão corretos.<br/>
    - Tente dividir a linha, separando a lógica do que você está fazendo nesta linha em mais de uma, de maneira a isolar o erro.<br/>
    - Compare seu código com um código similar, que você saiba que está funcionando, para tentar identificar as diferenças significativas 
    onde podem estar os erros.<br/>
    <br/>
    Mensagem de Erro: ${error.message}
`;

export const REFERENCE_ERROR_HTML = (line, error) => `
    Um erro de referência ocorreu no seu código na linha ${line}. <br/> 
    Você deve estar utilizando uma variável ou função antes de tê-la declarado. <br/>
    Verifique todas as variáveis e funções que estão sendo usadas na linha e veja se as declarou corretamente em uma linha anterior.
    <br/>
    Mensagem de Erro: ${error.message}
`;

export const RANGE_ERROR_HTML = (line, error) => `
    Um erro incomum ocorreu no seu código na linha ${line}. <br/> 
    Verifique se você não está fazendo uma desses coisas: <br/>
    - Chamando alguma função de conversão numérica do javascript com valores inválidos. Como por exemplo, toExponential(), toPrecision() ou toFixed(). </br>
    - Tentando criar uma lista (ou array) muito grande. </br>
    - Tentando chamar o método normalize em uma string (cadeia de caracteres). </br>
    <br/>
    Mensagem de Erro: ${error.message}
`;

export const ERROR_HTML = () => `
    Um erro muito incomum ocorreu no seu código. <br/> 
    Esse erro é tão estranho que temos até dificuldade em te ajudar a resolver. <br/> 
    Será que você está copiando e colando código de algum lugar? Está testando alguma característica diferente da linguagem JavaScript? <br/> 
    Está em algum navegador web pouco convencional? Talvez seja uma boa ideia começar a resolver a questão do zero com um código
    mais simples. <br/> 
    <br/> 
    Ou por acaso você é um hacker tentando quebrar a página? <br/> 
    Calma lá Mr. Robot, somos só uma página para fins educativos! Temos certeza que existem desafios de hackerismo mais dignos do seu tempo!
    
`;

export class TimeOutError extends Error {
  constructor(message) {
    super(message);
  }
}
