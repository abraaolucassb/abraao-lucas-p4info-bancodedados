/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    await knex('TB_PRODUTO').del()
    await knex('TB_PRODUTO').insert([
      {
        id: 1,
        codigo: 321,
        descricao: 'Nescau 440g 9 Uni',
        valor: 34.99
        },
      {
        id: 2,
        codigo: 322,
        descricao: 'Molho de Pimenta',
        valor: 13.35
        },
    ]);
  };