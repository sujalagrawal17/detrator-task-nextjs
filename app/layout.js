// app/layout.js
// import Layout from './components/Layout'; // Import your layout component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Application</title>
        {/* Add global head elements here (e.g., <link>, <meta>, etc.) */}
      </head>
      <body>
        {children} {/* Render your Layout component here */}
      </body>
    </html>
  );
}
