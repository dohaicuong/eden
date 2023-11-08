## install dependencies
- install bun
https://bun.sh/

- at root folder
```bash
bun i
```

## setup env
```bash
cp ./backend/.env.example ./backend/.env
cp ./frontend/.env.example ./frontend/.env
```

## setup DB
- start up  db
```bash
docker compose up -d
```
- edit `schema.prisma`
- run prisma migration
```bash
cd backend
npx prisma migrate dev
```

## running dev
- at root folder
```bash
bun dev
```