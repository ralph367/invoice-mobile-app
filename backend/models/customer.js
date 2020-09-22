module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        secondname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.FLOAT,
        },
        address: {
            type: DataTypes.TEXT,
        }
    });
    Customer.associate = models => {
        Customer.hasMany(models.Invoice, {
            onDelete: "cascade"
        });
        
    };
    return Customer;
}