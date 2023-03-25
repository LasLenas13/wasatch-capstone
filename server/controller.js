
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
        res.send("Thank you for signing up!");
      }
    
}