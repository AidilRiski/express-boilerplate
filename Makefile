# Makefile

include .env

db-create:
	@echo "Creating user..."
	@psql -c "CREATE USER ${POSTGRES_USER} WITH PASSWORD ${POSTGRES_PASSWORD};" -p ${POSTGRES_PORT}
	@echo "Creating database..."
	@createdb ${POSTGRES_DB} -U ${POSTGRES_USER} -p ${POSTGRES_PORT}
	@echo "Creation finished."

db-create-on-production:
	@echo "On Production"
	@echo "Creating user..."
	@psql -c "CREATE USER ${PRODUCTION_POSTGRES_USER} WITH PASSWORD ${PRODUCTION_POSTGRES_PASSWORD};" -p ${PRODUCTION_POSTGRES_PORT}
	@echo "Creating database..."
	@createdb ${PRODUCTION_POSTGRES_DB} -U ${PRODUCTION_POSTGRES_USER} -p ${PRODUCTION_POSTGRES_PORT}
	@echo "Creation finished."