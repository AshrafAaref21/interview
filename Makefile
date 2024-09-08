build:
	docker compose up --build -d --remove-orphans

up:
	docker compose up -d

down:
	docker compose down

show-logs:
	docker compose logs

show-logs-api:
	docker compose logs app

makemigrations:
	docker compose run --rm app python manage.py makemigrations

migrate:
	docker compose run --rm app python manage.py migrate

collectstaticfiles:
	docker compose run --rm app python manage.py collectstatic --no-input clear
	
superuser:
	docker compose run --rm app python manage.py createsuperuser

down-v:
	docker compose down -v

startapp:
	docker compose run --rm app python manage.py startapp $(name)


#https://picsum.photos/200/300
