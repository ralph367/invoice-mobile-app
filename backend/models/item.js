module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("Item", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DataTypes.FLOAT,
        }
    });
    Item.associate = models => {
        Item.belongsTo(models.Invoice, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Item;
}