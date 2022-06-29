/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    await knex('TB_NOTA_FISCAL_VENDA').del()
    await knex('TB_NOTA_FISCAL_VENDA').insert([
      {
        id: 1,
        codigo: 654,
        data: '01/07/2022',
        valorNota: 19.62,
      },
      {
        id: 2,
        codigo: 655,
        data: '25/06/2022',
        valorNota: 11.21,
      },
    ]);
  };