from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

tokenizer = AutoTokenizer.from_pretrained("google/pegasus-cnn_dailymail")
model = AutoModelForSeq2SeqLM.from_pretrained("google/pegasus-cnn_dailymail")

app = Flask(__name__)
CORS(app)

@app.route('/summarize', methods=['POST'])
def summarize_text():
    try:
        data = request.get_json()
        text = data['text']
        print("Entered summarize request")
        print(text)
        tokens = tokenizer(text, truncation=True, padding="longest", return_tensors="pt")
        summary = model.generate(**tokens)
        
        return jsonify({'summary': tokenizer.decode(summary[0])})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("Flask was run Successfully...")
    app.run(debug=True)