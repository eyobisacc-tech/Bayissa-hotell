# Bayissa Hotel Website

Simple, classic, professional website for Bayissa Hotel in Dukem, Ethiopia.

## How the Owner Can Update the Website

**Only one file needs to be edited:**  
`src/config/site.ts`

### Change phone or WhatsApp number
Open `src/config/site.ts` and update these lines:

```
phone: '+251 9XX XXX XXX',
phoneDisplay: '+251 9XX XXX XXX',
whatsapp: '2519XXXXXXXX',   // digits only, no + or spaces
```

### Change room rates
In the same file, edit the `rooms` and `rates` arrays.

### Change photos
Replace any image URL in `src/config/site.ts` (heroImage, rooms, gallery, etc.).

### Change sample reviews
Edit the list inside `src/components/Reviews.tsx`.

## Run the website locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
```

The finished files will be in the `dist` folder. Upload that folder to any web host.
