import React from "react";

export default function Statistics({ isSmallScreen }) {
  const styles = {
    stats_number:
      "desktop:text-6xl xl:text-5xl text-4xl font-bold mb-4 text-center drop-shadow-md",
    stats_name:
      "desktop:text-xl xl:text-lg text-base font-medium text-center drop-shadow-md",
  };
  return (
    <div
      className={` mx-auto px-5 grid text-white text-center lg:grid-cols-4 grid-cols-2 py-8 gap-10 ${
        !isSmallScreen && " stats-background"
      }`}
    >
      <div className="order-3 lg:order-1">
        <h1 className={styles.stats_number}>60</h1>
        <h5 className={styles.stats_name}>Countries</h5>
      </div>
      <div className="order-2">
        <h1 className={styles.stats_number}>6,750</h1>
        <h5 className={styles.stats_name}>Total Group Employees</h5>
      </div>
      <div className="lg:order-3 order-1">
        <h1 className={styles.stats_number}>
          {isSmallScreen ? "21M" : "21,000,000"}
        </h1>
        <h5 className={styles.stats_name}>Total Group Monthly Traffic</h5>
      </div>
      <div className="order-3 lg:order-4">
        <h1 className={styles.stats_number}>10</h1>
        <h5 className={styles.stats_name}>Brands</h5>
      </div>
    </div>
  );
}
