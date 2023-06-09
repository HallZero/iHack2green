from flask import Flask, request, jsonify, render_template
from models.h2v import h2v
from sqlalchemy import create_engine, delete
from sqlalchemy.orm import Session, sessionmaker
from models.base import Base

app = Flask(__name__)

engine = create_engine("sqlite+pysqlite:///reports.db", echo=True)
Session = sessionmaker(bind=engine)
session = Session()

Base.metadata.create_all(engine)

@app.get('/')
def home():
    return render_template('login.html')

@app.get('/analises')
def analises():
    return render_template('analysis.html', name='Alice', emission='66')

@app.get('/menu')
def menu():
    return render_template('menu.html')

@app.get('/h2v')
def compras():
    return render_template('buyh2v.html', quantity='10Kg', price='$9,900.00',dealer='H2V', freight='$100.00', total='$1,000.00')

@app.get('/configuracoes')
def settings():
    return render_template('perfil.html')

@app.get('/calculadora')
def calculator():
    return render_template('calculator.html')


@app.route('/data', methods=['GET', 'POST'])
def data():

    if request.method == 'GET':
        return render_template('pb.html')

    if request.method == 'POST':
        data = request.get_json()
        h2v_instance = h2v(measuremente_value=data['measuremente_value'])
        print(h2v_instance)
        print(request.form)
        return jsonify(data)
    

app.run(host='localhost', port=5000, debug=True)