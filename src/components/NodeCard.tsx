import React, { useState, useEffect } from "react";
import type { CircularProgress } from "mdui/components/circular-progress.js";

export function NodeCard(props: {
  title: string;
  content: string;
  status: boolean;
  pos: [number, number];
}) {
  const [position, setPosition] = useState<[number, number]>(props.pos);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<[number, number] | null>(null);
  const [configOpen, setConfigOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging && dragStart) {
        const newX = event.clientX - dragStart[0];
        const newY = event.clientY - dragStart[1];
        setPosition([newY, newX]);
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isDragging && dragStart) {
        const touch = event.touches[0];
        const newX = touch.clientX - dragStart[0];
        const newY = touch.clientY - dragStart[1];
        setPosition([newY, newX]);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setDragStart(null);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      setDragStart(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault(); // テキスト選択を無効にする
    setIsDragging(true);
    setDragStart([event.clientX - position[1], event.clientY - position[0]]);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    event.preventDefault(); // テキスト選択を無効にする
    const touch = event.touches[0];
    setIsDragging(true);
    setDragStart([touch.clientX - position[1], touch.clientY - position[0]]);
  };

  const onConfigClick = () => {
    setConfigOpen(!configOpen);
  };

  return (
    <mdui-card
      clickable
      variant="filled"
      style={{
        margin: 10,
        padding: 10,
        width: 150,
        position: "absolute",
        top: position[0],
        left: position[1],
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none", 
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <h3 style={{ marginTop: 0 }}>{props.title}</h3>

      {/* <div>{props.content}</div> */}
      <div>
        {props.status ? (
          <mdui-button-icon
            variant="filled"
            icon="stop"
            style={{ marginRight: 10 }}
          ></mdui-button-icon>
        ) : (
          <mdui-button-icon
            variant="filled"
            icon="play_arrow"
            style={{ marginRight: 10 }}
          ></mdui-button-icon>
        )}
      </div>
    </mdui-card>
  );
}
