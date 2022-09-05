import React, { useState } from 'react';
import styles from './Loading.module.css';
import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
  }

  let [loading, setLoading] = useState(true);

  return (
    <div className={styles.loadingContainer}>
      <PuffLoader
        loading={loading} 
        cssOverride={override} 
        size={180}
      />
    </div>
  )

}

export default Loading