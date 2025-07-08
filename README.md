# Construction/Service Business Website Template

A modern React-based website template for construction and service businesses with integrated HighLevel CRM forms, Google Places autocomplete, and Cloudflare image hosting.

## Features

- 🏗️ **Custom Form Integration** - Direct HighLevel webhook integration
- 📍 **Google Places Autocomplete** - Smart address completion
- 🖼️ **Image Upload** - Cloudflare Workers + R2 storage
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Fast Performance** - Vite + React + TypeScript
- 📞 **Always-Visible Phone Button** - Clickable branded phone button in navigation

## Navigation Bar Implementation

**CRITICAL:** The navigation bar has been a recurring source of issues across mobile, desktop, and deployment. Follow these exact guidelines to prevent problems.

### Navigation Layout Structure

```tsx
<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <div className="flex items-center h-16">
      {/* Mobile menu button - LEFT SIDE */}
      <div className="md:hidden mr-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          {/* Hamburger icon */}
        </button>
      </div>

      {/* Logo - LEFT ALIGNED */}
      <div className="flex-shrink-0">
        <h1 className="text-xl md:text-2xl font-bold">
          <span className="hidden md:inline">Full Company Name</span>
          <span className="md:hidden">Short Name</span>
        </h1>
      </div>

      {/* SPACER - CRITICAL FOR LAYOUT */}
      <div className="flex-1"></div>

      {/* Desktop Navigation - RIGHT SIDE */}
      <div className="hidden md:block">
        {/* Navigation items */}
      </div>

      {/* Phone Button - ALWAYS VISIBLE */}
      <div className="flex items-center ml-4">
        <a href="tel:+15096209939" className="bg-primary-600 hover:bg-primary-700">
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">(509) 620-9939</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </div>
  </div>
</nav>
```

### Critical Breakpoint Rules

**ALWAYS use `md:` breakpoint for desktop/mobile split:**

- ✅ **Logo**: `hidden md:inline` (desktop) / `md:hidden` (mobile)
- ✅ **Mobile menu**: `md:hidden` (hide on desktop)
- ✅ **Desktop nav**: `hidden md:block` (show on desktop)
- ❌ **NEVER use `sm:` for main navigation breakpoints**

### Layout Requirements

1. **Flex Container**: `flex items-center h-16`
2. **Spacer Div**: `<div className="flex-1"></div>` between logo and navigation
3. **Mobile Button**: Always on left with `mr-4` spacing
4. **Logo**: Left-aligned, responsive text
5. **Phone Button**: Always visible with `flex items-center`

### CSS Import Guidelines

**CRITICAL:** Avoid `@import` console errors that break navigation:

```css
/* ✅ CORRECT - Import fonts in CSS file */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```javascript
// ✅ CORRECT - PostCSS config
export default {
  plugins: {
    'postcss-import': {},  // REQUIRED for @import handling
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

```html
<!-- ✅ CORRECT - Only preconnect in HTML -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- ❌ REMOVE font stylesheet link from HTML -->
```

### Phone Button Implementation

```tsx
{/* Phone Button - Always visible with responsive text */}
<div className="flex items-center">
  <a
    href="tel:+15096209939"
    className="flex items-center space-x-2 px-3 py-2 md:px-4 md:py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 bg-primary-600 hover:bg-primary-700 text-white"
  >
    <Phone className="w-4 h-4" />
    <span className="hidden sm:inline">(509) 620-9939</span>
    <span className="sm:hidden">Call</span>
  </a>
</div>
```

### Navigation Testing Checklist

Before deployment, ALWAYS test:

1. **Mobile View** (< 768px): Hamburger menu visible, short logo, phone button
2. **Desktop View** (≥ 768px): Full logo visible, desktop nav, phone button
3. **Console Errors**: No `@import` or CSS-related errors
4. **Responsive Breakpoints**: Test at 767px and 768px specifically
5. **Logo Display**: Full company name shows on desktop

### Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Logo not showing on desktop | Wrong breakpoint (`sm:` instead of `md:`) | Use `hidden md:inline` |
| @import console errors | Font imports in HTML | Move to CSS with postcss-import |
| Layout misalignment | Missing spacer div | Add `<div className="flex-1"></div>` |
| Mobile menu overlapping | Wrong z-index or positioning | Use `fixed` nav with proper z-index |
| Phone button hidden | Using `hidden sm:flex` | Always use `flex items-center` |

## HighLevel Integration

### Webhook Configuration

The form integrates with HighLevel using webhook triggers. Configure your webhook URL in environment variables:

```javascript
// Use environment variables for security
const HIGHLEVEL_WEBHOOK_URL = import.meta.env.VITE_HIGHLEVEL_WEBHOOK_URL;
const LOCATION_ID = import.meta.env.VITE_HIGHLEVEL_LOCATION_ID;
```

### Field Mapping

HighLevel expects specific field names. Here are the working mappings:

#### Standard Contact Fields
```javascript
{
  "first_name": "John",           // Required - Contact first name
  "last_name": "Doe",             // Required - Contact last name  
  "email": "john@example.com",    // Required - Contact email
  "phone": "+1234567890",         // Required - Contact phone
  "address": "123 Main St",       // Street address
  "city": "Anytown",              // City name
  "state": "CA",                  // State abbreviation
  "country": "United States",     // Full country name
  "postal_code": "12345"          // ZIP/postal code
}
```

#### Custom Fields
```javascript
{
  "project_image_url": "https://your-domain.com/image.jpg",  // Uploaded image URL
  "consent": "true",              // SMS consent checkbox
  "source": "Website Form"        // Lead source tracking
}
```

### Working Form Structure

Based on successful implementations, use this exact structure:

```html
<form id="estimateForm">
  <!-- Standard fields with exact names -->
  <input type="text" name="first_name" placeholder="First Name" required>
  <input type="text" name="last_name" placeholder="Last Name" required>
  <input type="tel" name="phone" placeholder="Phone*" required>
  <input type="email" name="email" placeholder="Email*" required>
  
  <!-- Address autocomplete -->
  <input id="address-autocomplete" type="text" placeholder="Search address">
  
  <!-- Hidden address fields -->
  <input type="hidden" id="address" name="address">
  <input type="hidden" id="city" name="city">
  <input type="hidden" id="state" name="state">
  <input type="hidden" id="country" name="country">
  <input type="hidden" id="postal_code" name="postal_code">
  
  <!-- Image upload -->
  <input type="hidden" id="imageUrl" name="project_image_url">
  
  <!-- Consent -->
  <input id="consent" name="consent" type="checkbox" required>
</form>
```

### Form Submission

Use FormData for automatic field collection:

```javascript
// ✅ Working method
const formData = new FormData(form);
const formPayload = Object.fromEntries(formData.entries());

fetch(webhookUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formPayload)
});
```

### Common Issues & Solutions

#### 1. Field Names
❌ **Wrong:** `firstName`, `lastName`, `agreeToTerms`
✅ **Correct:** `first_name`, `last_name`, `consent`

#### 2. Data Format
❌ **Wrong:** Manual object construction
✅ **Correct:** Use `FormData(form)` for automatic collection

#### 3. Address Handling
❌ **Wrong:** Single address field
✅ **Correct:** Separate fields for street, city, state, etc.

## Environment Setup

Create a `.env` file in your project root with these variables:

```bash
# Google Places API
VITE_GOOGLE_PLACES_API_KEY=your-google-maps-api-key

# Cloudflare Image Upload
VITE_IMAGE_UPLOAD_URL=https://image-uploader.your-worker.workers.dev
VITE_IMAGE_UPLOAD_TOKEN=your-secret-key-here

# HighLevel Integration
VITE_HIGHLEVEL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_LOCATION_ID/webhook-trigger/YOUR_TRIGGER_ID
VITE_HIGHLEVEL_LOCATION_ID=YOUR_LOCATION_ID

# Backup webhook for monitoring (optional)
VITE_BACKUP_WEBHOOK_URL=https://your-backup-webhook.com
```

⚠️ **Security Note**: Never commit your `.env` file to version control. Use `.env.example` as a template.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## HighLevel Webhook Setup & Testing

### Quick Setup for New Projects

1. **Get HighLevel Webhook URL**
   - Create new automation in HighLevel
   - Add "Inbound Webhook" trigger
   - Copy the generated webhook URL (format: `https://services.leadconnectorhq.com/hooks/{LOCATION_ID}/webhook-trigger/{TRIGGER_ID}`)

2. **Update Project Configuration**
   ```bash
   # Update your .env file with your webhook URL
   VITE_HIGHLEVEL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_LOCATION_ID/webhook-trigger/YOUR_TRIGGER_ID
   VITE_HIGHLEVEL_LOCATION_ID=YOUR_LOCATION_ID
   ```

   The components will automatically use these environment variables. No code changes needed!

3. **Send Test Data for Mapping**
   - Use the included `webhook-test.html` file
   - Update the webhook URL in the test file
   - Open in browser and click "Send Test Data"
   - Return to HighLevel and click "Check for new requests"
   - Map the fields in your automation

### Test Data Structure

The webhook sends this standardized payload:
```json
{
  "first_name": "Maria",
  "last_name": "Valencia",
  "phone": "5091234567",
  "email": "maria@stokeleads.com",
  "address": "123 Main Street",
  "city": "Fairmount",
  "state": "GA",
  "country": "US",
  "postal_code": "30139",
  "project_image_url": "https://your-domain.com/sample-image.jpg",
  "consent": true,
  "source": "your_project_name",
  "location_id": "YOUR_LOCATION_ID",
  "name": "Maria Valencia",
  "submitted_at": "2025-01-07T20:30:00.000Z",
  "project_type": "Your Service Type",
  "message": "Sample message for your service"
}
```

### Testing Checklist

1. **Webhook Test**: Use `webhook-test.html` to send test payload
2. **Form Submission**: Fill out actual form and verify data flow
3. **Address Parsing**: Test Google Places autocomplete
4. **Image Upload**: Verify Cloudflare R2 storage and URL generation
5. **HighLevel Contact**: Check that contact is created with correct data
6. **Automation Flow**: Verify any follow-up actions (emails, SMS, etc.)

### Backup Monitoring

All form submissions can optionally be sent to a backup webhook for monitoring. Configure this in your environment variables:
```bash
VITE_BACKUP_WEBHOOK_URL=https://your-backup-webhook.com
```

This helps debug issues and ensures no leads are lost.

## Webhook Test Template

For new projects, create a `webhook-test.html` file with this template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HighLevel Webhook Test</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; background-color: #f5f5f5; }
        .container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        button { background: #4CAF50; color: white; padding: 15px 30px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin: 10px 0; width: 100%; }
        button:hover { background: #45a049; }
        .result { margin-top: 20px; padding: 15px; border-radius: 5px; font-family: monospace; }
        .success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        pre { white-space: pre-wrap; word-wrap: break-word; }
    </style>
</head>
<body>
    <div class="container">
        <h1>HighLevel Webhook Test</h1>
        <p>Click the button below to send test data to your HighLevel webhook.</p>
        <button onclick="sendTestData()">Send Test Data to HighLevel</button>
        <div id="result"></div>
    </div>
    <script>
        async function sendTestData() {
            // Use your actual webhook URL from .env file
            // This should match your VITE_HIGHLEVEL_WEBHOOK_URL
            const webhookUrl = "https://services.leadconnectorhq.com/hooks/YOUR_LOCATION_ID/webhook-trigger/YOUR_TRIGGER_ID";

            const testData = {
                "first_name": "Maria",
                "last_name": "Valencia",
                "phone": "5091234567",
                "email": "maria@stokeleads.com",
                "address": "123 Main Street",
                "city": "Fairmount",
                "state": "GA",
                "country": "US",
                "postal_code": "30139",
                "project_image_url": "https://your-domain.com/sample-image.jpeg",
                "consent": true,
                "source": "your_project_name", // UPDATE THIS
                "location_id": "YOUR_LOCATION_ID", // UPDATE THIS
                "name": "Maria Valencia",
                "submitted_at": new Date().toISOString(),
                "project_type": "Your Service Type",
                "message": "Test message for webhook mapping"
            };

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<p>Sending test data...</p>';

            try {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(testData)
                });

                const responseText = await response.text();
                resultDiv.innerHTML = `
                    <div class="result success">
                        <h3>✅ Success!</h3>
                        <p><strong>Status:</strong> ${response.status}</p>
                        <p><strong>Data Sent:</strong></p>
                        <pre>${JSON.stringify(testData, null, 2)}</pre>
                    </div>
                `;
            } catch (error) {
                resultDiv.innerHTML = `
                    <div class="result error">
                        <h3>❌ Error</h3>
                        <p>${error.message}</p>
                    </div>
                `;
            }
        }
    </script>
</body>
</html>
```

### Quick Setup Steps:
1. Update your `.env` file with your project's webhook URL:
   ```bash
   VITE_HIGHLEVEL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_LOCATION_ID/webhook-trigger/YOUR_TRIGGER_ID
   VITE_HIGHLEVEL_LOCATION_ID=YOUR_LOCATION_ID
   ```
2. Update `webhook-test.html` with your actual webhook URL and location ID
3. Update `source` field to match your project name
4. Open the file in browser and click the button
5. Go to HighLevel and map the received payload
