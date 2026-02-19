from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample data structure for seating
seating_arrangements = []

@app.route('/seating', methods=['GET', 'POST'])
def manage_seating():
    if request.method == 'POST':
        data = request.get_json()
        seating_arrangements.append(data)
        return jsonify({'message': 'Seating added successfully!'}), 201
    return jsonify(seating_arrangements)

@app.route('/seating/<int:seat_id>', methods=['DELETE'])
def delete_seating(seat_id):
    global seating_arrangements
    seating_arrangements = [seat for seat in seating_arrangements if seat.get('id') != seat_id]
    return jsonify({'message': 'Seating removed successfully!'})

if __name__ == '__main__':
    app.run(debug=True)