const propertyName = "__tyreSmokeColor";

/**
 * Sets the tire smoke color of a vehicle.
 * @param {Number} red
 * @param {Number} green
 * @param {Number} blue
 */
mp.Vehicle.prototype.setTyreSmokeColor = function(red, green, blue) {
    if (!Number.isInteger(red) || !Number.isInteger(green) || !Number.isInteger(blue)) {
        throw new TypeError("Non number argument(s) passed to setTyreSmokeColor.");
    }

    if ((red < 0 || red > 255) || (green < 0 || green > 255) || (blue < 0 || blue > 255)) {
        throw new RangeError("Invalid red/green/blue value(s) passed to setTyreSmokeColor.");
    }

    this.setVariable(propertyName, `${red}|${green}|${blue}`);
};

/**
 * Gets the tire smoke color of a vehicle.
 * @return {Object} Tire smoke color, will be null if the vehicle doesn't have one set.
 */
mp.Vehicle.prototype.getTyreSmokeColor = function() {
    const data = this.getVariable(propertyName);

    if (data) {
        const [red, green, blue] = data.split("|");

        return {
            r: Number(red),
            g: Number(green),
            b: Number(blue)
        };
    } else {
        return null;
    }
};

/**
 * Resets the tire smoke color of a vehicle.
 */
mp.Vehicle.prototype.resetTyreSmokeColor = function() {
    if (this.getVariable(propertyName)) {
        this.setVariable(propertyName, null);
    }
};