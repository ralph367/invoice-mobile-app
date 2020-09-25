module.exports = (sequelize, DataTypes) => {
    const Invoice_Items = sequelize.define("Invoice_Items", {
        invoiceId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Invoices',
                key: 'id',
                as: 'Invoices'
            },
            onDelete: "cascade",
            onUpdate: 'cascade'
        },
        itemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Items',
                key: 'id',
                as: 'Items'
            },
            onDelete: "cascade",
            onUpdate: 'cascade'
        }
    });
    return Invoice_Items;
}