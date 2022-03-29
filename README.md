# ngx-stripe

# Step 1: Installation plagin
### In terminal root/client write:
npm install stripe-angular @types/stripe-v3 --save

# Step 2: Installation waw-stripe
### Go to the waw-stripe in WebArtWork

# Step 3: Installation ngx-stripe
### In terminal root/client write:
waw add ngx-stripe

# Step 4: Write Tag(stripe)
###  In your user/page, you must write this code:
```
<stripe [amount]="3000"></stripe>
```

# Step 5: Create API-Key
### Write in a browser stripe.com and regestration

# Step 6: Find API-Key Secret Key
### In your stripe.com you must copy Secret key for developers in bottom right corner

# Step 7: Write API-Key Secret Key
### Your must find file is config.json and add a part of the code in the object at the very end:
```
"stripe": "your Secret key"
```

# Step 8: Find API-Key Publishable Key
### In your stripe.com you must copy Publishable key for developers in bottom right corner

# Step 9: Write API-Key Publishable Key
### Your must find file is enviroments.prod.ts and enviroments.ts and add a part of the code in the object at the very end:
```
stripe: "your Publishable key"
```

# Step 8: Payment
### When you click on the Pay button, the money comes to your account, to see it go to the site and look at the payment tab
