var laptop = {
    make: "hp",
    model: "HP 15 FD0336nia - Raptor Lake",
    year: 2023,
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    },
};
laptop.describe();
