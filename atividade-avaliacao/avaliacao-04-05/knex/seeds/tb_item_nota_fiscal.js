/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    await knex('TB_ITEM_NOTA_FISCAL').del()
    await knex('TB_ITEM_NOTA_FISCAL').insert([
      {
        sequencial: 1,
        quantidade: 3,
        valor: 34.99,
        produto: 1,
      },
      {
        sequencial: 2,
        quantidade: 3,
        valor: 13.35,
        produto: 2,
      },
    ]);
  };