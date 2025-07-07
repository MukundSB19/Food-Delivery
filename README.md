# FOOD DELIVERY APP

A sleek and modern food delivery app built using **React Native** and **Expo**. The app allows users to browse restaurants, view menus, place orders, and track their deliveries in real time.

## Features

- 🔍 Browse restaurants by cuisine or location
- 🍽️ View detailed menus with images and prices
- 🛒 Add items to cart and place orders
- 💳 Secure checkout and payment integration
- 🧭 Real-time delivery tracking
- ❤️ Save favorite restaurants
- 🔔 Push notifications for order updates
- 🌙 Light and dark theme support

## Tech Stack

- **React Native**
- **Expo**
- **Context API** (state management)
- **Custom Backend**
- **Stripe** (for payments)
- **Google Maps API** (delivery tracking)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/MukundSB19/Food-Delivery.git
cd food-delivery-app
```

## Install Dependencies

```bash
npm install
# or
yarn install
```

## Start the Expo Server

```bash
npx expo start
```

## 📱 Running on Device

- Download the Expo Go app from the App Store or Google Play.

- Scan the QR code shown in your terminal or browser after running npx expo start.

## 🔐 Environment Variables

Create a .env file in the root directory and add the following:

```env
API_URL=https://yourapi.com
GOOGLE_MAPS_API_KEY=your_key
STRIPE_PUBLIC_KEY=your_key
```

Use something like react-native-dotenv to load them.



