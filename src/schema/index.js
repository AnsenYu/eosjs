const schema = Object.assign(
  {},
  require('./chain_types.json'),
  require('./eosio_system.json'),
  require('./eosio_token.json'),
  require('./eosforce.json')
)

module.exports = schema
