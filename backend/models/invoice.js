module.exports = (sequelize, DataTypes) => {
    const Invoice = sequelize.define("Invoice", {
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
    Invoice.associate = models => {
        Invoice.hasMany(models.Item, {
            onDelete: "cascade"
        });
        Invoice.hasOne(models.Customer, {
            onDelete: "cascade"
        });
    };
    return Invoice;
}