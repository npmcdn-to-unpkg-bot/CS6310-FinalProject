from api import flask_app

if __name__ == '__main__':
    flask_app.run('0.0.0.0', 5000, debug=True)