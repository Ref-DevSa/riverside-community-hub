# Riverside Community Website

## Project Overview

Riverside is a community-focused website designed to provide visitors with information about available facilities and a simple way to support the organisation through donations.

The project was created to demonstrate how a modern React and TypeScript application can connect a frontend interface to a Supabase database.

## Features

- Riverside homepage
- Responsive navigation
- Facilities catalogue
- Individual facility details
- Facility loading and error states
- Donation form
- Donation form validation
- Donation submissions stored in Supabase
- Responsive design
- Custom 404 page
- React Router navigation
- Supabase data fetching

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- Supabase
- CSS
- Git and GitHub

## Database

Supabase is used as the project's database.

The project contains two main tables:

### Facilities

The `facilities` table stores information about community facilities.

Fields include:

- `id`
- `name`
- `description`
- `created_at`

Visitors can read facility information from Supabase.

### Donations

The `donations` table stores donation submissions.

Fields include:

- `id`
- `donor_name`
- `donor_email`
- `amount`
- `message`
- `status`
- `created_at`

Public visitors can submit donation information, but donation records are not publicly readable.

## Project Structure

```text
frontend/
└── src/
    ├── components/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    │
    ├── pages/
    │   ├── HomePage.tsx
    │   ├── FacilitiesPage.tsx
    │   ├── FacilityDetailsPage.tsx
    │   ├── DonationPage.tsx
    │   └── NotFoundPage.tsx
    │
    ├── lib/
    │   └── supabase.ts
    │
    ├── App.tsx
    ├── main.tsx
    └── index.css