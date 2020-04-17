exports.seed = function(knex) {
    return knex("tasks").insert([
        {
            project_id: 1,
            
            description: "solve prime number theory",
        },
        { project_id: 1, description: "crack cyber security" },
        {
            project_id: 1,
            
            description: "blackmail world leaders",
        },
        {
            project_id: 2,
           
            description: "collect all the sheep in Scotland",
        },
        { project_id: 2,  description: "profit" },
        {
            project_id: 2,
           
            description: "find Japanese investors",
        },
        { project_id: 2, description: "????" },
    ]);
};
