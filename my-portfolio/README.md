# My Portfolio

This project is a personal portfolio website showcasing various drawings and designs. It features a navigation bar that allows users to easily access different sections of the portfolio.

## Features

- **Home**: An introduction to the portfolio and its creator.
- **About**: Information about the portfolio owner and their background.
- **Contact**: A section for users to get in touch, featuring a contact form or contact details.
- **Portfolio**: A dropdown menu that includes:
  - **Process**: Displays content related to Process drawings.
  - **Mechanical**: Showcases Mechanical drawings.
  - **HVAC**: Contains HVAC-related drawings.
  - **Electronics**: Features Electronics drawings.
  - **3D**: Displays 3D drawings.

## Project Structure

```
my-portfolio
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Portfolio
│   │   │   ├── Process.jsx
│   │   │   ├── Mechanical.jsx
│   │   │   ├── HVAC.jsx
│   │   │   ├── Electronics.jsx
│   │   │   └── ThreeD.jsx
│   ├── App.jsx
│   └── styles
│       └── main.css
├── package.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the portfolio.

## Styling

The CSS styles are designed to closely resemble the styles of [Omni Calculator](https://www.omnicalculator.com/finance/salary-to-hourly), providing a clean and modern look to the portfolio.

## License

This project is open-source and available under the [MIT License](LICENSE).