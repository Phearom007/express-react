module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define(
    "blogs",
    {
      title: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.INTEGER,
      },
      link: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
      authorImage: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.TEXT,
      },
      tags: {
        type: Sequelize.STRING,
      },
      order: {
        type: Sequelize.INTEGER,
      },
      publish: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
    },
    {
      timestamps: true,
    }
  );

  return Blog;
};
