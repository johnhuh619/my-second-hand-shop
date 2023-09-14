module.exports = function (sequelize, DataTypes) {
  // 컬럼 name, price, brand, imageUrl
  // 제약조건 allowNull: 컬럼 값이 없어도 되는지 여부 (default: true)
  const product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING(500),
    },
  });
  return product;
};
