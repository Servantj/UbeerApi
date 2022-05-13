export const TABLE_NAME = 'WIPS';

export const create = db => async wip => db.insert(wip).into(TABLE_NAME);

export const findAll = db => async () => db
  .select()
  .from(TABLE_NAME);

export const findById = db => async id => db
  .select()
  .from(TABLE_NAME)
  .where('num_ordre', id);

export default db => ({
  TABLE_NAME,
  findAll: findAll(db),
  findById: findById(db),
  create: create(db),
});
