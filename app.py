from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
import webbrowser
import gunicorn
import os

# Open the browser automatically
url = "http://127.0.0.1:5000"
webbrowser.open(url)

#Server configurations
app = Flask(__name__, static_folder='static', template_folder='templates')
app.config['UPLOAD_FOLDER'] = "Uploads"

# variables
buttonPressed = "0"

# App routes 
@app.route('/')
def mainPage():
    return render_template('index.html')

@app.route('/getButtonPressed/<msg>')
def getButtonPressed(msg):
    # change buttonPressed value
    global buttonPressed
    buttonPressed = msg
    return "succeed"

@app.route('/requestButtonPressed', methods=["GET", "POST"])
def requestButtonPressed():
    # post buttonPressed value
    global buttonPressed
    if buttonPressed != "0":
        temp = buttonPressed
        buttonPressed = "0"
    else:
        temp = "0"
    return temp



if __name__ == "__main__":
    # appFlask.run(ssl_context='adhoc')
    app.run(ssl_context='adhoc')
    # port = os.environ.get("PORT", 5000)# Get port number of env at runtime, else use default port 5000
    # app.run(debug=True, host='0.0.0.0', port=port)  # 0.0.0.0 port forwarding resolves the host IP address at runtime
    