'''
	AIM4 - Flask - [A] Basic - [01] First Time
	
	Orbit Future Academy - AI Mastery - KM Batch 4
	Tim Deployment
	2023
'''

# =[Modules dan Packages]========================
from flask import Flask

# =[Variabel Global]=============================
app = Flask(__name__)

# =[Routing]=====================================
@app.route("/")
def beranda():
    return "Halo Dunia ! Belajar AI di Orbit Future Academy"

# =[Main]========================================
if __name__ == '__main__':
	app.run(host="localhost", port=5000, debug=True)