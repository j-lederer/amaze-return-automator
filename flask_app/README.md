# Flask Warehouse Return Processing System

A complete Flask application for warehouse return processing, converted from the original React application.

## Features

- **Return Search**: Search for returns by tracking ID
- **Return Details**: View comprehensive return information
- **Processing Queue**: Manage items waiting for processing
- **Batch Processing**: Add queue items to jobs for bulk processing
- **Responsive Design**: Modern UI with Tailwind CSS
- **Dark Theme**: Professional dark mode interface

## Installation

1. **Clone or copy this directory**
2. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**:
   ```bash
   python app.py
   ```

5. **Open your browser** and go to `http://localhost:5000`

## Project Structure

```
flask_app/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── templates/            # Jinja2 templates
│   ├── base.html         # Base template
│   ├── home.html         # Main dashboard
│   ├── jobs.html         # Jobs page
│   ├── support.html      # Support page
│   └── tutorial.html     # Tutorial page
└── static/               # Static files
    ├── css/
    │   └── styles.css    # Custom CSS with design system
    └── js/
        └── app.js        # JavaScript utilities
```

## Design System

The application uses a comprehensive design system with:

- **Color Palette**: HSL-based colors for consistent theming
- **Gradients**: Primary, hero, and card gradients
- **Shadows**: Elegant, glow, and card shadow variants
- **Transitions**: Smooth and bounce transition effects
- **Button Variants**: Primary, secondary, outline, accent, ghost, destructive

## Key Components

### Flask Routes

- `/` - Main dashboard
- `/search` - POST: Search for tracking ID
- `/add_to_queue` - POST: Add item to processing queue
- `/remove_from_queue` - POST: Remove item from queue
- `/clear_queue` - POST: Clear entire queue
- `/refresh_data` - POST: Refresh external data

### Frontend Features

- **Responsive Layout**: Works on all device sizes
- **Toast Notifications**: User feedback for actions
- **Dynamic Content**: Real-time updates without page refresh
- **Keyboard Support**: Enter key for search
- **Error Handling**: Graceful error handling and user feedback

## Customization

### Adding Database Integration

Replace the mock data functions in `app.py` with actual database queries:

```python
def get_return_data(tracking_id):
    # Replace with actual database query
    return db.query("SELECT * FROM returns WHERE tracking_id = ?", tracking_id)
```

### Adding Authentication

Add Flask-Login or similar authentication:

```python
from flask_login import login_required

@app.route('/')
@login_required
def home():
    # Protected route
```

### Extending the API

Add new routes for additional functionality:

```python
@app.route('/api/analytics')
def analytics():
    # Return analytics data
    pass
```

## Deployment

For production deployment:

1. **Set environment variables**:
   ```bash
   export FLASK_ENV=production
   ```

2. **Use a production WSGI server**:
   ```bash
   pip install gunicorn
   gunicorn app:app
   ```

3. **Configure reverse proxy** (nginx, Apache)
4. **Set up database** (PostgreSQL, MySQL)
5. **Configure logging** and monitoring

## Contributing

1. Follow the existing code style
2. Use the design system classes for consistent styling
3. Add error handling for new features
4. Update this README for significant changes

## License

This project is based on the React warehouse return processing system and maintains the same functionality in Flask.