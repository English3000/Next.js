'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    body: DataTypes.TEXT,
    author: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //e.g. Post.belongsTo(models.User);
      }
    }
  });
  return Post;
};

//To create a new migration:
// https://gist.github.com/JoeKarlsson/ebb1c714466ae3de88ae565fa9ba4779#woops-forgot-a-something

//To seed db:
// https://gist.github.com/JoeKarlsson/ebb1c714466ae3de88ae565fa9ba4779#seeding-your-database
