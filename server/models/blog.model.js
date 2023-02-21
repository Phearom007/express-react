const dayjs = require('dayjs');

module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define(
    "blogs",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: true,
        get() {
          const value = this.getDataValue('date');
          return value ? dayjs(value).format('YYYY-MM-DD') : "";
        },
        set(value) {
          const date = value ? dayjs(value, 'YYYY-MM-DD') : "";
          this.setDataValue('date', date);
        }
      },
      link: {
        type: Sequelize.STRING,
        allowNull: true
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      author: {
        type: Sequelize.STRING,
        allowNull: true
      },
      authorImage: {
        type: Sequelize.STRING,
        allowNull: true
      },
      note: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      tags: {
        type: Sequelize.STRING,
        allowNull: true
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      publish: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
    },
    {
      timestamps: true,
    }
  );

  return Blog;
};
