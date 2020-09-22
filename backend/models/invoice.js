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
        Invoice.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
        Invoice.belongsToMany(models.Item, { 
            through: 'Invoice_Items',
			foreignKey: 'invoiceId'
        });
    };
    return Invoice;
}