# Fontlay

A simple Google Fonts proxy and privacy-friendly. Prevent your users from being tracked and push your privacy.

## 🏷️ Feature

- Hide your IP addresses.
- CSS & Fonts files are in the same endpoint.
- CSS files are minified and optimized.
- CSS & Fonts are served from CDN which has the option to disable logging.
- Zero Logging your traffic to push your privacy to the next level.
- All traffic on fontlay.com is encrypted.

## 💻 How to use

Change the domain name from `googleapis.com` to `fontlay.com`.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
/>
```

With

```html
<link rel="preconnect" href="https://fontlay.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fontlay.com/css2?family=Roboto&display=swap"
/>
```

## 📄 License

This Project is Under [Apache-2.0 license ](LICENSE) &copy; 2023 Farid Nizam
