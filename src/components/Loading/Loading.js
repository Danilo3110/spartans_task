import React from 'react';
import classes from './Loading.module.css';

const loading = (props) => {
  return (
    <div className={`animated fadeIn text-center`}>
      <div className={[classes.loader, classes.loader1].join(' ')}>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;