import * as React from 'react';
import styles from './LoaderComponent.module.scss';

const LoaderComponent = () => {
    return (
      <div className={`text-center ${styles.loaderContainer}`}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
};

export default LoaderComponent;
