
export const TABLE_NAME = 'CABLAGES';

export const create = db => async (cablage) => {
  const [cablageCreatedId] = await db.insert(cablage).into(TABLE_NAME);
  return cablageCreatedId;
};

export const findAll = db => async () => db
  .select()
  .from(TABLE_NAME);

export const findById = db => async id => db
  .select()
  .from(TABLE_NAME)
  .where('id', id);

export const findByClos = db => async () => db
  .select()
  .from(TABLE_NAME)
  .whereNotNull('date_sortie');

export const findNotClos = db => async () => db
  .select()
  .from(TABLE_NAME)
  .whereNull('date_sortie');

export const update = db => async (id, cablage,
) => db(TABLE_NAME)
  .where('id', id)
  .update(cablage);

export default db => ({
  TABLE_NAME,
  findAll: findAll(db),
  findById: findById(db),
  findByClos: findByClos(db),
  findNotClos: findNotClos(db),
  create: create(db),
  update: update(db),
});
