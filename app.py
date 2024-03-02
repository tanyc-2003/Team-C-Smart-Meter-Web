from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
import webbrowser
import gunicorn

url = "http://127.0.0.1:5000"
webbrowser.open(url)

#Server configurations
app = Flask(__name__, static_folder='static')
app.config['UPLOAD_FOLDER'] = "Uploads"


#App routes


#App routes
@app.route('/')
def helloworld():
    return render_template('index.html')

if __name__ == "__main__":
    # appFlask.run(ssl_context='adhoc')
    app.run(ssl_context='adhoc')
    