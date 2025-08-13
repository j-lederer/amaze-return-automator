from flask import Flask, render_template, request, jsonify
from datetime import datetime

app = Flask(__name__)

# Mock data for demonstration
def get_mock_return_data(tracking_id):
    """Mock function to simulate database lookup"""
    return {
        'address': "123 Main St, City, State 12345",
        'item_name': "Premium Ultra-Soft Microfiber Bed Sheet Set with Deep Pockets and Hypoallergenic Properties - Queen Size, Navy Blue",
        'sku': tracking_id,
        'reason_returned': "Customer decided they preferred a different color after seeing it in their bedroom lighting",
        'order_quantity': 3,
        'return_quantity': 2,
        'inventory': 45,
        'refund_amount': 89.99,
        'restocking_fee': 5.00,
        'found': True
    }

# Mock queue data
queue_data = [
    {'tracking_id': 'TRK001', 'sku': 'SKU001', 'quantity_returned': 2},
    {'tracking_id': 'TRK002', 'sku': 'SKU002', 'quantity_returned': 1},
]

@app.route('/')
def landing():
    """Landing page"""
    return render_template('landing.html')

@app.route('/home')
def home():
    """Main dashboard page"""
    return render_template('home.html', 
                         queue_data=queue_data, 
                         queue_count=len(queue_data))

@app.route('/search', methods=['POST'])
def search_tracking():
    """Search for tracking ID"""
    data = request.get_json()
    tracking_id = data.get('tracking_id', '').strip()
    
    if not tracking_id:
        return jsonify({'error': 'Tracking ID is required'}), 400
    
    # In a real app, this would query your database
    return_data = get_mock_return_data(tracking_id)
    
    return jsonify({
        'success': True,
        'data': return_data,
        'tracking_id': tracking_id
    })

@app.route('/clear_search', methods=['POST'])
def clear_search():
    """Clear current search"""
    return jsonify({'success': True})

@app.route('/refresh_data', methods=['POST'])
def refresh_data():
    """Refresh data from external source"""
    # Simulate refresh operation
    return jsonify({
        'success': True,
        'message': 'Data refreshed successfully',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/add_to_queue', methods=['POST'])
def add_to_queue():
    """Add item to processing queue"""
    data = request.get_json()
    tracking_id = data.get('tracking_id')
    sku = data.get('sku')
    quantity = data.get('quantity_returned')
    
    # Add to queue (in real app, this would be database operation)
    queue_data.append({
        'tracking_id': tracking_id,
        'sku': sku,
        'quantity_returned': quantity
    })
    
    return jsonify({'success': True, 'queue_count': len(queue_data)})

@app.route('/remove_from_queue', methods=['POST'])
def remove_from_queue():
    """Remove item from queue"""
    data = request.get_json()
    tracking_id = data.get('tracking_id')
    
    global queue_data
    queue_data = [item for item in queue_data if item['tracking_id'] != tracking_id]
    
    return jsonify({'success': True, 'queue_count': len(queue_data)})

@app.route('/clear_queue', methods=['POST'])
def clear_queue():
    """Clear entire queue"""
    global queue_data
    queue_data = []
    return jsonify({'success': True})

@app.route('/jobs')
def jobs():
    """Jobs page"""
    return render_template('jobs.html')

@app.route('/support')
def support():
    """Support page"""
    return render_template('support.html')

@app.route('/tutorial')
def tutorial():
    """Tutorial page"""
    return render_template('tutorial.html')

if __name__ == '__main__':
    app.run(debug=True)