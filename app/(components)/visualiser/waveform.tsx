import React, { useRef, useEffect } from "react";
import useSize from "./useSize";

interface AnalyzerData {
  analyzer: AnalyserNode;
  bufferLength: number;
  dataArray: Uint8Array;
}

interface WaveFormProps {
  analyzerData: AnalyzerData;
}

function animateBars(
  analyzer: AnalyserNode,
  canvas: HTMLCanvasElement,
  canvasCtx: CanvasRenderingContext2D,
  dataArray: Uint8Array,
  bufferLength: number
) {
  analyzer.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = "#000";

  const HEIGHT = canvas.height / 2;
  const WIDTH = canvas.width;

  const numBars = 30;
  const barWidth = Math.ceil(WIDTH / numBars) * 0.8;
  const gap = (WIDTH - barWidth * numBars) / (numBars + 1);

  let barHeight;
  let x = gap;

  for (let i = 0; i < numBars; i++) {
    barHeight = (dataArray[i] / 255) * HEIGHT;

    const position = x / WIDTH;
    const red = Math.floor(255 * position);
    const green = Math.floor(255 * (1 - position));
    const blue = Math.floor(255 * Math.abs(0.5 - position) * 2);

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    canvasCtx.fillStyle = rgbColor;
    canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

    x += barWidth + gap;
  }
}

const WaveForm: React.FC<WaveFormProps> = ({ analyzerData }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { dataArray, analyzer, bufferLength } = analyzerData;
  const [width, height] = useSize();

  const draw = (
    dataArray: Uint8Array,
    analyzer: AnalyserNode,
    bufferLength: number
  ) => {
    const canvas = canvasRef.current;
    if (!canvas || !analyzer) return;
    const canvasCtx = canvas.getContext("2d");

    const animate = () => {
      requestAnimationFrame(animate);
      if (canvasCtx) {
        canvas.width = canvas.width;
        canvasCtx.translate(0, canvas.offsetHeight / 2 - 115);
        animateBars(analyzer, canvas, canvasCtx, dataArray, bufferLength);
      }
    };

    animate();
  };

  useEffect(() => {
    draw(dataArray, analyzer, bufferLength);
  }, [dataArray, analyzer, bufferLength]);

  return (
    <canvas
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "-10"
      }}
      ref={canvasRef}
      width={width}
      height={height}
    />
  );
};

export default WaveForm;
