/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('TB_CLIENTE').del()
  await knex('TB_CLIENTE').insert([
    {
      id: 1,
      codigo: 001,
      cnpjcpf: '67.638.976/0001-65',
      nome: 'Ângela Ferraço Faustino'
    },
    {
      id: 2,
      codigo: 002,
      cnpjcpf: '60.853.167/0001-27',
      nome: 'KellY Galante Varela'
    },
  ]);
};