import LecturePiano from "./LecturePiano";
import "./Piano.css";

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
      <div className="video_content">
        <div className="sketchfab-embed-wrapper grid_item">
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
        <div className="sketchfab-embed-wrapper grid_item">
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
        <div>
          <iframe
            width={480}
            height={480}
            src="https://www.youtube.com/embed/mnquWUItsVM?si=TxbVRX4HS3NEdfZI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid_item">
          <iframe
            width={480}
            height={480}
            src="https://www.youtube.com/embed/0DiOleTEq1s?si=qbmZ6iGyaJiyqe35"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid_item">
          <iframe
            width={480}
            height={480}
            src="https://www.youtube.com/embed/OpCpBWdl-ic?si=L8XNbuAfC3bERIWU&amp;start=52"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid_item">
          <iframe
            width={480}
            height={480}
            src="https://www.youtube.com/embed/115qXyVthHU?si=UszB2dc7ALKOFCVx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            width={480}
            height={480}
            src="https://www.youtube.com/embed/0VqTwnAuHws?si=afjjND0MYTaEfhl5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid_item">
          <iframe
            width={480}
            height={480}
            src="https://www.youtube.com/embed/rR94NDIfGmA?si=A1LIDRTv7_Wg9zS9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid_item">
          <iframe
            width={480}
            height={480}
            src="https://www.youtube.com/embed/TLt_FY4Qhrc?si=2rmzb6N5UD5Ipp-_&amp;start=385"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
