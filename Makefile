all: migrate_prod build run
build:
	sh ./scripts/build.sh
migrate_dev:
	sh ./scripts/migration.dev.sh
migrate_prod:
	sh ./scripts/migration.prod.sh
run:
	sh ./scripts/run.prod.sh