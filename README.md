# Earthquake Visualizer

An interactive web application that visualizes real-time earthquake data from around the world. Built for geography students and seismic activity enthusiasts to understand global earthquake patterns.

![Earthquake Visualizer Screenshot](./screenshot.png)

## Features

- **Real-Time Data**: Fetches the latest earthquake data (past 24 hours) from USGS
- **Interactive Map**: Pan and zoom to explore seismic activity worldwide
- **Visual Indicators**: Color-coded markers based on magnitude
- **Detailed Information**: Click any marker to view:
  - Magnitude
  - Location
  - Time (with relative timestamps)
  - Depth
  - Link to detailed USGS report
- **Smart Filtering**: Filter earthquakes by magnitude range
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Pulse Animation**: High-magnitude earthquakes (5.0+) pulse for attention
- **Live Counter**: Displays total earthquake count in the navigation bar

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Map Library**: Leaflet via react-leaflet
- **Icons**: Lucide React
- **API**: USGS Earthquake API

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd earthquake-visualizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## API Reference

This application uses the **USGS Earthquake Hazards Program API**.

### Endpoint
```
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson
```

### Response Format
The API returns GeoJSON format data containing:
- Earthquake features with properties (magnitude, location, time, depth)
- Geometry coordinates (longitude, latitude, depth)
- Metadata (count, generation time, API version)

### Documentation
Full API documentation: [USGS Earthquake API Docs](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

## Project Structure

```
earthquake-visualizer/
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.tsx       # Top navigation bar
│   │   ├── MapView.tsx      # Main map component
│   │   ├── Legend.tsx       # Magnitude legend
│   │   ├── FilterPanel.tsx  # Magnitude filters
│   │   ├── LoadingState.tsx # Loading indicator
│   │   └── ErrorState.tsx   # Error display
│   ├── services/            # API service layer
│   │   └── earthquakeService.ts
│   ├── types/               # TypeScript definitions
│   │   └── earthquake.ts
│   ├── utils/               # Helper functions
│   │   └── earthquakeHelpers.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Key Features Explained

### Magnitude Color Scale
- **Red (6.0+)**: Major earthquakes
- **Orange (5.0-5.9)**: Moderate earthquakes
- **Amber (4.0-4.9)**: Light earthquakes
- **Yellow (3.0-3.9)**: Minor earthquakes
- **Lime (2.0-2.9)**: Very minor earthquakes
- **Green (<2.0)**: Micro earthquakes

### Filtering
Use the filter panel to adjust the magnitude range. The map updates in real-time to show only earthquakes within your selected range.

### Responsive Design
The application is fully responsive with:
- Adaptive layouts for mobile, tablet, and desktop
- Touch-friendly controls
- Readable text at all screen sizes

## Links

- **ChatGPT Development Discussion**: [Link to conversation]
- **Live Demo (CodeSandbox)**: [Your CodeSandbox URL]
- **GitHub Repository**: [Your GitHub URL]

## Future Enhancements

Potential features for future versions:
- Toggle between light and dark map themes
- Filter by geographic region or continent
- Historical earthquake data timeline
- Earthquake statistics dashboard
- Push notifications for major earthquakes
- Heatmap visualization mode

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Earthquake data provided by the [U.S. Geological Survey (USGS)](https://earthquake.usgs.gov/)
- Map tiles from [OpenStreetMap](https://www.openstreetmap.org/)
- Built as part of a take-home coding challenge

## Author

Built with precision and care for geography enthusiasts worldwide.

---

**Note**: This application displays earthquake data from the past 24 hours. Data is fetched directly from USGS and updates automatically on page refresh.
