export class Seat{
    seatNo:number;
    constructor(seatNo?:number) { }
    public getSeatNo(): number {
		return this.seatNo;
	}
	public setSeatNo(seatNo: number) {
		this.seatNo = seatNo;
	}
}