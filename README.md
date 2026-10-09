# Digidesk

Small Django practice project (2023): it consumes the public [Digimon API](https://digimon-api.vercel.app/),
lists the results with server-side pagination, and lets the user save favourites to a database through a
JavaScript call to a Django endpoint. A copy of this app runs inside my portfolio, which also shows its code.

**Stack:** Python · Django 4.2 · Django REST Framework · Bootstrap 5 · vanilla JavaScript (fetch) · PostgreSQL or SQLite.

## Run locally

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env          # set DJANGO_SECRET_KEY; leave POSTGRES_HOST empty to use SQLite
python manage.py migrate
python manage.py runserver
```

Configuration is read from environment variables (`.env.example`); no secrets are committed.
