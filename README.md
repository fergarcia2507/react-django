RUN: git clone https://github.com/fergarcia2507/react-django.git
RUN: python -m venv venv
RUN: python manage.py migrate
RUN: python manage.py run server
// -- Starting development server at http://127.0.0.1:8000/ --//
 
- Open a new terminal -

RUN: cd .\client\
RUN: npm install
RUN: npm run dev

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
