export default class SlotSymbolCategory {
    constructor(name, icon, prize, payout) {
        this.name = name;
        this.icon = icon;
        this.prize = prize;
        this.payout = payout;
    }

    equals(category) {
        return this.name === category.name;
    }
}
