import config from '../../config';

/**
 * Connect to the database using the underlying connection function.
 * We pass the connection function as first parameter to be database-agnostic.
 * @param {function} connectionFn - The function used to connect to the database
 * @param {object} options - The database options
 * @returns {Promise<any>} A promise resolving to the result of the connection
 * function.
 */
export const connect = async (connectionFn, options = config.db) => connectionFn(options);

/**
 * Try connecting to the database.
 * @param {object} db - The options to be passed to the database.
 * @returns {Promise<boolean>} A promise resolving to true if the connection
 * was successful, else false or throws an error.
 */
export const testConnection = async db => db.authenticate();

export default {
  connect,
  testConnection,
};
