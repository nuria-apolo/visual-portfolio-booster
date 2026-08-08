# Cloudflare deployment

Este proyecto se despliega como Cloudflare Worker con assets estáticos generados por Nitro.

## Flujo operativo

1. Los cambios se hacen en este repo local.
2. Se suben a `main` en GitHub.
3. GitHub Actions ejecuta `bun install --no-save` y `bun run build`.
4. Wrangler despliega la salida generada en `.output/server` como Worker `srtaserifa`.

## Secretos necesarios en GitHub

En `Settings → Secrets and variables → Actions`, configurar:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

El token necesita permisos de edición para Workers en la cuenta de Cloudflare.

## Comandos locales

```bash
bun install --no-save
bun run build
bun run preview:cloudflare
bun run deploy:cloudflare
```

## Dominio

Para que `srtaserifa.es` sirva desde Cloudflare, la zona DNS del dominio debe estar en Cloudflare o el dominio debe quedar asociado al Worker desde una zona gestionada por Cloudflare. Actualmente este repo solo prepara el despliegue; el cambio de DNS/nameservers debe hacerse después de validar el Worker.
