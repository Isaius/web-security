
import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("comments").del();

    // Inserts seed entries
    await knex("comments").insert([
        { id: 1, content: 'This is a dummy comment', user_id: 1},
        { id: 2, content: 'You should be the next president of butan?', user_id: 2},
        { id: 3, content: 'Hello guys, its me from rushia', user_id: 3},
        { id: 4, content: 'how did i fall here', user_id: 4},
        { id: 5, content: 'what year is this?', user_id: 4},
        { id: 6, content: '1930', user_id: 5},
        { id: 7, content: 'before or after the cthulhu rise?', user_id: 4},
        { id: 8, content: 'before.', user_id: 6},
        { id: 9, content: 'oh no- wait, how do you know that?', user_id: 4},
        { id: 10, content: 'haha', user_id: 5},
    ]);
};