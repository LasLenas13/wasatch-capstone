const Sequelize = require('sequelize');
require('dotenv').config()

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})
module.exports = {
    getInspire: (req, res) => {
        const power = ["You can alter mood by running.", "If you still look cute after running, you didn’t go hard enough.", 
        "Just stick with it. What seems hard now will one day be your warm-up", "Any day above ground is a good day.", "Believe it can be done.", "Unless you puke, faint, or die, keep going!"]

        let randomData = Math.floor(Math.random() * power.length);
        let randomPower = power[randomData];
      
        res.status(200).send(randomPower);
    },

    signUp(req, res) {
        const email = req.body.email;
        try {
          sequelize.query(`
          INSERT INTO newsletter (email) 
          VALUES ('${email}')`);
          res.send("Thank you for signing up!");
        } catch (error) {
          console.error(error);
          res.status(500).send('Error signing up');
        }
      }
    
}