# GUIDE

## .ENV
Create .env file with following format
```bash
DATABASE=
DATABASE_HOST=
DATABASE_PASSWORD=
DATABASE_PORT=
DATABASE_USER=

APPLICATION_PORT=

H_CAPTCHA_SECRET=0x0000000000000000000000000000000000000000 # This key for development
H_CAPTCHA_SITEKEY=
```

## Dev

Start dev server:
```bash
  yarn dev
```

Migrate DB:
```bash
  yarn run migrate
```

## Production
```bash
  make
```

## Bypass Hcaptcha on development
Set Secret Key to
```
0x0000000000000000000000000000000000000000
```
and response code
```
10000000-aaaa-bbbb-cccc-000000000001
```