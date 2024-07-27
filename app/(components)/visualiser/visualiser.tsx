"use client"
import React, { useRef, useState, ChangeEvent, useEffect } from "react";
import WaveForm from "./waveform";

interface AnalyzerData {
  analyzer: AnalyserNode;
  bufferLength: number;
  dataArray: Uint8Array;
}

export default function Visualiser() {
  const [audioUrl, setAudioUrl] = useState<string | undefined>(undefined);
  const [analyzerData, setAnalyzerData] = useState<AnalyzerData | null>(null);
  const audioElmRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = audioElmRef.current;

    if (audioElement) {
      const handleEnded = () => {
        setAnalyzerData(null);
      };

      audioElement.addEventListener("ended", handleEnded);

      return () => {
        audioElement.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  const audioAnalyzer = () => {
    const audioCtx = new (window.AudioContext)();
    const analyzer = audioCtx.createAnalyser();
    analyzer.fftSize = 2048;

    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const source = audioCtx.createMediaElementSource(audioElmRef.current!);
    source.connect(analyzer);
    source.connect(audioCtx.destination);

    setAnalyzerData({ analyzer, bufferLength, dataArray });
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAudioUrl(URL.createObjectURL(file));
    audioAnalyzer();
  };

  return (
    <div className="App">
      <h1>Audio Visualizer</h1>
      {analyzerData && <WaveForm analyzerData={analyzerData} />}
      <div
        style={{
          height: 40,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <input type="file" accept="audio/*" onChange={onFileChange} />
        <audio src={audioUrl} controls ref={audioElmRef} />
      </div>
    </div>
  );
}
