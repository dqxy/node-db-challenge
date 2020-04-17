
exports.seed = function(knex) {
    return knex('resources').insert([   
      { resource_name: 'Wood', project_id: 1 },
      { resource_name: 'Metal', project_id: 1 },
      { resource_name: 'Toolbox', project_id: 2 },
      { resource_name: 'Plower', project_id: 2 }
    ]);
  };
  