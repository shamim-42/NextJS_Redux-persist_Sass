import React from 'react';

function LoadingDiv() {
  return (
    <div className="loadingMain">
      <div className="loadind_loader">
        {/* <img src="" width="200px" height="200px" alt="Loader"/> */}
      </div>

      <style jsx>
        {`
          .loadingMain {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}
      </style>
    </div>
  );
}

export default LoadingDiv;
