Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)];    
};

export default class {
    constructor(reels) {
        this.reels = reels;
    }

    spin(bet) {
        let spin = this.reels.map(reel => reel.randomElement());
        return spin;
    }

    scoreForSpin(spin, bet) {
        if (this.isJackpot(spin)) {
            let payout = spin[0].category.payout;
            return payout * bet;
        }
        return 0;
    }

    isJackpot(spin) {
        return spin.length && 
            spin.every(symbol => symbol.category.equals(spin[0].category));
    }

    spinLooksPromisingAtIndex(spin, reelIndex) {
        return spin.slice(0, reelIndex + 1).every(symbol => spin[0].category.equals(symbol.category));
    }
}
