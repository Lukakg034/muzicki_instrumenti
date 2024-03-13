import LecturePiano from "./LecturePiano";

export default function Piano() {
  return (
    <div>
      <LecturePiano />
      {/* <div className="sketchfab-embed-wrapper">
        <iframe
          title="Grand Piano"
          frameBorder="0"
          allowFullScreen
          width={480}
          height={480}
          // Add other necessary attributes directly without camelCase
          allow={"fullscreen; xr-spatial-tracking"}
          src="https://sketchfab.com/models/5cb4706191e4467aaa8635c3ac4464b4/embed"
        ></iframe>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "normal",
            margin: "5px",
            color: "#4A4A4A",
          }}
        ></p>
      </div> */}
      <div className="sketchfab-embed-wrapper">
        <iframe
          title="Steinway & Sons Grand Piano Action Model"
          frameBorder="0"
          width={480}
          height={480}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/a1637020eeea4033a5ec611b50cbf045/embed"
        ></iframe>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "normal",
            margin: "5px",
            color: "#4A4A4A",
          }}
        ></p>
      </div>
      <div className="sketchfab-embed-wrapper">
        <iframe
          title="Yamaha P-115"
          frameBorder="0"
          width={480}
          height={480}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/6c9682901fef4588aa1cfe10b65dd8a6/embed"
          style={{
            fontSize: "13px",
            fontWeight: "normal",
            margin: "5px",
            color: "#4A4A4A",
          }}
        ></iframe>
      </div>
    </div>
  );
}
