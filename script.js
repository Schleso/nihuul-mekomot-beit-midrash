// script.js

// Interactive Seat Management Logic

class SeatManager {
    constructor(totalSeats) {
        this.totalSeats = totalSeats;
        this.seats = Array(totalSeats).fill(false); // false indicates unoccupied
    }

    // Assign a seat
    assignSeat(seatNumber) {
        if (this.seats[seatNumber] === false) {
            this.seats[seatNumber] = true;
            console.log(`Seat ${seatNumber} has been assigned.`);
        } else {
            console.log(`Seat ${seatNumber} is already occupied.`);
        }
    }

    // Release a seat
    releaseSeat(seatNumber) {
        if (this.seats[seatNumber] === true) {
            this.seats[seatNumber] = false;
            console.log(`Seat ${seatNumber} has been released.`);
        } else {
            console.log(`Seat ${seatNumber} is already free.`);
        }
    }

    // Get the status of all seats
    getSeatsStatus() {
        return this.seats.map((occupied, index) => ({ seatNumber: index, occupied: occupied }));
    }
}

// Example usage:
const seatManager = new SeatManager(10); // 10 total seats
seatManager.assignSeat(2);
seatManager.releaseSeat(2);
console.log(seatManager.getSeatsStatus());
