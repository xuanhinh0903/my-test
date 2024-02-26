import React, {useState} from "react";

export const MusicPlayerControls =
  () => {
    const [
      mediaRecorder,
      setMediaRecorder,
    ] = useState<any>(null);
    const [
      cameraStream,
      setCameraStream,
    ] = useState<any>(null);

    const handleStart = async () => {
      try {
        const screenStream =
          await recordScreen();
        const cameraStream =
          await startCamera();
        setCameraStream(cameraStream);

        const combinedStream =
          mergeStreams(
            screenStream,
            cameraStream
          );

        const mimeType = "video/webm";
        const recorder = createRecorder(
          combinedStream,
          mimeType
        );
        setMediaRecorder(recorder);
        appendMessage(
          "Started recording"
        );
      } catch (error) {
        console.error(
          "Error starting recording: ",
          error
        );
      }
    };

    const handleStop = () => {
      if (mediaRecorder) {
        mediaRecorder.stop();
        appendMessage(
          "Stopped recording"
        );
      }
    };

    const recordScreen = async () => {
      try {
        return await navigator.mediaDevices.getDisplayMedia(
          {
            audio: false,
            video: true,
          }
        );
      } catch (error) {
        console.error(
          "Error accessing screen recording: ",
          error
        );
        throw error;
      }
    };

    const startCamera = async () => {
      try {
        const stream: any =
          await navigator.mediaDevices.getUserMedia(
            {
              video: true,
              audio: true,
            }
          );
        setCameraStream(stream);
        return stream;
      } catch (error) {
        console.error(
          "Error accessing camera: ",
          error
        );
        throw error;
      }
    };

    const mergeStreams = (
      screenStream: any,
      cameraStream: any
    ) => {
      const combinedStream =
        new MediaStream();
      screenStream
        .getTracks()
        .forEach((track: any) => {
          combinedStream.addTrack(
            track
          );
        });
      cameraStream
        .getTracks()
        .forEach((track: any) => {
          combinedStream.addTrack(
            track
          );
        });
      return combinedStream;
    };

    const createRecorder = (
      stream: any,
      mimeType: any
    ) => {
      let recordedChunks: any = [];
      const mediaRecorder =
        new MediaRecorder(stream);

      mediaRecorder.ondataavailable =
        function (e) {
          if (e.data.size > 0) {
            recordedChunks.push(e.data);
          }
        };

      mediaRecorder.onstop =
        function () {
          saveFile(recordedChunks);
          recordedChunks = [];
        };

      mediaRecorder.start(200);
      return mediaRecorder;
    };

    const saveFile = (
      recordedChunks: any
    ) => {
      const blob: any = new Blob(
        recordedChunks,
        {type: "video/webm"}
      );
      const filename = window.prompt(
        "Enter file name"
      );
      const downloadLink =
        document.createElement("a");
      downloadLink.href =
        URL.createObjectURL(blob);
      downloadLink.download = `${filename}.webm`;

      document.body.appendChild(
        downloadLink
      );
      downloadLink.click();
      URL.revokeObjectURL(blob);
      document.body.removeChild(
        downloadLink
      );
    };

    const appendMessage = (
      message: any
    ) => {
      const node =
        document.createElement("p");
      node.textContent = message;
      document.body.appendChild(node);
    };

    return (
      <div>
        <p>MusicPlayerControls</p>
        <button onClick={handleStart}>
          Start
        </button>
        <button onClick={handleStop}>
          Stop
        </button>
        {cameraStream && (
          <video
            autoPlay
            playsInline
            muted
            style={{
              width: "100%",
              maxWidth: "400px",
            }}
            ref={(video) => {
              if (video) {
                video.srcObject =
                  cameraStream;
              }
            }}
          />
        )}
      </div>
    );
  };
