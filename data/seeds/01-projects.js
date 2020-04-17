
exports.seed = function(knex) {
    return knex('projects').insert([   
      { project_name: 'Build Fence'},
      { project_name: 'Build library'}
    ]);
  };
  