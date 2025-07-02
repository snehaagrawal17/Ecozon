/* global initDimensions */

import { useEffect } from "react";

const Cloudinary3DViewer = ({ model3d }) => {
    useEffect(() => {
        // Load the Cloudinary 3D viewer scripts
        const viewerScript = document.createElement("script");
        viewerScript.src = "https://dimensions-3d-viewer.cloudinary.com/1.0.9/all.js";
        viewerScript.async = true;

        const tagScript = document.createElement("script");
        tagScript.src = "https://dimensions-tag.cloudinary.com/0.0.102/all.js";
        tagScript.async = true;

        document.body.appendChild(viewerScript);
        document.body.appendChild(tagScript);

        // Wait for scripts to load and initialize the viewer
        viewerScript.onload = () => {
            tagScript.onload = () => {
                // eslint-disable-next-line no-undef
                if (typeof initDimensions === "function") {
                    initDimensions({
                        cloudName: "dahht3ac1",
                        viewers: ["3D"],
                    });
                } else {
                    console.error("initDimensions not available yet");
                }
            };
        };
    }, []);

    return (
        <div>
            <div
                id="three-d-viewer"
                style={{ height: "400px" }}
                data-d8s-type="3d"
                data-d8s-id={model3d}
            ></div>
        </div>
    );
};

export default Cloudinary3DViewer;