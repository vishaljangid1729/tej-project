from flask import Flask
from tensorflow import keras
from flask import request, jsonify

app = Flask(__name__)


@app.route("/", methods=['GET'])
def index():
#   text = request.args.get('text')
  text = "The Eastern Africa Submarine Cable System is an undersea fibre optic cable system connecting countries in Eastern Africa to the rest of the world."
  model = keras.models.load_model('lstmmodel.h5')
  ans=model.predict(text)
  print("This is ans " + ans)
  return ans