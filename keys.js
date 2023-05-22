module.exports = {
  PORT: 9300,
  data: './data.json',
  elasticsearch: 'http://192.168.0.106:9200',
  index_name: 'profiles',
  esurl: this.elasticsearch + '/' + this.index_name,
};
