
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('project_name', 128)
          .unique()
          .notNullable();
        tbl.text('description');
        tbl.boolean('completed')
          .defaultTo(0)
          .notNullable();  
      })
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description')
          .notNullable();
        tbl.text('notes');
        tbl.boolean('completed')
          .defaultTo(0)
          .notNullable();
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })
      .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('resource_name')
        .unique().notNullable();
        tbl.text('description');    
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects');
  };
  