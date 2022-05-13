export const TABLE_NAME = 'EQUIPEMENTS';

export const create = db => async (equipement) => {
  const [equipementCreatedId] = await db.insert(equipement).into(TABLE_NAME);
  return equipementCreatedId;
};

export const findAll = db => async () => db
  .select()
  .from(TABLE_NAME);

export const findById = db => async id => db
  .select()
  .from(TABLE_NAME)
  .where('num_ordre', id);

export const update = db => async (id, equipement,
) => db(TABLE_NAME)
  .where('num_ordre', id)
  .update(equipement);

export default db => ({
  TABLE_NAME,
  findAll: findAll(db),
  findById: findById(db),
  create: create(db),
  update: update(db),
});
