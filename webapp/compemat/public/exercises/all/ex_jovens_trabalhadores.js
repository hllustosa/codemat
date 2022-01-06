export default function Exercise() {
  return (
    <div>
      A Pesquisa Nacional por Amostra de Domicílios (Pnad) é uma pesquisa feita
      anualmente pelo IBGE, exceto nos anos em que há Censo. Em um ano, foram
      entrevistados 363 mil jovens para fazer um levantamento sobre suas
      atividades profissionais e/ou acadêmicas. Foram identificados jovens em 4 grupos:
      <p />
      <ul>
        <li>
         Somente Estuda
        </li>
        <li>
          Trabalha e Estuda
        </li>
        <li>
          Somente Trabalha
        </li>
        <li>
          Não Trabalha e Nem estuda.
        </li>
      </ul>
      <p />
      Neste problema você terá como entrada a porcentagem de jovens pesquisados 
      em cada categoria, através das entradas: <b>somente_estuda</b>, <b>trabalhao_estuda</b>,
      <b>somente_trabalha</b>, <b>nao_trabalha_nao_estuda</b>. Seu programa deve emitir como saída
      o número total de jovens que trabalha de acordo com a pesquisa.<p />
      <h3>Entradas</h3>
      Quatro números, <b>somente_estuda</b>, <b>trabalhao_estuda</b>, 
      <b>somente_trabalha</b>, <b>nao_trabalha_nao_estuda</b> indicando as porcentagem 
      dos jovens pesquisados em cada categoria.
      <h3>Saída</h3>
      Um número indicando a quantidade de jovens que trabalha de acordo com a pesquisa. <p />
    </div>
  );
}
