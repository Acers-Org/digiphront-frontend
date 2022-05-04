import React from "react";
import styles from "../../pages/admin/Admin.module.scss";

const PieCircle = ({ percentage = 25, type = "primary", title }) => {
  const sqSize = 120;
  const strokeWidth = 15;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className={styles.progressCircle}>
      <h4
        style={
          type === "orange"
            ? { borderLeft: "10px solid #ff5400" }
            : type === "darkred"
            ? { borderLeft: "10px solid #662200" }
            : { borderLeft: "10px solid #4f7672" }
        }
      >
        <span>{title}</span>
      </h4>
      <div className={styles.progressCircle__wrapper}>
        <svg width={sqSize} height={sqSize} viewBox={viewBox}>
          <circle
            className={styles.progressCircle__wrapper__background}
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
          />
          <circle
            className={`${styles.progressCircle__wrapper__progress} ${
              type === "orange"
                ? styles.progressCircle__wrapper__orange
                : type === "darkred"
                ? styles.progressCircle__wrapper__darkred
                : styles.progressCircle__wrapper__primary
            }`}
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          />
          <text
            className={styles.progressCircle__wrapper__text}
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
          >
            {`${percentage}%`}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default PieCircle;
