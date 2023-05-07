import React from "react";
import { styles } from "@/pages";
export default function Statistics({ isSmallScreen }) {
  return (
    <div className=" mx-auto desktop:px-32 lg:px-20 px-5 grid text-white text-center lg:grid-cols-4 grid-cols-2 lg:bg-gradient-to-b from-[#FF001D] to-[#BF1024] py-8 gap-10">
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
