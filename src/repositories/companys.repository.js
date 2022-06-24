// import config from '../config';

export const TABLE_NAME = 'COMPANYS';
export const create = db => async company => db.insert(company).into(TABLE_NAME);

export const findAll = db => async () => db
  .select()
  .from(TABLE_NAME);

export const findById = db => async id => db
  .select()
  .from(TABLE_NAME)
  .where('id', id);

export const update = db => async (id, company,
) => db(TABLE_NAME)
  .where('id', id)
  .update(company);

export default db => ({
  TABLE_NAME,
  findAll: findAll(db),
  findById: findById(db),
  create: create(db),
  update: update(db),
});
