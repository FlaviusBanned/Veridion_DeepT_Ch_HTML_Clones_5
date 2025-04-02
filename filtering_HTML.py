from flask import Flask,request,jsonify
import os 
import json

app=Flask(__name__)

@app.route('/')
def index():
    return "HTML Cloning API ! "

if __name__=='__main__':
    app.run(debug=True)