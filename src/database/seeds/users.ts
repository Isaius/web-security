
import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: 1, username: 'odiss', name: 'Odisseu', password: '123'},
        { id: 2, username: 'hipolit', name: 'Hipolita', password: 'ts23' },
        { id: 3, username: 'para', name: 'Calipso', password: 'ddd133' },
        { id: 4, username: 'arara', name: 'Shuuen', password: 'donaldduckbestduckever' },
        { id: 5, username: 'saoriiiiiii', name: 'Pegasus', password: 'saoriiiiiiiii' },
        { id: 6, username: 'goldensoul', name: 'Sisifo', password: 'itstimefordududududuel' },
        { id: 7, username: 'bololodela', name: 'Ariadne', password: 'admin' },
        { id: 8, username: 'waterisbad', name: 'Jason', password: 'thebestpartoftheend' },
    ]);
};